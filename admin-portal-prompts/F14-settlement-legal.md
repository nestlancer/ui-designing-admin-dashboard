# Nestlancer Admin Portal Lab — F14 · Settlement Accounts + Company Legal — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F14 · Settlement Accounts + Company Legal.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F14-settlement-legal/V1…V5/`** — accounts + legal forms only (F13 owns money-ops). Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

> **Owner review — full-width, collapsible shell:** Authenticated console pages F02–F25 must use the full viewport width available beside the sidebar, with responsive gutters and no centered page-level max-width. Provide an obvious keyboard-accessible desktop Collapse/Expand control, a named icon rail, and persistent state across reloads/families; use a mobile drawer instead on small screens. Check 1920/2560 as well as 360–1440 in both themes. Keep shared tokens unchanged (`--content` must not cap console pages). Individual reading columns and dialogs may remain appropriately sized. F01 sign-in remains standalone, without an added sidebar. See master §9.2a.

## 1. YOUR ROLE

1. **Product archaeologist** — transcribe the settlement/legal forms exactly (every field, label, helper, validation) first. 2. **Research analyst** — quote every F14 Finding/C/A/KEEP. 3. **API analyst** — map fields to the `payments` spec (accounts + company-legal slice). 4. **Design-template researcher** — ≥8 finance-settings forms **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject dropped fields, silent validations, unmasked secrets.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F14 shots + HTML + metadata | Field-by-field transcription frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F14-settlement-legal/docs/REPORT-STUDY.md` |
| 2 · API | §3 specs | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** change payout plumbing once, correctly, with every field validated and every secret masked.

## 1.3 Manual craft rule — summary

Hand-write each `families/F14-settlement-legal/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F14 screenshots (4):** `041-payments-accounts.webp` · `042-payments-company-legal.webp` · `070-company-legal-identity-edit-profile-form.webp` · `103-settlement-accounts-edit-account-form.webp`. 3. `nestlancer-admin-pages-html/README.md`, F14 HTML (§4) + `audit-metadata.json` (`182/183` filter). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + spec: `payments.openapi.json` (62 paths — `platform-accounts`, `/admin/payments/accounts*`, `company-legal*` slice). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F14 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F14 · Settlement Accounts + Company Legal

The payout plumbing: settlement **accounts** (list + add/edit + verify states) and the **company legal** form (entity, tax, registered address, documents). Thin live capture (2 states) + 4 screenshots — transcribe shot-by-shot at Gate S, then cross-map every field to the specs at Gate A. Form craft is the whole brief: labels, helpers, inline validation, masked secrets, verify flows, save honesty (dirty/invalid/saving/saved), and audit-trail copy (who changed payout details, when).

> **Business weight:** 🔴 wrong account = money to the wrong place. Guard every field.

| | |
|---|---|
| Routes | Settlements accounts + overview tabs; company legal form (freeze exact routes at Gate S) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **accounts + legal** (tab-switched in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `182-payments-accounts.html` | Settlement accounts | `041-payments-accounts.webp` |
| `183-payments-company-legal.html` | Company legal | `042-payments-company-legal.webp` |
| *(shot+spec baseline)* | Edit-account form | `103-settlement-accounts-edit-account-form.webp` |
| *(shot+spec baseline)* | Legal-identity edit-profile form | `070-company-legal-identity-edit-profile-form.webp` |

**Must include (every variant):** accounts list (mono numbers C9, masked) + add/edit with verify states · legal form field-complete (transcribed) with inline validation + helpers · masked secrets + reveal discipline · save bar (dirty/invalid/saving/saved + audit copy) · dark + 375px (forms stack, save bar sticky).
**Content lock:** freeze every label/helper/option/validation string from shots + captures at Gate S; spec field names for the rest. Never invent legal fields.
**Cross-cutting:** light + dark · 375px · empty (no-accounts) + skeleton + error + saved-receipt states · labels + describedby + error announcements · reduced-motion.

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F14 scope

### CHANGE — every item in **all 5 variants**
- **C9** — Mono account numbers/refs. *(§6.1)* · **C17** — Form craft: every field labelled, helper'd, validated inline. *(§6.1)*
- **C3** — AA-safe text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C12** — Display section titles. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage
- Save honesty + audit copy (who/when on payout changes) — 5/5 (this IS the family craft).
**Coverage:** P1 in 5/5 · P2–P3 in ≥3/5 (manifest).

### KEEP — present in every variant
- Settlement transparency + honest microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F14 scope: Gate S transcribes every field (shots + 2 HTML); Gate R quotes F14 rows; Gate A maps fields to specs; Gate T ≥8 finance-settings forms **after** S/R/A.

```
## GATE S (F14) · Shots: 4/4 · HTML: 2/2 · Fields transcribed: <n> · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F14) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F14) · Specs: <n>/<n> · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F14) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 section-led · ≥1 wizard-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: transcribed forms, inline validation, guarded saves |
| V2 | Section-led: accounts + legal as guided sections with progress |
| V3 | Wizard: add/verify flows as guarded steps (list stays put) |
| V4 | Dense console: compact forms + audit rail for finance ops |
| V5 | Motion-signature: calm validation + save choreography |

## 9. BUILD (manual, one by one)

Master §9; family paths below.

```
admin-portal-lab/families/F14-settlement-legal/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F14 primaries:** accounts list, account add/edit + verify, legal form sections, masked secrets, save bar + audit copy.
States: field default/focus/valid/invalid/disabled · verify pending/verified/failed · save dirty/invalid/saving/saved · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F14) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F14) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F14 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C9/C17/C3/C5/C12/C18/C20 in 5/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete; reduced-motion; no-JS readable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "Dropped field — FAIL, transcribe don't trim." · "Silent validation — FAIL." · "F14-V1 approved — never regenerate it."

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

*End of prompt F14. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*
