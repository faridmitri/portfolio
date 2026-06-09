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

// GitHub Actions always sets GITHUB_ACTIONS=true.
// Cloudflare Pages and local dev don't — they use base '/'.
const isGitHubPages = !!process.env.GITHUB_ACTIONS;
const GITHUB_BASE = '/portfolio';

export default defineConfig({
  site: isGitHubPages
    ? 'https://faridmitri.github.io'
    : 'https://portfolio-c4r.pages.dev/',
  base: isGitHubPages ? GITHUB_BASE : '/',
});
