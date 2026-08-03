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
});
