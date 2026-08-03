/**
 * Scorched Billionaire — Entry point.
 * Boots the deterministic engine and the Three.js renderer,
 * wires the game loop: title -> rounds (Earth/Moon/Mars) -> shop -> game over.
 */

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { GameState, SHOP, GAME_OVER, ROUND_END } from "./engine/game";
import { rng } from "./engine/rng";
import { Config } from "./engine/config";
import { createTerrainMesh } from "./render/terrain";
import { renderFrame, roundToEnvironment } from "./render/loop";
import { setEnvironment } from "./render/sky";
import { loadExplosionTexture } from "./render/effects";
import { preloadAllVoices, playFireTaunt, playKillTaunt, playDeathScream } from "./audio/voices";
import { sfx } from "./engine/sound";
import { Hud } from "./ui/hud";
import { ShopOverlay } from "./ui/shop";
import { ChatOverlay } from "./ui/chat";
import { TauntOverlay } from "./ui/taunt";
import { showStandings, showGameOver } from "./ui/menus";
import {
  hostMatch, joinMatch, isOnline, onlineGameState, buildAndStartMatch,
  commitOnlineTurn, pumpOnline, sendOnlineChat, localHumanIndex,
} from "./net/multiplayer";
import type { RoomPlayer } from "./engine/net/match";
import { setRelayOverride } from "./engine/net/netconfig";
import { DEVICE_ID } from "./engine/net/identity";

// ── Relay override for tests/deployments: ?relays=ws://127.0.0.1:4747 ──
{
  const params = new URLSearchParams(typeof location !== "undefined" ? location.search : "");
  const relaysParam = params.get("relays");
  if (relaysParam) {
    setRelayOverride(relaysParam.split(",").map((s) => s.trim()).filter(Boolean));
  }
}

// ── Canvas & Renderer ────────────────────────────────────────
const canvas = document.getElementById("game") as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

// ── Scene ────────────────────────────────────────────────────
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

// ── Camera ───────────────────────────────────────────────────
const aspect = window.innerWidth / window.innerHeight;
const viewHeight = 800;
const viewWidth = viewHeight * aspect;
const camera = new THREE.OrthographicCamera(
  -viewWidth / 2, viewWidth / 2,
  viewHeight / 2, -viewHeight / 2,
  0.1, 2000,
);
camera.position.set(0, -100, 600);
camera.lookAt(0, 200, 0);

// ── Lighting ─────────────────────────────────────────────────
scene.add(new THREE.AmbientLight(0xffffff, 0.8));
const sun = new THREE.DirectionalLight(0xffffcc, 1.5);
sun.position.set(200, 400, 300);
scene.add(sun);
scene.add(new THREE.HemisphereLight(0x4488cc, 0x224422, 0.4));

// ── Sky gradient plane ───────────────────────────────────────
const skyGeo = new THREE.PlaneGeometry(viewWidth * 3, 600);
const skyMat = new THREE.ShaderMaterial({
  uniforms: {
    topColor: { value: new THREE.Color(0x0077ff) },
    bottomColor: { value: new THREE.Color(0xccccdd) },
  },
  vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `varying vec2 vUv; uniform vec3 topColor; uniform vec3 bottomColor; void main() { gl_FragColor = vec4(mix(bottomColor, topColor, vUv.y), 1.0); }`,
  depthWrite: false,
});
const skyPlane = new THREE.Mesh(skyGeo, skyMat);
skyPlane.position.set(0, 450, -50);
scene.add(skyPlane);

// ── Engine ───────────────────────────────────────────────────
rng.seed(42);
const config = new Config();
config.GRAVITY = 0.2;
config.wind = 0;
config.MAX_WIND = 200;
config.INITIAL_CASH = 5000;
config.SOUND = "OFF"; // enabled on user gesture (PLAY click)
config.TALKING_TANKS = "ALL"; // taunt bubbles on (voice + speech)

const game = new GameState(config, 1024, 768);
game.add_player("Elon Musk", 0, 0, 0);
game.add_player("Jeff Bezos", 1, 1, 1);
game.add_player("Donald Trump", 4, 2, 7);
game.add_player("Scam Altman", 5, 3, 7);
game.new_game();

