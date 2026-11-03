# Nestlancer Admin Portal Lab — F23 · Media Library — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F23 · Media Library.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F23-media-library/V1…V5/`** — and nothing else. Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

> **Owner review — full-width, collapsible shell:** Authenticated console pages F02–F25 must use the full viewport width available beside the sidebar, with responsive gutters and no centered page-level max-width. Provide an obvious keyboard-accessible desktop Collapse/Expand control, a named icon rail, and persistent state across reloads/families; use a mobile drawer instead on small screens. Check 1920/2560 as well as 360–1440 in both themes. Keep shared tokens unchanged (`--content` must not cap console pages). Individual reading columns and dialogs may remain appropriately sized. F01 sign-in remains standalone, without an added sidebar. See master §9.2a.

## Run revision — 3 November 2026 · evidence-led, F23 only (supersedes conflicting lines below)

Written **after** executing Gates S → R → A → T in that order for this family. F01–F22 remain preserved in `admin-portal-lab`; the owner's later review will drive HTML + all-prompt updates. This revision updates **F23 only**. Where a line below conflicts, this block wins; the original brief is retained for provenance.

**R1 · Gate S transcription (9/9 shots, 7/7 HTML, 7/7 metadata).** `018` Media Library; subtitle "Browse public and private storage, preview assets, and manage quarantine and analytics."; tabs Storage / Quarantine / Analytics; Browse rail All storage / Public library / Private; "Drag & drop to upload" + "Images, documents, video, and archives" + "Browse files"; type chips All types / IMAGE / DOCUMENT / VIDEO / ARCHIVE; source chips All sources / Message attachments / Projects / Deliveries / Uploads only / Folders; search "Search filename, mime, or ID…"; status select All statuses / READY / PROCESSING / QUARANTINED / FAILED / UPLOADING; sort Newest / Oldest / Largest / Name A–Z; grid/list toggle; "View all files"; bucket cards Public "118 files · 19 MB" ("Blog, portfolio, and other published-site assets") and Private "28 files · 309.1 KB" (DOM; shot `018` reads "30.91 KB") ("User-owned private storage"). `019` KPI strip Total files 146 · Storage used 19.3 MB · Quarantined 0 · Processing 0; Files by type `image/jpeg` 118 (19 MB), `text/markdown` 1 (431 B), `application/zip` 12 (4.2 KB), `application/pdf` 15 (304.5 KB); "Uploads (last 30 days)" has baseline dashes and one prominent bar — **no labelled 30-day series exists, do not invent one**; Storage maintenance copy "Preview unattached private media (no context, excluding published site assets) before cleanup. Dry run does not delete anything." + Preview cleanup / Run cleanup. `020` "All buckets · folder", Folders source selected, spinner + "Loading…", **no folder rows**. `021` exact empty state "No quarantined media" / "Files flagged by security scanning will appear here for release, reprocess, or delete." `073` asset modal for `sandeep-chopra-gps-fleet-gps-fleet-staging-review.zip`: "No preview available" / "Open file"; READY · PRIVATE · 353 B; MIME `application/zip`; Context `project: 01a10a2e-4f64-740a-b4ca-0d9ab8dc1899`; Media ID `01a10a2e-6e69-71b8-ad19-25eb4e081e2f`; Uploader `admin@nestlancer.com` + View user; Uploaded `10/5/2026, 3:49:36 AM`; Edit metadata; "2 references" + "This file is linked elsewhere. Deleting without force may fail or break content." with project and Deliverable "Staging build shared for progress review (work in progress; not final delivery)." rows; "No active share links." + Create link; Download / Replace / Reprocess / Delete. `074` four-column grid, "145 files · previews load as you scroll", Select page checkbox, 24 generic ZIP/DOC/TXT placeholder cards with READY, "File ACL: PRIVATE", Riya Kapoor, "Back to folders", "Page 1 of 7 · 146 files" + Previous / Next. `075` "Create share link": purpose copy + "Purpose / statement" (placeholder "e.g. Client preview for milestone 2 — expires after re…"), "Link timeout" "7 days — auto-revoke after expiry", "Password (optional)" "Enter a password, or leave blank", Cancel / Create link. `076` edit metadata modal: Filename, Display name, Description ("Receipt for milestone 2"), Visibility PRIVATE, Save metadata, Cancel edit. `077` list view columns FILE / UPLOADER / TYPE / SIZE / STATUS / ACTIONS with per-row "Details"; overlapping filename/uploader text is a captured hierarchy defect. All 7 F23 DOM captures contain **0 asset rows and 0 tables** (JS grid); captured UTC 2026-10-30 13:46–13:55; `178` `?contextType=uploads` shows "Loading…"; failed RSC prefetches and one CSP inline-style console error are logged; header messages badge 21 in `119–122`, 20 in `177/178/187`. **Conflicts to surface, never silently repair:** 309.1 KB vs 30.91 KB; 145 vs 146 files; 21 vs 20. **Tie-outs:** 118+28=146; 118+1+12+15=146; sizes ≈19.3 MB; Quarantined 0 matches the empty state.

