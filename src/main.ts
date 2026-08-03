/**
 * Scorched Billionaire — Entry point.
 */
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { GameState } from "./engine/game";
import { rng } from "./engine/rng";
import { Config } from "./engine/config";
import { createTerrainMesh } from "./render/terrain";
import { renderFrame } from "./render/loop";
import { setEnvironment } from "./render/sky";
import { loadExplosionTexture } from "./render/effects";
import { preloadAllVoices, playFireTaunt, playKillTaunt, playDeathScream } from "./audio/voices";

// ── Canvas & Renderer ────────────────────────────────────────
const canvas = document.getElementById("game") as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
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
config.SOUND = "OFF";

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

// ── Tank markers (colored capsules) ──────────────────────────
const tankMarkers: THREE.Mesh[] = [];
const tankColors = [0x4488ff, 0xff8844, 0xff2222, 0x44dd44];
const tankNames = ["Elon", "Bezos", "Trump", "Altman"];
for (let i = 0; i < game.tanks.length; i++) {
  const group = new THREE.Group();
  // Body
  const bodyGeo = new THREE.CylinderGeometry(3, 4, 18, 8);
  const bodyMat = new THREE.MeshStandardMaterial({ color: tankColors[i], flatShading: true });
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.position.y = 9;
  group.add(body);
  // Nose cone
  const noseGeo = new THREE.ConeGeometry(3, 6, 8);
  const nose = new THREE.Mesh(noseGeo, bodyMat);
  nose.position.y = 21;
  group.add(nose);
  // Label
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: createLabelTexture(tankNames[i], tankColors[i]),
    transparent: true,
    depthTest: false,
  }));
  sprite.position.y = 28;
  sprite.scale.set(30, 10, 1);
  group.add(sprite);
  group.visible = false;
  scene.add(group);
  tankMarkers.push(group as any);
  tankMarkers[i].userData = { body };
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

// ── HUD ──────────────────────────────────────────────────────
const hudEl = document.createElement("div");
hudEl.style.cssText = "position:fixed;top:10px;left:10px;z-index:20;color:#fff;font-family:system-ui;font-size:14px;background:rgba(0,0,0,0.7);padding:8px 14px;border-radius:6px;pointer-events:none;display:none;";
document.body.appendChild(hudEl);

// ── Input ────────────────────────────────────────────────────
let prevAlive = game.tanks.map(t => t.alive);
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

// ── Render ───────────────────────────────────────────────────
function animate(): void {
  requestAnimationFrame(animate);
  renderFrame(game, scene, camera, terrainMesh);

  // Death detection
  for (let i = 0; i < game.tanks.length; i++) {
    if (prevAlive[i] && !game.tanks[i].alive) {
      playDeathScream(game.tanks[i]);
    }
  }
  prevAlive = game.tanks.map(t => t.alive);

  for (let i = 0; i < game.tanks.length; i++) {
    const t = game.tanks[i];
    if (!t.alive) { tankMarkers[i].visible = false; continue; }
    const px = Math.round(t.x);
    for (let py = 0; py < game.terrain.h; py++) {
      if (game.terrain.is_dirt(px, py)) {
        tankMarkers[i].position.set(px - game.w / 2, ((game.h - py) / game.h) * 300 + 4, 0);
        tankMarkers[i].visible = true;
        break;
      }
    }
  }

  const s = game.current_shooter;
  if (s) {
    const p: Record<string, string> = { aim: "🎯 YOUR TURN", turn_start: "⏳", firing: "🔥", settle: "💨" };
    hudEl.innerHTML = `<b>${s.name}</b> &nbsp; ${p[game.phase] || game.phase} &nbsp; | &nbsp; ${s.angle}° &nbsp; ${s.power} &nbsp; | Wind: ${game.cfg.wind}`;
  }

  renderer.render(scene, camera);
}

// ── Load rocket models & terrain texture ─────────────────────
const loader = new GLTFLoader();
const modelPaths = ["./models/falcon9.glb", "./models/new_shepard.glb", "./models/starship.glb", "./models/delta_spaceplane.glb", "./models/terran_r.glb"];
const loadedModels: (THREE.Group | null)[] = [];

async function preloadAssets() {
  // Load terrain texture
  const texLoader = new THREE.TextureLoader();
  texLoader.load("./assets/moon_surface_v2.png", (tex) => {
    const mat = terrainMesh.material as THREE.MeshStandardMaterial;
    mat.map = tex;
    mat.color.set(0xffffff);
    mat.needsUpdate = true;
  }, undefined, () => {});

  // Load rocket models
  for (let i = 0; i < modelPaths.length; i++) {
    try {
      const gltf = await loader.loadAsync(modelPaths[i]);
      loadedModels[i] = gltf.scene;
    } catch {
      loadedModels[i] = null;
    }
  }
  // Replace markers with models
  for (let i = 0; i < game.tanks.length; i++) {
    const modelIdx = i < modelPaths.length ? i : 0;
    const model = loadedModels[modelIdx];
    if (model) {
      const clone = model.clone();
      clone.scale.set(0.15, 0.15, 0.15);
      clone.position.copy(tankMarkers[i].position);
      scene.add(clone);
      tankMarkers[i].userData.model3d = clone;
    }
  }
}

// ── Boot ─────────────────────────────────────────────────────
async function boot() {
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
      hudEl.style.display = "block";
      loadingEl.classList.add("done");
      requestAnimationFrame(animate);
    });

  } catch (err) {
    console.error(err);
    pct.textContent = "Error loading";
    setTimeout(() => loadingEl.classList.add("done"), 1000);
    requestAnimationFrame(animate);
  }
}

setEnvironment(scene, "earth");
boot();