// ── Terrain ──────────────────────────────────────────────────
const terrainMesh = createTerrainMesh(game.terrain, viewWidth);
terrainMesh.position.set(0, 0, 0);
scene.add(terrainMesh);

// ── Environment config per planet (gravity/wind/viscosity) ───
const ENV_CFG: Record<string, { gravity: number; wind: number; visc: number }> = {
  earth: { gravity: 0.2, wind: 0, visc: 1.0 },
  moon: { gravity: 0.033, wind: 0, visc: 1.0 },
  mars: { gravity: 0.075, wind: 0, visc: 0.7 },
};
let currentEnv: string | null = null;
function applyEnvironment(env: string): void {
  if (env === currentEnv) return;
  currentEnv = env;
  const c = ENV_CFG[env];
  config.GRAVITY = c.gravity;
  config.wind = c.wind;
  // viscosity_mult is a getter over AIR_VISCOSITY: mult = 1 - V/10000
  config.AIR_VISCOSITY = Math.round((1 - c.visc) * 10000);
  setEnvironment(scene, env as any);
  // Swap terrain texture
  const texName = env === "earth" ? "earth_surface_v4" : env === "moon" ? "moon_surface_v2" : "mars_surface_v2";
  new THREE.TextureLoader().load(`./assets/${texName}.png`, (tex) => {
    const mat = terrainMesh.material as THREE.MeshStandardMaterial;
    mat.map = tex;
    mat.color.set(0xffffff);
    mat.needsUpdate = true;
  }, undefined, () => {});
}

// ── Tank markers (colored capsules + labels) ─────────────────
const tankMarkers: THREE.Group[] = [];
const tankColors = [0x4488ff, 0xff8844, 0xff2222, 0x44dd44];
const tankNames = ["Elon", "Bezos", "Trump", "Altman"];
for (let i = 0; i < game.tanks.length; i++) {
  const group = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: tankColors[i], flatShading: true });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(3, 4, 18, 8), bodyMat);
  body.position.y = 9;
  group.add(body);
  const nose = new THREE.Mesh(new THREE.ConeGeometry(3, 6, 8), bodyMat);
  nose.position.y = 21;
  group.add(nose);
  const label = new THREE.Sprite(new THREE.SpriteMaterial({
    map: createLabelTexture(tankNames[i], tankColors[i]),
    transparent: true,
    depthTest: false,
  }));
  label.position.y = 30;
  label.scale.set(30, 10, 1);
  group.add(label);
  group.visible = false;
  scene.add(group);
  tankMarkers.push(group);
}

function createLabelTexture(text: string, color: number): THREE.Texture {
  const c = document.createElement("canvas");
  c.width = 256; c.height = 64;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#" + color.toString(16).padStart(6, "0");
  ctx.font = "bold 28px system-ui";
  ctx.textAlign = "center";
  ctx.fillText(text, 128, 40);
  const tex = new THREE.CanvasTexture(c);
  tex.minFilter = THREE.LinearFilter;
  return tex;
}

// ── Title screen ─────────────────────────────────────────────
const titleEl = document.createElement("div");
titleEl.id = "title-screen";
titleEl.innerHTML = `
  <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;
    background:#000 url('./assets/title_screen_v5.png') center/cover no-repeat;font-family:system-ui;">
    <div style="background:rgba(0,0,0,0.55);border-radius:14px;padding:28px 44px;text-align:center;">
      <h1 style="font-size:52px;color:#e94560;letter-spacing:6px;text-shadow:3px 3px 0 #000;margin:0;">SCORCHED BILLIONAIRE</h1>
      <p style="color:#e08bb0;font-size:19px;margin:8px 0 28px;">The Mother of All VC Rounds</p>
      <button id="btn-play" style="padding:14px 56px;font-size:22px;background:#e94560;color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:700;letter-spacing:2px;">PLAY</button>
      <button id="btn-online" style="margin-left:12px;padding:14px 40px;font-size:16px;background:#1b5e20;color:#a5d6a7;border:1px solid #2e7d32;border-radius:8px;cursor:pointer;font-weight:700;letter-spacing:2px;">ONLINE</button>
      <p style="color:#ccc;margin-top:26px;font-size:12px;max-width:480px;text-align:center;">4 billionaires. 3 planets. 48 weapons. <br>Arrow keys to aim. Space to fire. Tab for weapons.</p>
    </div>
  </div>`;
