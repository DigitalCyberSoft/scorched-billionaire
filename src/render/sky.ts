/**
 * Environment skyboxes for Earth, Moon, and Mars.
 */

import * as THREE from "three";

export type Environment = "earth" | "moon" | "mars";

const COLORS: Record<Environment, { bg: number; fog: number; fogNear: number; fogFar: number }> = {
  earth:   { bg: 0x4a6fa5, fog: 0x87aed0, fogNear: 400, fogFar: 900 },
  moon:    { bg: 0x050510, fog: 0x000000, fogNear: 300, fogFar: 700 },
  mars:    { bg: 0x8b4513, fog: 0xc4956a, fogNear: 200, fogFar: 600 },
};

export function setEnvironment(
  scene: THREE.Scene,
  env: Environment,
): void {
  const c = COLORS[env];
  scene.background = new THREE.Color(c.bg);
  scene.fog = new THREE.Fog(c.fog, c.fogNear, c.fogFar);

  // Adjust ambient to match environment
  const ambient = scene.children.find(
    (c) => c instanceof THREE.AmbientLight,
  ) as THREE.AmbientLight | undefined;
  if (ambient) {
    if (env === "moon") {
      ambient.intensity = 0.3;
    } else if (env === "mars") {
      ambient.intensity = 0.5;
    } else {
      ambient.intensity = 0.6;
    }
  }
}
