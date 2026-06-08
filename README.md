# Farid Mitri — Portfolio

A fast, modern, dark-themed personal portfolio built with [Astro](https://astro.build).
All content lives in typed data files, so adding a job, project, certification, or
award is a one-entry edit — no HTML required.

**Live (after deploy):** `https://<your-username>.github.io/<repo>/`

---

## Tech stack

| Layer | Technology |
| ----- | ---------- |
| Framework | [Astro 5](https://astro.build) — compiles to static HTML/CSS/JS, zero JS runtime by default |
| Language | TypeScript (all content types are typed) |
| Styles | Plain CSS, scoped inside each `.astro` component + global design tokens in `src/styles/global.css` |
| Fonts | Inter · Space Grotesk · JetBrains Mono (Google Fonts) |
| Icons | Inline SVG (no icon library dependency) |
| Deploy | GitHub Actions → GitHub Pages |

No React, no Vue, no bundled framework. The output is a single static `index.html` you can open in any browser.

---

## Running locally

**Prerequisites:** [Node.js](https://nodejs.org) 18.20 or later (`node --version` to check).

```bash
# 1. Install dependencies (once, after cloning)
npm install

# 2. Start the development server
npm run dev
```

Open **http://localhost:4321** in your browser. The page hot-reloads automatically whenever you save a file — no manual refresh needed.

```bash
# Optional: check the production build locally before deploying
npm run build       # compiles the site into dist/
npm run preview     # serves dist/ at http://localhost:4321
```

> The dev server (`npm run dev`) and the preview server (`npm run preview`) both use port 4321 by default. Stop one before starting the other, or pass `--port 4322` to run on a different port.

---

## ✏️ How to add / edit content

**Everything is in `src/data/`.** Open the relevant file, copy an existing entry,
and edit it. TypeScript will flag anything missing. No need to touch the components.

| Want to change…                | Edit this file                  |
| ------------------------------ | ------------------------------- |
| Name, title, tagline, summary, contact, hero stats | `src/data/profile.ts` |
| Work history (timeline)        | `src/data/experience.ts`        |
| Projects / featured work       | `src/data/projects.ts`          |
| Skills (grouped chips)         | `src/data/skills.ts`            |
| Certifications                 | `src/data/certifications.ts`    |
| Awards                         | `src/data/awards.ts`            |
| Workshops & training           | `src/data/workshops.ts`         |
| Education & languages          | `src/data/education.ts`         |

The shapes of every entry are defined in `src/data/types.ts` (with comments).

### Example — add a new project

Open `src/data/projects.ts` and add an object to the array:

```ts
{
  title: 'My New Project',
  tagline: 'One-line hook',
  description: 'What it does and the impact it had.',
  tech: ['Python', 'BigQuery', 'Vertex AI'],
  metric: 'Cut processing time 30%',   // optional green badge
  link: { label: 'View', href: 'https://...' }, // optional
  featured: true,                       // optional: gradient highlight
},
```

Save — the dev server hot-reloads instantly.

### Add a downloadable CV button

1. Drop your PDF into the `public/` folder, e.g. `public/Farid-Mitri-CV.pdf`.
2. In `src/data/profile.ts`, set `resumeUrl: '/Farid-Mitri-CV.pdf'`.

A "Download CV" button appears automatically in the hero.

### Add a new social link (e.g. GitHub)

In `src/data/profile.ts`, add to `socials`:

```ts
{ label: 'GitHub', href: 'https://github.com/you', icon: 'github' },
```

Available icon ids live in `src/components/Icon.astro` (linkedin, mail, github, …).
Add your own by dropping an SVG path into the `paths` map there.

---

## 🎨 Customizing the look

All colors, fonts, spacing, and radii are CSS variables at the top of
`src/styles/global.css` (the `:root` block). Change the accent gradient,
background, or fonts in one place and it re-skins the whole site.

```css
--accent:   #4f8cff;   /* primary blue   */
--accent-2: #8b5cff;   /* violet         */
--accent-3: #22d3ee;   /* cyan           */
```

Per-section styles are scoped inside each component in `src/components/`.

---

## 📁 Project structure

```
public/                 static assets served as-is (favicon, og-image, CV PDF)
src/
  data/                 ← all site content (edit here)
  components/
    Icon.astro          inline SVG icon set
    Nav.astro           sticky nav + mobile menu + scroll-spy
    Footer.astro
    sections/           one component per page section
  layouts/Layout.astro  <head>, SEO, fonts, scroll-reveal
  pages/index.astro     assembles the sections in order
  styles/global.css     design tokens + base styles
astro.config.mjs        site URL / base path (set before deploying)
.github/workflows/      GitHub Pages deploy automation
```

To reorder sections or remove one, edit `src/pages/index.astro`.

---

## 🚀 Deploy to GitHub Pages

1. **Create a GitHub repo** and push this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```

2. **Set the site URL** in `astro.config.mjs`:

   - Project site → `https://<you>.github.io/<repo>/`
     ```js
     site: 'https://<you>.github.io',
     base: '/<repo>',
     ```
   - User site (repo named `<you>.github.io`) → `base: '/'`
   - Custom domain → `site: 'https://yourdomain.com', base: '/'`

3. **Enable Pages:** GitHub repo → **Settings → Pages → Build and deployment →
   Source: GitHub Actions**.

4. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and
   deploys automatically. Watch progress under the **Actions** tab.

> Prefer Netlify/Vercel? Just connect the repo — build command `npm run build`,
> output directory `dist`. Set `base: '/'` in `astro.config.mjs` for those.

---

## License

Personal portfolio content © Farid Mitri. Code structure is yours to reuse.
