# Nestlancer Admin Portal Lab — F10 · Quote Details + Builder — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F10 · Quote Details + Builder.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F10-quote-details-builder/V1…V5/`** — detail + Scope/Pricing/Terms builder + line-item library (F09 owns the list). Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

> **Owner review — full-width, collapsible shell:** Authenticated console pages F02–F25 must use the full viewport width available beside the sidebar, with responsive gutters and no centered page-level max-width. Provide an obvious keyboard-accessible desktop Collapse/Expand control, a named icon rail, and persistent state across reloads/families; use a mobile drawer instead on small screens. Check 1920/2560 as well as 360–1440 in both themes. Keep shared tokens unchanged (`--content` must not cap console pages). Individual reading columns and dialogs may remain appropriately sized. F01 sign-in remains standalone, without an added sidebar. See master §9.2a.

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the quote detail + builder exactly (stepper, scope, pricing/schedule, terms/review, library) first. 2. **Research analyst** — quote every F10 Finding/C/A/KEEP. 3. **API analyst** — map builder to `quotes` (+`requests`) specs incl. send/duplicate. 4. **Design-template researcher** — ≥8 proposal builders **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject margin-blind builders, one-click sends, dropped totals.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F10 shots + HTML + metadata | Stepper + builder + library frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F10-quote-details-builder/docs/REPORT-STUDY.md` |
| 2 · API | §3 specs | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** build a correct, profitable, sendable quote in one sitting — guarded at every step.

## 1.3 Manual craft rule — summary

Hand-write each `families/F10-quote-details-builder/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F10 screenshots (8):** `055-quotes-details.webp` · `095-quote-builder-pricing-and-schedule.webp` · `096-quote-builder-terms-and-review.webp` · `098-quote-editor-line-item-library.webp` · `099-quote-editor-pricing-and-schedule.webp` · `100-quote-editor-scope-and-line-items.webp` · `101-quote-editor-terms-and-review.webp` (+ `097-custom-payment-schedule` = live gap — screenshot baseline). 3. `nestlancer-admin-pages-html/README.md`, F10 HTML (§4) + `audit-metadata.json` (`/quotes/*` filter). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + specs: `quotes.openapi.json` (27 paths — detail, builder, schedule, send, duplicate, request-changes) · `requests` (origin link). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F10 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F10 · Quote Details + Builder

The revenue workbench: quote detail + the **Scope → Pricing/Schedule → Terms/Review** stepper + **line-item library** + custom payment schedules + send/duplicate/duplicate-phase flows. Richly captured (10 states, 7 shots; custom-schedule live-gap per report §2.2). The report (§4.2) rates the stepper+library strong and asks for finish-verify plus margin guardrails and duplicate detection — implement those as §4.2-bound improvements (spec-backed or demo-labelled, never invented totals).

> **Business weight (report §4.2):** 🔴 decides revenue. Strong bones — verify the tail, guard the margin.

| | |
|---|---|
| Routes | `/quotes/[id]` (+ builder steps in-page) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **detail + all builder steps + library** (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `68…72-quotes-sub-quotes-*.html` | 5 quote details (reconcile) | `055-quotes-details.webp` |
| `145-quotes-details.html` | Quote detail (canonical) | `055-quotes-details.webp` |
| `146-…-state-1-scope.html` | Builder step 1 · Scope | `100-quote-editor-scope-and-line-items.webp` |
| `147-…-state-2-pricing.html` | Builder step 2 · Pricing (+schedule) | `095-…-pricing-and-schedule.webp` + `099-…` |
| `148-…-state-3-terms.html` | Builder step 3 · Terms (+review) | `096-…-terms-and-review.webp` + `101-…` |
| `190-…-state-line-item-library.html` | Line-item library | `098-quote-editor-line-item-library.webp` |
| `188-…-state-duplicate-phase.html` | Duplicate-phase state | — (captured state) |
| *(gap — shot baseline)* | Custom payment schedule | `097-quote-editor-custom-payment-schedule.webp` |

**Must include (every variant):** detail header (frozen parties/totals/status) · stepper with per-step validation honesty · scope + line items (library insert) · pricing + schedule variants (incl. custom-schedule per shot 097 + spec) · terms + review with totals chain · send (confirm-gated, never one-click) + duplicate + duplicate-phase honesty · margin guardrails + duplicate detection per report §4.2 (spec-backed or demo-labelled) · dark + 375px.
**Content lock:** freeze stepper labels, field labels, library items, schedule vocabulary, terms copy, totals chain, send/duplicate wording at Gate S. Never invent line items, rates, or terms.
**Cross-cutting:** light + dark · 375px (stepper collapses cleanly) · empty (no-items) + skeleton + error + send-receipt states · full keyboard (stepper arrows, library search, traps in confirm).

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F10 scope

### CHANGE — every item in **all 5 variants**
- **C9** — Mono refs/versions/timestamps; tabular money. *(§6.1)*
- **C3** — AA-safe status text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C12** — Display totals (32–40px hero). *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage
- Report §4.2 finish-verify (schedule/send tail) — 5/5 · margin guardrails + duplicate detection (§4.2) — spec-backed or demo-labelled, ≥3/5.
**Coverage:** P1 in 5/5 (n/a) · P2–P3 in ≥3/5 (manifest).

### KEEP — present in every variant
- **Scope/Pricing/Terms stepper + line-item library** — revenue-critical structure. · Totals honesty. · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F10 scope: Gate S freezes stepper + library + gap-noted custom-schedule; Gate R quotes F10 rows + §4.2; Gate A maps `quotes` 27 paths (detail/builder/schedule/send/duplicate/changes); Gate T ≥8 proposal/quote builders **after** S/R/A.

```
## GATE S (F10) · Shots: 8/8 · HTML: <n>/11 · Custom-schedule gap noted: YES · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F10) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F10) · Specs: 2/2 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F10) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 stepper-led · ≥1 ledger-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured stepper + library, guarded sends, calm |
| V2 | Stepper-spine: steps own the screen with live totals rail |
| V3 | Ledger-first: the money table leads, steps dock beside it |
| V4 | Dense console: compact builder + library drawer for power quoters |
| V5 | Motion-signature: step transitions + totals count-ups, same flow |

## 9. BUILD (manual, one by one)

Master §9; family paths below. Send MUST be confirm-gated in every variant (lab static — show confirm + audit copy, never wire).

```
admin-portal-lab/families/F10-quote-details-builder/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F10 primaries:** detail header, stepper, scope + line items, library drawer, pricing + schedule variants, terms + review, totals chain, send/duplicate + confirm.
States: step valid/invalid/visited · library search/insert · schedule standard/custom · review totals · send confirm/sent-receipt · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F10) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F10) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F10 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C9/C3/C5/C12/C18/C20 in 5/5; §4.2 items per coverage (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "One-click send — FAIL, add confirm." · "Invented line item — FAIL." · "F10-V1 approved — never regenerate it."

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

*End of prompt F10. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*
