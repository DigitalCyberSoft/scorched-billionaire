/**
 * Scorched Billionaire — Entry point.
 * Boots the deterministic engine and the Three.js renderer,
 * then runs the game loop bridging engine state to 3D visuals.
 */

import * as THREE from "three";
import { GameState, AIM, FIRING, SETTLE, TURN_START, PLACE } from "./engine/game";
import { rng } from "./engine/rng";
import { Config } from "./engine/config";
import { createTerrainMesh } from "./render/terrain";
import { spawnRocket } from "./render/rockets";
import { renderFrame, roundToEnvironment } from "./render/loop";
import { setEnvironment } from "./render/sky";

// ── Canvas & Renderer ────────────────────────────────────────
const canvas = document.getElementById("game") as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

// ── Scene ────────────────────────────────────────────────────
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0a1a);

// ── Camera (orthographic, locked side-view) ──────────────────
const aspect = window.innerWidth / window.innerHeight;
const viewHeight = 800;
const viewWidth = viewHeight * aspect;
const camera = new THREE.OrthographicCamera(
  -viewWidth / 2, viewWidth / 2,
  viewHeight / 2, -viewHeight / 2,
  0.1, 2000,
);
camera.position.set(0, 100, 500);
camera.lookAt(0, 350, 0);

// ── Lighting ─────────────────────────────────────────────────
const ambient = new THREE.AmbientLight(0x404060, 0.6);
scene.add(ambient);
const sun = new THREE.DirectionalLight(0xffffcc, 1.2);
sun.position.set(200, 400, 100);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.left = -600;
sun.shadow.camera.right = 600;
sun.shadow.camera.top = 400;
sun.shadow.camera.bottom = -400;
scene.add(sun);

// ── Engine ───────────────────────────────────────────────────
const SEED = 42;
rng.seed(SEED);

const config = new Config();
config.GRAVITY = 0.2;
config.wind = 0;
config.MAX_WIND = 200;
config.INITIAL_CASH = 5000;
// Disable sound to avoid browser autoplay restrictions
config.SOUND = "OFF";

const game = new GameState(config, 1024, 768);

// Add tanks
game.add_player("Elon Musk", 0, 0, 0);    // human
game.add_player("Jeff Bezos", 1, 1, 1);    // AI Moron
game.add_player("Trump", 4, 2, 7);          // AI Tosser
game.add_player("Scam Altman", 5, 3, 7);    // AI Chooser
game.new_game();

// ── Terrain mesh (driven by engine) ──────────────────────────
const terrainMesh = createTerrainMesh(game.terrain, viewWidth);
terrainMesh.material = new THREE.MeshStandardMaterial({ color: 0x5c4033, flatShading: true });
scene.add(terrainMesh);

// ── Placeholder rockets (colored cylinders) ──────────────────
const tankMarkers: THREE.Mesh[] = [];
const tankColors = [0x4488ff, 0xff8844, 0xff4444, 0x44ff44];
for (let i = 0; i < game.tanks.length; i++) {
  const geo = new THREE.CylinderGeometry(4, 5, 20, 8);
  const mat = new THREE.MeshStandardMaterial({ color: tankColors[i], flatShading: true });
  const marker = new THREE.Mesh(geo, mat);
  marker.position.set(0, 0, 0);
  marker.visible = false;
  scene.add(marker);
  tankMarkers.push(marker);
}

// ── HUD overlay ───────────────────────────────────────────────
const hudEl = document.createElement("div");
hudEl.id = "game-hud";
hudEl.style.cssText = "position:fixed;top:10px;left:10px;z-index:20;color:#fff;font-family:system-ui;font-size:16px;background:rgba(0,0,0,0.6);padding:8px 12px;border-radius:6px;pointer-events:none;";
document.body.appendChild(hudEl);

// ── Environment ──────────────────────────────────────────────
setEnvironment(scene, "earth");

// ── Spawn rockets ────────────────────────────────────────────
async function spawnAllRockets(): Promise<void> {
  for (const t of game.tanks) {
    try {
      await spawnRocket(t, scene);
    } catch {
      // Model not available yet; will retry with placeholder
      console.warn(`No 3D model for ${t.name}, using fallback`);
    }
  }
}

