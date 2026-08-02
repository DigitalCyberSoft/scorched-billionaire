/**
 * Render loop: bridges the deterministic engine to the Three.js scene.
 * Called every frame with the current GameState.
 */

import * as THREE from "three";
import type { GameState } from "../engine/game";
import { updateTerrainFromEngine } from "./terrain";
import { updateRockets, getInstance, animateRocketDeath } from "./rockets";
import { updateExplosions, syncExplosions, updateDebris, getShakeOffset } from "./effects";
import { setEnvironment, type Environment } from "./sky";

// ── State ────────────────────────────────────────────────────

let currentEnv: Environment = "earth";
let clock = new THREE.Clock();

// ── Public API ───────────────────────────────────────────────

/** Called once per animation frame. Bridges engine → 3D. */
export function renderFrame(
  game: GameState,
  scene: THREE.Scene,
  camera: THREE.Camera,
  terrainMesh: THREE.Mesh,
): void {
  const dt = Math.min(clock.getDelta(), 0.1); // cap to avoid spiral

  // Engine update (advances game logic)
  game.update(dt);

  // Terrain deformation
  updateTerrainFromEngine(terrainMesh, game.terrain);

  // Rocket positions and turret angles
  updateRockets(game, game.terrain);

  // Explosions
  syncExplosions(game, scene);
  updateExplosions(dt);
  updateDebris(dt);

  // Screen shake
  const shake = getShakeOffset(dt);
  camera.position.x += shake.x;
  camera.position.y += shake.y;

  // Environment check (based on round index)
  const env = roundToEnvironment(game.round_index);
  if (env !== currentEnv) {
    currentEnv = env;
    setEnvironment(scene, env);
  }
}

/** Map round index to environment. */
export function roundToEnvironment(roundIndex: number): Environment {
  if (roundIndex <= 1) return "earth";
  if (roundIndex <= 3) return "moon";
  return "mars";
}

/** Reset render state for a new game. */
export function resetRenderState(): void {
  clock = new THREE.Clock();
  currentEnv = "earth";
}
