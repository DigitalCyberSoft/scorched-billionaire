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
    background:radial-gradient(ellipse at center,#0a0a2e 0%,#000 70%);font-family:system-ui;">
    <h1 style="font-size:56px;color:#e94560;letter-spacing:6px;text-shadow:3px 3px 0 #000;margin:0;">SCORCHED BILLIONAIRE</h1>
    <p style="color:#e08bb0;font-size:20px;margin:8px 0 36px;">The Mother of All VC Rounds</p>
    <button id="btn-play" style="padding:14px 56px;font-size:22px;background:#e94560;color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:700;letter-spacing:2px;">PLAY</button>
    <p style="color:#555;margin-top:32px;font-size:12px;max-width:500px;text-align:center;">4 billionaires. 3 planets. 48 weapons. <br>Arrow keys to aim. Space to fire. Tab for weapons.</p>
  </div>`;
titleEl.style.cssText = "position:fixed;inset:0;z-index:200;";
document.body.appendChild(titleEl);

// ── HUD (agent-built, mounted on PLAY) ───────────────────────
let hud: Hud | null = null;
let hudActive = false;

// ── Chat (Dealroom Feed, backquote toggles) ──────────────────
let chat: ChatOverlay | null = null;

// ── Input ────────────────────────────────────────────────────
window.addEventListener("keydown", (e) => {
  if (game.phase === "aim" && game.awaiting_human) {
    const t = game.current_shooter!;
    if (e.key === "ArrowLeft") t.angle = Math.min(180, t.angle + 3);
    if (e.key === "ArrowRight") t.angle = Math.max(0, t.angle - 3);
    if (e.key === "ArrowUp") t.power = Math.min(1000, t.power + 30);
    if (e.key === "ArrowDown") t.power = Math.max(0, t.power - 30);
    if (e.key === "Tab") { e.preventDefault(); t.selected_weapon = (t.selected_weapon + 1) % 32; }
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      game.fire();
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
  renderFrame(game, scene, camera, terrainMesh);

  // Environment swap at round boundaries
  const env = roundToEnvironment(game.round_index);
  applyEnvironment(env);

  // Track who fired last (for kill attribution)
  if (game.phase === "firing" && game.current_shooter) {
    lastFirer = game.current_shooter;
  }

  // Death detection: killer taunt + victim scream
  for (let i = 0; i < game.tanks.length; i++) {
    if (prevAlive[i] && !game.tanks[i].alive) {
      const victim = game.tanks[i];
      if (lastFirer && lastFirer !== victim && lastFirer.alive) {
        playKillTaunt(lastFirer);
      }
      playDeathScream(victim);
    }
  }
  prevAlive = game.tanks.map(t => t.alive);

  // Tank marker positions + 3D rocket sync
  for (let i = 0; i < game.tanks.length; i++) {
    const t = game.tanks[i];
    const marker = tankMarkers[i];
    if (!t.alive) { marker.visible = false; continue; }
    const px = Math.round(t.x);
    for (let py = 0; py < game.terrain.h; py++) {
      if (game.terrain.is_dirt(px, py)) {
        const wx = px - game.w / 2;
        const wy = ((game.h - py) / game.h) * 300 + 4;
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
    const s = game.current_shooter;
    hud.update({
      angle: s?.angle ?? 90,
      power: s?.power ?? 0,
      wind: game.cfg.wind,
      tank: s ? {
        name: s.name, health: s.health, maxHealth: 100, alive: s.alive,
        shieldHp: s.shield_hp, shieldItem: s.shield_item,
      } : null,
      weaponSlot: s?.selected_weapon ?? 0,
      timeLeft: undefined,
      turnLabel: game.phase === "aim" && game.awaiting_human ? "YOUR TURN"
        : game.phase === "firing" ? "FLIGHT" : "",
    });
  }

  // Shop phase: mount the Cap Table overlay
  if (game.phase === SHOP && !shopOpen) {
    const human = game.tanks.find(t => t.ai_class === 0);
    if (human) {
      shopOpen = new ShopOverlay(game.economy, human as any);
      shopOpen.open();
    }
  }
  if (game.phase !== SHOP && shopOpen) {
    shopOpen.destroy();
    shopOpen = null;
  }
  // Shop closed by user -> AI buys -> next round
  if (game.phase === SHOP && shopOpen && !(shopOpen as any).visible) {
    game.run_ai_buys();
    game.begin_next_round();
    shopOpen = null;
  }

  // Round end: brief standings, then proceed (auto)
  if (game.phase === ROUND_END) {
    if (!standingsShown) {
      standingsShown = true;
      roundIndex = game.round_index;
    }
    game.proceed_after_round();
  } else {
    standingsShown = false;
  }

  // Game over: restart
  if (game.phase === GAME_OVER) {
    location.reload();
  }

  renderer.render(scene, camera);
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

    pct.textContent = "Loading assets...";
    bar.style.width = "60%";
    preloadAssets().catch(() => {});
    preloadAllVoices().catch(() => {});
    loadExplosionTexture().catch(() => {});

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
