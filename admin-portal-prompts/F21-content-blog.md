# Nestlancer Admin Portal Lab — F21 · Content · Blog + Editor — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F21 · Content · Blog + Editor.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F21-content-blog/V1…V5/`** — and nothing else. Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the content surface exactly (posts, comments, pending, reported, analytics, taxonomy, editor) first. 2. **Research analyst** — quote every F21 Finding/C/A/KEEP. 3. **API analyst** — map surfaces to `blog` spec. 4. **Design-template researcher** — ≥8 editorial CMS UIs **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject editor-less CMS, unmoderated comments, one-click publishes.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F21 shots + HTML + metadata | Tabs + editor modes frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F21-content-blog/docs/REPORT-STUDY.md` |
| 2 · API | `blog` spec | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** ship a correct post in one sitting — draft, review, schedule, publish, all guarded.

## 1.3 Manual craft rule — summary

Hand-write each `families/F21-content-blog/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F21 screenshots (11):** `009-content.webp` (hub) · `010-content-analytics.webp` · `011-content-comments.webp` · `012-content-pending.webp` · `013-content-reported.webp` · `014-content-taxonomy.webp` · `066-blog-editor-new-post-form.webp` · `067-blog-editor-preview-mode.webp` · `068-blog-editor-split-mode.webp` · `069-blog-editor-write-mode.webp` · `071-content-card-view.webp`. 3. `nestlancer-admin-pages-html/README.md`, F21 HTML (§4) + `audit-metadata.json` (`/content*` filter — 18 states). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + spec: `blog.openapi.json` (69 paths — posts, editor, comments, pending, reported, schedule, analytics, taxonomy). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F21 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F21 · Content · Blog + Editor

The editorial desk: **Posts · Comments · Pending · Reported · Analytics · Taxonomy** tabs + post details + the **article editor** (modes, new-post, preview) + **scheduled publish**. Broadest capture in the console (18 states, 11 shots); editor modes are shot-backed (`067`/`068`/`069`) AND live-verified (`173`/`174`/`175`); scheduled publish is spec-backed (no dedicated shot — verify at Gate A). Publish/schedule/delete stay confirm-gated; comments/pending/reported get review craft (C17).

> **Business weight:** 🟡 the public voice — every publish guarded, every report reviewed.

| | |
|---|---|
| Routes | `/content` (+ posts/comments/pending/reported/analytics/taxonomy; editor in-page) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **all tabs + editor + schedule** (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `101-content-index.html` | `/content` — hub | `009-content.webp` |
| `102-content-index-tab-posts.html` | Posts tab | `071-content-card-view.webp` |
| `103-content-index-tab-comments.html` | Comments tab | `011-content-comments.webp` |
| `104-content-index-tab-pending.html` | Pending tab | `012-content-pending.webp` |
| `105-content-index-tab-reported.html` | Reported tab | `013-content-reported.webp` |
| `106-content-index-tab-analytics.html` | Analytics tab | `010-content-analytics.webp` |
| `107-content-index-tab-taxonomy.html` | Taxonomy tab | `014-content-taxonomy.webp` |
| `108…112-content-sub-content-posts-*.html` (5 posts) | Post details (reconcile) | — (post states) |
| `171-content-new-post.html` · `192-content-new-post-direct.html` | New-post editor | `066-blog-editor-new-post-form.webp` |
| `172-content-editor.html` | Editor shell | `069-blog-editor-write-mode.webp` |
| `173/174/175-content-editor-state-write/split/preview.html` | Editor modes (live-verified) | `069` + `068` + `067` |
| *(spec baseline)* | Scheduled publish (no shot — verify at Gate A) | — |

**Must include (every variant):** all 6 tabs (frozen columns/counts) · post details · editor (modes per shots `067`–`069` + live `173`–`175`: write/split/preview, fields, media entry) · new-post · scheduled publish (spec-backed, no shot) · publish/schedule/delete confirm-gated · comments/pending/reported review craft (C17) · taxonomy management · C11-clean editor routes · dark + 375px.
**Content lock:** freeze tab labels, table columns, editor fields/controls, schedule copy, status vocabulary at Gate S. Editor features ONLY from shots + `blog` spec — never a generic block-editor wishlist.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error + publish-receipt states · editor + tabs keyboard-complete.

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F21 scope

### CHANGE — every item in **all 5 variants**
- **C11** — Unified editor/creation route grammar (new-post, edit, preview links). *(§6.1)*
- **C17** — Review craft on comments/pending/reported (context + reason + confirm). *(§6.1)*
- **C3** — AA-safe text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C9** — Mono refs/slugs/timestamps. *(§6.1)* · **C12** — Display counts. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage
- No F21-targeted P1 ADDs; spec-backed scheduled publish + shot+live editor modes ship as family craft — 5/5.
**Coverage:** manifest records.

### KEEP — present in every variant
- Editorial structure (6 tabs + editor + schedule). · Guarded publishing. · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F21 scope: Gate S freezes 6 tabs + editor + modes + spec-backed schedule; Gate R quotes F21 rows + §2.2; Gate A maps `blog` 69 paths; Gate T ≥8 editorial CMS UIs **after** S/R/A.

```
## GATE S (F21) · Shots: 11/11 · HTML: <n>/18 · Modes verified: YES · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F21) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F21) · Specs: 1/1 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F21) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 editor-led · ≥1 desk-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured desk + editor, guarded publishes, calm |
| V2 | Editor-spine: the writing surface owns the screen, desk docked |
| V3 | Desk-first: editorial queue (pending/reported) leads, editor below |
| V4 | Dense console: compact CMS + preview drawer for content ops |
| V5 | Motion-signature: draft→publish choreography + transitions |

## 9. BUILD (manual, one by one)

Master §9; family paths below. Publish/schedule/delete MUST be confirm-gated in every variant (lab static — confirm + receipt copy only).

```
admin-portal-lab/families/F21-content-blog/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F21 primaries:** desk tabs, post tables, post details, editor + modes + preview, schedule control, review panels, taxonomy manager.
States: post draft/pending/published/scheduled/reported · editor edit/preview · publish confirm/receipt · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F21) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F21) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F21 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C11/C17/C3/C5/C9/C12/C18/C20 in 5/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "One-click publish — FAIL." · "Generic block-editor wishlist — FAIL, shots + spec only." · "F21-V1 approved — never regenerate it."

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

*End of prompt F21. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*
