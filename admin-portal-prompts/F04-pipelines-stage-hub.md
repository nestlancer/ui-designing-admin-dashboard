# Nestlancer Admin Portal Lab — F04 · Pipelines · Stage Pipeline — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F04 · Pipelines · Stage Pipeline.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F04-pipelines-stage-hub/V1…V5/`** — the stage-pipeline tab + its cards + API reference (F05 owns the User/Project hub tabs). Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

> **Owner review — full-width, collapsible shell:** Authenticated console pages F02–F25 must use the full viewport width available beside the sidebar, with responsive gutters and no centered page-level max-width. Provide an obvious keyboard-accessible desktop Collapse/Expand control, a named icon rail, and persistent state across reloads/families; use a mobile drawer instead on small screens. Check 1920/2560 as well as 360–1440 in both themes. Keep shared tokens unchanged (`--content` must not cap console pages). Individual reading columns and dialogs may remain appropriately sized. F01 sign-in remains standalone, without an added sidebar. See master §9.2a.

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the stage pipeline exactly (stage cards, trust cards, consoles grid, API reference) first. 2. **Research analyst** — quote every F04 Finding/C/A/KEEP. 3. **API analyst** — map counts + reference entries to specs. 4. **Design-template researcher** — ≥8 pipeline/hub pages **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject card wallpaper, dead hub links, dev-tool clutter.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F04 shot + HTML + metadata | Cards + counts + reference frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F04-pipelines-stage-hub/docs/REPORT-STUDY.md` |
| 2 · API | §3 specs | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** a new operator must read the whole business flow in 60 seconds, then jump anywhere in one click.

## 1.3 Manual craft rule — summary

Hand-write each `families/F04-pipelines-stage-hub/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F04 screenshot (1):** `044-pipeline.webp` — stage cards, Users&trust, standalone consoles, Admin API reference. 3. `nestlancer-admin-pages-html/README.md`, F04 HTML (§4) + `audit-metadata.json` (`/pipeline` filter). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + specs: `admin` (pipeline/dashboard aggregates) · `requests`/`quotes`/`projects`/`payments`/`messaging`/`users` (stage counts) · `gateway` (22 paths — docs-specs feed the API reference; verify at Gate A). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F04 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F04 · Pipelines · Stage Pipeline

The business-at-a-glance map: *Client delivery* stage cards (Inquiries → Requests → Quotes → Projects → Payments → Messages, each with count + one-line job + sub-guidance — freeze captured counts/labels at Gate S), *Users & trust* cards (Users · Moderation · Audit logs), *Standalone consoles* grid (Dashboard · Analytics · Blog · Portfolio · Media · System · Webhooks), and the *Admin API reference* accordions (16 areas, endpoint counts, base path `/api/v1`). The report's open question (§4.1): the API reference is a dev-tool inside an ops console — your variants decide its fate (keep as collapsible power-tool, or relocate) WITHOUT inventing features.

> **Business weight:** 🟡 orientation surface — the map every other screen assumes.

| | |
|---|---|
| Routes | `/pipeline` (Stage pipeline tab; hub tabs belong to F05 but the tab bar is shared — render it, deep-link the others) |
| Shell | F02's shell language (badges per C6) |
| Variants | **V1–V5** — each covers **all** F04 states (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `35-pipeline-index.html` | `/pipeline` — stage pipeline | `044-pipeline.webp` |
| `31-dashboard-sub-pipeline.html` · `47-pipeline-sub-pipeline.html` | Same route via harvests (reconcile dupes) | `044-pipeline.webp` |
| `32/36/40/44/48-dashboard…-tab-stage-pipeline.html` (5 files) | Stage tab active (reconcile dupes) | `044-pipeline.webp` |
| `152-projects-details-tab-stage-pipeline.html` | Stage pipeline tab state | — (tab state) |
| `153/154/155-projects-details-state-*-endpoints.html` (Payments 16 · Messages 6 · Analytics 8) | API-reference accordion states | — (reference states) |

**Must include (every variant):** frozen stage cards (count + job + guidance + jump link, C11-clean URLs) · trust cards · consoles grid · API reference accordions (or explicit relocate-decision, documented) · shared 3-tab bar (Stage/User/Project) · dark + 375px (cards stack, accordions hold).
**Content lock:** freeze all card titles/counts/job-lines, console names, reference area names + endpoint counts + base path at Gate S. Never invent stages.
**Cross-cutting:** light + dark · 375px · empty (zero-count stage) + skeleton + error states · accordions + tabs keyboard-clean.

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F04 scope

### CHANGE — every item in **all 5 variants**
- **C11** — Hub jump-links use the unified creation/route grammar (no dead guesses). *(§6.1)*
- **C3** — AA-safe count/status text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C9** — Mono counts/refs/versions. *(§6.1)* · **C12** — Display-scale stage counts. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage
- No F04-targeted P1 ADDs; A11 degraded slot (P2 → ≥3/5) where stage counts can fail (Projects!) — honest zero/error per card.
**Coverage:** P1 in 5/5 (n/a) · P2–P3 in ≥3/5 (manifest).

### KEEP — present in every variant
- The stage-map mental model (end-to-end flow in order). · Honest microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F04 scope: Gate S freezes cards/counts/reference entries; Gate R quotes F04 rows; Gate A resolves counts + reference to specs; Gate T ≥8 pipeline/hub/overview pages **after** S/R/A.

```
## GATE S (F04) · Shots: 1/1 · HTML: <n>/<n> · Cards frozen: <n> · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F04) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F04) · Specs: <n>/<n> · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F04) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 flow-led · ≥1 narrative-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: current map, unified links, teal locked |
| V2 | Flow-first: the delivery chain as a visual pipeline with live counts |
| V3 | Hub-cards: stage + trust + consoles as one jump-grid with search |
| V4 | Dense console: compact map + inline API reference drawer |
| V5 | Motion-signature: count-ups + flow-draw animation, same map |

## 9. BUILD (manual, one by one)

Master §9; family paths below.

```
admin-portal-lab/families/F04-pipelines-stage-hub/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F04 primaries:** stage cards, trust cards, consoles grid, API accordions, shared hub tab-bar.
States: counts/zero/error per card · accordion open/closed · tab switching + deep links · dark + 375px stack. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F04) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F04) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F04 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C11/C3/C5/C9/C12/C18/C20 in 5/5; A11 ≥3/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-clean; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "Dead hub link — Gate-A route or demo-labelled." · "F04-V1 approved — never regenerate it."

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

*End of prompt F04. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*
