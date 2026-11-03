# Nestlancer Admin Portal Lab — F22 · Portfolio Studio — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F22 · Portfolio Studio.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F22-portfolio-studio/V1…V5/`** — and nothing else. Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

> **Owner review — full-width, collapsible shell:** Authenticated console pages F02–F25 must use the full viewport width available beside the sidebar, with responsive gutters and no centered page-level max-width. Provide an obvious keyboard-accessible desktop Collapse/Expand control, a named icon rail, and persistent state across reloads/families; use a mobile drawer instead on small screens. Check 1920/2560 as well as 360–1440 in both themes. Keep shared tokens unchanged (`--content` must not cap console pages). Individual reading columns and dialogs may remain appropriately sized. F01 sign-in remains standalone, without an added sidebar. See master §9.2a.

## Run revision — 3 November 2026 (F22 only)

This evidence-led revision overrides conflicting shorthand below. Archive: `admin-portal-lab/families/F22-portfolio-studio/docs/PROMPT-ARCHIVE-pre-run.md`.

1. Inspect all 4 shots and 8 DOM files. There are **four loaded edit forms**, not five: 116 is unloaded. Inline/extract captured text rather than retyping descriptions. Missing fields stay explicitly unknown. HealthTech screenshot proves Markdown/Web Development/featured/review-enabled/5 stars; do not apply these to other items.
2. Default to the later **DOM snapshot: 25 views, 0 likes, 8 top items, update 10/28/2026**. Provide the earlier screenshot's 11 views and 10/8/2026 as a clearly separate comparison, never a blended dataset. Anonymous item analytics zero is not a named-item result. Historical counts 8/8/0/4 remain labelled historical after local changes.
3. C17 literally requires **10 seconds local undo** for unpublish/delete/remove. Preview + confirmation alone is insufficient. Do not assert a backend undo endpoint exists. Any simulated mutation/receipt must say no API request was sent.
4. Read **30 portfolio paths / 36 operations**, correcting the stale 20-path gate. Map create/edit, media and category effects. Category membership/IDs are absent; deletion cannot claim zero affected items. Do not introduce uncaptured archive/privacy/duplicate/bulk capabilities merely because documented.
5. Preview ordering as a full-list transaction. Boundary moves disabled; filtered worksets cannot silently change global order. Real keyboard reorder, focus restoration, safe text rendering (including HTML content), actual no-match, no-JS readable primary content and named native dialogs are mandatory.
6. Research CMS collection/publishing and enterprise table/inspection patterns after S/R/A. Eight usable primary pattern references are sufficient when unavailable product pages are logged honestly; no claim of eight live consoles. Never replace missing imagery with invented project screenshots: labelled title covers are valid.
7. Five geometries: V1 Curator’s desk (minimal split), V2 Showcase wall (gallery), V3 Order register (ledger), V4 Studio workbench (three panes), V5 Public sequence (timeline/motion). Keep the locked shared tokens and full-width/collapsible shell. Family-local shared behaviour/fixtures may be reused in an offline bundle; no build script may emit variant HTML/CSS. Single-file portability is not claimed.
8. Preserve all sibling pages/prompts. Update this prompt, master scoped note and pack index only; broader review-driven prompt changes await owner feedback. Record actual browser tests, not aspirational passes; recommend one winner without claiming owner approval.

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the portfolio studio exactly (items, categories, ordering, publish, analytics) first. 2. **Research analyst** — quote every F22 Finding/C/A/KEEP. 3. **API analyst** — map surfaces to `portfolio` spec. 4. **Design-template researcher** — ≥8 portfolio/showcase admins **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject order-losing lists, one-click deletes, preview-less publishing.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F22 shots + HTML + metadata | Items + categories + controls frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F22-portfolio-studio/docs/REPORT-STUDY.md` |
| 2 · API | `portfolio` spec | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** curate the public showcase — order, publish, feature — with preview before every public change.

## 1.3 Manual craft rule — summary

Hand-write each `families/F22-portfolio-studio/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F22 screenshots (4):** `048-portfolio-listing.webp` · `049-portfolio-details-edit.webp` · `050-portfolio-new.webp` · `082-portfolio-item-analytics-panel.webp`. 3. `nestlancer-admin-pages-html/README.md`, F22 HTML (§4) + `audit-metadata.json` (`/portfolio` filter — 57 buttons; Remove×4/Add category/↑↓/Analytics/Unpublish/Delete). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + spec: `portfolio.openapi.json` (30 paths — items, categories, ordering, publish, analytics). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F22 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F22 · Portfolio Studio

