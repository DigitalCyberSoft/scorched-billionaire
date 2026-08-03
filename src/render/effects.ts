/**
 * Visual effects: explosions, particles, screen shake.
 * Reads engine state (explosions[], beams[], plasma_rings[])
 * and renders them as 3D billboards/particles.
 */

import * as THREE from "three";
import type { GameState } from "../engine/game";

// ── Explosion billboards ─────────────────────────────────────

interface ExplosionSprite {
  sprite: THREE.Sprite;
  maxRadius: number;
  frame: number;
  age: number;
}

const activeExplosions: ExplosionSprite[] = [];
const explosionMat = new THREE.SpriteMaterial({
  map: null,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  transparent: true,
  opacity: 0.8,
});

let explosionLoaded = false;

/** Load the explosion sprite sheet. Call once during boot. */
export function loadExplosionTexture(): Promise<void> {
  return new Promise((resolve) => {
    const loader = new THREE.TextureLoader();
    loader.load("./assets/explosion_sheet_v4.png", (tex) => {
      explosionMat.map = tex;
      explosionMat.needsUpdate = true;
      explosionLoaded = true;
      resolve();
    }, undefined, () => resolve());
  });
}

/** Spawn an explosion at world position from engine explosion data. */
export function spawnExplosion(
  x: number,
  y: number,
  maxRadius: number,
  scene: THREE.Scene,
  terrainW: number,
  terrainH: number,
): void {
  const worldX = x - terrainW / 2;
  const worldY = ((terrainH - y) / terrainH) * 300 + maxRadius * 0.3;
  const worldZ = 0;

  const sprite = new THREE.Sprite(explosionMat.clone());
  sprite.position.set(worldX, worldY, worldZ);
  sprite.scale.set(maxRadius * 0.5, maxRadius * 0.5, 1);
  scene.add(sprite);

  activeExplosions.push({ sprite, maxRadius, frame: 0, age: 0 });
}

/** Update all active explosions (expand, fade, remove). */
export function updateExplosions(dt: number): void {
  const DURATION = 0.6; // seconds
  for (let i = activeExplosions.length - 1; i >= 0; i--) {
    const ex = activeExplosions[i];
    ex.age += dt;
    const t = ex.age / DURATION;
    if (t >= 1) {
      ex.sprite.removeFromParent();
      (ex.sprite.material as THREE.Material).dispose();
      activeExplosions.splice(i, 1);
      continue;
    }
    // Expand then contract
    const scale = ex.maxRadius * (0.3 + t * 0.7);
    ex.sprite.scale.set(scale, scale, 1);
    ex.sprite.material.opacity = 1 - t;
  }
}

/** Sync explosions from engine state. */
const knownExplosions = new Set<number>();
let explosionCounter = 0;

export function syncExplosions(
  game: GameState,
  scene: THREE.Scene,
): void {
  const current = new Set<number>();
  for (const ex of game.explosions) {
    const key = (ex.x as number) * 10000 + (ex.y as number);
    current.add(key);
    if (!knownExplosions.has(key)) {
      spawnExplosion(
        ex.x as number,
        ex.y as number,
        (ex.maxr as number) || 20,
        scene,
        game.w,
        game.h,
      );
      knownExplosions.add(key);
    }
  }
  // Cleanup stale
  for (const key of knownExplosions) {
    if (!current.has(key)) knownExplosions.delete(key);
  }
}

// ── Screen shake ─────────────────────────────────────────────

let shakeAmount = 0;
let shakeDuration = 0;

export function triggerShake(intensity: number, duration: number = 0.3): void {
  shakeAmount = Math.max(shakeAmount, intensity);
  shakeDuration = Math.max(shakeDuration, duration);
}

export function getShakeOffset(dt: number): { x: number; y: number } {
  if (shakeDuration <= 0) return { x: 0, y: 0 };
  shakeDuration -= dt;
  const decay = shakeDuration / 0.3;
  const x = (Math.random() - 0.5) * 2 * shakeAmount * decay;
  const y = (Math.random() - 0.5) * 2 * shakeAmount * decay;
  return { x, y };
}

// ── Particle debris ──────────────────────────────────────────

interface DebrisParticle {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  life: number;
  age: number;
}

const debrisParticles: DebrisParticle[] = [];
const debrisGeo = new THREE.BoxGeometry(2, 2, 2);

export function spawnDebris(
  x: number, y: number, count: number, scene: THREE.Scene,
  terrainW: number, terrainH: number,
): void {
  const worldX = x - terrainW / 2;
  const worldY = ((terrainH - y) / terrainH) * 300;

  for (let i = 0; i < count; i++) {
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color().setHSL(0.1, 0.3, 0.2 + Math.random() * 0.3),
      flatShading: true,
    });
    const mesh = new THREE.Mesh(debrisGeo, mat);
    mesh.position.set(worldX, worldY, (Math.random() - 0.5) * 10);
    mesh.scale.setScalar(0.5 + Math.random() * 1.5);
    scene.add(mesh);

    debrisParticles.push({
      mesh,
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 80,
        30 + Math.random() * 60,
        (Math.random() - 0.5) * 40,
      ),
      life: 1.5 + Math.random() * 2,
      age: 0,
    });
  }
}

const GRAVITY = -50;

export function updateDebris(dt: number): void {
  for (let i = debrisParticles.length - 1; i >= 0; i--) {
    const d = debrisParticles[i];
    d.age += dt;
    if (d.age >= d.life) {
      d.mesh.removeFromParent();
      (d.mesh.material as THREE.Material).dispose();
      debrisParticles.splice(i, 1);
      continue;
    }
    d.velocity.y += GRAVITY * dt;
    d.mesh.position.x += d.velocity.x * dt;
    d.mesh.position.y += d.velocity.y * dt;
    d.mesh.position.z += d.velocity.z * dt;
    if (d.mesh.position.y < 0) {
      d.mesh.position.y = 0;
      d.velocity.y *= -0.3;
      d.velocity.x *= 0.5;
    }
    const t = d.age / d.life;
    const mat = d.mesh.material as THREE.MeshStandardMaterial;
    mat.opacity = 1 - t;
    mat.transparent = true;
  }
}

export function clearAllEffects(scene: THREE.Scene): void {
  for (const ex of activeExplosions) {
    ex.sprite.removeFromParent();
    (ex.sprite.material as THREE.Material).dispose();
  }
  activeExplosions.length = 0;
  for (const d of debrisParticles) {
    d.mesh.removeFromParent();
    (d.mesh.material as THREE.Material).dispose();
  }
  debrisParticles.length = 0;
  knownExplosions.clear();
  shakeAmount = 0;
  shakeDuration = 0;
}