titleEl.style.cssText = "position:fixed;inset:0;z-index:200;";
document.body.appendChild(titleEl);

// ── HUD (agent-built, mounted on PLAY) ───────────────────────
let hud: Hud | null = null;
let hudActive = false;

// ── Chat (Dealroom Feed, backquote toggles) ──────────────────
let chat: ChatOverlay | null = null;

// ── Taunt bubbles (speech + portrait, anchored to the rocket) ─
let taunt: TauntOverlay | null = null;

function tauntProjector(p: { x: number; y: number; z: number }): { x: number; y: number } | null {
  const v = new THREE.Vector3(p.x, p.y, p.z).project(camera);
  if (v.z > 1) return null;
  return {
    x: ((v.x + 1) / 2) * window.innerWidth,
    y: ((-v.y + 1) / 2) * window.innerHeight,
  };
}

function syncTaunts(gs: GameState): void {
  if (!taunt) return;
  taunt.sync(
    {
      speech: gs.speech
        ? { tank: gs.speech.tank, text: gs.speech.text, until_frame: gs.speech.frame ?? 0 }
        : null,
    } as never,
    (tank: unknown) => {
      const t = tank as { x?: number; name?: string };
      if (t?.x === undefined) return null;
      const px = Math.round(t.x);
      for (let py = 0; py < gs.terrain.h; py++) {
        if (gs.terrain.is_dirt(px, py)) {
          return { x: px - gs.w / 2, y: ((gs.h - py) / gs.h) * 300 + 40, z: 0 };
        }
      }
      return { x: px - gs.w / 2, y: 150, z: 0 };
    },
  );
}

// ── Multiplayer lobby state ───────────────────────────────────
let lobbyEl: HTMLElement | null = null;
let roster: RoomPlayer[] = [];
let mpSession: ReturnType<typeof hostMatch> | null = null;
let mpStarted = false;
let mpLocalDone = false; // local cart submitted this shop
let mpShopRound = -1;
let mpCarts = new Map<string, { round: number; inv: number[]; cash: number }>();
let mpAppliedShop = false;

/** The GameState the render loop draws: online adapter's, or the local game. */
function activeGs() {
  return onlineGameState() ?? game;
}