The showcase curator: portfolio **items** (add/edit, publish/unpublish, feature, delete), **categories** (add/remove), **ordering** (↑↓ controls — keyboard-first), **analytics** (views/engagement per item), and item **preview** before public changes. Captured dense (57 buttons, 7 states) — your C8-adjacent craft tames the control density (overflow menus, roving lists) while keeping every control reachable.

> **Business weight:** 🟡 the public proof of work — curation quality is brand quality.

| | |
|---|---|
| Routes | `/portfolio` (+ items/categories/analytics in-page) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **items + categories + ordering + publish + analytics** (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `113-portfolio-index.html` | `/portfolio` — studio | `048-portfolio-listing.webp` |
| `114…118-portfolio-sub-portfolio-*-edi*.html` (5 edits) | Item edits (reconcile) | `049-portfolio-details-edit.webp` |
| `186-portfolio-new-item.html` | New item | `050-portfolio-new.webp` |
| `176-portfolio-index-state-analytics.html` | Analytics state | `082-portfolio-item-analytics-panel.webp` |

**Must include (every variant):** item grid/list (frozen fields) + add/edit · categories (add/remove) · ordering (↑↓ + keyboard + position honesty) · publish/unpublish/feature/delete (confirm-gated, preview before public) · analytics per item (frozen metrics) · control-density craft (overflow + roving) · dark + 375px.
**Content lock:** freeze item fields, category labels, control labels, analytics metrics, confirm copy at Gate S. Never invent items or metrics.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error + publish-receipt states · lists keyboard-complete (roving + reorder keys).

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F22 scope

### CHANGE — every item in **all 5 variants**
- **C9** — Mono refs/slugs. *(§6.1)* · **C17** — Guarded curation: preview + confirm on publish/feature/delete. *(§6.1)*
- **C3** — AA-safe text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C12** — Display counts. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage
- No F22-targeted P1 ADDs; ordering + preview craft ships as family work — 5/5.
**Coverage:** manifest records.

### KEEP — present in every variant
- Showcase structure (items + categories + analytics). · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F22 scope: Gate S freezes items + categories + ordering + analytics; Gate R quotes F22 rows; Gate A maps `portfolio` 20 paths; Gate T ≥8 portfolio/showcase admins **after** S/R/A.

```
## GATE S (F22) · Shots: 4/4 · HTML: <n>/8 · Controls tamed: YES · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F22) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F22) · Specs: 1/1 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F22) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 gallery-led · ≥1 ledger-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured studio, tamed controls, guarded publishes |
| V2 | Gallery-spine: the showcase owns the screen, curation docks |
| V3 | Ledger-first: items as a sortable ledger with preview drawer |
| V4 | Dense console: compact curator + analytics rail |
| V5 | Motion-signature: reorder/publish choreography + transitions |

## 9. BUILD (manual, one by one)

Master §9; family paths below. Publish/feature/delete MUST be preview + confirm-gated in every variant (lab static — confirm + receipt copy only).

```
admin-portal-lab/families/F22-portfolio-studio/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F22 primaries:** item grid/list + add/edit, categories manager, ordering controls, publish controls + preview, analytics panels.
States: item draft/published/featured · reorder positions · publish confirm/receipt · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F22) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F22) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F22 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C9/C17/C3/C5/C12/C18/C20 in 5/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete (roving + reorder); reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "Preview-less publish — FAIL." · "Mouse-only reorder — FAIL." · "F22-V1 approved — never regenerate it."

## Enterprise-standards addendum (2026-11-01 review)

Added after studying **12 live enterprise/operator login pages** (AWS Console, Google Cloud, Azure/M365, Salesforce, Cloudflare, Datadog, Stripe Dashboard, Vercel, GitHub, Atlassian, DigitalOcean, Heroku) and rebuilding F01 to enterprise standard — full extraction in master `admin-portal-prompt.md` **§5.4** and `admin-portal-lab/families/F01-auth-login/docs/TEMPLATE-RESEARCH.md` (Gate T-2). From now on, EVERY variant of EVERY family follows:

