# F22 Portfolio Studio · organization revision 2
**3 November 2026 · F22 only · all five versions · owner review pending**

## Open the revised designs
Use the **Nestlancer admin design lab** live preview on port **8131**. The root opens the gallery; F22 is its final section. These pages use relative family assets, so use the server rather than opening an isolated HTML preview.

| Version | Direction | Open |
|---|---|---|
| **V1 — recommended** | Collection manager: one full-width aligned collection | [V1](../V1/index.html) |
| V2 | Case-study library: compact responsive title cards | [V2](../V2/index.html) |
| V3 | Editorial workspace: selectable roster and broad document context | [V3](../V3/index.html) |
| V4 | Operations register: dense register and small inventory/tool rail | [V4](../V4/index.html) |
| V5 | Timeline curator: one October chapter and ordered timeline | [V5](../V5/index.html) |

**Recommendation is not approval.** All five are available for your review.

## What changed after the organization feedback
- **Items / Categories / Analytics** are peer workspaces. The initial collection no longer competes with taxonomy, metric panels or large warning cards.
- Compact Portfolio heading, one primary New item, quiet provenance line and smaller historical totals. Search/status and guarded public-order editing stay with Items.
- Consistent title/publication/date/action alignment. One Edit and overflow per record; no wall of destructive buttons or fabricated project covers.
- Full-window editor with source-field groups, section navigation and sticky review action. Review → Back and review Escape retain form values. Dirty cancellation offers Keep editing / Discard. Media-removal preparation also preserves the editor.
- Mobile V3 selection brings context into view with a Back to items action. Mobile V5 uses a full-width timeline rather than a squeezed chapter split.
- Source comparisons and captured/empty/loading/error tools are secondary disclosure. Analytics and categories remain one click away.

## Research and Swagger review
[Research, citations, source limitations and pre-markup plan](REVISION-2-RESEARCH-AND-PLAN.md) · [Current concept cards](CONCEPTS.md) · [Corrected API map](API-MAP.md).

Compared official **Strapi, Sanity, Directus, Payload, Carbon and Tabler** patterns. Reviewed NN/g hierarchy/progressive disclosure and GOV.UK review/back guidance. Visually inspected the available CMS screenshots and reopened the production portfolio list/editor. Adopted browsing/editing separation, grouped tasks and stable table anatomy—not copied branding or product artwork.

Academic thesis searches found relevant indexed abstracts/excerpts, but full repository/PDF retrieval failed (including HTTP 403). **Full thesis reading, empirical usability testing and quantified cognitive-load improvement are not claimed.**

Focused reread covered portfolio create/update/category/reorder/media/analytics and related media/admin/gateway contracts. Important correction: portfolio `/media/upload` declares required **string query** parameters `title`, `setAsThumbnail`, `setAsFeaturedVideo` but **no requestBody**. The previous confirmed-multipart statement was unsupported and has been corrected. The separate media-service multipart contract does not prove a portfolio adapter. Upload encoding/coercion require backend confirmation.

Other boundaries: four required creation fields; sparse updates for unknown source values; category deletion's optional `reassignToId` with unknown captured membership; full explicit reorder payload; media unlink is not global asset force-deletion; global and item analytics are distinct. No API request was sent.

## Source data retained
- Eight captured titles and public order: B2B, Fitness, Marketplace, Brand, Fintech, SaaS, E-Commerce, HealthTech.
- Historical totals **8 items / 8 published / 0 draft / 4 featured**. Only HealthTech's featured identity is recovered; the other three are not guessed. Totals stay labelled historical after local mutations.
- Four category labels; no invented IDs, membership or affected-item counts.
- Four loaded editor fixtures; SaaS editor capture was unloaded and three other item editors were not captured. All extracted fields retained. Unknown values are not silently defaulted.
- Later DOM snapshot: **25 views / 0 likes**, updated **10/28/2026**. Earlier screenshots: **11 views**, updated **10/8/2026**. Separate snapshots, not an additive trend.
- Anonymous per-item zero analytics remains anonymous. No guessed attribution, images, client data or permissions.

## Fresh revision-2 verification
Historical revision-1 passes do not validate these changed pages. The following results come from the final revised source:

| Check | Result |
|---|---|
| Responsive matrix | **70 cells**: five versions × seven widths × light/dark |
| Widths | 360, 390, 768, 1024, 1440, 1920, 2560 |
| Page-level horizontal overflow | **0** |
| Main interaction checks | **60 passed** |
| Extended checks | **20 passed** |
| Accessibility scans | **90 total; 0 detected WCAG A/AA violations** |
| Scan distribution | 60 task-workspace + 20 editor + 10 workflow scans |
| Main-suite runtime/resource errors | **0** |
| Main-suite external requests | **0** |
| Sibling/locked shared preservation | **339 hashes checked; 0 changed** |
| Fully visible entries at 1440×900 | V1 **6**, V2 **6**, V3 **5**, V4 **7**, V5 **4** |

Interaction coverage includes tab arrows/Home/End and ARIA state, search/status/recovery, captured editor/source fields, section focus, review/back/Escape preservation, dirty discard, creation/reload reset, publish/unpublish/delete confirmation and local undo, reorder keyboard/boundary/confirmation/undo, category duplicates and unknown removal impact, analytics identity, public local preview, empty/loading/error/recovery, theme/navigation persistence, coarse mobile targets/drawer focus, no-JS fallback, reduced motion and mobile context return.

First-pass QA caught V2's dark rank contrast; corrected with family-local foreground tokens. Extended testing caught repeated native dialog-cancel behavior after review/media transitions; explicit Escape handling now preserves dirty form state. A mobile chapter-grid specificity problem was caught during screenshot review and fixed before the final run. Early test assertions were corrected to actual section IDs, two skeletons and local-preview wording; they were not product defects hidden as passes.

### Evidence
- Results above summarize the final revision-2 browser/interaction/accessibility pass. Transient QA scripts, JSON dumps, and viewport screenshot PNGs were removed after verification (not shipped with the family).
- Desktop directions, all five mobile directions, editor and secondary workspaces visually inspected. Automated accessibility is not a manual screen-reader or user study.

## Files and preservation
Five HTML files were directly hand-authored; family `studio.css` and `studio.js` were rewritten/adapted directly. No design-generation script. Existing `fixtures.js`, `boot.js`, locked shared tokens/assets and F01–F21 designs remain preserved. Gallery, F22 manifest record, DECISIONS and scoped master/prompt/README notes are synchronized.

Per-page HTML is approximately **5.9–6.4 KB**. Shared family CSS/runtime/fixture/boot assets total approximately **79 KB** (uncompressed, fetched once per page); these are an offline bundle, not five self-contained files. The research/concepts preceded revised markup; the prompt addendum was synchronized during implementation, later than originally intended.

## Limits and next decision
All modifications are **in-memory simulations** and reset on reload. Theme/nav preferences alone persist locally. Uploads stage a filename only; no asset binary is bundled. Media removal/thumbnail actions prepare receipts, not a real server change. No production authentication, permission enforcement, audit event, health status, backend undo, public engagement mutation or live-site integration is claimed.

Choose the preferred direction and provide layout feedback. **V1 Collection manager** is the recommended operational default; V3 offers the strongest reading/context workflow. F01–F21 remain outside this revision.