// ── Input ────────────────────────────────────────────────────
const keys: Record<string, boolean> = {};

window.addEventListener("keydown", (e) => {
  keys[e.key] = true;

  if (game.phase === AIM && game.awaiting_human) {
    const tank = game.current_shooter!;
    if (e.key === "ArrowLeft") tank.angle = Math.min(180, tank.angle + 2);
    if (e.key === "ArrowRight") tank.angle = Math.max(0, tank.angle - 2);
    if (e.key === "ArrowUp") tank.power = Math.min(1000, tank.power + 25);
    if (e.key === "ArrowDown") tank.power = Math.max(0, tank.power - 25);
    if (e.key === "Tab") {
      e.preventDefault();
      tank.selected_weapon = (tank.selected_weapon + 1) % 32; // cycle weapons
    }
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      game.fire();
    }
  }
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

// ── Resize ───────────────────────────────────────────────────
window.addEventListener("resize", () => {
  const a = window.innerWidth / window.innerHeight;
  const vh = 800;
  const vw = vh * a;
  camera.left = -vw / 2;
  camera.right = vw / 2;
  camera.top = vh / 2;
  camera.bottom = -vh / 2;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ── Render loop ──────────────────────────────────────────────
function animate(): void {
  requestAnimationFrame(animate);

  renderFrame(game, scene, camera, terrainMesh);

  // Update tank markers
  for (let i = 0; i < game.tanks.length; i++) {
    const t = game.tanks[i];
    if (t.alive) {
      const px = Math.round(t.x);
      for (let py = 0; py < game.terrain.h; py++) {
        if (game.terrain.is_dirt(px, py)) {
          tankMarkers[i].position.set(px - game.w / 2, ((game.h - py) / game.h) * 300, 0);
          tankMarkers[i].visible = true;
          break;
        }
      }
    } else {
      tankMarkers[i].visible = false;
    }
  }

  // Update HUD
  const shooter = game.current_shooter;
  if (shooter) {
    const phaseNames: Record<string, string> = { aim: "AIM", turn_start: "WATCH", firing: "FLIGHT", settle: "SETTLE" };
    hudEl.textContent = `${shooter.name} | ${phaseNames[game.phase] || game.phase} | Angle: ${shooter.angle}° Power: ${shooter.power} | Wind: ${game.cfg.wind}`;
  }

  renderer.render(scene, camera);
}

// ── Boot ─────────────────────────────────────────────────────
let gameStarted = false;

async function boot(): Promise<void> {
  const bar = document.getElementById("loading-bar") as HTMLElement;
  const pct = document.getElementById("loading-pct") as HTMLElement;
  const loadingEl = document.getElementById("loading");

  function hideLoading(msg?: string) {
    bar.style.width = "100%";
    pct.textContent = msg ?? "Click anywhere to play";
    pct.style.color = msg ? "#f44" : "";
  }

  function update(msg: string, pctVal: number) {
    pct.textContent = msg;
    bar.style.width = pctVal + "%";
  }

  try {
    update("Seeding RNG...", 10);
    rng.seed(42);

    update("Starting engine...", 20);
    game.start_round();

    update("Building terrain...", 60);

    update("Loading rockets...", 80);
    spawnAllRockets().catch(() => {});

    update("", 100);
    hideLoading();

    // Start game on first click/key
    function startGame() {
      if (gameStarted) return;
      gameStarted = true;
      loadingEl?.classList.add("done");
      requestAnimationFrame(animate);
      document.removeEventListener("click", startGame);
      document.removeEventListener("keydown", startGame);
    }
    document.addEventListener("click", startGame);
    document.addEventListener("keydown", startGame);
  } catch (err) {
    console.error("Boot failed:", err);
    hideLoading("Error: " + String(err).slice(0, 60));
    requestAnimationFrame(animate);
  }
}

boot();

// ── Dev helpers ──────────────────────────────────────────────
(window as any).__game = game;
(window as any).__scene = scene;
