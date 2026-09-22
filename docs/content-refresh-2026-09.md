# September 2026 content refresh

Reviewed on 2026-09-22 against public GitHub repository metadata for `dills122` and
`Shrimpworks`, current default-branch READMEs, and local project documentation.
The catalog is curated rather than an inventory of every repository or upstream fork.
New listings use public repositories; private and local-only projects are omitted.
Recent commits alone are not treated as proof of a release or a working hosted service.

## Additions and status corrections

| Project | Evidence | Editorial decision |
| --- | --- | --- |
| Sandtable | [README](https://github.com/dills122/sandtable#readme) | Feature the pre-alpha campaign simulation engine. Playable campaigns and the player UI remain future work. |
| Independent Reviewer | [README](https://github.com/dills122/independent-reviewer#readme) | Feature the source-built review CLI; identify it as pre-release. |
| Formly Contract | [README and product-status links](https://github.com/dills122/formly-contract#readme); owner's clarification on 2026-09-22 | Describe early form-metadata experimentation. Mark its future uncertain, with no commitment to continued development or a public release. |
| Package Spelunker | [README](https://github.com/dills122/package-spelunker#readme); owner's clarification on 2026-09-22 | Describe the initial package-analysis work. Mark its future uncertain; broader repository analysis and agent tooling are exploratory, not a committed roadmap. |
| Session Chat | [README](https://github.com/dills122/session-chat#readme) | Remove from Small App Archive and add a dedicated research-alpha entry under engineering. It is a headless protocol laboratory, not a deployable messenger. |
| TMDb SDK | [README](https://github.com/dills122/tmdb#readme) | Add the published typed Node.js library. |
| Dylan Steele — Technical Writing | [README](https://github.com/dills122/dev-landing#readme), local `public/CNAME` and `src/content/blog/` | Add the current writing site under publishing; move the older Blog entry to the archive. |
| Where My Cage At | [README](https://github.com/dills122/where-my-cage-at#readme), repository description | Change Dormant to Rebuilding. Remove the public website CTA while the repository describes hosting reconstruction and the metadata says the site is down. |

## Revised descriptions

| Project | Evidence | Changes |
| --- | --- | --- |
| Reef | [README](https://github.com/dills122/reef#readme) | Emphasize deterministic market simulation; state Bot Arena's invite-only access. Remove the unsupported institutional-grade quality claim. |
| Capsule | [README](https://github.com/Shrimpworks/capsule-corp#readme) | Reflect approval broker, supervisor, and runtime work. Preserve the early-scaffold limitation and link to current status language. |
| Trove | [README](https://github.com/dills122/trove#readme), local checkout | Replace generic knowledge management with bookmark import, duplicate cleanup, optional link checks, and export. |
| Kyn | [README](https://github.com/dills122/kyn#readme) | Correct the purpose to related-file policy checks. Released status is supported by documented v0.1.3 distribution channels. |
| Waves | [WAP Labs README](https://github.com/dills122/wap-labs#readme) | Keep the existing product name, explain its place in WAP Labs, add the simulator, and state desktop release limitations. Group the browser under products instead of markets. |
| AI Central | [README](https://github.com/dills122/ai-central#readme), local checkout | Describe curated bundles, project guidance, and non-overwriting setup. |
| Image Fingerprint | [README](https://github.com/dills122/image-fingerprint#readme), local `image-hash` checkout | Add experimental crop matching and the browser playground. |
| NeDB Fork | [README](https://github.com/dills122/nedb#readme), local checkout | Describe the modern Node.js line and compatibility commitments without implying API or storage-format changes. |
| Forage | [README](https://github.com/dills122/forage#readme), local checkout | Explain local analysis, categorization, exports, and browser storage. |
| WeasyPrint Tools | [README](https://github.com/dills122/weasyprint-wrapper#readme), local checkout | Reflect maintained wrapper features, both module formats, and real-version compatibility checks. |

Organization descriptions and homepage/catalog introductions now reflect these
projects. Existing project names, route structure, and leadership copy are retained.
Catalog links have a 16px right inset so arrows and underlines remain inside the
row hover highlight. Catalog and organization totals continue to derive from the shared data.

## Future refreshes

Edit `src/data/site.ts` for project descriptions, links, release labels, featured
selection, and division membership. The homepage, catalog, and organization pages
all consume this data. `phase: "current"` includes maintained tools and research;
it does not mean a product is generally available. Keep that distinction in each
entry's `status` and summary, and verify current README/release evidence before
promoting a project to Released.

Run `npm run check` and `npm run build`, then inspect the homepage, catalog, and
changed organization pages. No runtime logic or dependency changes are part of
this refresh.

## Verification for this refresh

- `npm run check`: zero errors and warnings; one existing analytics-script hint in `BaseLayout.astro`.
- `npm run build`: all eight HTML pages and the sitemap generated successfully.
- `git diff --check`: passed.
- Generated HTML inspection: unique IDs and valid internal links/fragment targets across all eight pages; 37 catalog entries.
- Browser inspection: seven featured projects on the homepage, catalog totals of 24 current / 13 archived, and the engineering division's updated entries. No horizontal overflow at the preview's 614px viewport.
- Newly added hosted-site and documentation links returned HTTP 200: Formly Contract docs, WAP simulator, Image Fingerprint playground, dsteele.dev, and Capsule status documentation.
- Independent content review found no actionable issues against the collected repository evidence.

These checks verify site content and rendering, not the implementation or deployment readiness of the listed projects.

## PR screenshots

Desktop captures at 1440 × 1000 show the catalog hover spacing and the early-experiment
labels. The hovered Capsule row was checked for a 16px gap between the row edge and
its links. Images are retained for embedding in the PR description:

- [Catalog hover spacing](screenshots/content-refresh/catalog-hover-spacing.png)
- [Early experiments](screenshots/content-refresh/early-experiments.png)
