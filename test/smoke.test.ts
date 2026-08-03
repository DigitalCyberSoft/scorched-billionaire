/**
 * Headless integration smoke test — asserts the game actually boots and plays.
 *
 * Unlike the engine differential suite (which tests the deterministic engine),
 * this test drives the real built game in headless Chrome and asserts:
 *   1. The title screen renders.
 *   2. Clicking PLAY starts the game (loading screen hides, HUD appears).
 *   3. The HUD shows a live tank's name/angle/power.
 *   4. The WebGL canvas is rendering (non-blank pixels).
 *   5. No game asset 404s (audio/models/textures resolve).
 *
 * Usage: SMOKE_URL=https://... npx vitest run test/smoke.test.ts
 * Default: local vite preview (npm run build && npx vite preview).
 */
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import puppeteer, { Browser, Page } from "puppeteer";

const TARGET_URL = process.env.SMOKE_URL ?? "http://localhost:4173";

describe("game boots and plays", () => {
  let browser: Browser;
  let page: Page;
  const failedAssets: string[] = [];
  const jsErrors: string[] = [];

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
    page = await browser.newPage();
    page.on("response", (r) => {
      if (r.status() >= 400) failedAssets.push(`${r.status()} ${r.url()}`);
    });
    page.on("pageerror", (e) => jsErrors.push(e.message));
  }, 60000);

  afterAll(async () => {
    await browser?.close();
  });

  it("loads the page and shows the title screen", async () => {
    await page.goto(TARGET_URL, { waitUntil: "networkidle2", timeout: 60000 });
    await page.waitForSelector("#title-screen", { timeout: 20000 });
    const h1 = await page.$eval("#title-screen h1", (el) => el.textContent);
    expect(h1).toContain("SCORCHED");
  }, 90000);

  it("starts the game on PLAY and shows the HUD", async () => {
    await page.click("#btn-play");
    // Loading overlay must hide
    await page.waitForFunction(
      () => document.getElementById("loading")?.classList.contains("done"),
      { timeout: 10000 },
    );
    // HUD must exist and show a tank name
    await page.waitForSelector(".sm-hud-tank-name", { timeout: 10000 });
    const tankName = await page.$eval(".sm-hud-tank-name", (el) => el.textContent);
    expect(tankName?.trim().length).toBeGreaterThan(0);
  }, 30000);

  it("renders a non-blank WebGL canvas", async () => {
    await new Promise((r) => setTimeout(r, 3000)); // let a few frames render
    const nonBlank = await page.evaluate(() => {
      const c = document.getElementById("game") as HTMLCanvasElement;
      const gl = c.getContext("webgl2") ?? c.getContext("webgl");
      if (!gl) return false;
      const px = new Uint8Array(4 * 100); // sample 100 pixels
      gl.readPixels(0, 0, 10, 10, gl.RGBA, gl.UNSIGNED_BYTE, px);
      return px.some((v) => v !== 0);
    });
    expect(nonBlank).toBe(true);
  }, 30000);

  it("loads all game assets without 404s", async () => {
    // Allow async asset loads to finish
    await new Promise((r) => setTimeout(r, 8000));
    const assetFails = failedAssets.filter((u) =>
      u.includes("audio") || u.includes("models") || u.includes("assets"),
    );
    expect(assetFails).toEqual([]);
  }, 30000);

  it("has no page JS errors", async () => {
    expect(jsErrors).toEqual([]);
  });

  it("opens the Cap Table shop between rounds and advances", async () => {
    // Drive the engine to the shop phase via the dev hook
    await page.evaluate(() => {
      const g = (window as any).__game;
      if (g) g.proceed_after_round();
    });
    // Shop overlay must mount
    await page.waitForSelector(".sm-shop", { timeout: 15000 });
    const title = await page.$eval(".sm-shop-title", (el) => el.textContent);
    expect(title).toContain("CAP TABLE");
    // Close the shop -> AI buys -> next round starts
    await page.evaluate(() => {
      const g = (window as any).__game;
      if (g) g.begin_next_round();
    });
    await new Promise((r) => setTimeout(r, 2000));
    // Shop overlay must be gone (animate loop destroys it on phase change)
    const shopGone = await page.$eval(".sm-shop", () => true).catch(() => false);
    expect(shopGone).toBe(false);
  }, 30000);

  it("toggles the Dealroom chat (backquote opens, Esc closes)", async () => {
    await page.keyboard.press("Backquote");
    await page.waitForSelector(".sm-chat-root:not([hidden])", { timeout: 5000 });
    // Esc closes (the chat input holds focus, so backquote types into it)
    await page.keyboard.press("Escape");
    await new Promise((r) => setTimeout(r, 300));
    const hidden = await page.$eval(".sm-chat-root", (el) => el.hasAttribute("hidden"));
    expect(hidden).toBe(true);
  }, 15000);
});