**R2 · Gate R corrections.** Report `.md` (353 lines) + all 10 XLSX sheets read. C17 is **"10s undo toast for Unpublish/Remove/Delete/Dismiss"** — *not* "reason + confirm"; the reason/confirm craft is the family's own safety layer, and both must appear. C19 ("Showing 1–20 of N" + page size + total) also names Media and must be implemented even though it is absent from §6 below. A1's report target list is Requests / Users / Contact / Verification / Audit — **Media is not listed**; applying A1 here is an evidence-based extension justified by the captured "Select page" checkbox (`074`, `077`) and `POST /api/v1/admin/media/bulk-delete`, not a report mandate. Report §2.2 says the four media dialogs are unverified because "No asset links in index DOM (JS grid/cards)"; §4.1 calls Media "6 files · ⚠️ Partial". Never claim a live dialog or a server result.

**R3 · Gate A corrections (`media.openapi.json`, 50 paths / 57 operations).** Admin endpoints: `GET /admin/media`, `/quarantine`, `/analytics`, `/storage-usage`, `/storage-stats`, `/stats`, `/orphans`, `/browse` (visibility + uploaderId + search all required), `/users/{userId}`; `POST /cleanup?dryRun` (required boolean), `/bulk-delete` (`BulkDeleteMediaDto`: ids required, force optional), `/backfill-context`, `/promote-to-portfolio`, `/quarantine/{id}/release`, `/{id}/reprocess`, `/{id}/replace?force`, `/{id}/share`; `PATCH /settings`, `/{id}`; `DELETE /quarantine/{id}?force`, `/{id}?force`, `/{id}/share`, `/{id}/shares/{shareLinkId}`; `GET /{id}`, `/{id}/download`, `/{id}/references`, `/{id}/shares`. Client-side: `/media`, `/media/{id}` + PATCH/DELETE, `/upload/request`, `/upload/confirm`, `/upload/direct`, chunked init/part/complete/status/abort, `/media/{id}/move`, `/copy`, `/versions`, `/regenerate-thumbnail`, `/share/{token}`. Enums: status `PENDING|PROCESSING|UPLOADING|READY|FAILED|QUARANTINED` (the captured status select omits PENDING — do not add unseen filter labels), fileType `IMAGE|DOCUMENT|ARCHIVE|VIDEO`, visibility `PUBLIC|PRIVATE`, contextType `project|thread|message|folder` plus `ungrouped` for orphans (captured "Deliveries" and "Uploads only" are UI filters with no documented enum value). `ShareMediaDto` requires `purpose` (≤500 chars); `expiresInSeconds` min 3600 / max 7776000 (7 days = 604800); `passwordProtected`, `password`, `allowedEmails` exist but `allowedEmails` appears in no capture. `AdminUpdateMediaDto`: filename, description, customMetadata, visibility, originalFilename, metadataPatch — the captured "Display name" maps plausibly but **unverifiably** to originalFilename; label it as a UI field only. Every admin 200 response is `data: object, additionalProperties: true` — **field names are not documented**; print "field names not documented in Swagger" in every API/provenance panel. **No bulk tag / bulk move / bulk quarantine endpoint exists. No endpoint lets an operator put an asset into quarantine** — quarantine is created by security scanning, so "Quarantine" must never be an operator bulk action. No multipart/binary request body is declared: upload progress is a **local staged simulation**, never a claimed server write.

