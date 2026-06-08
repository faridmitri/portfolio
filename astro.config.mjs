// @ts-check
import { defineConfig } from 'astro/config';

// ─────────────────────────────────────────────────────────────────────────────
// DEPLOYMENT CONFIG
//
// For GitHub Pages you have two cases:
//
// 1. Project site  ->  https://<user>.github.io/<repo>/
//    Set:  site: 'https://<user>.github.io',  base: '/<repo>'
//    e.g.  site: 'https://farid-mitri.github.io', base: '/portfolio'
//
// 2. User site (repo named <user>.github.io)  ->  https://<user>.github.io/
//    Set:  site: 'https://<user>.github.io',  base: '/'
//
// Using a custom domain (e.g. faridmitri.com)?  ->  site: 'https://faridmitri.com', base: '/'
//
// Update the two values below to match your repo, then push.
// ─────────────────────────────────────────────────────────────────────────────

export default defineConfig({
  site: 'https://farid-mitri.github.io',
  base: '/',
});
