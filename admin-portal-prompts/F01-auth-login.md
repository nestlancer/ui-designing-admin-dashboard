# Nestlancer Admin Portal Lab — F01 · Auth · Operator Sign-in — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F01 · Auth · Operator Sign-in.** One of **25 independent family prompts** (F01–F25): 25 families × 5 variants = **125 templates**, all sharing ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F01-auth-login/V1…V5/`** — and nothing else. Never build, edit or delete other families.
>
> **Style parent:** `example-demo-prompt/example.homepage-prompt.md` (gates + phases) and `example-demo-prompt/example.portfolio-listing-prompt.md` (**hand-crafted only, no generators**). Shared rules (craft law, tokens, gates, build, components, perf, constraints) live in `admin-portal-prompt.md` — this file re-scopes them to F01. Read the master end-to-end first — but **this file is the task**.
>
> **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

You are, at the same time:

1. **A product archaeologist** — reconstruct the current operator sign-in exactly from its HTML + metadata before changing a pixel.
2. **A research analyst** — quote every Finding / C / A / KEEP item touching F01 from the report.
3. **An API analyst** — map the sign-in surfaces to `auth.openapi.json` (endpoints, fields, error codes).
4. **A design-template researcher** — after Swagger + F01 requirements lock, study ≥8 great admin/auth screens (layout/hierarchy only, never features).
5. **A senior UI designer + art director** — 5 different design ideas, same teal tokens.
6. **A front-end craftsperson** — self-contained HTML + CSS + small JS. Offline, accessible, responsive, no CDN.
7. **A harsh design critic** — reject generic SaaS auth, invented SSO, broken links, and any variant missing F01's report fixes.

## 2. THE MISSION (read twice)

| Stage | Input | Output |
|---|---|---|
| **0 · Baseline lock** | F01's HTML + `audit-metadata.json` | Content frozen |
| **1 · Reports study** | report `.md` + `.xlsx` (10 sheets) | `families/F01-auth-login/docs/REPORT-STUDY.md` |
| **2 · API study** | `auth.openapi.json` | `families/F01-auth-login/docs/API-MAP.md` |
| **3 · Template research** | **AFTER** §4 requirements + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| **4 · Concepts** | stages 0–3 | `docs/CONCEPTS.md` — **5 cards**, printed **before** code |
| **5 · Build (MANUAL)** | concepts | `families/F01-auth-login/V1…V5/index.html` — **5 hand-built variants** |
| **6 · Verify** | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME colour scheme, DIFFERENT designs.** All 125 variants share the master's ONE teal token file. Difference comes from layout/hierarchy/density/narrative/interaction — never colour (master §8.2).
**Rule 2 — HAND-CRAFTED ONLY. NO GENERATOR SCRIPTS.** Master §1.3 is non-negotiable; attested in `DECISIONS.md`.
**Build narrow, study wide.** Never invent console features outside Gate S current-UI + Gate R ADDs + Gate A Swagger.

## 1.3 Manual craft rule — summary

Hand-write/hand-edit each `admin-portal-lab/families/F01-auth-login/V#/index.html` (+ its CSS/JS). Copying one own variant once as a skeleton then manually redesigning it is allowed. Any script that creates/overwrites variant HTML/CSS is forbidden. Full rule: master §1.3.

## 3. READ FIRST — in this order, before any design

1. **This prompt + `admin-portal-prompt.md` end-to-end.** Then the two `example-demo-prompt/` files (discipline only).
2. **F01 screenshots (0):** no auth screenshots in the repo — the HTML captures are the baseline. Say so at Gate S.
3. **`nestlancer-admin-pages-html/README.md`**, then F01's HTML (§4 table) + **`audit-metadata.json`** (filter to `/login`).
4. **Report `.md` in full** + **`.xlsx` all 10 sheets** (`.md` wins conflicts — record in `REPORT-STUDY.md`).
5. **`backend-api-swagger/README.md`** + F01's spec: `auth.openapi.json` (13 paths — login, refresh, logout, session). Map every field + error state (Gate A).
6. **Gate T only after Swagger + complete §4 requirements** — ≥8 similar great admin sign-in screens; `docs/TEMPLATE-RESEARCH.md`.
7. **Touch only:** `admin-portal-lab/families/F01-auth-login/` + shared-infra merges (master §9.1). Never edit inputs or other families.

## 4. THIS FAMILY — F01 · Auth · Operator Sign-in

