# Nestlancer Admin Portal Lab — F12 · Project Details + Delivery (SCREENSHOT-ONLY) — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F12 · Project Details + Delivery.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F12-project-details-delivery/V1…V5/`** — and nothing else. Never touch other families.
>
> **⚠️ SCREENSHOT-ONLY — read this:** live `/projects/[id]` renders only the app's *Project not found / Network Error* state (finding #1). There is NO live detail DOM to freeze. The delivery baseline = **13 screenshots** + the `projects` + `progress` specs. Mark this provenance at Gate S (`screenshot-spec`) and demo-label anything neither shot- nor spec-backed. Every variant still ships the error/degraded states (the live truth) alongside the rebuilt delivery view.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

> **Owner review — full-width, collapsible shell:** Authenticated console pages F02–F25 must use the full viewport width available beside the sidebar, with responsive gutters and no centered page-level max-width. Provide an obvious keyboard-accessible desktop Collapse/Expand control, a named icon rail, and persistent state across reloads/families; use a mobile drawer instead on small screens. Check 1920/2560 as well as 360–1440 in both themes. Keep shared tokens unchanged (`--content` must not cap console pages). Individual reading columns and dialogs may remain appropriately sized. F01 sign-in remains standalone, without an added sidebar. See master §9.2a.

## 1. YOUR ROLE

1. **Product archaeologist** — transcribe all 13 screenshots (sections, fields, rupees, vocabulary) before designing. 2. **Research analyst** — quote finding #1 + every F12 C/A/KEEP. 3. **API analyst** — map delivery sections to `projects` + `progress` (+`payments`) specs. 4. **Design-template researcher** — ≥8 delivery dashboards **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject invented milestones, unlabelled mock content, dropped error states.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | 13 shots + 1 error HTML + metadata | Screenshot transcription + provenance frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F12-project-details-delivery/docs/REPORT-STUDY.md` |
| 2 · API | §3 specs | `docs/API-MAP.md` (screenshot-spec cross-map) |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** rebuild the room the money is in — faithfully — while the door is still broken.

## 1.3 Manual craft rule — summary

