# Nestlancer Admin Portal Lab — F11 · Projects List (OUTAGE FAMILY) — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F11 · Projects List.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F11-projects-list/V1…V5/`** — the list only (F12 owns details/delivery). Never touch other families.
>
> **⚠️ OUTAGE FAMILY — read this:** `/api/v1/admin/projects*` is DOWN in production (report finding #1). The live list renders only a skeleton, *Loading…*, or *Network Error*. That is the truth you design for: degraded-first. The list's content baseline = screenshot `046` + `projects` spec (endpoints exist but fail — note at Gate A). Every variant ships list + loading + degraded + error + recovered states.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

1. **Product archaeologist** — document the outage evidence exactly (skeleton/loading/error states) first. 2. **Research analyst** — quote finding #1 + every F11 C/A/KEEP. 3. **API analyst** — map list/filter to `projects` spec (endpoints exist-but-down). 4. **Design-template researcher** — ≥8 project queues + degraded-state masters **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject error-wallpaper, silent zero-rows, mock-data posing as live.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F11 shot + HTML + metadata + finding #1 | Outage evidence + shot-baseline frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F11-projects-list/docs/REPORT-STUDY.md` |
| 2 · API | `projects` spec | `docs/API-MAP.md` (exist-but-down noted) |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** when the backend dies, the operator still knows what happened, what's safe, and what to do next.

## 1.3 Manual craft rule — summary

Hand-write each `families/F11-projects-list/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F11 screenshot (1):** `052-projects.webp` — the intended list (screenshot baseline). 3. `nestlancer-admin-pages-html/README.md`, F11 HTML (§4) + `audit-metadata.json` (`/projects` filter — the outage evidence). 4. Report `.md` full + `.xlsx` 10 sheets (finding #1 + §2.2 + F11 rows; `.md` wins). 5. `backend-api-swagger/README.md` + spec: `projects.openapi.json` (38 paths — list/filter slice for F11; delivery slice = F12). Record exist-but-down status. 6. **Gate T only after Swagger + §4.** 7. **Touch only** F11 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F11 · Projects List

Five projects the console can't show: live renders skeleton/*Loading…*/*Network Error* and nothing else. Your variants deliver TWO layers: (1) the intended list (from shot 046 + spec: filters, project rows/cards, status, assignees, deep links to F12) built degraded-first, and (2) the outage experience itself — banner + per-page degraded state + retry with honesty + what-still-works guidance (A11). Mock list content MUST be labelled demo data (never pose as live), per master §5.3.

> **Business weight:** 🔴 the room the money is in — dark. Design the light switch and the flashlight.

| | |
|---|---|
| Routes | `/projects` (rows → F12 `/projects/[id]`) |
| Shell | F02's shell language (badge: ⚠️ degraded per C6-decision) |
| Variants | **V1–V5** — each covers **list + loading + degraded + error + recovered** (state-switched in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `73-projects-index.html` | `/projects` — list (live: skeleton/loading) | `052-projects.webp` |
| `149-projects-index-settled.html` | Settled state (reconcile — likely still degraded) | — (outage evidence) |
| `185-projects-index-failure-reasons.html` | Failure-reasons state | — (outage evidence) |
| *(shot+spec baseline)* | Intended list content | `052-projects.webp` |

**Must include (every variant):** intended list (frozen-from-shot columns/filters + spec fields) with bulk/keyboard/saved-views parity where the list supports queues · **loading skeleton** (honest, timed-out aware) · **degraded state** (banner + page copy + retry + what-still-works + last-good-data honesty — A11) · **error state** (report wording basis: finding #1) · **recovered state** · demo-data labels on all mock rows · dark + 375px.
**Content lock:** freeze shot-046 columns/labels + outage copy from captures at Gate S; spec field names for the rest. No invented project names presented as real.
**Cross-cutting:** light + dark · 375px · all five states first-class · keyboard-complete · live regions announce state changes · reduced-motion.

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only; degraded/error stay inside status tokens. Demo-data labelling: master §5.3. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F11 scope

### CHANGE — every item in **all 5 variants**
- **A11 is the brief** (see ADD). Global polish: **C3** AA-safe text · **C5** teal-only · **C9** mono IDs · **C12** display counts · **C18** dark parity · **C20** logo alt. *(§6.1)*

### ADD — with priority + coverage (all **5/5** — degraded is the family)
- **A11** — Degraded banner + degraded page + retry honesty + last-good-data labelling.
- Degraded-first list states (loading/error/recovered) — 5/5.

### KEEP — present in every variant
- Honest microcopy as the brand voice (never blame the operator for the outage). · Teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F11 scope: Gate S documents outage evidence + shot baseline; Gate R quotes finding #1 + F11 rows; Gate A maps list slice + exist-but-down; Gate T ≥8 project queues + degraded-state references **after** S/R/A.

```
## GATE S (F11) · Shots: 1/1 · HTML: <n>/3 · Outage evidence logged: YES · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F11) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F11) · Specs: 1/1 · Endpoints: <n> exist-but-down · Demo-only: <n> (labelled) · Gate: PASS/FAIL
## GATE T (F11) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 list-led · ≥1 status-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: intended list + honest degraded/error/recovered ladder |
| V2 | Status-first: system state owns the header, list docks below |
| V3 | Card-queue: projects as status cards with degraded overlays |
| V4 | Dense console: compact ledger + retry telemetry for on-call |
| V5 | Motion-signature: state-transition choreography (loading→live→degraded) |

## 9. BUILD (manual, one by one)

Master §9; family paths below. All five states MUST be reachable in-page in every variant (Gate 3 checks each).

```
admin-portal-lab/families/F11-projects-list/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F11 primaries:** filters, project list/rows, loading skeleton, degraded banner + degraded page, error page, recovered notice, retry control, demo-data labels.
States: list/loading/degraded/error/recovered · retry idle/retrying/failed-again · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F11) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F11) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F11 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C3/C5/C9/C12/C18/C20 in 5/5; A11 + state ladder in 5/5 (manifest)
- [ ] All 5 states first-class; light+dark; 360–1440; keyboard-complete; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "Unlabelled mock rows — FAIL, demo-label them." · "Missing degraded state — FAIL, that's the brief." · "F11-V1 approved — never regenerate it."

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

*End of prompt F11. Start at §3 Step 1. Print every gate block. Hand-craft all 5. Design for the outage, not around it.*