**R4 · Gate T (after S/R/A).** 6 searches, 12 references opened (2 fetches failed and are disclosed, not counted): Cloudinary Assets overview ×2 + Get started, Frontify Media Library, Strapi Media Library Interface (DeepWiki), Strapi's new Media Library, DAM News "DAM UI Future Changes", RevoGrid enterprise dashboards, vocab.design bulk actions, NN/g empty states, Sysax quarantine workflow, Carbon dialogs, Digital Elliptical control towers. Adopted: verdict-first summary → investigation grid → action layer (RevoGrid); master–detail inspector instead of a full-screen modal (Strapi, Digital Elliptical); grid/list parity and upload-that-does-not-hold-you-hostage (Strapi, DAM News); bottom bulk bar with count, stable placement, clear-selection, disabled-with-reason commands and count-naming confirmation (vocab.design, Frontify); staged bulk metadata edits applied only after review (Frontify); designed empty states that say why the container is empty (NN/g); quarantine as an isolated, logged evidence locker with an accountable release path (Sysax); short user-initiated dialogs with descriptive action verbs (Carbon). AI search, transformations, duplicate detection, expiry analytics, roles/permissions, saved searches and real file previews are **research-only** — absent from captures and spec, so forbidden in the build.

**R5 · Corrected C17 + A1 contract.** C17 in all 5: preview + explicit confirm for Delete / Release / Purge / Run cleanup, a reason field for release/purge, plus a **10-second Undo** toast for reversible local actions; label undo "local prototype only — no server undo endpoint". A1 in all 5: a selection bar showing "N selected · this page only", Clear, "Tag…" and "Move…" explicitly marked **local preparation (no bulk endpoint in spec)**, and "Delete (N)" gated behind a preview + confirm + undo. Never offer "Quarantine" as a bulk action. Clear selection when a filter changes; never claim partial-success responses. C19: "Showing 1–24 of 146 · page 1 of 7" with honest provenance for the 145/146 conflict.

**R6 · Corrected content lock.** Frozen labels, status/sort vocab, type/source chips, dialog fields, analytics figures, drawer fields and two captured references are listed in R1; capture-transcribed filenames in `074`/`077` may be used as card identities, with truncated monospaced IDs and no invented metrics, operators, thresholds, SLA badges, or "scan verdict" values. Counts 146 / 19.3 MB / 0 / 0 and the four type rows are historical captured data, not live telemetry. Source line must separate **captured shot**, **DOM capture**, **Swagger contract** and **local demo**.

**R7 · Build/QA contract.** Hand-author V1–V5 with distinct information architecture (not recoloured copies), import `shared/tokens.css` and `shared/base.css` AS-IS, full-width collapsible authenticated shell, `?theme=` boot, real dark parity, 360/375/768/1024/1440/1920/2560, WCAG 2.2 AA, roving grid keyboard + drawer focus trap, reduced-motion, no-JS reachable content, empty/skeleton/error/upload-progress/undo states, no CDN, ≤70 KB/variant where feasible (disclose if exceeded), no input-capture edits, no generator scripts, no push/commit/branch, and **no unrun QA claims**. Upload has no captured shot: stage request → progress → confirm → done/failed locally, printing the three real endpoints. Folders view must be able to show the captured "Loading…" state with no invented folder rows; quarantine's captured default is the exact empty state. Reports must state actual test coverage and unresolved gaps.

