# October 2026 open-source page and catalog refresh

Verified on 2026-10-25. The new `/open-source/` page presents selected public
upstream contributions by Dylan Steele (`dills122`), including work predating
Shwimp Studios. It does not claim partnership, sponsorship, or ownership of the
upstream projects.

## Contribution selection

The GitHub connector returned empty search results, so public GitHub REST search
and individual pull-request endpoints were used to verify author, title, upstream
repository, and `merged_at`. Search: `is:pr is:merged author:dills122 is:public
-user:dills122 -org:Shrimpworks`. All 30 matching PRs were inspected; 27 are included
under five projects and six repositories. Data and source links are stored in
`src/data/open-source.ts`. Displayed totals derive from that curated list.

| Project | Repository | Included merged PRs |
| --- | --- | --- |
| AWS LLRT | `awslabs/llrt` | 1713, 1714, 1715, 1716, 1717, 1718, 1723, 1728, 1729, 1837, 1838, 1839, 1840 |
| rusty_v8 | `denoland/rusty_v8` | 2058 |
| image-hash | `danm/image-hash` | 16, 25, 27 |
| Taho | `tahowallet/extension`; `tahowallet/hd-keyring` | extension: 1018, 2622, 2627; hd-keyring: 7 |
| React Spark | `qloan/react-spark` | 37, 71, 78, 84, 86, 89 |

At the owner's request, exclude Handshake's minor logging change, Kyn's WinGet
submission (distribution of a studio-owned project), and the Shwimp Liar's Dice
player (a game submission). Kyn's package link belongs in its catalog entry.
No new Liar's Dice catalog entry is part of this refresh.

The page groups summaries by project with native HTML disclosure controls for
complete PR histories. Dates are formatted in UTC to preserve the recorded merge
day. Navigation, footer, sitemap, and a three-project homepage preview lead to it.
There are no client-side GitHub calls, credentials, or new dependencies.

## Catalog changes