- **Errors:** a top-of-surface `role="alert"` region that receives focus on failure; per-field `aria-invalid` + `aria-describedby`. Status/notice = icon + colour + text, never colour alone (C3).
- **Notices** (expired session, undo windows, receipts, degraded banner) are **dismissible** and announced via a polite live region.
- **Password fields** (auth door, set-password dialogs) get Show/Hide (`aria-pressed` + label swap) + a **Caps Lock hint**; any keep-me-signed-in/remember control gets a shared-device honesty hint.
- **Forms** carry the consent/legal line where the product has one ("By continuing, you agree to our Terms and Privacy Policy.") and pages carry a footer with **© 2026 Nestlancer** · Terms · Privacy · host in mono · "Secured · HTTPS" chip.
- **Progressive disclosure** (one field → Next) is allowed for auth/creation flows when it speeds the operator; single-page forms are equally valid — choose per page job, keep frozen labels.
- **Autofocus** the first field on standalone surfaces; skip link everywhere; **44px targets on coarse pointers**; `?theme=` boot + real dark parity (C18).
- **Trust signals stay honest:** host in mono, AA status badges, no invented SSO/passkey/region/language pickers — Gate-A endpoints or demo-labelled in DECISIONS.md only.
- **Creative bar (master §5.5, 2026-11-01):** every variant is art-directed with one strong idea (canvas / split+motion / console metaphor / editorial spread / choreographed center) — background art inside the teal ramp only, motion = transform/opacity + at most one stroke-dashoffset element, display type with tight tracking, 8px rhythm. If it could be any SaaS page, rebuild axis A/C, never the colour. Also (2026-11-01): brand canvases/panels must be theme-aware via CSS vars (light AND dark both work — no hardcoded green), and every page uses the shared client-lab logo pair from `admin-portal-lab/assets/` (`logo-mark-light/dark.svg` swapped by `.dark`, `alt` required, `favicon.svg` as icon) — see master §5.5 items 8–9. Pass 3 (2026-11-01): auth-style pages follow the production-mindset rules — editorial split with product proof, live signals (ping/PASS/PENDING), mono eyebrows, kinetic display type, aurora/scanline ambience, theme-aware canvases (master §5.5 item 10). Pass 4 (2026-11-01 owner review #4): pages must read hand-crafted (scribbles, stickers, offset layers, annotations), never clone a live production layout, form boxes get real presence (offset shadow + top bar + focus-within), and owner-approved ambient variants may use the green-on-dark-blue scheme (#e9f0f8/#081426) via local vars only — master §5.5 item 11. Pass 5 (2026-11-01 owner review #5): auth forms are SINGLE combined email+password panels (one submit, no step-wise disclosure) — master §5.5 item 12.


---

*End of prompt F22. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*


---

## Owner review — source-complete data and differentiated design (2026-11-02)

When a reviewer says demo data is incomplete or designs resemble the production screenshot, re-inspect the applicable captures individually, reconcile every identity and visible record with the related Swagger contracts, and document missing or conflicting data. Do not substitute one account’s data for another, invent unseen pages, claim a simulated action was executed, or claim a server permission/audit result. Search and inspect relevant public design examples, then change information architecture and visual hierarchy as appropriate — not just colours or small spacing changes. Preserve approved work unless the user asks for revisions; this review explicitly requests changes to both F15 and F16. Test the revised pages and report actual coverage and unresolved gaps. Follow the shared master and relevant family scope; do not mark gates passed merely because an initial mock exists.

## Revision 2 — organization review · 3 November 2026

**User-confirmed scope: F22 only, all five versions. Preserve F01–F21 and locked shared assets.** This revision supersedes the roster/layout guidance above, not the frozen source data or safety requirements. The research and five concept cards were recorded before markup changes in `docs/REVISION-2-RESEARCH-AND-PLAN.md`; this prompt addendum was synchronized during implementation (not claimed to precede the first HTML edits).

### Research and source gate
- Read comparable Strapi Content Manager, Sanity Structure Tool, Directus layouts, Payload preview, Carbon tables and Tabler examples. Inspect the captured production list/editor again. Apply the browsing→editing separation, stable toolbar/row anatomy and progressive disclosure, not another dashboard of equally prominent panels.
- Research log includes NN/g hierarchy/disclosure and GOV.UK review patterns. Academic thesis abstracts/search excerpts were located, but full theses were not successfully retrieved: **do not claim full-text review or measured usability improvement**. Citations and limitations are in the research log.
- Re-read portfolio create/update/category/reorder/media/analytics contracts. Create requires title, shortDescription, fullDescription and contentFormat. Use sparse update semantics for uncaptured fields. Global analytics must not be relabelled as identified-item analytics.
- **API correction:** portfolio media/upload has required string query parameters title/setAsThumbnail/setAsFeaturedVideo, but no declared request body. The distinct media-service multipart contract is not a confirmed portfolio-upload adapter. Keep staging local and document this integration gap. Category deletion may reassign by reassignToId; unknown membership never implies zero impact. Admin preview must not increment public view/like routes.

### New information architecture (all five)
1. Compact Portfolio heading, one primary New item, secondary public preview; quiet provenance line.
2. Peer **Items / Categories / Analytics** task tabs. Do not put taxonomy, analytics, legal notes or oversized total cards alongside the initial workset.
3. Search, status and guarded full-order editing belong to Items. Compact historical counts remain labelled historical after local changes.
4. Dedicated full-window editor: Content, Classification, Client (marketing only), Client review, Project details, Links, SEO and Preview files navigation; grouped fields and sticky review action. Review→Back must preserve values. Dirty cancellation offers Keep editing / Discard. Preserve every extracted field, missing-value distinction and confirmation gate.
5. Source comparisons and empty/loading/error preview controls are secondary disclosure, not headline panels. No stock project images, invented category assignments, inferred featured identities or fake live charts.

### Revised concept roster
| Variant | Dominant geometry | Operational intent |
|---|---|---|
| V1 Collection manager | One aligned full-width collection | Minimal everyday management; recommended default, not owner-approved |
| V2 Case-study library | Compact 4/3/2/1 title-card grid | Visual collection scanning without fabricated covers |
| V3 Editorial workspace | Selectable roster + broad document/context pane | Browse context before opening the full editor |
| V4 Operations register | Small inventory/tool rail + dense aligned register | High-density collection operations |
| V5 Timeline curator | Single Oct-2026 chapter spine + ordered entries | Explicit public sequence; transform-only/reduced-motion |

### Fresh acceptance evidence
Fresh tests, screenshot inspection, responsive/dark checks and accessibility scans must be recorded separately as revision 2; historical passes below cannot validate changed markup. At 1440×900, the heading/tabs/toolbar and at least four entries must be visible. Check Categories/Analytics one-click reachability, aligned metadata, editor navigation/focus/back/cancel, no viewport overflow at 360–2560 in both themes, source-safe counts, reorder/publish/delete confirmation and local undo. Verify F01–F21 and locked shared hashes. Retain `docs/revision-1.zip` for the prior design. Do not claim an owner-selected winner, production API success or a full academic-text review.

### Revision-2 final run record

All five revised layouts, shared family runtime and stylesheet are implemented and freshly tested. Final evidence: **70 width/theme cells, 60 main + 20 extended interaction checks, 90 accessibility scans with zero detected violations**, no main-suite runtime/resource errors or external requests; 339 sibling/locked shared hashes unchanged. At 1440×900 the visible-entry counts are 6/6/5/7/4. Screenshot review repaired V5's mobile chapter split; automated QA repaired V2 dark-rank contrast and repeated-Escape editor cancellation. Mobile V3 context selection/return, no-JS source fallback and reduced motion were checked. See `docs/DELIVERY-REPORT.md`, `QA-REVISION-2.json`, `QA-REVISION-2-EXTENDED.json`. Prior evidence remains historical. Owner approval, full-thesis retrieval and production integration remain unclaimed.

## Historical revision-1 run record — 3 November 2026

Executed F22 only after the revision above. Five manually authored layouts delivered in `admin-portal-lab/families/F22-portfolio-studio/V1…V5/`. Family-local `studio.css`, `studio.js`, `boot.js` and extracted `fixtures.js` form an offline bundle. No design-generation script; QA scripts do not create page HTML/CSS. Gallery, manifest, DECISIONS and shared-parent/index scoped notes merged without changing sibling designs or locked tokens.

Fresh checks: 70 width/theme cells (360–2560, both themes), 50 core + 60 extended + 20 timing/focus/persistence checks passed; 20 landing-page and 10 editor-dialog axe scans found zero violations. No final runtime/resource failures; no external requests in extended runs; all sibling/shared file preservation hashes unchanged. Source gaps and prototype limitations are detailed in the family delivery report. V1 is the recommended direction, not owner-approved. API integration, real media binaries, missing category membership and production acceptance remain unclaimed.
