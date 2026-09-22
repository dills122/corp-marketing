# Lady International / Shwimp Studios

A small Astro landing page for the Lady International and Shwimp Studios project ecosystem.

## Development

Install dependencies:

```bash
npm ci
```

Start the local dev server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Run Astro checks:

```bash
npm run check
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/data/site.ts         Shared project catalog, organizations, and leadership
src/pages/index.astro    Homepage markup and scoped styles
src/pages/projects/      Full current and archived project catalog
src/pages/org/           Organization directory and division pages
public/studio-hero.png   Hero image used on the homepage
public/favicon.svg       Site favicon
public/CNAME             GitHub Pages custom domain
docs/deployment.md       GitHub Pages deployment notes
```

## Updating content

Edit `src/data/site.ts` to update projects across the homepage, catalog, and
organization pages. Keep release status separate from development activity and
check public repository evidence before adding projects or making availability
claims. The [September 2026 refresh notes](docs/content-refresh-2026-09.md) record
the sources and editorial decisions behind the current update.

## Deployment

The site deploys to GitHub Pages from `main` using `.github/workflows/deploy.yml`.

The intended custom domain is:

```text
shwimp.studio
```

If the final domain changes, update both:

- `astro.config.mjs`
- `public/CNAME`

See [docs/deployment.md](docs/deployment.md) for DNS and GitHub Pages setup notes.
