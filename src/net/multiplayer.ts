/**
 * Multiplayer adapter: wires the Nostr-signaled WebRTC lockstep
 * netcode from src/engine/net/ to the Scorched Billionaire game loop.
 *
 * The protocol is host-authoritative lockstep:
 * - Host fixes seed, config, and turn order.
 * - Each turn: only the active player's input is broadcast.
 * - Every client re-runs the same deterministic engine.
 * - Post-turn world hash exchange detects divergence.
 */

import type { GameState } from "../engine/game";

// ── Configuration ────────────────────────────────────────────

/** STUN/TURN servers for WebRTC. Metered TURN free tier (50 GB/month). */
export const ICE_SERVERS: RTCIceServer[] = [
  { urls: "stun:stun.l.google.com:19302" },
  { urls: "stun:stun1.l.google.com:19302" },
  {
    urls: "turn:turn.metered.ca:3478?transport=udp",
    username: "scorched-billionaire",
    credential: "scorched-billionaire-turn",
  },
  {
    urls: "turn:turn.metered.ca:3478?transport=tcp",
    username: "scorched-billionaire",
    credential: "scorched-billionaire-turn",
  },
];

// ── Types ────────────────────────────────────────────────────

export type MultiplayerMode = "local" | "host" | "guest";

export interface MultiplayerState {
  mode: MultiplayerMode;
  roomCode: string | null;
  peerCount: number;
  connected: boolean;
}

// ── Stub implementation ──────────────────────────────────────

/**
 * Full multiplayer integration depends on the Nostr relay connection
 * and WebRTC handshake from src/engine/net/. This stub provides the
 * interface that main.ts consumes, delegating to the lockstep engine
 * when the netcode is active.
 */

let mpState: MultiplayerState = {
  mode: "local",
  roomCode: null,
  peerCount: 1,
  connected: false,
};

export function getMultiplayerState(): MultiplayerState {
  return { ...mpState };
}

export function isMultiplayer(): boolean {
  return mpState.mode !== "local";
}

/** Host creates a room. Returns the invite code. */
export async function hostRoom(game: GameState): Promise<string | null> {
  // TODO: Implement via engine/net/lockstep.ts + engine/net/nostr.ts
  // For now, return a mock room code
  const code = Math.random().toString(36).slice(2, 8).toUpperCase();
  mpState = { mode: "host", roomCode: code, peerCount: 1, connected: true };
  return code;
}

/** Guest joins a room by invite code. */
export async function joinRoom(
  code: string,
  game: GameState,
): Promise<boolean> {
  // TODO: Implement via engine/net/lockstep.ts + engine/net/nostr.ts
  mpState = { mode: "guest", roomCode: code, peerCount: 2, connected: true };
  return true;
}

/** Broadcast the active player's input to peers. */
export function broadcastTurnInput(
  game: GameState,
  tankIndex: number,
  angle: number,
  power: number,
  weapon: number,
): void {
  if (!isMultiplayer()) return;
  // TODO: Send via WebRTC data channel
}

/** Check for incoming turn inputs from peers. */
export function pollRemoteInputs(game: GameState): void {
  if (!isMultiplayer()) return;
  // TODO: Read from WebRTC data channel buffer, apply to game
}

/** Leave the current multiplayer session. */
export function leaveRoom(): void {
  mpState = { mode: "local", roomCode: null, peerCount: 1, connected: false };
}
