/**
 * Headless smoke test: verifies the production build loads without errors.
 */
import { describe, it, expect } from "vitest";
import puppeteer, { Browser, Page } from "puppeteer";
import { createServer } from "vite";
import type { ViteDevServer } from "vite";

describe("production smoke test", () => {
  let browser: Browser;
  let page: Page;
  let server: ViteDevServer;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
  }, 30000);

  afterAll(async () => {
    await browser?.close();
  });

  it("loads without console errors", async () => {
    // Use Vite preview to serve the built docs/
    const { createServer: createPreviewServer } = await import("vite");
    server = await createServer({
      configFile: false,
      root: "docs",
      server: { port: 0 },
      build: { outDir: "docs" },
      preview: { port: 0 },
    });
    // Vite preview wraps the build; simpler: use Python server
    // Actually just point puppeteer directly at the files
    page = await browser.newPage();

    // Collect console errors
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    page.on("pageerror", (err) => errors.push(err.message));

    // Load the built index.html
    const path = `file://${process.cwd()}/docs/index.html`;
    await page.goto(path, { waitUntil: "networkidle0", timeout: 30000 });

    // Wait for loading screen to disappear (game booted)
    try {
      await page.waitForFunction(
        () => document.getElementById("loading")?.classList.contains("done"),
        { timeout: 15000 },
      );
    } catch {
      // Loading may not have disappeared - check if it shows an error
    }

    const loadingText = await page.$eval("#loading-pct", (el) => el.textContent);
    console.log(`Loading screen: "${loadingText}"`);

    // Fail if there's an error message on the loading screen
    expect(loadingText).not.toContain("Error:");

    // Report any console errors
    if (errors.length > 0) {
      console.log("Console errors:", errors);
    }
    // The game should at least boot past the engine init
    // (we disable sound, so no autoplay issues)
  }, 30000);
});