function showLobby(): void {
  lobbyEl = document.createElement("div");
  lobbyEl.id = "lobby";
  lobbyEl.innerHTML = `
    <div style="position:fixed;inset:0;z-index:150;background:#0b0b1aee;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:system-ui;color:#eee;">
      <h2 style="color:#e94560;font-size:28px;margin-bottom:8px;">ONLINE DEALROOM</h2>
      <p style="color:#888;font-size:13px;margin-bottom:20px;">Peer-to-peer over Nostr relays. No server.</p>
      <div id="lobby-actions" style="display:flex;gap:12px;margin-bottom:16px;">
        <input id="lobby-name" placeholder="Your name" value="Billionaire"
          style="padding:8px 12px;border-radius:6px;border:1px solid #444;background:#12122a;color:#eee;font-size:14px;">
        <button id="btn-host" style="padding:10px 24px;background:#1b5e20;color:#a5d6a7;border:1px solid #2e7d32;border-radius:6px;cursor:pointer;font-weight:700;">HOST</button>
      </div>
      <div style="display:flex;gap:12px;margin-bottom:20px;">
        <input id="lobby-code" placeholder="Invite code" style="padding:8px 12px;border-radius:6px;border:1px solid #444;background:#12122a;color:#eee;font-size:14px;width:200px;">
        <button id="btn-join" style="padding:10px 24px;background:#1565c0;color:#90caf9;border:1px solid #1e88e5;border-radius:6px;cursor:pointer;font-weight:700;">JOIN</button>
      </div>
      <div id="lobby-status" style="color:#ffb454;font-size:13px;margin-bottom:12px;">Create a room or paste an invite code.</div>
      <div id="lobby-roster" style="min-width:300px;max-width:420px;background:#12122a;border:1px solid #222;border-radius:8px;padding:12px;font-size:14px;"></div>
      <div id="lobby-invite" style="color:#888;font-size:13px;margin-top:10px;"></div>
      <div style="display:flex;gap:12px;margin-top:16px;">
        <button id="btn-start" style="display:none;padding:10px 36px;background:#e94560;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:700;">START</button>
        <button id="btn-leave" style="padding:10px 24px;background:#333;color:#ccc;border:1px solid #555;border-radius:6px;cursor:pointer;">BACK</button>
      </div>
    </div>`;
  document.body.appendChild(lobbyEl);
  const renderRoster = () => {
    const el = lobbyEl!.querySelector("#lobby-roster")!;
    el.innerHTML = roster.length === 0
      ? `<div style="color:#666;">Waiting for players...</div>`
      : roster.map(p =>
          `<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #1a1a3a;">
             <span>${p.name}</span><span style="color:${p.connected ? "#41d9a0" : "#e94560"};">${p.connected ? "CONNECTED" : "GONE"}</span>
           </div>`).join("");
    const startBtn = lobbyEl!.querySelector("#btn-start") as HTMLElement;
    startBtn.style.display = mpSession ? "block" : "none";
  };
  lobbyEl.querySelector("#btn-host")!.addEventListener("click", async () => {
    const name = (lobbyEl!.querySelector("#lobby-name") as HTMLInputElement).value || "Billionaire";
    lobbyEl!.querySelector("#lobby-status")!.textContent = "Opening room on relays...";
    try {
      const s = await hostMatch("Scorched Billionaire", name, 4);
      mpSession = s as any;
      (window as any).__mpSession = s;
      s.match.handlers.onRoster = (players) => { roster = players; renderRoster(); };
      // _open() already emitted the initial roster before the handler was set;
      // sync from the current state so the local player shows immediately.
      roster = s.match.players();
      renderRoster();
      hookSession();
      lobbyEl!.querySelector("#lobby-invite")!.textContent =
        `Invite code: ${s.match.inviteCode()}`;
      lobbyEl!.querySelector("#lobby-status")!.textContent =
        "Room open. Share the invite code, then press START.";
    } catch (e) {
      lobbyEl!.querySelector("#lobby-status")!.textContent = "Failed: " + String(e);
    }
  });
  lobbyEl.querySelector("#btn-join")!.addEventListener("click", async () => {
    const code = (lobbyEl!.querySelector("#lobby-code") as HTMLInputElement).value.trim();
    if (!code) return;
    const name = (lobbyEl!.querySelector("#lobby-name") as HTMLInputElement).value || "Billionaire";
    lobbyEl!.querySelector("#lobby-status")!.textContent = "Joining...";
    try {
      const s = await joinMatch(code, name);
      mpSession = s as any;
      (window as any).__mpSession = s;
      s.match.handlers.onRoster = (players) => { roster = players; renderRoster(); };
      roster = s.match.players();
      renderRoster();
      hookSession();
      lobbyEl!.querySelector("#lobby-status")!.textContent = "Joined. Waiting for host to start...";
    } catch (e) {
      lobbyEl!.querySelector("#lobby-status")!.textContent = "Failed: " + String(e);
    }
  });
  lobbyEl.querySelector("#btn-start")!.addEventListener("click", () => {
    if (!mpSession) return;
    const s = mpSession as any;
    if (s.role !== "host") return;
    buildAndStartMatch(s, roster, game.w, game.h, config);
    mpStarted = true;
    closeLobby();
    startOnlineGame();
  });
  lobbyEl.querySelector("#btn-leave")!.addEventListener("click", () => {
    closeLobby();
  });
  renderRoster();
}

// ONLINE button on the title screen
document.getElementById("btn-online")!.addEventListener("click", () => {
  titleEl.style.display = "none"; // lobby must sit ABOVE the title overlay
  showLobby();
});

function closeLobby(): void {
  lobbyEl?.remove();
  lobbyEl = null;
}

