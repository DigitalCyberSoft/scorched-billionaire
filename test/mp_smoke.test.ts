/**
 * Two-browser multiplayer integration test over a LOCAL Nostr relay
 * (scripts/local_relay.mjs) — deterministic and offline, but exercises the
 * exact production path: relay signaling -> WebRTC mesh -> host-authoritative
 * lockstep. The host starts the match, both clients auto-fire their human
 * turns, and the world hashes converge.
 *
 * Each browser runs in its OWN puppeteer instance (same-machine WebRTC still
 * connects via the local relay + STUN; this also matches the reference's own
 * "2 browsers" verification setup).
 *
 * Usage: SMOKE_URL=http://localhost:4173 npx vitest run test/mp_smoke.test.ts
 */
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import puppeteer, { Browser, Page } from "puppeteer";
import { spawn, ChildProcess } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = process.env.SMOKE_URL ?? "http://localhost:4173";
const RELAY_PORT = 4749;
const TARGET_URL = `${BASE_URL}/?relays=ws://127.0.0.1:${RELAY_PORT}`;

let relay: ChildProcess | null = null;

/** Press Space whenever the local human's turn is live. */
async function autoFire(page: Page, stop: () => boolean): Promise<void> {
  while (!stop()) {
    try {
      const isMyTurn = await page.evaluate(() => {
        const el = document.querySelector(".sm-hud-turnlabel");
        return el ? /your turn/i.test(el.textContent ?? "") : false;
      });
      if (isMyTurn) {
        await page.keyboard.press("Space");
        await new Promise((r) => setTimeout(r, 700));
      }
    } catch {
      // page navigating or closed
    }
    await new Promise((r) => setTimeout(r, 400));
  }
}

