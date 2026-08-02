/**
 * Voice line audio system.
 * Loads MagicHour-generated WAV files and plays them
 * on engine trigger events (fire, kill, death, shop, revenge, nearmiss).
 */

import type { Tank } from "../engine/objects";
import type { GameState } from "../engine/game";

// ── Voice line catalog ──────────────────────────────────────

type VoiceCategory = "taunt" | "kill" | "death" | "shop" | "revenge" | "nearmiss";

interface VoiceSet {
  [category: string]: string[]; // file paths
}

const voiceCatalog: Record<string, VoiceSet> = {
  "Elon Musk": {
    taunt: [
      "/audio/elon_musk_taunt.wav",
      "/audio/elon_musk_taunt_v2.wav",
      "/audio/elon_musk_taunt3.wav",
      "/audio/elon_musk_taunt4.wav",
      "/audio/elon_musk_taunt5.wav",
      "/audio/elon_musk_taunt6.wav",
    ],
    kill: ["/audio/elon_musk_kill.wav"],
    death: ["/audio/elon_musk_death.wav"],
    shop: ["/audio/elon_musk_shop.wav"],
    revenge: ["/audio/elon_musk_revenge.wav"],
    nearmiss: ["/audio/elon_musk_nearmiss.wav"],
  },
  "Donald Trump": {
    taunt: [
      "/audio/trump_taunt.wav",
      "/audio/donald_trump_taunt4.wav",
      "/audio/donald_trump_taunt5.wav",
    ],
    kill: ["/audio/donald_trump_kill.wav"],
    death: ["/audio/donald_trump_death.wav"],
    shop: ["/audio/donald_trump_shop.wav"],
    revenge: ["/audio/donald_trump_revenge.wav"],
  },
  "Jeff Bezos": {
    taunt: [
      "/audio/bezos_taunt.wav",
      "/audio/jeff_bezos_taunt3.wav",
      "/audio/jeff_bezos_taunt4.wav",
      "/audio/jeff_bezos_taunt5.wav",
    ],
    kill: ["/audio/jeff_bezos_kill.wav"],
    death: ["/audio/jeff_bezos_death.wav"],
    shop: ["/audio/jeff_bezos_shop.wav"],
    revenge: ["/audio/jeff_bezos_revenge.wav"],
  },
  "Sam Altman": {
    taunt: [
      "/audio/sam_altman_taunt.wav",
      "/audio/sam_altman_taunt3.wav",
      "/audio/sam_altman_taunt4.wav",
      "/audio/sam_altman_taunt5.wav",
    ],
    kill: ["/audio/sam_altman_kill.wav"],
    death: ["/audio/sam_altman_death.wav"],
    shop: ["/audio/sam_altman_shop.wav"],
    revenge: ["/audio/sam_altman_revenge.wav"],
  },
  "Bill Gates": {
    taunt: ["/audio/bill_gates_taunt.wav", "/audio/bill_gates_taunt3.wav"],
    kill: ["/audio/bill_gates_kill.wav"],
    death: ["/audio/bill_gates_death.wav"],
    shop: ["/audio/bill_gates_shop.wav"],
    revenge: ["/audio/bill_gates_revenge.wav"],
  },
  "Steve Jobs": {
    taunt: ["/audio/steve_jobs_taunt.wav", "/audio/steve_jobs_taunt3.wav"],
    kill: ["/audio/steve_jobs_kill.wav"],
    death: ["/audio/steve_jobs_death.wav"],
    shop: ["/audio/steve_jobs_shop.wav"],
    revenge: ["/audio/steve_jobs_revenge.wav"],
  },
  "Gordon Ramsay": {
    taunt: ["/audio/gordon_ramsay_taunt.wav", "/audio/gordon_ramsay_taunt5.wav"],
    kill: ["/audio/gordon_ramsay_kill.wav"],
    death: ["/audio/gordon_ramsay_death.wav"],
  },
  "Werner Herzog": {
    taunt: ["/audio/werner_herzog_taunt.wav", "/audio/werner_herzog_taunt3.wav", "/audio/werner_herzog_taunt5.wav"],
    kill: ["/audio/werner_herzog_kill.wav"],
    death: ["/audio/werner_herzog_death.wav"],
    shop: ["/audio/werner_herzog_shop.wav"],
    revenge: ["/audio/werner_herzog_revenge.wav"],
  },
  "Mark Zuckerberg": {
    taunt: ["/audio/mark_zuckerberg_taunt.wav"],
    kill: ["/audio/mark_zuckerberg_kill.wav"],
    death: ["/audio/mark_zuckerberg_death.wav"],
    shop: ["/audio/mark_zuckerberg_shop.wav"],
    revenge: ["/audio/mark_zuckerberg_revenge.wav"],
  },
  "Joe Rogan": {
    taunt: ["/audio/joe_rogan_taunt.wav"],
    kill: ["/audio/joe_rogan_kill.wav"],
    death: ["/audio/joe_rogan_death.wav"],
  },
  "Neil deGrasse Tyson": {
    taunt: ["/audio/neil_degrasse_tyson_taunt.wav"],
    kill: ["/audio/neil_degrasse_tyson_kill.wav"],
    death: ["/audio/neil_degrasse_tyson_death.wav"],
  },
};