/** Install chat/shop/start hooks on a live online session. */
function hookSession(): void {
  const s = (window as any).__mpSession;
  if (!s) return;
  // Chat from peers -> dealroom feed
  s.session.onChat = (deviceId: string, text: string) => {
    chat?.push("Peer", text, "them");
  };
  // Shop carts (host aggregation)
  s.session.onShopResult = (deviceId: string, round: number, inv: number[], cash: number) => {
    mpCarts.set(deviceId, { round, inv, cash });
  };
  // Host-authoritative shop final -> guests apply
  s.session.onShopFinal = (round: number, results: Record<string, { inv: number[]; cash: number }>) => {
    (window as any).__mpShopFinal = { round, results };
  };
  // Match started (guest side): leave the lobby and play.
  // CHAIN the existing handler — LockstepSession wraps onMessage to receive
  // turns; replacing it (not chaining) silently kills lockstep.
  const prev = s.match.handlers.onMessage;
  s.match.handlers.onMessage = (peerId: string, msg: unknown) => {
    prev?.(peerId, msg);
    const m = msg as { t?: string };
    if (m?.t === "start" && !mpStarted) {
      closeLobby();
      startOnlineGame();
    }
  };
}

function startOnlineGame(): void {
  mpStarted = true;
  titleEl.remove();
  document.getElementById("loading")?.classList.add("done");
  config.SOUND = "ON";
  sfx.enabled = true;
  hud = new Hud();
  hudActive = true;
  chat = new ChatOverlay({
    onSend: (text) => {
      if (isOnline()) sendOnlineChat(text);
      else chat?.system(`relayed to 0 peers: "${text}"`);
    },
  });
  taunt = new TauntOverlay(tauntProjector);
  preloadAssets().catch(() => {});
  preloadAllVoices().catch(() => {});
  loadExplosionTexture().catch(() => {});
  requestAnimationFrame(animate);
}

// ── Input ────────────────────────────────────────────────────
window.addEventListener("keydown", (e) => {
  const gs = activeGs();
  if (gs.phase === "aim" && gs.awaiting_human) {
    const t = gs.current_shooter!;
    if (e.key === "ArrowLeft") t.angle = Math.min(180, t.angle + 3);
    if (e.key === "ArrowRight") t.angle = Math.max(0, t.angle - 3);
    if (e.key === "ArrowUp") t.power = Math.min(1000, t.power + 30);
    if (e.key === "ArrowDown") t.power = Math.max(0, t.power - 30);
    if (e.key === "Tab") { e.preventDefault(); t.selected_weapon = (t.selected_weapon + 1) % 32; }
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      if (isOnline()) {
        commitOnlineTurn({ angle: t.angle, power: t.power, weapon: t.selected_weapon, moves: [] });
      } else {
        gs.fire();
      }
      playFireTaunt(t);
    }
  }
});

