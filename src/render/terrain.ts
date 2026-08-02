/**
 * Terrain mesh driven by the engine's pixel grid.
 * Reads the Terrain framebuffer each frame and displaces
 * a subdivided PlaneGeometry to match.
 */

import * as THREE from "three";
import type { Terrain } from "../engine/terrain";

/** Create a terrain mesh that reads from the engine's pixel grid. */
export function createTerrainMesh(
  engineTerrain: Terrain,
  viewWidth: number,
): THREE.Mesh {
  const w = engineTerrain.w;
  const h = engineTerrain.h;
  const segW = Math.min(w, 256);
  const segH = Math.min(h, 64);

  const geo = new THREE.PlaneGeometry(w, h, segW, segH);
  geo.rotateX(-Math.PI / 2);

  const mat = new THREE.MeshStandardMaterial({
    color: 0x888888,
    flatShading: true,
    side: THREE.DoubleSide,
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  mesh.castShadow = true;

  // Initial update
  updateTerrainFromEngine(mesh, engineTerrain);

  return mesh;
}

/**
 * Read the engine's pixel grid and update the terrain mesh vertices.
 * The engine framebuffer is indexed [y * w + x] where y grows downward.
 * We scan each column for the highest dirt pixel and use that as the
 * terrain surface height.
 */
export function updateTerrainFromEngine(
  mesh: THREE.Mesh,
  terrain: Terrain,
): void {
  const geo = mesh.geometry as THREE.PlaneGeometry;
  const positions = geo.attributes.position;

  // The engine screen maps y=0 at top, y=h-1 at bottom.
  // Our terrain mesh is centered at origin, XZ plane.
  // We scan columns and find the dirt surface.
  const w = terrain.w;
  const h = terrain.h;
  const MAX_HEIGHT = 300; // max terrain height in 3D units
  const MIN_HEIGHT = 0;

  // For each vertex in the grid (segW+1 × segH+1), compute
  // its position in engine pixel space and read the height.
  const vertsW = Math.sqrt(positions.count / ((geo.parameters.heightSegments ?? 64) + 1));
  // Simpler approach: iterate all positions and map by their X coordinate
  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i); // world X = engine X
    // Map world X to engine pixel column
    const px = Math.round(x + w / 2);
    if (px < 0 || px >= w) {
      positions.setY(i, MIN_HEIGHT);
      continue;
    }

    // Find the topmost dirt pixel in this column (lowest Y in screen coords)
    let surfaceY = h - 1;
    for (let py = 0; py < h; py++) {
      if (terrain.is_dirt(px, py)) {
        surfaceY = py;
        break;
      }
    }

    // Map engine Y (0=top, h-1=bottom) to 3D height
    // dirt at top of screen = high elevation
    const height = ((h - surfaceY) / h) * MAX_HEIGHT;
    positions.setY(i, height);
  }

  positions.needsUpdate = true;
  geo.computeVertexNormals();
}