// ── Audio engine ─────────────────────────────────────────────

const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
const audioCache: Map<string, AudioBuffer> = new Map();

/** Preload a voice line into the audio cache. */
async function preloadFile(path: string): Promise<void> {
  if (audioCache.has(path)) return;
  try {
    const resp = await fetch(path);
    const arrayBuf = await resp.arrayBuffer();
    const audioBuf = await audioCtx.decodeAudioData(arrayBuf);
    audioCache.set(path, audioBuf);
  } catch {
    // File may not exist yet; skip silently
  }
}

/** Play a cached voice line. */
function playBuffer(path: string): void {
  const buf = audioCache.get(path);
  if (!buf) return;
  const src = audioCtx.createBufferSource();
  src.buffer = buf;
  src.connect(audioCtx.destination);
  src.start();
}

/** Pick a random line from a character's category. */
function randomLine(characterName: string, category: VoiceCategory): string | null {
  const set = voiceCatalog[characterName];
  if (!set) return null;
  const lines = set[category];
  if (!lines || lines.length === 0) return null;
  return lines[Math.floor(Math.random() * lines.length)];
}

// ── Public API ───────────────────────────────────────────────

/** Play a taunt when a tank fires. */
export function playFireTaunt(tank: Tank): void {
  const line = randomLine(tank.name, "taunt");
  if (line) playBuffer(line);
}

/** Play a celebration when a tank kills someone. */
export function playKillTaunt(tank: Tank): void {
  const line = randomLine(tank.name, "kill");
  if (line) playBuffer(line);
}

/** Play a death scream. */
export function playDeathScream(tank: Tank): void {
  const line = randomLine(tank.name, "death");
  if (line) playBuffer(line);
}

/** Play a shop purchase comment. */
export function playShopLine(tank: Tank): void {
  const line = randomLine(tank.name, "shop");
  if (line) playBuffer(line);
}

/** Play a revenge line. */
export function playRevengeLine(tank: Tank): void {
  const line = randomLine(tank.name, "revenge");
  if (line) playBuffer(line);
}

/** Play a near-miss taunt. */
export function playNearmissLine(tank: Tank): void {
  const line = randomLine(tank.name, "nearmiss");
  if (line) playBuffer(line);
}

/** Preload all voice lines for all characters. */
export async function preloadAllVoices(): Promise<void> {
  const promises: Promise<void>[] = [];
  for (const set of Object.values(voiceCatalog)) {
    for (const lines of Object.values(set)) {
      for (const path of lines) {
        promises.push(preloadFile(path));
      }
    }
  }
  await Promise.allSettled(promises);
}

/** Resume audio context (must be called from a user gesture). */
export function resumeAudio(): void {
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}