// ── Resize ───────────────────────────────────────────────────
window.addEventListener("resize", () => {
  const a = window.innerWidth / window.innerHeight;
  const vh = 800; const vw = vh * a;
  camera.left = -vw / 2; camera.right = vw / 2;
  camera.top = vh / 2; camera.bottom = -vh / 2;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ── Round / shop / game-over flow state ──────────────────────
let prevAlive = game.tanks.map(t => t.alive);
let lastFirer: (typeof game.tanks)[number] | null = null;
let shopOpen: ShopOverlay | null = null;
let standingsShown = false;
let roundIndex = 0;

// ── Render ───────────────────────────────────────────────────
function animate(): void {
  requestAnimationFrame(animate);
  const gs = activeGs();
  renderFrame(gs, scene, camera, terrainMesh);

  // Environment swap at round boundaries
  const env = roundToEnvironment(gs.round_index);
  applyEnvironment(env);

  // Online lockstep: pump pending remote turns at the aim barrier
  if (isOnline()) {
    pumpOnline();
    if (gs.phase === SHOP) stepOnlineShop(gs);
  }

  // Taunt bubbles from the engine's speech system
  syncTaunts(gs);

  // Track who fired last (for kill attribution)
  if (gs.phase === "firing" && gs.current_shooter) {
    lastFirer = gs.current_shooter;
  }

  // Death detection: killer taunt + victim scream
  for (let i = 0; i < gs.tanks.length; i++) {
    if (prevAlive[i] && !gs.tanks[i].alive) {
      const victim = gs.tanks[i];
      if (lastFirer && lastFirer !== victim && lastFirer.alive) {
        playKillTaunt(lastFirer);
      }
      playDeathScream(victim);
    }
  }
  prevAlive = gs.tanks.map(t => t.alive);

  // Tank marker positions + 3D rocket sync
  for (let i = 0; i < gs.tanks.length; i++) {
    const t = gs.tanks[i];
    const marker = tankMarkers[i];
    if (!marker) continue;
    if (!t.alive) { marker.visible = false; continue; }
    const px = Math.round(t.x);
    for (let py = 0; py < gs.terrain.h; py++) {
      if (gs.terrain.is_dirt(px, py)) {
        const wx = px - gs.w / 2;
        const wy = ((gs.h - py) / gs.h) * 300 + 4;
        marker.position.set(wx, wy, 0);
        marker.visible = true;
        const m3d = marker.userData.model3d;
        if (m3d) {
          m3d.position.set(wx, wy, 0);
          m3d.visible = true;
        }
        break;
      }
    }
  }

  // HUD
  if (hudActive && hud) {
    const s = gs.current_shooter;
    hud.update({
      angle: s?.angle ?? 90,
      power: s?.power ?? 0,
      wind: gs.cfg.wind,
      tank: s ? {
        name: s.name, health: s.health, maxHealth: 100, alive: s.alive,
        shieldHp: s.shield_hp, shieldItem: s.shield_item,
      } : null,
      weaponSlot: s?.selected_weapon ?? 0,
      timeLeft: undefined,
      turnLabel: gs.phase === "aim" && gs.awaiting_human ? "YOUR TURN"
        : gs.phase === "firing" ? "FLIGHT" : "",
    });
  }

  // Shop phase: mount the Cap Table overlay
  if (gs.phase === SHOP && !shopOpen) {
    const human = gs.tanks.find(t => t.ai_class === 0);
    if (human) {
      shopOpen = new ShopOverlay(gs.economy, human as any);
      shopOpen.open();
    }
  }
  if (gs.phase !== SHOP && shopOpen) {
    shopOpen.destroy();
    shopOpen = null;
    mpLocalDone = false;
  }
  // Shop closed by user -> AI buys -> next round
  if (gs.phase === SHOP && shopOpen && !(shopOpen as any).visible && !mpLocalDone) {
    if (isOnline()) {
      submitOnlineShop(gs);
    } else {
      mpLocalDone = true;
      gs.run_ai_buys();
      gs.begin_next_round();
      shopOpen = null;
    }
  }

  // Round end: standings screen, then proceed on click
  if (gs.phase === ROUND_END) {
    if (!standingsShown) {
      standingsShown = true;
      roundIndex = gs.round_index;
      const rows = [...gs.tanks]
        .sort((a, b) => b.score - a.score)
        .map((t, i) => ({ name: t.name, score: t.score, alive: t.alive, rank: i + 1 }));
      showStandings(rows, gs.round_index, () => {
        gs.proceed_after_round();
        (document.getElementById("menu-standings"))?.remove();
      });
    }
  } else {
    standingsShown = false;
  }

  // Game over: winner screen with the conquered planet
  if (gs.phase === GAME_OVER && !standingsShown) {
    standingsShown = true;
    const winner = gs.winner ?? gs.ranking[0];
    const envName = roundToEnvironment(gs.round_index).toUpperCase();
    if (winner) {
      showGameOver(winner.name, winner.score, envName, () => {
        location.reload();
      });
    } else {
      location.reload();
    }
  }

  renderer.render(scene, camera);
}

// ── Online shop flow (host aggregates carts, then all advance) ─
function stepOnlineShop(gs: GameState): void {
  // AI buys are deterministic on every converged client; run once per shop round
  if (mpShopRound !== gs.round_index) {
    mpShopRound = gs.round_index;
    gs.run_ai_buys();
  }
  if (mpAppliedShop) return;
  const s = (window as any).__mpSession;
  if (!s) return;
  if (s.role === "host") {
    // Host: wait for every human's cart, then finalize
    const devs = s.adapter.humanDeviceIds() as string[];
    const allIn = devs.every((d) => mpCarts.has(d));
    if (allIn) {
      const results: Record<string, { inv: number[]; cash: number }> = {};
      for (const d of devs) {
        const c = mpCarts.get(d)!;
        results[d] = { inv: c.inv, cash: c.cash };
      }
      s.session.sendShopFinal(gs.round_index, results as any);
      applyOnlineShopFinal(gs, results);
      mpAppliedShop = true;
    }
  } else {
    // Guest: wait for the authoritative final from the host
    const final = (window as any).__mpShopFinal;
    if (final && final.round === gs.round_index) {
      applyOnlineShopFinal(gs, final.results);
      mpAppliedShop = true;
    }
  }
}

function submitOnlineShop(gs: GameState): void {
  const s = (window as any).__mpSession;
  if (!s) return;
  const localIdx = localHumanIndex(gs);
  const t = gs.tanks[localIdx];
  if (!t) return;
  // sendShop() broadcasts but does NOT echo the local cart back through
  // onShopResult — record it locally so the host's all-in barrier sees it.
  mpCarts.set(DEVICE_ID, { round: gs.round_index, inv: t.inventory.slice(), cash: t.cash });
  s.session.sendShop(gs.round_index, t.inventory.slice(), t.cash);
  mpLocalDone = true;
  shopOpen?.destroy();
  shopOpen = null;
}

function applyOnlineShopFinal(gs: GameState, results: Record<string, { inv: number[]; cash: number }>): void {
  const s = (window as any).__mpSession;
  if (!s) return;
  const devs = s.adapter.deviceIds() as string[];
  for (let i = 0; i < devs.length; i++) {
    const r = results[devs[i]];
    if (!r) continue;
    const t = gs.tanks[i];
    if (!t) continue;
    for (let k = 0; k < t.inventory.length; k++) t.inventory[k] = r.inv[k] ?? 0;
    t.cash = r.cash;
  }
  gs.begin_next_round();
}

// ── Load rocket models & assets ──────────────────────────────
const loader = new GLTFLoader();
const modelPaths = ["./models/falcon9.glb", "./models/new_shepard.glb", "./models/starship.glb", "./models/delta_spaceplane.glb", "./models/terran_r.glb"];

async function preloadAssets(): Promise<void> {
  for (let i = 0; i < modelPaths.length; i++) {
    try {
      const gltf = await loader.loadAsync(modelPaths[i]);
      const clone = gltf.scene.clone(true);
      clone.scale.set(0.15, 0.15, 0.15);
      clone.visible = false;
      scene.add(clone);
      if (i < game.tanks.length) {
        tankMarkers[i].userData.model3d = clone;
      }
    } catch {
      // model unavailable; markers remain
    }
  }
}

// ── Boot ─────────────────────────────────────────────────────
async function boot(): Promise<void> {
  const bar = document.getElementById("loading-bar") as HTMLElement;
  const pct = document.getElementById("loading-pct") as HTMLElement;
  const loadingEl = document.getElementById("loading")!;

  try {
    pct.textContent = "Generating terrain...";
    bar.style.width = "20%";
    game.start_round();

    pct.textContent = "Ready";

    bar.style.width = "100%";
    pct.textContent = "";

    document.getElementById("btn-play")!.addEventListener("click", () => {
      titleEl.remove();
      loadingEl.classList.add("done");
      // Enable engine sound + voices now that we have a user gesture
      config.SOUND = "ON";
      sfx.enabled = true;
      hud = new Hud();
      hudActive = true;
      chat = new ChatOverlay({ onSend: (text) => chat?.system(`relayed to 0 peers: "${text}"`) });
      taunt = new TauntOverlay(tauntProjector);
      // Heavy asset loads deferred to after the user gesture (keeps boot + lobby responsive)
      preloadAssets().catch(() => {});
      preloadAllVoices().catch(() => {});
      loadExplosionTexture().catch(() => {});
      requestAnimationFrame(animate);
    });

  } catch (err) {
    console.error(err);
    pct.textContent = "Error loading";
    setTimeout(() => loadingEl.classList.add("done"), 1000);
    requestAnimationFrame(animate);
  }
}

applyEnvironment("earth");
boot();

// ── Dev hooks (used by integration tests) ─────────────────────
(window as any).__game = game;
(window as any).__scene = scene;
