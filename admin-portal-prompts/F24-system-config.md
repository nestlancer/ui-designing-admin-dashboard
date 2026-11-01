# Nestlancer Admin Portal Lab — F24 · System Config — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F24 · System Config.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F24-system-config/V1…V5/`** — Health + Config + Features + Jobs + Templates + Operations (integrations + audit = F25). Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct system config exactly (6 tabs, 14 configs, 12 flags, jobs, 62 templates, ops) first. 2. **Research analyst** — quote every F24 Finding/C/A/KEEP. 3. **API analyst** — map tabs to `admin` (system slice) + `gateway` (health/registry) specs. 4. **Design-template researcher** — ≥8 admin-settings consoles **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject unguarded toggles, template-list sprawl, unlogged power.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F24 shots + HTML + metadata | 6 tabs + template closure frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F24-system-config/docs/REPORT-STUDY.md` |
| 2 · API | §3 specs | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** change the machine safely — every toggle guarded, every template findable, every change logged.

## 1.3 Manual craft rule — summary

Hand-write each `families/F24-system-config/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F24 screenshots (9):** `059-system.webp` (hub) · `060-system-features.webp` · `061-system-jobs.webp` · `062-system-operations.webp` · `063-system-templates.webp` · `104-system-configuration.webp` · `105-system-loaded-diagnostics.webp` · `106-templates-email-edit-and-preview.webp` · `107-templates-notification-edit-and-preview.webp`. 3. `nestlancer-admin-pages-html/README.md`, F24 HTML (§4) + `audit-metadata.json` (`/system` filter — Health/Config14/Features12/Jobs/Templates62/Operations). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + specs: `admin.openapi.json` (56 paths — system/config/features/jobs/templates/ops slice) · `gateway.openapi.json` (22 paths — health/registry for the Health tab). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F24 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F24 · System Config

The machine room: **Health** (status panels), **Config** (14 settings), **Features** (12 flags), **Jobs** (queues), **Templates** (62 notification templates — the closure item: searchable, previewable, editable per spec), **Operations** (ops actions). Every state-changing control is guarded (confirm + reason where destructive) and audit-visible (A15); the 62-template sprawl gets search + preview + grouping so no template hides.

> **Business weight:** 🟠 the blast radius lives here — guardrails are the feature.

| | |
|---|---|
| Routes | `/system` (+ 6 tabs in-page) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **all 6 tabs** (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `123-system-index.html` · `179-system-index-go-system.html` | `/system` — hub | `059-system.webp` |
| `124-system-index-tab-health.html` | Health tab | `105-system-loaded-diagnostics.webp` |
| `125-system-index-tab-config14.html` | Config tab (14 settings) | `104-system-configuration.webp` |
| `126-system-index-tab-features12.html` | Features tab (12 flags) | `060-system-features.webp` |
| `127-system-index-tab-jobs.html` | Jobs tab | `061-system-jobs.webp` |
| `128-system-index-tab-templates62.html` | Templates tab (62) | `063-system-templates.webp` |
| `129-system-index-tab-operations.html` | Operations tab | `062-system-operations.webp` |
| *(shot+spec baseline)* | Template editors (email + notification) | `106-…-email-edit-and-preview.webp` + `107-…-notification-edit-and-preview.webp` |

**Must include (every variant):** health panels (frozen signals) · 14 configs (validated, guarded saves) · 12 flags (guarded toggles + rollout honesty) · jobs (queues + retry states) · **62 templates searchable + previewable + editable** · operations + webhooks form · A15 audit visibility on every change · dark + 375px.
**Content lock:** freeze tab labels, config/flag names + helpers, job names, template names, ops actions at Gate S. Template bodies from spec/captures only — never invented.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error + change-receipt states · toggles/forms keyboard-complete + announced.

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F24 scope

### CHANGE — every item in **all 5 variants**
- **C3** — AA-safe text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C9** — Mono keys/refs/IDs. *(§6.1)* · **C12** — Display section titles. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage
- **A15** (P3 → ≥3/5) — Change audit visibility (who/when/why on configs/flags/templates/ops).
- Template closure (search + preview + grouping over 62) — 5/5 (family craft).

### KEEP — present in every variant
- Machine-room structure (6 tabs). · Guarded power. · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F24 scope: Gate S freezes 6 tabs + 62 templates + template editors; Gate R quotes F24 rows; Gate A maps admin + gateway slices; Gate T ≥8 admin-settings consoles **after** S/R/A.

```
## GATE S (F24) · Shots: 9/9 · HTML: <n>/8 · Templates closed: 62 · Gate: PASS/FAIL
## GATE R (F24) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F24) · Specs: 2/2 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F24) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 health-led · ≥1 config-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured tabs, guarded power, template search |
| V2 | Health-spine: machine status owns the screen, config docked |
| V3 | Config-first: settings + flags as guided sections with audit rail |
| V4 | Dense console: compact machine room + template drawer |
| V5 | Motion-signature: toggle/save choreography + transitions |

## 9. BUILD (manual, one by one)

Master §9; family paths below. Destructive/ops actions MUST be confirm-gated + audit-visible in every variant (lab static — confirm + receipt copy only).

```
admin-portal-lab/families/F24-system-config/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F24 primaries:** config tabs, health panels, config forms, flag toggles, jobs board, template library + preview + editor, ops actions + webhooks form, audit strip.
States: config dirty/invalid/saving/saved · flag on/off/pending · job queued/running/failed/retry · template draft/published · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F24) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F24) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F24 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C3/C5/C9/C12/C18/C20 in 5/5; A15 ≥3/5 + template closure 5/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "Unguarded toggle — FAIL." · "Lost template — FAIL, 62 means 62." · "F24-V1 approved — never regenerate it."

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

*End of prompt F24. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*
