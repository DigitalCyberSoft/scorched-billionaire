#!/usr/bin/env node
/**
 * Minimal local Nostr relay for offline multiplayer tests.
 * Implements just enough NIP-01 for the app's signaling:
 *   EVENT (store + fan out to matching subscriptions)
 *   REQ   (replay stored matches, then EOSE)
 *   CLOSE (drop the subscription)
 * Usage: node scripts/local_relay.mjs [port]   (default 4747)
 * The test pages then load with ?relays=ws://127.0.0.1:4747
 */
import { WebSocketServer } from "ws";

const PORT = Number(process.argv[2] ?? 4747);
const wss = new WebSocketServer({ port: PORT, host: "127.0.0.1" });

/** id -> event */
const events = new Map();
/** ws -> [{ subId, filters: Filter[] }] */
const subs = new Map();

function matchesFilter(ev, filter) {
  if (filter.kinds && !filter.kinds.includes(ev.kind)) return false;
  if (filter.authors && !filter.authors.includes(ev.pubkey)) return false;
  if (filter.since && ev.created_at < filter.since) return false;
  if (filter.ids && !filter.ids.includes(ev.id)) return false;
  return true;
}

function send(ws, msg) {
  if (ws.readyState === ws.OPEN) ws.send(JSON.stringify(msg));
}

wss.on("connection", (ws) => {
  subs.set(ws, []);
  ws.on("message", (raw) => {
    let msg;
    try { msg = JSON.parse(raw.toString()); } catch { return; }
    if (!Array.isArray(msg)) return;
    const [type, ...rest] = msg;
    if (type === "EVENT") {
      const ev = rest[0];
      if (!ev || !ev.id || !ev.pubkey) return;
      if (events.has(ev.id)) return; // dup
      events.set(ev.id, ev);
      // fan out to matching subs (including the sender's own)
      for (const [client, list] of subs) {
        for (const s of list) {
          if (s.filters.some((f) => matchesFilter(ev, f))) {
            send(client, ["EVENT", s.subId, ev]);
          }
        }
      }
      send(ws, ["OK", ev.id, true, ""]);
    } else if (type === "REQ") {
      const [subId, ...filters] = rest;
      if (!subId) return;
      subs.get(ws).push({ subId, filters });
      for (const ev of events.values()) {
        if (filters.some((f) => matchesFilter(ev, f))) {
          send(ws, ["EVENT", subId, ev]);
        }
      }
      send(ws, ["EOSE", subId]);
    } else if (type === "CLOSE") {
      const subId = rest[0];
      subs.set(ws, subs.get(ws).filter((s) => s.subId !== subId));
    }
  });
  ws.on("close", () => subs.delete(ws));
});

console.log(`local relay on ws://127.0.0.1:${PORT}`);
