# Nestlancer Admin Portal Lab — F05 · Pipeline Hubs · User + Project — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F05 · Pipeline Hubs · User + Project.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F05-pipeline-user-project-hubs/V1…V5/`** — the User-hub + Project-hub tabs and their drill-downs (F04 owns the stage tab). Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

> **Owner review — full-width, collapsible shell:** Authenticated console pages F02–F25 must use the full viewport width available beside the sidebar, with responsive gutters and no centered page-level max-width. Provide an obvious keyboard-accessible desktop Collapse/Expand control, a named icon rail, and persistent state across reloads/families; use a mobile drawer instead on small screens. Check 1920/2560 as well as 360–1440 in both themes. Keep shared tokens unchanged (`--content` must not cap console pages). Individual reading columns and dialogs may remain appropriately sized. F01 sign-in remains standalone, without an added sidebar. See master §9.2a.

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct both hubs exactly (selectors, 360° sections, empty/error states) first. 2. **Research analyst** — quote every F05 Finding/C/A/KEEP. 3. **API analyst** — map hub sections to users/projects/requests/quotes/payments specs. 4. **Design-template researcher** — ≥8 360°-profile/hub pages **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject tab wallpaper, dead drills, colour-only status.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F05 shots + HTML + metadata | Hub anatomy + drill map frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F05-pipeline-user-project-hubs/docs/REPORT-STUDY.md` |
| 2 · API | §3 specs | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** one client or one project, whole story, 60 seconds, then act.

## 1.3 Manual craft rule — summary

Hand-write each `families/F05-pipeline-user-project-hubs/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F05 screenshots (3):** `045-pipeline-projects.webp` (Project hub list) · `046-pipeline-projects-details.webp` (project-hub details — outage-blocked, report §2.2) · `047-pipeline-users.webp` (User hub). 3. `nestlancer-admin-pages-html/README.md`, F05 HTML (§4) + `audit-metadata.json` (`/pipeline/users`, `/pipeline/projects` filter). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + specs: `users` (directory + detail + pipeline) · `projects` + `progress` (delivery 360°) · `requests`/`quotes`/`payments`/`messaging` (origin chain sections) · `admin` (aggregates). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F05 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F05 · Pipeline Hubs · User + Project

The 360° views: **User hub** (*select a user → requests/quotes/projects/payments/messages/trust-account pipeline*) and **Project hub** (*select a project → delivery 360°: milestones, payments, origin chain, timeline*). Captured states are thin (hub shells + tab bars; project hub shows the live *Network Error* — finding #1; user-pipeline tab depth ships in F16 (shots `114`–`119` — cite, don't duplicate). Your baseline = captured shells + F16's user detail + F12's delivery screenshots + Swagger. Design the hubs the fixed backend deserves — with degraded states for while it's broken.

> **Business weight:** 🟠 the "tell me everything about X" surface — support, escalations, and VIP handling live here.

| | |
|---|---|
| Routes | `/pipeline/users` + `/pipeline/projects` (+ drilled user/project contexts) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **both hubs** (tab-switched in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `134-pipeline-users-hub.html` · `43-pipeline-sub-pipeline-users.html` | `/pipeline/users` — User hub | `047-pipeline-users.webp` |
| `33/37/41/45/49-…-tab-user-hub.html` (5 files) | User-hub tab states (reconcile dupes) | `047-pipeline-users.webp` |
| `135-pipeline-projects-hub.html` · `39-pipeline-sub-pipeline-projects.html` · `150-projects-hub-list.html` · `151-projects-details.html` | `/pipeline/projects` — Project hub (live: *Network Error*) | `045-pipeline-projects.webp` + `046-pipeline-projects-details.webp` |
| `34/38/42/46/50-…-tab-project-hub.html` (5 files) | Project-hub tab states (reconcile dupes) | `045-pipeline-projects.webp` |

**Must include (every variant):** hub selectors (search by title/id — freeze captured copy) · User 360° sections (requests/quotes/projects/payments/messages/trust — per report §2.2 gap list + `users` spec) · Project 360° sections (milestones/payments/origin/timeline — per F12 screenshots + `projects`/`progress` specs) · drill-downs with C11-clean URLs · degraded/empty/error per section (A11) · dark + 375px.
**Content lock:** freeze hub titles, selector copy, section names, tab labels from captures at Gate S; section *contents* follow F12/F16/F08/F10/F13/F18 frozen content (cite the source family per section — never invent). Unverifiable = demo-labelled.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error + degraded per section · tabs + selectors keyboard-clean.

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F05 scope

### CHANGE — every item in **all 5 variants**
- **C9** — Mono IDs/refs/timestamps across 360° sections. *(§6.1)*
- **C11** — Unified drill-down URL grammar. *(§6.1)*
- **C3** — AA-safe badge text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C12** — Display money/counts. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage
- **A11** (P2 → ≥3/5) — Degraded banner + per-section degraded states (this family lives the outage).
- **A13** (P3 → ≥3/5) — Mini health strip per hub (entity status at a glance).
**Coverage:** P1 in 5/5 (n/a) · P2–P3 in ≥3/5 (manifest).

### KEEP — present in every variant
- The 360° mental model (one entity, whole story). · Honest microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F05 scope: Gate S freezes hub shells + cross-family content citations; Gate R quotes hub rows + §2.2 gaps; Gate A maps sections to specs (note projects endpoints exist-but-down); Gate T ≥8 360°/profile/hub pages **after** S/R/A.

```
## GATE S (F05) · Shots: 3/3 · HTML: <n>/<n> · Sections cited: <n> · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F05) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F05) · Specs: <n>/<n> · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F05) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 360-led · ≥1 timeline-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured hubs, unified drills, degraded honesty |
| V2 | Timeline-360: origin chain → now as the spine, sections docked |
| V3 | Card-360: entity sections as bento with health strip |
| V4 | Dense console: compact ledger of everything about X |
| V5 | Motion-signature: staged section reveals + drill transitions |

## 9. BUILD (manual, one by one)

Master §9; family paths below.

```
admin-portal-lab/families/F05-pipeline-user-project-hubs/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F05 primaries:** hub selectors (search), 360° section cards, drill links, degraded section states, shared hub tab-bar.
States: unselected/selected entity · section full/empty/error/degraded · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F05) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F05) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F05 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C9/C11/C3/C5/C12/C18/C20 in 5/5; A11/A13 ≥3/5 (manifest)
- [ ] Empty+skeleton+error+degraded; light+dark; 360–1440; keyboard-clean; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "Dead drill — Gate-A route or demo-labelled." · "F05-V1 approved — never regenerate it."

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

*End of prompt F05. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*