---

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the media library exactly (storage, quarantine, analytics, filters, upload) first. 2. **Research analyst** — quote every F23 Finding/C/A/KEEP. 3. **API analyst** — map surfaces to `media` spec. 4. **Design-template researcher** — ≥8 media libraries/DAMs **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsper
son** — self-contained, offline, no CDN (generated placeholder art only). 7. **Harsh critic** — reject unclickable cards, quarantine-blind libraries, preview-less deletes.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F23 shots + HTML + metadata | Tabs + cards + dialogs frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F23-media-library/docs/REPORT-STUDY.md` |
| 2 · API | `media` spec | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** find any asset in seconds — and quarantine the bad ones without fear.

## 1.3 Manual craft rule — summary

Hand-write each `families/F23-media-library/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F23 screenshots (9):** `018-media.webp` (library) · `019-media-analytics.webp` · `020-media-folders.webp` · `021-media-quarantine.webp` · `073-media-asset-details-and-preview.webp` · `074-media-browse-all-files.webp` · `075-media-create-share-link-dialog.webp` · `076-media-edit-asset-metadata-dialog.webp` · `077-media-list-view.webp`. 3. `nestlancer-admin-pages-html/README.md`, F23 HTML (§4) + `audit-metadata.json` (`/media` filter — Storage/Quarantine/Analytics + type/source filters; cards unclickable live). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + spec: `media.openapi.json` (50 paths — assets, upload, quarantine, analytics). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F23 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F23 · Media Library

The asset room: **Storage** (asset grid with type/source filters), **Quarantine** (held assets + review), **Analytics** (usage/storage), **upload** flow, and the asset **detail drawer**. Live capture is thin — cards matched 0 click selectors and the dialogs are report §2.2 gaps — so the baseline = captured tabs + filters + shot-transcribed cards/drawer/upload + `media` spec. Your variants make every card open its drawer, every quarantine item reviewable, and every delete previewed + confirmed.

> **Business weight:** 🟡 brand safety + storage cost — quarantine discipline is the feature.

| | |
|---|---|
| Routes | `/media` (+ storage/quarantine/analytics tabs; drawer + upload in-page) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **grid + drawer + quarantine + upload + analytics** (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `119-media-index.html` · `178-media-index-go-media.html` | `/media` — library | `018-media.webp` |
| `120-media-index-tab-storage.html` · `177-media-index-state-browse-files.html` | Storage tab + browse state | `074-media-browse-all-files.webp` + `077-media-list-view.webp` |
| `121-media-index-tab-quarantine.html` · `187-media-index-go-quarantine.html` | Quarantine tab | `021-media-quarantine.webp` |
| `122-media-index-tab-analytics.html` | Analytics tab | `019-media-analytics.webp` |
| *(shot+spec baseline)* | Folders view | `020-media-folders.webp` |
| *(shot+spec baseline)* | Asset details + preview | `073-media-asset-details-and-preview.webp` |
| *(shot+spec baseline)* | Share-link dialog · edit-metadata dialog | `075-…-share-link-dialog.webp` + `076-…-edit-asset-metadata-dialog.webp` |
| *(spec baseline)* | Upload flow (no shot — verify at Gate A) | — |

**Must include (every variant):** asset grid (type/source filters frozen) with **clickable cards → detail drawer** (C14-adjacent: the click must work) · drawer (preview, metadata, references, share links, actions) · quarantine tab with review craft (C17 = 10s undo + reason/confirm; see R5) · upload flow (spec-backed, no shot, local staged simulation) · analytics (frozen metrics; no invented 30-day series) · bulk bar (A1 corrected in R5: count + clear + local-prep tag/move + delete-gated) · C19 "Showing 1–24 of 146 · page 1 of 7" · deletes previewed + confirmed + undo · dark + 360–2560.
**Content lock:** freeze tab/filter labels, card anatomy, drawer fields, quarantine columns, upload copy, analytics metrics at Gate S. Placeholder art is generated (SVG/CSS) — never hotlinked.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error + upload-progress states · grid keyboard-complete (roving + drawer trap).

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F23 scope

### CHANGE — every item in **all 5 variants**
- **C17** — Quarantine review craft: context + reason + confirm **and the report's 10-second undo toast** + clickable cards (no dead cards). *(§6.1; corrected R2/R5)*
- **C3** — AA-safe text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C9** — Mono refs/hashes. *(§6.1)* · **C12** — Display counts. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage (P1 → **5/5**)
- **A1** — Bulk bar, **as corrected by R2/R3/R5**: count + Clear + "Tag…"/"Move…" labelled local-preparation (no bulk endpoints) + "Delete (N)" preview/confirm/undo. **No "Quarantine" bulk action** — no endpoint exists and no operator quarantines an asset. This A1 is an F23 extension, not a report mandate; C19 pagination info also applies.

### KEEP — present in every variant
- Library structure (storage + quarantine + analytics). · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F23 scope: Gate S freezes tabs/filters + transcribes drawer/dialogs/quarantine + spec-backed upload; Gate R quotes F23 rows + §2.2; Gate A maps `media` **50 paths / 57 operations** including undocumented response fields and missing bulk endpoints; Gate T ≥8 enterprise ops/DAM references **after** S/R/A. All four blocks were printed PASS on 3 November 2026 in the F23 run record; see `families/F23-media-library/docs/GATE-EVIDENCE.md`.

```
## GATE S (F23) · Shots: 9/9 · HTML: <n>/7 · Dialogs transcribed: YES · Gate: PASS/FAIL
## GATE R (F23) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F23) · Specs: 1/1 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F23) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 grid-led · ≥1 quarantine-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured library, working cards, guarded deletes |
| V2 | Grid-spine: the asset wall owns the screen, drawer docks |
| V3 | Quarantine-first: trust review leads, library below |
| V4 | Dense console: compact DAM + analytics rail for media ops |
| V5 | Motion-signature: upload/drawer choreography + transitions |

## 9. BUILD (manual, one by one)

Master §9; family paths below.

```
admin-portal-lab/families/F23-media-library/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F23 primaries:** library tabs, filters, asset grid + cards, detail drawer, quarantine review, upload flow, analytics, bulk bar.
States: asset ok/quarantined/flagged · drawer open · upload progress/done/failed · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F23) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F23) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F23 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C17/C3/C5/C9/C12/C18/C20 in 5/5; A1 in 5/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "Dead asset card — FAIL, drawer or demo-label." · "Preview-less delete — FAIL." · "F23-V1 approved — never regenerate it."

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

