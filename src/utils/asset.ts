/**
 * Prepend the Astro base URL to a local public asset path.
 * Works correctly whether base is '/' or '/portfolio' (or any sub-path).
 *
 * Usage:  asset('/fm.png')  →  '/portfolio/fm.png'  (or '/fm.png' when base='/')
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // strip trailing slash
  return `${base}${path}`;
}
