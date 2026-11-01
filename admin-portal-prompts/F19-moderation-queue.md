# Nestlancer Admin Portal Lab — F19 · Moderation Queue — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F19 · Moderation Queue.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F19-moderation-queue/V1…V5/`** — active queue + history (media quarantine ships in F23). Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the moderation queue exactly (tabs, items, actions, history) first. 2. **Research analyst** — quote every F19 Finding/C/A/KEEP. 3. **API analyst** — map queue/actions to `messaging` + `blog` + `media` specs. 4. **Design-template researcher** — ≥8 moderation consoles **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject one-click judgments, unlogged power, context-blind queues.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F19 shots + HTML + metadata | Queue + history frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F19-moderation-queue/docs/REPORT-STUDY.md` |
| 2 · API | `messaging` + `blog` + `media` specs | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** judge fast, judge fairly — context first, action guarded, history kept.

## 1.3 Manual craft rule — summary

Hand-write each `families/F19-moderation-queue/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F19 screenshots (2):** `027-moderation.webp` (queue) · `028-moderation-history.webp` (history). 3. `nestlancer-admin-pages-html/README.md`, F19 HTML (§4) + `audit-metadata.json` (`/moderation` filter — Active queue/History/Clear). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + specs: `messaging.openapi.json` (47 paths — flagged queue + moderation-history) · `blog.openapi.json` (reported comments) · `media.openapi.json` (quarantine links). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F19 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F19 · Moderation Queue

The judgment queue: **Active queue** (flagged items with reason, reporter, content preview, context links) + **History** (decisions with who/when/why) + Clear. Captured thin (4 states) — freeze item anatomy, action set, reason vocabulary, and history columns at Gate S, then spec-map every action. Every judgment is guarded (preview + reason + confirm) and logged; the queue itself gets the triage kit (bulk where safe, keyboard, age, loop).

> **Business weight:** 🔴 judgments affect real people — context first, power guarded, history immutable.

| | |
|---|---|
| Routes | `/moderation` (+ flagged entries from messages/media) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **active queue + review + history** (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `91-moderation-index.html` · `12-dashboard-sub-moderation.html` (harvest dupe) | `/moderation` — Active queue | `027-moderation.webp` |
| `169-moderation-index-state-active-queue.html` | Active-queue state | `027-moderation.webp` |
| `170-moderation-index-state-history.html` | History state | `028-moderation-history.webp` |

**Must include (every variant):** queue with reason/reporter/preview/context (frozen anatomy) · review actions guarded (preview + reason + confirm, spec actions only) · bulk bar (A1 — safe actions only) + age badges (A4) + review→next loop (A5) · history table (who/when/why, immutable tone) · quarantine links (F23) · dark + 375px.
**Content lock:** freeze item anatomy, action labels, reason vocabulary, confirm copy, history columns at Gate S. Never invent reasons or actions.
**Cross-cutting:** light + dark · 375px · empty (queue-zero celebration) + skeleton + error + decision-receipt states · keyboard-complete (guarded confirms trapped).

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only; destructive inside status tokens. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F19 scope

### CHANGE — every item in **all 5 variants**
- **C17** — Review craft: every action needs context + reason + confirm (no naked buttons). *(§6.1)*
- **C3** — AA-safe text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C9** — Mono refs/timestamps. *(§6.1)* · **C12** — Display counts. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage (all P1 → **5/5**)
- **A1** — Bulk bar (safe actions only). · **A4** — Age badges + escalation. · **A5** — Review→next loop.

### KEEP — present in every variant
- History immutability tone (who/when/why on every decision). · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F19 scope: Gate S freezes queue + actions + history; Gate R quotes F19 rows; Gate A maps flagged/reported/quarantine slices; Gate T ≥8 moderation consoles **after** S/R/A.

```
## GATE S (F19) · Shots: 2/2 · HTML: <n>/4 · Actions spec-mapped: YES · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F19) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F19) · Specs: 3/3 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F19) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 queue-led · ≥1 review-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured queue, guarded review, calm |
| V2 | Review-spine: the item under judgment owns the screen |
| V3 | Card-queue: flagged items as context cards with sweep actions |
| V4 | Dense console: compact queue + history rail for trust ops |
| V5 | Motion-signature: judgment choreography + loop transitions |

## 9. BUILD (manual, one by one)

Master §9; family paths below. Review actions MUST be guarded + reason-coded + history-visible in every variant (lab static — confirm + receipt copy only).

```
admin-portal-lab/families/F19-moderation-queue/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F19 primaries:** queue tabs, flagged items, review panel (guarded actions), bulk bar, history table.
States: item pending/approved/removed/escalated · review confirm/receipt · history rows · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F19) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F19) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F19 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C17/C3/C5/C9/C12/C18/C20 in 5/5; A1/A4/A5 in 5/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "One-click judgment — FAIL, guard + reason + history." · "F19-V1 approved — never regenerate it."

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

*End of prompt F19. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*