Hand-write each `families/F12-project-details-delivery/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F12 screenshots (13):** `053-projects-details.webp` (canonical detail) · `083-project-delivery-add-milestone-dialog.webp` · `084-project-delivery-deliverable-preview.webp` · `085-project-delivery-upload-deliverable-form.webp` · `086-project-details-analytics.webp` · `087-project-details-archive-confirmation.webp` · `088-project-details-change-operator-dialog.webp` · `089-project-details-daily-progress.webp` · `090-project-details-milestones-and-files.webp` · `091-project-details-update-status-dialog.webp` · `092-project-details-use-as-template-dialog.webp` · `093-project-payments-record-manual-payment-form.webp` · `094-project-progress-daily-template-form.webp`. 3. `nestlancer-admin-pages-html/README.md`, F12 HTML (§4) + `audit-metadata.json` (`/projects/*` filter — error evidence). 4. Report `.md` full + `.xlsx` 10 sheets (finding #1 + §2.2 + F12 rows; `.md` wins). 5. `backend-api-swagger/README.md` + specs: `projects.openapi.json` (38 paths) · `progress.openapi.json` (22 paths — milestones/progress) · `payments` (invoice slice). Cross-map every screenshot section to endpoints. 6. **Gate T only after Swagger + §4.** 7. **Touch only** F12 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F12 · Project Details + Delivery

The delivery 360°: **detail** (`053`: header, status, parties, totals), **milestones & files** (`090`), **daily progress** (`089` + template `094`), **delivery dialogs** (add-milestone `083`, upload `085`, preview `084`), **analytics** (`086`), **manual payment** (`093`), **ops dialogs** (archive `087`, change-operator `088`, update-status `091`, use-as-template `092`). Transcribe each shot at Gate S: sections, fields, ₹ figures, status vocabulary, dialog copy. Invoice-schedule depth is spec-backed (no dedicated shot — verify at Gate A). Live truth (`189` error) ships in every variant as the degraded path — because the outage is still the first thing an operator sees.

> **Business weight:** 🔴🔴 the delivery record — invoices, milestones, client view. Faithfulness is the feature.

| | |
|---|---|
| Routes | `/projects/[id]` (+ sub-views in-page) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **all sub-views + error/degraded** (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `189-projects-details-not-found-error.html` | Live truth: *Project not found / Network Error* | — (error evidence) |
| *(shot+spec baseline)* | Detail canonical (header/status/parties/totals) | `053-projects-details.webp` |
| *(shot+spec baseline)* | Milestones & files | `090-project-details-milestones-and-files.webp` |
| *(shot+spec baseline)* | Daily progress + progress template | `089-…-daily-progress.webp` + `094-…-daily-template-form.webp` |
| *(shot+spec baseline)* | Add-milestone dialog · upload form · deliverable preview | `083` + `085` + `084` |
| *(shot+spec baseline)* | Detail analytics | `086-project-details-analytics.webp` |
| *(shot+spec baseline)* | Record manual payment | `093-project-payments-record-manual-payment-form.webp` |
| *(shot+spec baseline)* | Archive confirm · change operator · update status · use-as-template | `087` + `088` + `091` + `092` |

**Must include (every variant):** canonical delivery anatomy (all sub-views, transcribed content) · invoices schedule + receipts (tabular ₹) · milestones with progress honesty · timeline + notes · **error/degraded entry states** (live truth first, rebuilt view behind explicit "preview of intended UI" framing + demo labels where neither shot- nor spec-backed) · dark + 375px.
**Content lock:** freeze transcribed sections/fields/figures/vocabulary per winning shot at Gate S; spec field names for the rest. Provenance per section recorded (`shot` / `spec` / `demo`) — demo content labelled in-variant.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error + degraded per section · tabs keyboard-clean · reduced-motion.

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Demo-data labelling: master §5.3 (load-bearing here). Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F12 scope

### CHANGE — every item in **all 5 variants**
- **C9** — Mono refs/IDs/timestamps; tabular money. *(§6.1)*
- **C3** — AA-safe status text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C12** — Display totals. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage
- **A11** (P2 → 5/5 here — outage family) — Degraded entry + per-section degraded states + retry honesty.

### KEEP — present in every variant
- Delivery anatomy as transcribed (no section dropped). · Invoices/totals honesty. · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F12 scope: Gate S transcribes the 13 shots listed in §3 (reconcile dupes, provenance per section) + logs error evidence; Gate R quotes finding #1 + F12 rows; Gate A cross-maps shots↔`projects`/`progress`/`payments`; Gate T ≥8 delivery dashboards **after** S/R/A.

```
## GATE S (F12) · Shots: 13/13 · HTML: 1/1 (error) · Transcribed: YES · Provenance: YES · Gate: PASS/FAIL
## GATE R (F12) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F12) · Specs: 3/3 · Endpoints: <n> · Demo-only: <n> (labelled) · Gate: PASS/FAIL
## GATE T (F12) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 milestone-led · ≥1 money-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth rebuild: transcribed anatomy, honest error entry, calm |
| V2 | Milestone-spine: delivery progress owns the page, money docked |
| V3 | Money-first: invoices + totals lead, work streams beside |
| V4 | Dense console: compact 360° with timeline rail for delivery leads |
| V5 | Motion-signature: progress choreography + sub-view transitions |

## 9. BUILD (manual, one by one)

Master §9; family paths below. Error/degraded entry + provenance labels MUST be present in every variant (Gate 3).

```
admin-portal-lab/families/F12-project-details-delivery/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F12 primaries:** delivery header, sub-view tabs, overview, milestones, invoices + receipts, team & files, documents/media/notes/timeline, error/degraded entry, provenance labels.
States: sub-view active · milestone progress states · invoice paid/pending/overdue · error/degraded/recovered · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F12) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F12) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F12 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 (transcription + provenance in BASELINE-MAP) · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C9/C3/C5/C12/C18/C20 in 5/5; A11 in 5/5 (manifest)
- [ ] Empty+skeleton+error+degraded; light+dark; 360–1440; keyboard-complete; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "Unprovenanced section — shot, spec, or demo-label." · "Dropped error entry — FAIL, that's the live truth." · "F12-V1 approved — never regenerate it."

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

*End of prompt F12. Start at §3 Step 1. Print every gate block. Hand-craft all 5. Transcribe before you draw.*

### Contract clarification discovered during continuation
The bundled projects and progress OpenAPI files document the same normalized milestone POST route with incompatible DTOs (`CreateMilestonesAdminDto` requires a milestones array; `CreateMilestoneDto` requires name, startDate and endDate). Request backend clarification before wiring writes; do not choose one silently. Existing HTML remains a non-mutating prototype.
