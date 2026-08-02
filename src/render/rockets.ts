/**
 * Rocket model loader and animation manager.
 * Loads GLTF/GLB rocket models and manages per-tank instances.
 */

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { Tank } from "../engine/objects";
import type { GameState } from "../engine/game";

// ── Rocket instance ──────────────────────────────────────────

export interface RocketInstance {
  tank: Tank;
  group: THREE.Group;
  turret: THREE.Object3D | null;  // rotates with aim angle
  nozzle: THREE.Object3D | null;  // emissive during firing
  noseCone: THREE.Object3D | null; // detaches on death
}

const instances: Map<number, RocketInstance> = new Map();
const loader = new GLTFLoader();

// ── Model cache ──────────────────────────────────────────────

const modelCache: Map<string, THREE.Group> = new Map();

/** Load a GLB model (cached). */
async function loadModel(path: string): Promise<THREE.Group> {
  if (modelCache.has(path)) {
    return modelCache.get(path)!.clone(true);
  }
  const gltf = await loader.loadAsync(path);
  modelCache.set(path, gltf.scene);
  return gltf.scene.clone(true);
}

/** Find a child by name prefix in a group. */
function findChild(root: THREE.Object3D, prefix: string): THREE.Object3D | null {
  root.traverse((obj) => {
    if (obj.name.startsWith(prefix)) return obj;
  });
  return null;
}

// ── Rocket assignment ────────────────────────────────────────

/** Maps tank icon index to model path. */
const ROCKET_MODELS: Record<number, string> = {
  0: "/models/falcon9.glb",
  1: "/models/new_shepard.glb",
  2: "/models/delta_spaceplane.glb",
  3: "/models/terran_r.glb",
  4: "/models/starship.glb",
  5: "/models/falcon9.glb",    // fallbacks
  6: "/models/new_shepard.glb",
  7: "/models/starship.glb",
};

function modelPath(tank: Tank): string {
  return ROCKET_MODELS[tank.tank_icon ?? tank.player_index] ?? ROCKET_MODELS[0];
}

// ── Public API ───────────────────────────────────────────────

export async function spawnRocket(
  tank: Tank,
  scene: THREE.Scene,
): Promise<RocketInstance> {
  const path = modelPath(tank);
  const group = await loadModel(path);

  // Find sub-meshes
  const turret = findChild(group, "turret") ?? findChild(group, "weapon");
  const nozzle = findChild(group, "nozzle") ?? findChild(group, "engine");
  const noseCone = findChild(group, "nose") ?? findChild(group, "cone");

  // Position on terrain (will be updated each frame)
  group.position.set(tank.x - 512, 0, 0);

  scene.add(group);

  const inst: RocketInstance = { tank, group, turret, nozzle, noseCone };
  instances.set(tank.player_index, inst);
  return inst;
}

export function getInstance(playerIndex: number): RocketInstance | undefined {
  return instances.get(playerIndex);
}

export function removeRocket(playerIndex: number): void {
  const inst = instances.get(playerIndex);
  if (inst) {
    inst.group.removeFromParent();
    instances.delete(playerIndex);
  }
}

/** Update all rocket positions, angles, and states from engine. */
export function updateRockets(
  game: GameState,
  terrain: import("../engine/terrain").Terrain,
): void {
  for (const inst of instances.values()) {
    const t = inst.tank;
    if (!t.alive) {
      inst.group.visible = false;
      continue;
    }
    inst.group.visible = true;

    // Position: X from tank.x (centered), Y from terrain surface at that X
    const px = Math.round(t.x);
    const worldX = px - terrain.w / 2;
    let surfaceY = 0;
    for (let py = 0; py < terrain.h; py++) {
      if (terrain.is_dirt(px, py)) {
        surfaceY = ((terrain.h - py) / terrain.h) * 300;
        break;
      }
    }
    inst.group.position.set(worldX, surfaceY, 0);

    // Turret rotation (angle: 0 = right, 180 = left)
    if (inst.turret) {
      // Convert engine angle (0=right, 180=left) to Z-rotation
      const rad = (t.angle - 90) * (Math.PI / 180);
      inst.turret.rotation.z = rad;
    }
  }
}

/** Detach nose cone and escape pod on death. */
export function animateRocketDeath(
  inst: RocketInstance,
  scene: THREE.Scene,
): void {
  if (inst.noseCone) {
    inst.noseCone.removeFromParent();
    scene.add(inst.noseCone);
    // Simple arc: up and sideways
    const vel = new THREE.Vector3(
      (Math.random() - 0.5) * 2,
      5 + Math.random() * 3,
      (Math.random() - 0.5) * 2,
    );
    // We'd need a physics tick for this in the render loop
    inst.noseCone.userData.velocity = vel;
  }
}
