# Nestlancer Admin Portal Lab — F07 · Notifications Center + Ops — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F07 · Notifications Center + Ops.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F07-notifications-center/V1…V5/`** — and nothing else. Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the notifications surface exactly (personal filters + 6 ops tabs + builders + logs) first. 2. **Research analyst** — quote every F07 Finding/C/A/KEEP. 3. **API analyst** — map inbox + send/broadcast/segment + logs to `notifications` spec. 4. **Design-template researcher** — ≥8 notification centers + broadcast tools **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject mixed personal/platform surfaces, 129-button pages, misclick-able broadcasts.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F07 shots + HTML + metadata | Tabs + filters + builders frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F07-notifications-center/docs/REPORT-STUDY.md` |
| 2 · API | `notifications` spec | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** my inbox clears in minutes; platform broadcasts never fire by accident.

## 1.3 Manual craft rule — summary

Hand-write each `families/F07-notifications-center/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F07 screenshots (6):** `029-notifications.webp` · `030-notifications-broadcast.webp` · `031-notifications-delivery-report.webp` · `032-notifications-platform-log.webp` · `033-notifications-segment.webp` · `034-notifications-send.webp`. 3. `nestlancer-admin-pages-html/README.md`, F07 HTML (§4) + `audit-metadata.json` (`/notifications` filter — note 129 buttons, 152 focus stops, 14 tabs). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + spec: `notifications.openapi.json` (29 paths — inbox, preferences?, send, broadcast, segments, delivery, logs). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F07 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F07 · Notifications Center + Ops

Two products sharing one page: **My notifications** (personal inbox: All/Unread/Quotes/Payments/Messages/Projects/Requests/Account filters) and **platform ops** (Send · Broadcast · Segment · Delivery report · Platform log). Captured at full breadth (7 states, 6 shots) — and at full risk: 129 buttons and 152 focus stops make this the misclick surface of the console (findings #11, census). Your variants implement the C7 split (separate surfaces, or a hard divider + role gate on Send/Broadcast) and the C8 focus rescue (roving tabindex, overflow menus, skip-links).

> **Business weight:** 🔴 a wrong broadcast reaches every client — this family is safety-critical.

| | |
|---|---|
| Routes | `/notifications` (+ 6 ops tabs; personal filters in-page) |
| Shell | F02's shell language (bell 99+ context) |
| Variants | **V1–V5** — each covers **inbox + all 6 ops tabs** (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `52-notifications-index.html` | `/notifications` — index | `029-notifications.webp` |
| `53-…-tab-my-notifications.html` | My-notifications tab + 8 filters | `029-notifications.webp` |
| `54-…-tab-send.html` | Send tab | `034-notifications-send.webp` |
| `55-…-tab-broadcast.html` | Broadcast tab | `030-notifications-broadcast.webp` |
| `56-…-tab-segment.html` | Segment tab | `033-notifications-segment.webp` |
| `57-…-tab-delivery-report.html` | Delivery report tab | `031-notifications-delivery-report.webp` |
| `58-…-tab-platform-log.html` | Platform log tab | `032-notifications-platform-log.webp` |

**Must include (every variant):** inbox with 8 frozen filters + bulk (A1: mark-read/archive) + saved views (A3) · **C7 split** (separate personal/platform surfaces or hard-divider + role-gated Send/Broadcast) · send/broadcast composers with segment picker + preview + confirm (never one-click) · delivery report + platform log tables · **C8 focus rescue** (roving tabindex, overflow menus, skip-links; prove ≤ sane stop count) · dark + 375px.
**Content lock:** freeze all tab/filter labels, composer fields, preview copy, log columns, confirm wording at Gate S. Broadcast confirm copy is safety text — never soften it.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error + send-receipt states · full keyboard (trap in composers, Esc, restore, live regions).

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Destructive/broadcast accents stay inside status tokens (no new red). Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F07 scope

### CHANGE — every item in **all 5 variants**
- **C7** — Split personal inbox vs platform ops (separate surfaces, or hard divider + role-gated Send/Broadcast). *(§6.1)*
- **C8** — Tame focus: roving tabindex on rows, actions into overflow menus, skip-links per section. *(§6.1)*
- **C3** — AA-safe badge text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C9** — Mono refs/timestamps. *(§6.1)* · **C12** — Display counts. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage
- **A1** (P1 → 5/5) — Bulk bar on inbox (mark-read/archive/tag). · **A3** (P1 → 5/5) — Saved views (Unread-mine, failures, mentions).

### KEEP — present in every variant
- Confirm-gated broadcast/send flows (safety copy kept verbatim or stronger). · Honest microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F07 scope: Gate S freezes 14 tabs + builders + logs + focus census; Gate R quotes F07 rows; Gate A maps `notifications` 29 paths (inbox/compose/segments/delivery/logs); Gate T ≥8 notification centers + broadcast tools **after** S/R/A.

```
## GATE S (F07) · Shots: 6/6 · HTML: <n>/7 · Tabs frozen: 14 · Focus stops counted: YES · Gate: PASS/FAIL
## GATE R (F07) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F07) · Specs: 1/1 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F07) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 inbox-led · ≥1 ops-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: same page, C7 divider + role gate, C8 focus rescue |
| V2 | Two-surface split: Inbox app vs Ops console, cross-linked |
| V3 | Inbox-first: personal triage spine, ops behind a gated section |
| V4 | Dense ops: log-led broadcast control with delivery telemetry |
| V5 | Motion-signature: calm triage choreography + guarded sends |

## 9. BUILD (manual, one by one)

Master §9; family paths below. Broadcast/send MUST be confirm-gated + keyboard-safe in every variant (lab static — never wire a real action; show confirm + audit copy).

```
admin-portal-lab/families/F07-notifications-center/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F07 primaries:** inbox filters + rows, bulk bar, send/broadcast composers + segment picker + preview + confirm, delivery report, platform log, saved views.
States: filter selected · bulk none/partial/all · composer draft/preview/confirm/sent-receipt · log rows · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F07) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F07) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F07 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C7/C8/C3/C5/C9/C12/C18/C20 in 5/5; A1/A3 in 5/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete (roving + traps); reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "One-click broadcast — FAIL, add confirm gate." · "Focus stops still triple-digit — roving + overflow." · "F07-V1 approved — never regenerate it."

---

*End of prompt F07. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*
