import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 4748, host: "127.0.0.1" });
const events = new Map();
const subs = new Map();
function matches(ev, f) {
  if (f.kinds && !f.kinds.includes(ev.kind)) return false;
  if (f.authors && !f.authors.includes(ev.pubkey)) return false;
  if (f.since && ev.created_at < f.since) return false;
  return true;
}
function send(ws, msg) { if (ws.readyState === ws.OPEN) ws.send(JSON.stringify(msg)); }
wss.on("connection", ws => {
  console.log("[relay] CONNECTION");
  subs.set(ws, []);
  ws.on("message", raw => {
    let m; try { m = JSON.parse(raw.toString()); } catch { return; }
    if (!Array.isArray(m)) return;
    if (m[0] === "EVENT") {
      const ev = m[1];
      if (!ev || !ev.id) return;
      events.set(ev.id, ev);
      console.log("[relay] EVENT kind=" + ev.kind + " author=" + String(ev.pubkey).slice(0,12));
      for (const [client, list] of subs) {
        for (const s of list) {
          if (s.filters.some(f => matches(ev, f))) send(client, ["EVENT", s.subId, ev]);
        }
      }
      send(ws, ["OK", ev.id, true, ""]);
    } else if (m[0] === "REQ") {
      const [subId, ...filters] = m.slice(1);
      subs.get(ws).push({ subId, filters });
      console.log("[relay] REQ subId=" + String(subId).slice(0,10) +
        " authors=" + JSON.stringify((filters[0]?.authors || []).map(a => String(a).slice(0,12))) +
        " kinds=" + JSON.stringify(filters[0]?.kinds || []));
      for (const ev of events.values()) if (filters.some(f => matches(ev, f))) send(ws, ["EVENT", subId, ev]);
      send(ws, ["EOSE", subId]);
    } else if (m[0] === "CLOSE") {
      subs.set(ws, subs.get(ws).filter(s => s.subId !== m[1]));
    }
  });
  ws.on("close", () => subs.delete(ws));
});
console.log("[relay] listening 4748");