*End of prompt F23. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*


---

## Owner review — source-complete data and differentiated design (2026-11-02)

When a reviewer says demo data is incomplete or designs resemble the production screenshot, re-inspect the applicable captures individually, reconcile every identity and visible record with the related Swagger contracts, and document missing or conflicting data. Do not substitute one account’s data for another, invent unseen pages, claim a simulated action was executed, or claim a server permission/audit result. Search and inspect relevant public design examples, then change information architecture and visual hierarchy as appropriate — not just colours or small spacing changes. Preserve approved work unless the user asks for revisions; this review explicitly requests changes to both F15 and F16. Test the revised pages and report actual coverage and unresolved gaps. Follow the shared master and relevant family scope; do not mark gates passed merely because an initial mock exists.

---

## Run record — 3 November 2026 (F23 scoped run)

Executed Gates S → R → A → T in order and printed all four PASS blocks (archived in `admin-portal-lab/families/F23-media-library/docs/GATE-EVIDENCE.md`). Then updated this prompt with the evidence-led Run revision (R1–R7) and corrected §4 / §6 / §7, and hand-authored V1–V5 plus six docs under `admin-portal-lab/families/F23-media-library/`. Gallery, `manifest.json` and `DECISIONS.md` were merged; F01–F22 results were preserved and F24/F25 were not run.

Delivered: `V1 Ground-truth desk`, `V2 Grid spine`, `V3 Trust review`, `V4 Dense console`, `V5 Choreography` — distinct information architectures, one locked teal token file, full-width collapsible shell, `?theme=` boot, working card→drawer, captured dialogs, corrected A1 bulk bar, C17 10-second undo, C19 pagination info, spec-backed staged upload, captured analytics with sparse-data honesty, empty/skeleton/error/upload-progress states and no-JS summaries. Size ≈115–118 KB raw / ≈31 KB gzip per page, over the 70 KB soft budget and disclosed.

**Simple smoke test only** (owner instruction "only test it simple … we will review it manually"): 5/5 pages returned HTTP 200 with cards, 3 tabs, 3 panels, 18-item shell rail, card→drawer, Escape, dark toggle and 0 JS errors at 1440 light; `?theme=dark` boot opened. Full width matrix, axe-core and exhaustive interaction checks were **not** run and are not claimed. Preview: `http://localhost:8131/`. No production writes, no input-capture edits, no push/commit/branch. Owner manual review of the F23 pages and the earlier F01–F22 pages comes next; based on that review the HTML pages and **all** AI prompts will be revised.