| Entry | Evidence | Editorial decision |
| --- | --- | --- |
| Angular Usage Lookup | [README](https://github.com/dills122/angular-usage-lookup#readme), [v0.1.0](https://github.com/dills122/angular-usage-lookup/releases/tag/v0.1.0) | Add under Shrimpworks as a pilot release. Explain Angular/Nx usage evidence and coverage limits; no application edits. |
| ask-formly | [README](https://github.com/dills122/ask-formly#readme) | Add under Shrimpworks as a local proof of concept. Small curated knowledge sample, MCP delivery, public one-command installation still ahead. |
| Formly Contract | [README](https://github.com/dills122/formly-contract#readme) | Replace the early-experiment description with concrete compiler/package capabilities and pre-release status. npm packages, production MCP, and automatic browser-test generation are not shipped. |
| Sandtable | [README](https://github.com/dills122/sandtable#readme) | Reflect engine, campaign hosting, and Maproom UI work. Label as Early development and retain the planned first playable release. |
| Kyn | [Merged package PR](https://github.com/microsoft/winget-pkgs/pull/430084), [manifest directory](https://github.com/microsoft/winget-pkgs/tree/master/manifests/d/DylanSteele/Kyn/0.1.3) | Add the verified WinGet distribution link to the existing project. |
| Session Chat | [README](https://github.com/dills122/session-chat#readme), [project site](https://dills122.github.io/session-chat/) | Add the public project site; retain research limitations. |

The shared catalog now contains 39 entries: 26 current and 13 archived. Session Chat replaces Trove in the homepage
featured selection. Package Spelunker's uncertain future and
Capsule's early-scaffold limitations are retained.

## Maintaining this page

Update `src/data/open-source.ts` with verified public upstream merges and curated
project summaries. Preserve exact PR URLs, titles, and merge dates; count each
upstream PR once. Check the upstream merge rather than a PR merged into a personal
fork. Update `contributionsVerifiedAt` only after rechecking the selection. Keep
owned projects and package-distribution work in `src/data/site.ts`.

Run `npm run check` and `npm run build`, then verify navigation, disclosure
controls, small-screen layouts, sitemap inclusion, and internal anchor targets.

## Verification results

- `npm run check`: zero errors and warnings; the existing analytics-script hint
  in `BaseLayout.astro` remains.
- `npm run build`: nine HTML pages and the sitemap generated successfully.
- `git diff --check`: passed.
- Generated HTML verification: one main heading per page, no duplicate IDs, all
  internal page/fragment links resolve, exactly 27 unique upstream PR links,
  five disclosure controls, excluded repositories absent from the contribution
  list, and the new route present in the sitemap.
- Confirmed 39 catalog entries and both new entries on the Shrimpworks page.
- Browser checks: desktop page and catalog, mobile homepage preview, no horizontal
  overflow on the open-source page at 320, 375, 414, and 768 pixels; native
  disclosures work with click, Enter, and Space. Primary navigation correctly
  marks the new page current.
- GitHub API confirmed Kyn's manifest directory and Angular Usage Lookup's public
  v0.1.0 release. Session Chat's site returned HTTP 200.

These checks verify the marketing site and cited public availability, not the
implementation quality or readiness of the listed projects.

## Hallmark theme alignment

The owner requested a closer match to the existing site after the first preview.
The open-source route now follows the catalog's charcoal split hero, compact
statistics, boxed jump navigation, cream project register, contribution badges,
and smaller bold serif summaries. Oversized serif subheadings and the large
cream introduction were replaced. Existing global tokens and shared header/footer
remain authoritative; no replacement theme or font dependencies were introduced.
Contribution data and catalog content are unchanged by this visual pass.

Rechecked the production build: Astro check and build pass (same existing hint),
all internal link/anchor checks pass, and the page retains 27 PR links and five
native disclosures. Desktop inspection used 1280 × 800; responsive checks at 320,
375, 414, and 768 pixels found no main-content overflow. Expanded history also
fits at 320 pixels. Enter opens and Space closes a focused disclosure.
Hallmark's theme-rotation and font-replacement defaults were intentionally
superseded by the owner's request for consistency with the existing site.

## Plain-language catalog refresh

Rewrote the 39 project descriptions and short introductions around what each
project does, retaining limitations and planned features. The homepage introduction
now mentions developer tools, libraries, experiments, and open-source contributions.
Readiness badges distinguish published releases, pilot/pre-release work, unfinished
projects, available source, public sites, rebuilding, exploratory work, and archives.
A catalog note explains the labels. Source availability does not imply a verified
packaged release, and Released does not imply production suitability.

The owner's October 26 update supplies Kyn's upcoming v3 configuration-schema plan.
The catalog calls this a more usable schema planned for an upcoming release and
explicitly leaves timing unconfirmed; it does not claim that v3 has shipped.

Validation: Astro check passed with the existing analytics-script hint; production
build and diff whitespace checks passed. Generated-page checks retained 39 catalog
entries and valid internal links/anchors. The local browser shows the updated
catalog descriptions, readiness labels, and explanatory note.

## Editorial pass: October 26

Reviewed all public-facing source copy: all 39 catalog entries, organization
introductions, the five contribution summaries, homepage sections, biographies,
shared navigation/footer, and page metadata. Rewrote 27 project entries and left
short, specific descriptions alone where they already worked. Removed generic
slogans, repeated promotional lists, and wording that sounded like internal
verification notes. PR titles, URLs, merge dates, counts, and readiness labels
remain unchanged. Session Chat remains featured instead of Trove. Independent
Reviewer remains Research and describes the owner's shift toward model harnesses.

The value-prop-statements skill informed the focus on concrete uses; its sales
examples were not adopted. Hallmark was inspected but is primarily visual-design
guidance, so this pass did not run its redesign workflow. The existing theme stays.
A narrow-screen check also found that Independent Reviewer's long name could widen
its homepage grid cell; the text now wraps within the cell.

Editorial guidance for future updates:

- Say what the software does and give a specific example when useful.
- Use ordinary verbs and contractions where they sound natural.
- Avoid generic slogans, repeated three-part lists, and forced cleverness.
- Keep technical terms that identify something real; explain unfamiliar ones briefly.
- State unfinished work directly. Do not imply that planned features have shipped.
- Keep Kyn's v3 config-schema timing tentative until a release is confirmed.
- Preserve the cats' mock-corporate humor without extending it into product claims.
- Leave upstream PR titles intact as source records.

The owner subsequently requested restoring the original People and namesakes section,
including its heading and all three biographies. Those originals are restored.

The owner selected the final humorous studio note: “We have a parent organization,
four divisions, and no way to explain any of this to the cats.” It replaces the
model-harness note under the label “On corporate structure.”
