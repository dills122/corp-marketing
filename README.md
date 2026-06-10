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
src/pages/index.astro    Homepage markup, data, and scoped styles
public/studio-hero.png   Hero image used on the homepage
public/favicon.svg       Site favicon
public/CNAME             GitHub Pages custom domain
docs/deployment.md       GitHub Pages deployment notes
```

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
