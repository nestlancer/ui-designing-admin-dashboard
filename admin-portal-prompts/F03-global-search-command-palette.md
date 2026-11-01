# Nestlancer Admin Portal Lab — F03 · Global Search / ⌘K Palette — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F03 · Global Search / ⌘K Palette.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F03-global-search-command-palette/V1…V5/`** — and nothing else. F02 owns the shell/trigger; you own the open palette. Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

> **Owner review — full-width, collapsible shell:** Authenticated console pages F02–F25 must use the full viewport width available beside the sidebar, with responsive gutters and no centered page-level max-width. Provide an obvious keyboard-accessible desktop Collapse/Expand control, a named icon rail, and persistent state across reloads/families; use a mobile drawer instead on small screens. Check 1920/2560 as well as 360–1440 in both themes. Keep shared tokens unchanged (`--content` must not cap console pages). Individual reading columns and dialogs may remain appropriately sized. F01 sign-in remains standalone, without an added sidebar. See master §9.2a.

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the open palette exactly (groups, actions, hints) before changing a pixel. 2. **Research analyst** — quote every F03 Finding/C/A/KEEP. 3. **API analyst** — map jump-targets to specs (gateway/users/requests/quotes/payments). 4. **Design-template researcher** — ≥8 command palettes **after** S/R/A. 5. **Designer + art director** — 5 different ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject dead actions, mouse-only palettes, invented jump-targets.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F03 shot + HTML + metadata | Actions/groups frozen (completeness audit) |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F03-global-search-command-palette/docs/REPORT-STUDY.md` |
| 2 · API | gateway + users + queue specs | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** every queue, user, payment and approval reachable without touching the mouse.

## 1.3 Manual craft rule — summary

Hand-write each `families/F03-global-search-command-palette/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F03 screenshot (1):** `072-global-search-admin-dialog.webp` — open it; list every group + action verbatim. 3. `nestlancer-admin-pages-html/README.md`, F03 HTML (§4) + `audit-metadata.json` (`03` filter; note `dialogs:1`). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + specs: `gateway` (search fan-out, if any) · `users` (jump-to-user) · `requests`/`quotes`/`payments` (jump-to-queue/item) · `admin` (jump-to-system). Every palette action must resolve to a real route/endpoint (Gate A) or be demo-labelled. 6. **Gate T only after Swagger + §4.** 7. **Touch only** F03 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F03 · Global Search / ⌘K Palette

The console's fastest muscle — *if* it's complete. Captured once, open, over the dashboard (`03`, `role=dialog` present). **Your first job is a completeness audit:** list every captured group/action at Gate S, then test each against the 18 routes + queue/user/payment/approval targets. The client portal's palette famously shipped two non-existent actions (client report finding) — F03 must prove the admin palette has zero dead actions and zero missing jumps (report §5.2: palette completeness).

> **Business weight:** 🟡 small surface, outsized leverage — the keyboard operator's home key.

| | |
|---|---|
| Routes | Overlay on any route (trigger: header `Search pages… ⌘K`, owned by F02's shell) |
| Shell | Minimal page frame to present the open palette (match F02's shell language) |
| Variants | **V1–V5** — each covers **all** palette states (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `03-dashboard-global-search-dialog.html` | `⌘K` — palette open over dashboard | `072-global-search-admin-dialog.webp` |

Plus designed states (from spec + report, frozen at Gate S): typing/filtered results · grouped results (queues/users/payments/pages/actions) · no-results · recent items · footer hints (`↑↓ navigate ↵ select esc close` — freeze captured wording).

**Must include (every variant):** frozen groups + actions (zero dead) · jump-to-queue (filtered), jump-to-user, jump-to-payment/approval · full keyboard (↑↓↵ esc, `/` focus, type-to-filter) + mouse parity · recent/no-results/empty states · footer hints · dark + 375px (palette becomes a sheet).
**Content lock:** freeze the captured groups, action labels, placeholders, hints, result-row anatomy at Gate S. New jump-targets allowed ONLY if Gate-A-backed (route/endpoint exists) — else demo-labelled in `DECISIONS.md`.
**Cross-cutting:** light + dark · 375px sheet · empty + loading + no-results states · focus trap + restore + `aria-activedescendant` · reduced-motion.

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F03 scope

### CHANGE — every item in **all 5 variants**
- **C3** — AA-safe text on result badges/statuses. *(§6.1)*
- **C5** — Teal-only tokens. *(§6.1)*
- **C9** — Mono for IDs/refs inside result rows. *(§6.1)*
- **C12** — Readable result hierarchy (no 11px primary text). *(§6.1)*
- **C18** — Dark parity. *(§6.1)*
- **C20** — Logo alt text (frame). *(§6.1)*

### ADD — with priority + coverage
- Completeness audit output (report §5.2 pattern row): missing jumps added as Gate-A-backed actions — **5/5** (this IS the family brief).
**Coverage:** P1 in 5/5 · P2–P3 in ≥3/5 (manifest).

### KEEP — present in every variant
- **⌘K palette + keyboard hints** — already above benchmark; complete it, don't restyle it away. *(§6.3)*
- Honest microcopy; teal + Inter + 6px identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F03 scope: Gate S = action-by-action audit (captured vs 18 routes + queue/user/payment/approval targets); Gate R quotes palette rows; Gate A resolves every action to route/endpoint; Gate T ≥8 command palettes (Linear/Raycast/Shadcn-cmdk-style) **after** S/R/A.

```
## GATE S (F03) · Shots: 1/1 · HTML: 1/1 · Actions audited: <n> captured / <n> missing / <n> dead · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F03) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F03) · Specs: <n>/<n> · Actions resolved: <n>/<n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F03) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 action-led · ≥1 narrative-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured groups, dead actions removed, missing jumps added |
| V2 | Grouped-command: queues / people / money / pages / actions with preview line |
| V3 | Preview-pane: right-side detail for the highlighted result |
| V4 | Minimal instant: single list, type-to-filter, zero chrome |
| V5 | Motion-signature: calm stagger + section choreography, same actions |

## 9. BUILD (manual, one by one)

Master §9; family paths below. Palette MUST be fully operable by keyboard in every variant (audited at Gate 3).

```
admin-portal-lab/families/F03-global-search-command-palette/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F03 primaries:** palette dialog, search input, grouped result list, result rows (icon + label + hint + badge), footer hints.
States: open/typing/filtered/no-results/recent · highlighted + selected · dark + 375px sheet · trap + restore + `aria-activedescendant`. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F03) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F03) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F03 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 (action audit in BASELINE-MAP) · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C3/C5/C9/C12/C18/C20 in 5/5; completeness audit shipped 5/5 (manifest)
- [ ] Empty+loading+no-results; light+dark; 360–1440; keyboard-complete; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "Dead palette action — resolve or demo-label it." · "Keyboard parity is a gate, not a wish." · "F03-V1 approved — never regenerate it."

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

*End of prompt F03. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*
