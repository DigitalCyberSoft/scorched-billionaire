/**
 * Multiplayer wiring: host/join a match over Nostr-signaled WebRTC and run
 * host-authoritative lockstep over the deterministic engine.
 *
 * The protocol modules (src/engine/net/*) are the battle-tested port from
 * scorchedearth-multi (their lockstep determinism suites pass in this repo).
 * This module is the thin wiring: Match lifecycle, LockstepSession + EngineAdapter,
 * turn input routing, and chat — consuming the same GameState the 3D renderer draws.
 */

import { Match, type MatchInfo, type RoomPlayer, type Role } from "../engine/net/match";
import { LockstepSession, type MatchStart, type TurnInput } from "../engine/net/lockstep";
import { createEngineAdapter, type GameEngineAdapter } from "../engine/net/engine_adapter";
import { DEVICE_ID } from "../engine/net/identity";
import { Config } from "../engine/config";
import type { GameState } from "../engine/game";
import type { Tank } from "../engine/objects";

export interface OnlineSession {
  match: Match;
  session: LockstepSession;
  adapter: GameEngineAdapter;
  role: Role;
}

let current: OnlineSession | null = null;
let pendingStart: MatchStart | null = null;

export function activeSession(): OnlineSession | null {
  return current;
}

export function isOnline(): boolean {
  return current !== null;
}

/** The GameState the render loop should draw (adapter-owned in MP, else null). */
export function onlineGameState(): GameState | null {
  return current?.adapter.state() ?? null;
}

// ── Host ─────────────────────────────────────────────────────

export async function hostMatch(
  roomName: string,
  playerName: string,
  maxPlayers: number,
): Promise<OnlineSession> {
  const match = await Match.createPrivate(roomName, maxPlayers, playerName, 0);
  const adapter = createEngineAdapter();
  const session = new LockstepSession(match, adapter, "host");
  current = { match, session, adapter, role: "host" };
  return current;
}

// ── Join ─────────────────────────────────────────────────────

export async function joinMatch(
  inviteCode: string,
  playerName: string,
): Promise<OnlineSession> {
  const info = Match.parseInvite(inviteCode);
  if (!info) throw new Error("Invalid invite code");
  const match = await Match.join(info, playerName, 0);
  const adapter = createEngineAdapter();
  const session = new LockstepSession(match, adapter, "guest");
  current = { match, session, adapter, role: "guest" };
  return current;
}

// ── Match start (host) ───────────────────────────────────────

export function buildAndStartMatch(
  session: OnlineSession,
  roster: RoomPlayer[],
  width: number,
  height: number,
  cfg: Config,
): void {
  // Humans: every roster member. Computers: fill to 4 with Unknown class
  // (the engine reveals a random personality at first turn).
  const order: MatchStart["order"] = roster.map((p, i) => ({
    deviceId: p.deviceId,
    name: p.name,
    aiClass: 0, // human
    tankIcon: p.tankIcon ?? (i % 7),
  }));
  while (order.length < 4) {
    order.push({
      deviceId: `cpu-${order.length}`,
      name: `VentureBot ${order.length}`,
      aiClass: 8, // AI_UNKNOWN
      tankIcon: order.length % 7,
    });
  }
  const seed = crypto.getRandomValues(new Uint32Array(1))[0];
  const start: MatchStart = {
    seed,
    w: width,
    h: height,
    cfg: {
      ...(cfg as unknown as Record<string, unknown>),
      TEAM_MODE: "NONE",
      PLAY_MODE: "SEQUENTIAL",
      TALKING_TANKS: "ALL",
    },
    order,
  };
  pendingStart = start;
  session.session.startMatch(start);
}

// ── Turn input routing ───────────────────────────────────────

/** The local human tank index in the online game, or -1. */
export function localHumanIndex(gs: GameState): number {
  const devs = current?.adapter.deviceIds() ?? [];
  const i = devs.indexOf(DEVICE_ID);
  return i;
}

export function commitOnlineTurn(input: TurnInput): void {
  current?.session.commitTurn(input);
}

export function pumpOnline(): void {
  if (!current) return;
  const gs = current.adapter.state();
  if (gs && gs.phase === "aim" && !gs.awaiting_human) {
    // not a human turn locally (AI or remote); let the session resolve it
  }
  current.session.tryPump();
}

// ── Chat ─────────────────────────────────────────────────────

export function sendOnlineChat(text: string): void {
  current?.session.sendChat(text);
}

export function onOnlineChat(cb: (deviceId: string, text: string) => void): void {
  if (current) current.session.onChat = cb;
}

// ── Desync / teardown ────────────────────────────────────────

export function detachOnline(): void {
  current?.session.detach();
}

export function leaveOnline(): void {
  current?.match?.leave();
  current = null;
  pendingStart = null;
}

export function pendingStartData(): MatchStart | null {
  return pendingStart;
}