The console's front door. Captured twice: logged-out `/login` (`01`) and the mid-session expiry landing (`61`, title *Operator sign-in · Admin*, H1 *Nestlancer Admin*, Show-password toggle, *Enter console* submit, 3 inputs). No screenshots exist — freeze copy/fields from the DOM at Gate S. Sign-in must feel like the same product as the teal console it guards (today it must be verified — C5), and must handle the report's session-instability reality (finding #3: refresh 409/503) with honest expired-session + retry states.

> **Business weight:** 🔴 every shift starts here; a confusing sign-in pages the whole team.

| | |
|---|---|
| Routes | `/login` (logged-out + expired-session landing) |
| Shell | None (auth chrome) — but §5 teal tokens + Inter + logo; matches F02's shell language |
| Variants | **V1–V5** — each covers **all** F01 states (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `01-auth-login.html` | `/login` — logged-out sign-in | — (auth surface) |
| `61-requests-index.html` | `/login` — Operator sign-in (expired-session landing) | — (auth surface) |

**Must include (every variant):** email + password + Show toggle + *Enter console* (frozen labels) · inline validation + invalid-credentials error (from `auth` spec error codes) · expired-session variant of the page ("signed out — sign back in", no data loss scare) + retry honesty · Caps-lock/2FA-ready affordance only if spec-backed, else demo-labelled · no SSO/passkey invented (report: fine for v1) · reduced-motion + 375px + dark.
**Content lock:** freeze H1, labels, button copy, help/error strings from `01` + `61` at Gate S; keep the operator tone ("console", not "app").
**Cross-cutting:** light + dark · 375px · empty (n/a) + loading (submit progress) + error states · no-JS form posts readably.

## 5. BRAND SYSTEM — locked

Import the master's ONE teal scheme verbatim: create `admin-portal-lab/shared/tokens.css` with **EXACTLY** `admin-portal-prompt.md` §5.2 CSS if missing; if present, `@import` as-is (never edit, never fork). Auth uses the same teal — no separate auth palette (C5). Content lock per master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F01 scope

### CHANGE — every item in **all 5 variants**
- **C5** — Single teal brand on auth (verify current accent at Gate S; render teal now). *(report §6.1)*
- **C3** — Any status text (errors) uses AA-safe `--status-*-text`. *(report §6.1)*
- **C9** — Mono for any reference/session strings shown. *(report §6.1)*
- **C12** — Display-scale H1 where the sign-in carries brand weight; body stays ops-readable. *(report §6.1)*
- **C18** — Dark-mode parity for auth (or explicit dead-toggle removal lab-wide — follow F02's decision). *(report §6.1)*
- **C20** — Logo alt text. *(report §6.1)*
- **C15** — No cookie banner on the operator sign-in (remember per device or drop). *(report §6.1)*

### ADD — with priority + coverage
- **A11** (P2 → ≥3/5) — Expired-session/degraded honesty: "session expired — sign back in" state with retry, reflecting finding #3.
**Coverage:** P1 in 5/5 · P2–P3 in ≥3/5 (manifest-recorded).

### KEEP — present in every variant
- Operator tone + honesty notes (never marketing copy on a console door). *(report §6.3)*
- Teal + Inter + 6px ops identity. *(report §6.3)*

## 7. GATES — do them in order, print each gate block, stop on FAIL

Procedures: master §6. F01 scope: Gate S maps `01` + `61` + auth metadata (0 screenshots — state the gap); Gate R quotes F01 findings/C/A/KEEP; Gate A maps `auth.openapi.json` (login/refresh/logout/session + error codes); Gate T ≥8 admin sign-in refs **after** S/R/A.

```
## GATE S (F01) · Screenshots opened: 0/0 (none exist — HTML is baseline) · HTML opened: <n>/2 · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F01) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F01) · Specs: 1/1 · Endpoints: <n> · Demo-only CTAs: <n> · Gate: PASS/FAIL
## GATE T (F01) · Queries: <n> · Refs: <n>/≥8 · Mapped to V1–V5: YES · No invented features: YES · Order respected: YES · Gate: PASS/FAIL
```

Do not draw a single concept until S + R + A + T all PASS.

## 8. CONCEPTS — 5 cards, printed BEFORE code

Card template + Difference Test axes: master §8.1–§8.2 (≥3 of 5 axes, incl. A or C; colour never an axis). Coverage: ≥1 minimal · ≥1 dense · ≥1 action-led · ≥1 narrative-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: current IA, teal locked, honest errors + expired state |
| V2 | Split console-door: brand panel + compact sign-in card |
| V3 | Security-first minimal: 2FA-ready layout, session honesty up front |
| V4 | Dense ops: sign-in + status (system health line) for on-call |
| V5 | Motion-signature: calm focus choreography, same content |

## 9. BUILD (manual, one by one)

Output layout (family paths) + craft/perf/a11y rules: master §9 (gallery merge `F01` section only; `manifest.json` 5 records; `DECISIONS.md` F01 section; `python3 -m http.server 8131` preview).

```
admin-portal-lab/families/F01-auth-login/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

 Budgets: ≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first; empty+loading+error day one.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F01 primaries:** auth card, email/password inputs + Show toggle, primary submit, inline errors, expired-session notice, logo/lockup.
Lab-wide contract: master §10. Required states: default/focus/error/disabled/loading on inputs; submit progress; error + expired + locked-out (spec-backed) notices; dark + 375px.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf contract: master §11. Gate 1/2a/2b/3: master §12–§13 (tables 1–3 per family; 1 family winner).

```
## GATE 1 (F01) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F01) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Hard constraints: master §14 (no push/branch; no input edits; no generators; teal only; no recolours; no invented features; keep KEEP; no remote assets; no unopened research; scope = F01 folder + merges).

- [ ] S/R/A/T PASS — `docs/` ×4 written · Gate 1 PASS — `CONCEPTS.md` · Gate 2a/2b — 5 hand-authored variants; gallery + manifest + DECISIONS updated; 0 generators
- [ ] Same tokens; C3/C5/C9/C12/C18/C20/C15 in 5/5; A11 in ≥3/5 (manifest)
- [ ] Empty+loading+error; light+dark; 360–1440; keyboard-clean; reduced-motion; no-JS readable
- [ ] Gate 3 PASS — report §7.1 checklist ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + run command + limits

### Operator shortcuts
- "Restore §5 teal in every variant — no separate auth palette." · "V# fails Difference vs V1 — change axis A/C." · "Gate 2 FAIL — generator exists." · "Dead CTA — Gate-A endpoint or demo-labelled." · "F01-V1 approved — never regenerate it."

---

*End of prompt F01. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*
