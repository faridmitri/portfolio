// @ts-check
import { defineConfig } from 'astro/config';

// ─────────────────────────────────────────────────────────────────────────────
// DEPLOYMENT CONFIG
//
// The base path is set automatically based on the CF_PAGES environment variable
// that Cloudflare Pages injects at build time:
//
//   Cloudflare Pages  →  base: '/'   (served from root)
//   GitHub Pages      →  base: '/portfolio'  (served from sub-path)
//
// If you rename the GitHub repo, update GITHUB_BASE below.
// If you add a custom domain to either host, set base: '/' for that host.
// ─────────────────────────────────────────────────────────────────────────────

const isCloudflare = !!process.env.CF_PAGES;
const GITHUB_BASE = '/portfolio';

export default defineConfig({
  site: isCloudflare
    ? 'https://portfolio-c4r.pages.dev/'   // ← replace with your Cloudflare Pages URL
    : 'https://faridmitri.github.io',
  base: isCloudflare ? '/' : GITHUB_BASE,
});