describe("two-browser multiplayer over relays", () => {
  let browserA: Browser;
  let browserB: Browser;

  beforeAll(async () => {
    relay = spawn("node", [join(__dirname, "..", "scripts", "local_relay.mjs"), String(RELAY_PORT)], {
      stdio: "ignore",
    });
    await new Promise((r) => setTimeout(r, 800)); // let the relay bind
    browserA = await puppeteer.launch({ headless: true, args: ["--no-sandbox"], protocolTimeout: 90000 });
    browserB = await puppeteer.launch({ headless: true, args: ["--no-sandbox"], protocolTimeout: 90000 });
  }, 60000);

  afterAll(async () => {
    await browserA?.close();
    await browserB?.close();
    relay?.kill();
  }, 15000);

  it("host and guest form a room and play converged turns", async () => {
    const host = await browserA.newPage();
    const guest = await browserB.newPage();

    // ── Host opens a private room ──
    await host.goto(TARGET_URL, { waitUntil: "networkidle2", timeout: 60000 });
    await host.click("#btn-online");
    await host.waitForSelector("#lobby", { timeout: 10000 });
    await host.type("#lobby-name", "Host");
    await host.click("#btn-host");
    await host.waitForFunction(
      () => (document.querySelector("#lobby-invite")?.textContent ?? "").includes("Invite code"),
      { timeout: 30000 },
    );
    const inviteText = await host.$eval("#lobby-invite", (el) => el.textContent ?? "");
    const code = inviteText.match(/Invite code:\s*([^\s]+)/)?.[1];
    expect(code).toBeTruthy();

    // ── Guest joins by code ──
    await guest.goto(TARGET_URL, { waitUntil: "networkidle2", timeout: 60000 });
    await guest.click("#btn-online");
    await guest.waitForSelector("#lobby", { timeout: 10000 });
    await guest.type("#lobby-name", "Guest");
    await guest.type("#lobby-code", code!);
    await guest.click("#btn-join");
    await guest.waitForFunction(
      () => (document.querySelector("#lobby-status")?.textContent ?? "").includes("Joined"),
      { timeout: 30000 },
    );

    // ── Roster converges to 2 connected humans ──
    await host.waitForFunction(
      () => {
        const t = document.querySelector("#lobby-roster")?.textContent ?? "";
        return t.includes("Host") && t.includes("Guest") && (t.match(/CONNECTED/g) ?? []).length >= 2;
      },
      { timeout: 60000 },
    );

    // ── Host starts ──
    await host.click("#btn-start");
    await host.waitForSelector(".sm-hud-tank-name", { timeout: 30000 });
    await guest.waitForSelector(".sm-hud-tank-name", { timeout: 60000 });

    // ── Auto-fire both humans for up to ~6 turns ──
    let done = false;
    const stop = () => done;
    const h = autoFire(host, stop);
    const g = autoFire(guest, stop);
    await new Promise((r) => setTimeout(r, 50000));
    done = true;
    await Promise.all([h, g]);

    // ── World hashes must converge ──
    const hash = (page: Page) =>
      page.evaluate(() => {
        const s = (window as any).__mpSession;
        return s?.adapter?.worldHash ? s.adapter.worldHash() : null;
      });
    const hostHash = await hash(host);
    const guestHash = await hash(guest);
    expect(hostHash).toBeTruthy();
    expect(guestHash).toBe(hostHash);
  }, 240000);

  it("host and guest pass the online shop barrier and stay converged", async () => {
    const host = await browserA.newPage();
    const guest = await browserB.newPage();

    // ── Reuse the room flow: host opens, guest joins, host starts ──
    await host.goto(TARGET_URL, { waitUntil: "networkidle2", timeout: 60000 });
    await host.click("#btn-online");
    await host.waitForSelector("#lobby", { timeout: 10000 });
    await host.type("#lobby-name", "Host2");
    await host.click("#btn-host");
    await host.waitForFunction(
      () => (document.querySelector("#lobby-invite")?.textContent ?? "").includes("Invite code"),
      { timeout: 30000 },
    );
    const code = (await host.$eval("#lobby-invite", (el) => el.textContent ?? "")).match(/Invite code:\s*([^\s]+)/)?.[1];
    expect(code).toBeTruthy();
    await guest.goto(TARGET_URL, { waitUntil: "networkidle2", timeout: 60000 });
    await guest.click("#btn-online");
    await guest.waitForSelector("#lobby", { timeout: 10000 });
    await guest.type("#lobby-name", "Guest2");
    await guest.type("#lobby-code", code!);
    await guest.click("#btn-join");
    await guest.waitForFunction(
      () => (document.querySelector("#lobby-status")?.textContent ?? "").includes("Joined"),
      { timeout: 30000 },
    );
    await host.waitForFunction(
      () => {
        const t = document.querySelector("#lobby-roster")?.textContent ?? "";
        return t.includes("Host2") && t.includes("Guest2") && (t.match(/CONNECTED/g) ?? []).length >= 2;
      },
      { timeout: 60000 },
    );
    await host.click("#btn-start");
    await host.waitForSelector(".sm-hud-tank-name", { timeout: 30000 });
    await guest.waitForSelector(".sm-hud-tank-name", { timeout: 60000 });

    // ── Auto-fire until BOTH clients reach the shop (round ends naturally) ──
    const shopOpen = (page: Page) =>
      page.evaluate(() => !!document.querySelector(".sm-shop:not([hidden])"));
    const hash = (page: Page) =>
      page.evaluate(() => {
        const s = (window as any).__mpSession;
        return s?.adapter?.worldHash ? s.adapter.worldHash() : null;
      });

    let done = false;
    const stop = () => done;
    const fire = async (page: Page) => {
      while (!done) {
        try {
          const isMyTurn = await page.evaluate(() =>
            /your turn/i.test(document.querySelector(".sm-hud-turnlabel")?.textContent ?? ""),
          );
          if (isMyTurn) {
            await page.keyboard.press("Space");
            await new Promise((r) => setTimeout(r, 700));
          }
        } catch {
          // page closed
        }
        await new Promise((r) => setTimeout(r, 400));
      }
    };
    const fh = fire(host);
    const fg = fire(guest);
    const deadline = Date.now() + 150000;
    let bothInShop = false;
    while (Date.now() < deadline && !bothInShop) {
      const [h, g] = await Promise.all([shopOpen(host), shopOpen(guest)]);
      bothInShop = h && g;
      if (!bothInShop) await new Promise((r) => setTimeout(r, 2000));
    }
    done = true;
    await Promise.all([fh, fg]);
    expect(bothInShop).toBe(true);

    // ── Both humans close their shops -> carts submit -> host finalizes ──
    await host.keyboard.press("Escape");
    await guest.keyboard.press("Escape");

    // ── Wait for the next round on both (shop gone, HUD live again) ──
    const nextRound = async (page: Page) => {
      const deadline2 = Date.now() + 30000;
      while (Date.now() < deadline2) {
        const state = await page.evaluate(() => ({
          shop: !!document.querySelector(".sm-shop:not([hidden])"),
          phase: (window as any).__mpSession?.adapter?.state?.()?.phase ?? null,
        }));
        if (!state.shop && state.phase && state.phase !== "shop") return true;
        await new Promise((r) => setTimeout(r, 1000));
      }
      return false;
    };
    const [h2, g2] = await Promise.all([nextRound(host), nextRound(guest)]);
    expect(h2).toBe(true);
    expect(g2).toBe(true);

    // ── World hashes must still converge after the shop round ──
    const hostHash = await hash(host);
    const guestHash = await hash(guest);
    expect(hostHash).toBeTruthy();
    expect(guestHash).toBe(hostHash);
  }, 300000);
});
