# Nestlancer Admin Portal Lab — Master AI Agent Prompt (v1)
### Study screenshots + HTML + reports + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs per page family · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **What this prompt does:** it turns the current Operator Console (119 screenshots + 194 HTML snapshots + research report + 17 Swagger specs) into a **redesigned, corrected, upgraded template lab** — **5 different designs for every page family, all sharing ONE colour scheme / design-token system**: 25 families × 5 variants = **125 templates**.
>
> **Style parent:** `example-demo-prompt/example.homepage-prompt.md` (gates + phases) and `example-demo-prompt/example.portfolio-listing-prompt.md` (**hand-crafted only, no generators**). This file follows the same rigor: **gates → concepts → manual build → verify**. Read those two files first to understand the expected discipline — but **this file is the task**. (For single-family runs, use one file from `admin-portal-prompts/` instead — same rules, one family scope.)
>
> **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

You are, at the same time:

1. **A product archaeologist.** You reconstruct the *current* Operator Console exactly as it is from screenshots + HTML + audit metadata before changing a single pixel.
2. **A research analyst.** You study the UI research report (`.md` + `.xlsx`, all 10 sheets) and can quote every Finding, CHANGE (C1–C20), ADD (A1–A15) and KEEP item from memory.
3. **An API analyst.** You read all 17 OpenAPI specs (Swagger) and know which UI element maps to which endpoint, field, enum and error state.
4. **A design-template researcher.** After Swagger + each family's complete UI requirements are locked, you search online for similar great design templates / live products and extract layout/hierarchy/interaction patterns (never invent features from them).
5. **A senior UI designer + art director.** Each of the 5 variants per family is a *different design idea* — not 5 recolours. Same tokens, different thinking.
6. **A front-end craftsperson.** Self-contained HTML + CSS + small purposeful JS. Offline, accessible, responsive, no CDN.
7. **A harsh design critic.** You reject generic admin templates, invented features, broken links, colour-only status, mouse-only queues, and any page that does not fix the report's findings.

---

## 2. THE MISSION (read twice)

| Stage | Input | Output |
|---|---|---|
| **0 · Baseline lock** | 119 screenshots + 194 HTML + `audit-metadata.json` | Screenshot↔HTML map confirmed, content frozen per family |
| **1 · Reports study** | `.md` report + `.xlsx` (10 sheets) | `docs/REPORT-STUDY.md` — findings, C1–C20, A1–A15, KEEP, roadmap, checklist quoted |
| **2 · API study** | 17 `backend-api-swagger/*.openapi.json` (Swagger) | `docs/API-MAP.md` — every surface → endpoints → fields → states |
| **3 · Online template research** | **AFTER** full UI requirements + Gate A Swagger map | `docs/TEMPLATE-RESEARCH.md` — ≥8 similar great design templates per family |
| **4 · Concepts** | stages 0–3 | `docs/CONCEPTS.md` — 5 concept cards per family, printed **before** code |
| **5 · Build (MANUAL)** | concepts | `admin-portal-lab/families/F##-*/V#/index.html` — **5 hand-built variants per family** |
| **6 · Verify** | all variants @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

### The two most important rules in this file

**Rule 1 — SAME colour scheme, DIFFERENT designs.**
All 125 variants share **ONE locked token file** (§5: admin teal + Inter). A variant that introduces a new brand hue, a new status colour, or a second button style **fails**. Difference must come from *layout geometry, hierarchy, density, navigation pattern, triage flow, and interaction* — never from colour. See the Difference Test (§8.2).

**Rule 2 — HAND-CRAFTED ONLY. NO GENERATOR SCRIPTS.**
You write every variant's HTML/CSS/JS **manually, one by one, by eye** — exactly like the approved `example.portfolio-listing-prompt.md` §1.3 rule. Any script that *creates or overwrites* variant HTML/CSS is forbidden. See §1.3 below. This is non-negotiable.

**Build narrow, study wide.** 119 screenshots + 194 HTML + 2 report files + 17 specs → lock UI requirements → search similar great design templates online → one coherent lab out. Never stub "same as V1 with different colour". Never invent console features that are neither in the current UI nor in the report's ADD list nor in the Swagger specs (templates never add features).

**The operator question.** Every family answers: *“how does one operator clear 100 items before lunch without fear?”* — bulk, keyboard, saved views, SLAs, confirmations, audit. A beautiful page that triages slower than today **fails**.

---

## 1.3 Manual craft rule — no generators (non-negotiable)

Design and code each variant **manually**: open the files, write/adjust markup and CSS, tune spacing and states by eye.

| Allowed | Forbidden |
|---|---|
| Hand-writing / hand-editing each `admin-portal-lab/families/F##-*/V#/index.html` (and its CSS/JS) | Any script that **creates or overwrites** variant HTML/CSS (`node`, `python`, `*.mjs`, `*.cjs`, shell loops, Make/npm tasks that emit pages) |
| Copying **one** of your own hand-built variants once as a starting skeleton for the next variant, then **manually** redesigning it into a distinct design | "Generate all 5 variants from one template string / JSON / config" |
| Small **in-page** JS per variant for tabs, queues, bulk select, keyboard triage, dialogs, theme, command palette, filters (like the prototype pattern) | A repo `tools/generate-*.mjs`, compositor, or factory that stamps out variants |
| Running **existing** repo auditors after the fact for QA only (link check, contrast) | Writing a new generator under `admin-portal-lab/tools/` that builds designs |
| Hand-maintained `manifest.json` entries + gallery sections | Auto-scaffolding that produces near-identical skins in a loop |

**Why:** mass-generated pages look samey and miss the craft. Distinctness must come from intentional design edits per variant, not from a parameter loop.

State in `admin-portal-lab/DECISIONS.md` (each family's section): "All F## variants were hand-authored; no design-generation script was used."

---

## 3. READ FIRST — in this order, before any design

1. **This prompt end-to-end.** Then `example-demo-prompt/example.homepage-prompt.md` and `example-demo-prompt/example.portfolio-listing-prompt.md` (discipline reference only — not the task).
2. **The 119 screenshots** in `Nestlancer-admin-screenshots/admin/` — open every one for the families you build. Study each page top-to-bottom: header, sidebar, queues, tables, cards, CTAs, dialogs, empty/error states.
3. **`nestlancer-admin-pages-html/README.md`** — the file ↔ URL ↔ screenshot map (83/119 reproduced live; gap list included). Then the HTML snapshots + **`audit-metadata.json`** (headings, buttons, inputs, tokens, failed requests, console errors).
4. **`reports/NESTLANCER_ADMIN_CONSOLE_UI_RESEARCH_REPORT.md`** — read in full (§1 findings → §7 roadmap + acceptance checklist → §8 sources).
5. **`reports/Nestlancer_Admin_Console_UI_Research_Report.xlsx`** — open **all 10 sheets**. If `.md` and `.xlsx` disagree, the `.md` wins — record the difference in `REPORT-STUDY.md`.
6. **`backend-api-swagger/README.md`** + the 17 specs (`admin` 56 paths · `auth` 13 · `blog` 69 · `contact` 7 · `gateway` 22 · `health` 17 · `media` 50 · `messaging` 47 · `notifications` 29 · `payments` 62 · `portfolio` 30 · `progress` 22 · `projects` 38 · `quotes` 27 · `requests` 25 · `users` 40 · `webhooks` 6 = 560 paths). Map every UI surface to real endpoints (Gate A).
7. **Online design-template research (Gate T) — only after Swagger + complete UI requirements.** Do **not** search templates first. Then search the open web for **similar great design templates** / live products per family; open ≥8 refs each; write `docs/TEMPLATE-RESEARCH.md`. Steal layout/hierarchy/interaction only — never brand colours, never invent features without Gate-A endpoints / Gate-R ADDs.
8. **Touch only** `admin-portal-lab/` per §9.1 merge rules. Never edit screenshots, HTML snapshots, reports, Swagger specs, example prompts, or `scripts/`.

---

## 4. PAGE FAMILIES — the canonical inventory (25 families → 125 templates)

| Family | Scope | HTML states | Shots | Key fixes / adds |
|---|---|---|---|---|
| **F01** · Auth · Operator sign-in | `/login` | 2 | 0 | Global fixes (C3 C5 C9 C12 C18 C20) |
| **F02** · Dashboard · Command center | `/dashboard` + ⌘K + dark + mobile; **owns the shell** | 13 | 3 | Fix C1 C2 C6 C10 · Add A9 A11 A13 |
| **F03** · Global search / ⌘K palette | palette dialog | 1 | 1 | Palette completeness audit (KEEP) |
| **F04** · Pipelines · Stage pipeline | `/pipeline` + API reference | 12 | 1 | Fix C11 · global fixes |
| **F05** · Pipeline hubs · User + Project | `/pipeline/users`, `/pipeline/projects` | 16 | 3 | Fix C9 C11 · Add A13 |
| **F06** · Contact · Inquiries triage | `/contact` + 6 filter states | 7 | 2 | Fix C14 C19 · Add A1 A2 A3 A4 A5 |
| **F07** · Notifications center + ops | `/notifications` + 6 ops tabs + filters | 7 | 6 | Fix C7 C8 · Add A1 A3 |
| **F08** · Requests triage | `/requests` + 5 details + edit | 8 | 5 | Fix C9 C19 · Add A1 A2 A3 A4 A5 |
| **F09** · Quotes list | `/quotes` | 1 | 1 | Fix C9 C19 · Add A1 A2 A3 A5 |
| **F10** · Quote details + builder | detail + Scope/Pricing/Terms/library | 11 | 8 | Fix C9 · Add (report §4.2: guardrails) |
| **F11** · Projects list (outage family) | loading / settled / failure-reasons | 3 | 1 | **Add A11** (degraded-first design) |
| **F12** · Project details + delivery (screenshot-only) | 13 shots + 1 error state | 1 (error) | 13 | Fix C9 · Add A11 · build from screenshots + Swagger |
| **F13** · Payments money-ops | index + 4 tabs + disputes + transactions | 17 | 8 | Fix C9 C12 C19 · Add A1 A4 A5 |
| **F14** · Settlement accounts + company legal | `/payments/accounts`, `/company-legal` | 2 | 4 | Fix C9 C17 · form craft |
| **F15** · Users directory | `/users` + filters + pagination | 1 | 1 | Fix C9 C16 C19 · Add A1 A2 |
| **F16** · User details + safety dialogs | detail + 5 safety dialogs + pipeline tabs | 14 | 13 | Safety flows (KEEP) · Add A15 · pipeline-tabs closure |
| **F17** · Messages home + inbox + new | overview, inbox, new-direct, new-group-404 | 5 | 4 | Fix C9 C11 |
| **F18** · Messages thread | 5 threads + reply/edit/mark-read | 9 | 4 | Fix C9 · members-panel closure |
| **F19** · Moderation queue | queue / history | 4 | 2 | Fix C17 · Add A1 A4 A5 |
| **F20** · Analytics hub | 4 hubs + 4 ranges + CSV | 16 | 4 | Fix C10 · CSV export kept |
| **F21** · Content · Blog + editor | 6 tabs + editor Write/Split/Preview + new | 18 | 11 | Fix C11 C17 |
| **F22** · Portfolio studio | listing + edits + new + analytics | 8 | 4 | Fix C9 C17 |
| **F23** · Media library | Storage/Quarantine/Analytics + filters | 7 | 9 | Fix C17 · Add A1 |
| **F24** · System config | Health/Config/Features/Jobs/Templates/Ops | 8 | 9 | Template-editor closure · Add A15 |
| **F25** · Integrations + Audit logs | webhooks + add-form; audit + filters | 4 | 3 | Fix C4 C13 C19 · Add A7 A12 |

Suggested build order: **F02** (shell + dark + mobile proof) → **F08** (where money starts) → **F10** (revenue) → **F13** → **F16** (trust) → rest in ID order.

> **Outage note (F11/F12):** `/api/v1/admin/projects*` is down in production (report finding #1). F11 designs the loading/degraded/error experience as a first-class citizen; F12 rebuilds delivery UI from the 14 screenshots + the `projects`/`progress` Swagger specs (the endpoints exist — the origin doesn't answer). Both families must ship the degraded banner (A11) in all 5 variants.

---

## 5. BRAND SYSTEM — locked (ONE scheme for all 125 templates)

### 5.1 The consolidation decision (from report §3.2 + C5)

The live admin console is already teal-led (`--primary 168 82% 26%`). The lab locks it and purges the strays:

- **Brand = teal ramp** (below) becomes *the* `--primary`, `--accent-1` and `--ring`. One hue, five steps.
- **Delete/rename:** `--brand-violet` (a teal wearing a violet name) → `--brand-teal-*`; `--article-accent` blue and `--tw-ring-color` Tailwind-blue default are **removed** — no blue anywhere in the console.
- The client portal stays blue and the console stays teal **by documented decision** (report KEEP) — the split is intentional (operator vs client surface), not drift. Never “harmonise” the console to blue.
- **Status hues keep their hue** but text uses **darkened AA-safe text variants** (C3): success + info are fixed the way warning already was. Badges = icon + colour + text (never colour alone).

### 5.2 Tokens (no new hues — all 125 templates `@import` the same file)

```css
:root{
  /* Neutrals (cool-gray, from live admin) */
  --background:#f4f6f9; --card:#ffffff; --muted:#eef2f6; --border:#dfe6ee;
  --foreground:#1a2433; --muted-foreground:#54657a;
  /* Brand — ONE teal ramp (live --primary 168 82% 26% ≈ #0c7963) */
  --brand-50:#ecfdf5; --brand-100:#d1fae5; --brand-200:#a7f3d0;
  --brand-500:#14a07c; --brand-600:#0c7963; --brand-700:#0a5f4e; --brand-800:#084c3f;
  --primary:var(--brand-600); --primary-hover:var(--brand-700); --primary-active:var(--brand-800);
  --primary-tint:#e6f4ef; --ring:var(--brand-600);
  /* Sidebar + header (measured) */
  --sidebar-bg:#f3f4f7; --sidebar-active:rgba(12,121,99,.10); --sidebar-section:#6a7381;
  /* Status — bg tint + darkened AA text + border (FIX C3) */
  --status-success-bg:#e5f6ec; --status-success-text:#166534; --status-success-border:#86c9a3;
  --status-warning-bg:#fdf3e0; --status-warning-text:#7a5200; --status-warning-border:#e8c477;
  --status-error-bg:#fdecec;   --status-error-text:#b42318;   --status-error-border:#f0a8a0;
  --status-info-bg:#e6f4fd;    --status-info-text:#0c5d8a;    --status-info-border:#8fcbe8;
  --status-purple-bg:#f1e8fd;  --status-purple-text:#5b21b6;  --status-purple-border:#c4a8ef;
  --status-neutral-bg:#eef2f6; --status-neutral-text:#3f4c5e; --status-neutral-border:#c3cedb;
  /* Shape + type */
  --radius-sm:4px; --radius-md:6px; --radius-lg:8px; --radius-xl:20px;
  --shadow-xs:0 1px 2px rgba(26,36,51,.06); --shadow-sm:0 4px 14px rgba(26,36,51,.08);
  --font:"Inter",system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  --mono:ui-monospace,"IBM Plex Mono","SF Mono",Menlo,Consolas,monospace;
  --sidebar:232px; --header:52px; --content:1440px;
  --duration-fast:150ms; --duration-normal:280ms; --duration-slow:500ms;
  --ease-spring:cubic-bezier(.34,1.56,.64,1);
}
.dark{
  --background:#0b1220; --card:#101a2c; --muted:#152238; --border:#22334c;
  --foreground:#e8eef4; --muted-foreground:#9fb0c3;
  --sidebar-bg:#0d1526; --sidebar-active:rgba(20,160,124,.16);
  --primary:#14a07c; --primary-hover:#1abc8f;
  --status-success-text:#4ade80; --status-warning-text:#fbbf24;
  --status-error-text:#f87171; --status-info-text:#38bdf8;
  --status-purple-text:#c084fc; --status-neutral-text:#9fb0c3;
  /* status BGs in dark: 12–16% tint of the hue over --card — same formula every variant */
  --shadow-xs:0 1px 2px rgba(0,0,0,.4); --shadow-sm:0 8px 28px rgba(0,0,0,.45);
}
```

- Type scale: H1 display **32–40px** for page titles with money/counts at stake (C12) · H2 20–24 · card title 15–17 (ops density) · body 13–15 · meta 12 · micro 11 (never below 11). Money hero: 32–40px `tabular-nums tracking-tight`. **Mono for IDs/references/timestamps/versions** (C9 — the `01a10fa4…` rows finally become readable).
- Icons: one inline SVG set (Lucide-style, 24×24, `stroke-width=2`), `aria-hidden`. No emoji, no icon font, no CDN.
- Motion: `--duration-*` + spring ease. Animate `transform`/`opacity` only (one SVG `stroke-dashoffset` exception for steppers/timelines/queues).
- Hard bans: second brand hue (especially blue) · purple/neon decoration · Bootstrap/Tailwind CDN · external requests · raw `bg-white`/`gray-*` card classes (use `--card`/`--border`) · gradient soup · glass over dense tables.

### 5.3 Content lock (same story, upgraded hierarchy)

Every variant keeps the **same IA, labels, counts, ₹ figures, microcopy and legal text** found in this console's screenshots + HTML (verify field-by-field at Gate S). What changes is *hierarchy, triage speed, accessibility* per the report — **never** the story itself. **Never** rewrite queue semantics, invent operators/numbers, drop safety dialogs, trust strips, or honesty notes. The KEEP list (§7) must survive in every variant.

---

## 6. GATES — do them in order, print each gate block, stop on FAIL

### Gate S — Screenshot + HTML baseline (before anything else)

1. Open the family's screenshots + HTML snapshots + `audit-metadata.json` (filter `failedRequests` / `consoleErrors` to the family routes). Reconcile report prose vs captured DOM — **the captures are the tie-breaker**; report figures that differ are illustrations, frozen as such.
2. Build the map: routes, files, screenshots, H1/H2s, buttons, inputs, tables, tokens observed, failed requests / console errors.
3. Freeze the content truth (labels, figures, copy). Anything unverifiable = **not verified**, never invented.
4. Write `admin-portal-lab/families/<slug>/docs/BASELINE-MAP.md`.

```
## GATE S (<FAMILY>)
Screenshots opened: <n>/<n> · HTML opened: <n>/<n> · audit-metadata read: YES
Routes mapped: <list> · Content frozen: YES
Gate: PASS / FAIL
```

### Gate R — Reports study (the redesign brief)

1. Read the `.md` report cover-to-cover; open all 10 `.xlsx` sheets.
2. Write `docs/REPORT-STUDY.md`: executive findings touching the family (quoted) · token table · page-inventory rows · benchmark patterns applied (cite sources) · **family C-items with specifics** · **A-items with priority** · KEEP list · roadmap phases · acceptance checklist as QA list.

```
## GATE R (<FAMILY>)
MD read: YES · XLSX sheets: 10/10 · C-items mapped: <n>/<n> · A-items mapped: <n>/<n>
KEEP listed: YES · Checklist copied: YES
Gate: PASS / FAIL
```

### Gate A — Swagger / API study (features must be REAL)

1. Read the family's specs (§4 table + family prompt §3). **F11/F12 note:** the projects endpoints exist in spec but fail in production — map them anyway; the lab designs the states the fixed backend will serve, plus degraded states for while it's broken.
2. Write `docs/API-MAP.md`: UI element → method + path → key fields + enums → loading/empty/error/success states.
3. Every CTA in every variant must resolve to a real endpoint or be explicitly labelled a **demo affordance** in `DECISIONS.md`. No dead buttons, no `href="#"`.

```
## GATE A (<FAMILY>)
Specs read: <n>/<n> · Endpoints mapped: <n> · Demo-only CTAs listed: <n>
Gate: PASS / FAIL
```

### Gate T — Online design-template research (AFTER Swagger + full UI requirements)

**Order is mandatory — never reverse it:**
1. Finish Gates **S** + **R** (current UI + report requirements locked).
2. Finish Gate **A** (Swagger map written — every surface → real endpoint).
3. Be able to state the family's **complete UI page requirements** in your own words.
4. **Only then** search the open web for similar **great design templates** / live products solving the *same page job* (ops queues, triage inboxes, ledger/billing ops, user admin + RBAC, moderation, analytics, CMS/blog editors, media libraries, system consoles, audit trails).

**Rules:**
- Open and study **≥8** references per family. Cite each with URL + the *pattern* stolen (layout, hierarchy, density, triage flow, interaction — **never** brand colours or identity).
- Cross-check every pattern against Gate A: no endpoint + no Gate-R ADD = inspiration-only or dropped. **Do not invent features.**
- Extend report §5 benchmarks; don't replace the 13 sources — add fresh finds.
- Locked content + §5 tokens stay unchanged. Templates change *how* you compose, not *what* the console is.

**Output:** `docs/TEMPLATE-RESEARCH.md` — queries used · table of ≥8 refs (name · URL · page-job match · adopted patterns · rejected + why) · mapping adopted patterns → V1–V5 axes · explicit line: "No features invented from templates; all CTAs still Gate-A or demo-labelled."

```
## GATE T (<FAMILY>)
Queries run: <n> · Refs opened: <n>/≥8 · TEMPLATE-RESEARCH.md written: YES
Patterns mapped to V1–V5: YES · No invented API features: YES · Order S→R→A→T respected: YES
Gate: PASS / FAIL
```

Do not draw a single concept until S + R + A + T all PASS.

---

## 7. WHAT TO CHANGE / ADD / KEEP (bound to the report — not your invention)

**CHANGE (all 20, each in 5/5 of its target families):** C1 hero+strip KPIs · C2 drill-down strip cells · C3 badge contrast · C4 one table per page · C5 token rename/purge + documented teal/blue split · C6 nav badges + hub groups · C7 split personal/platform notifications · C8 tame focus order · C9 mono IDs · C10 labelled charts + sparse states · C11 unify creation URLs · C12 display money type · C13 audit row-detail · C14 contact rows open reply · C15 drop cookie banner · C16 fix user counting · C17 undo windows · C18 dark repair-or-remove · C19 pagination info · C20 logo alt. (Full specifics live in each family prompt's §6 + the report §6.1.)

**ADD (coverage: P1 in 5/5 · P2–P3 in ≥3/5, manifest-recorded):** P1: A1 bulk bar · A2 keyboard triage · A3 saved views · A4 SLA/age badges · A5 next-item loop. P2: A6 payment detail · A7 exports · A8 Ask-AI · A9 operator digest · A10 density toggle · A11 degraded banner. P3: A12 webhook log+replay · A13 ops-health grid · A14 PWA · A15 per-operator permissions.

**KEEP (every variant, every family it touches):** Needs-attention strip · reason-required safety dialogs · payments 5-tab model + installment bars · quote stepper + line-item library · requests capacity card · ⌘K palette · honest microcopy · teal+Inter+6px ops identity · settlement transparency.

---

## 8. PHASE 2 — CONCEPTS: 5 per family (print ALL before code)

### 8.1 Concept Card template (125 cards in `docs/CONCEPTS.md`)

```
F## · <Family> · V# "<name your idea>"
Keeps (Gate S content): <locked labels / figures / CTAs>
Fixes/Adds: C# (…) · A# (…)
Differs on axes: A(layout) + C(narrative) + E(motion) — see §8.2
Layout sketch: [ASCII sketch of the geometry]
Signature interaction: <the one memorable behaviour>
Triage story: <how 100 items clear: bulk? keyboard? saved view? loop?>
API basis: <endpoints from your API-MAP>
Template refs (Gate T): <2–3 URLs / pattern names — layout/hierarchy only>
Shell: <shell notes> · Dark + 375px notes: …
Risk: <what could break at 375px / in dark / keyboard>
```

### 8.2 Difference Test (multi-axis — colour is NOT an axis)

Each variant must differ from its **4 siblings** on **≥3 of 5 axes**, one of which must be A or C:

| Axis | Options (examples) |
|---|---|
| **A · Layout geometry** | single-column ledger · 2-col with sticky triage rail · 3-pane ops · card grid · timeline-led · split queue+detail |
| **B · Information hierarchy** | verdict-first · queue-first · money-first · action-first · narrative-first |
| **C · Page narrative** | static sections · stepper-linked · tab-led · queue-led · chapter-sticky · accordion · drill-down-led |
| **D · Density & surface** | airy minimal · dense ops-table · bento · ledger/print · compact console (same tokens!) |
| **E · Interaction family (JS)** | keyboard-triage-first · command-palette-first · bulk-select flows · crossfade preview · count-up · drawer/overlay · filter-chips · timeline-draw · sticky-CTA |

Recolouring, re-radiusing or re-shadowing alone is **not** a difference. Neighbouring variants must not share the same A+C combination. Coverage in your 5: ≥1 minimal · ≥1 dense · ≥1 queue/triage-led · ≥1 narrative/stepper-led · ≥1 motion-signature-led.

### 8.3 Roster guidance (adapt freely — keep 5 per family)

| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: current IA, report fixes applied, calm restraint |
| V2 | Triage-first: the queue owns the first screen; keyboard-led |
| V3 | Verdict/narrative-led: the sentence and the one action own the screen |
| V4 | Dense console: compact multi-metric power surface |
| V5 | Motion-signature: drawer/preview/count-up-led, same content |

Rename freely — still **5 variants**, still locked content + tokens. Family prompts (§8.3) tune this roster per page job.

---

## 9. PHASE 3 — BUILD (manual, one by one)

### 9.1 Output layout

```
admin-portal-lab/
  index.html                  ← gallery: create if missing; otherwise add/replace ONLY your family section
  assets/                     ← ONE shared logo/icon set (inline SVG preferred) — add to it, never fork it
  shared/
    tokens.css                ← §5 tokens ONLY — create with EXACTLY the §5.2 CSS if missing; if present, import AS-IS (never edit, never fork)
    base.css                  ← reset + primitives ONLY — same create-if-missing rule
  families/
    F##-<slug>/
      V1/index.html … V5/index.html   ← the 5 variants (each may carry its own style.css beside it)
      docs/
        BASELINE-MAP.md       ← Gate S output
        REPORT-STUDY.md       ← Gate R output
        API-MAP.md            ← Gate A output
        TEMPLATE-RESEARCH.md  ← Gate T output (≥8 refs, after Swagger + UI requirements)
        CONCEPTS.md           ← 5 concept cards
        DELIVERY-REPORT.md    ← Gate 3 output + 1 family winner
  manifest.json               ← merge: add/replace your family's 5 records; never delete other families' records
  DECISIONS.md                ← append/extend ONLY your family section (hand-authorship + demo-CTA list + A-coverage)
```

- `shared/` holds **only** tokens + reset/primitives. Each variant carries its **own hand-written** layout CSS (inline or `style.css` beside `index.html`). Never one megatemplate scoped 5 times with dead rules.
- Every variant renders standalone over relative paths, links back to the gallery, and has prev/next navigation within its family (V1 ↔ V5).
- Preview: `python3 -m http.server 8131` from repo root → `/admin-portal-lab/` (8130 belongs to the client lab; 8124–8128 to sibling labs).

### 9.2 Craft rules

- Each variant: `<!DOCTYPE html>`, imports `tokens.css` (+ `base.css`), only the CSS it uses, full page markup, **small JS for its real interactions** (tabs, queues, bulk, keyboard, dialogs, filters, palette, drawers, theme).
- No dead CSS. No framework. No external requests (no font/CDN/GSAP — implement motion yourself or vendor a tiny local helper). Offline render. System-ui Inter fallback stack (no webfont fetch).
- Budgets (soft): ≤70 KB HTML+CSS+JS per variant excl. images; DOM sensible (no triplicated tables!); CLS 0 for sticky chrome; `?theme=dark|light` boot before paint.
- Mobile-first; no page-level horizontal scroll at 360 / 390 / 768 / 1024 / 1440.
- Build order: **V1 first (Gate 2a pilot)** — all states, both themes, 5 widths, keyboard end-to-end — then V2→V5 one by one, with a self-critique after each variant. Freeze V1's patterns before the full run. Never stub; never "TODO states later" — every variant ships empty + loading + error states on day one.

### 9.3 Interaction & JS bar (required, not fluff)

| Requirement | Detail |
|---|---|
| Real behaviour | Tabs, queues, bulk select, keyboard triage, search, sort, pagination, dialogs, drawers, palette, accordions all work with keyboard + mouse |
| No fake motion | CSS-only hover with no page-level behaviour is a fail; empty `<script>` is a fail |
| IO + rAF | IntersectionObserver for reveals/count-ups; no janky scroll listeners |
| Reduced motion | `prefers-reduced-motion` kills transform/scroll effects; opacity ≤150ms only |
| A11y | Focus trap for overlays, Esc closes, focus restore, `aria-expanded`/`aria-selected`/`aria-pressed`, live regions for queue counts + toasts; roving tabindex on dense queues |
| Honest states | Loading = skeleton (never spinner-only); error = what/why/action + retry; empty = teaches next step; degraded = banner + partial UI (A11) |

### 9.4 Accessibility (WCAG 2.2 AA, both themes)

Skip link · one `h1` · no skipped levels · landmarks `header/nav/main/aside/footer` · real lists/tables · `:focus-visible` 2px `var(--primary)` + 2px offset · body ≥13px ops (≥14 preferred), nothing <11px · **text ≥4.5:1, UI boundaries ≥3:1** (badges, selected states, spines, focus) · 44px preferred / 24px minimum targets · status never colour-alone (icon + text).

---

## 10. COMPONENT INVENTORY (define once, reuse ×125 — restyle allowed, dropping states forbidden)

| Component | Required states |
|---|---|
| Shell (sidebar + 52px header + breadcrumb + ⌘K + theme + bells + operator menu) | expanded/collapsed, mobile drawer, nav badges, dark (F02 owns it) |
| Needs-attention strip + hero KPI | drill-down cells, age badges, zero-state |
| Queues (requests/contact/verification/disputes/moderation) | bulk bar, keyboard triage, saved views, SLA badges, next-item loop, skeleton/empty/error |
| Tables (users/quotes/payments/audit/media) | search + filter + sort + pagination + totals + row actions + ONE table + card-fallback + empty/error |
| Tabs | `role=tablist`, arrow-key nav, deep-linkable |
| Status badge / stepper / timeline | icon+colour+text @ AA, locked w/ "why" microcopy |
| Buttons (primary/secondary/ghost/destructive/icon) | default/hover/focus/active/disabled/loading |
| Safety dialogs (impersonate/deactivate/set-password/revoke) | reason-required, safeguard copy, audit note, Esc — never auto-confirm |
| Forms (webhook/quota/capacity/templates/legal) | labels, inline validation, help text, styled dropzone (never native file input) |
| Quote stepper + line-item library (C-family) | Scope/Pricing/Terms, schedule variants, duplicate-phase honesty |
| Content editor (Write/Split/Preview) | toolbar, autosave state, preview parity, publish guard |
| Media grid + quarantine | type/source filters, preview card, quarantine reason + restore |
| Analytics charts | labelled axes, sparse-data states, CSV export |
| Command palette | operator-complete actions, ↑↓↵ esc, jump-to-queue/user |
| Toasts + degraded banner (A11) | polite live region, retry + support CTA, undo window where destructive |

---

## 11. SIZE & PERFORMANCE CONTRACT (all 125)

| Element | Desktop | Phone |
|---|---|---|
| Content container | ≤1440px (shell content col) | full width, 16–24px gutters |
| H1 | 32–40px display (money/counts at stake) | 28–32px |
| Body/meta | body 13–15px ops, meta ≥12px | body ≥14px |
| Tables | full, sticky header where long | card-fallback or sticky-first-col scroll |
| Page weight | ≤250 KB excl. images; images ≤350 KB/page, explicit dims, lazy below fold | same |

No 80px headlines, no 600px hero art inside the console, no giant decorative numerals. Record measured H1/container at 360/390/768/1024/1440 in both themes per variant.

---

## 12. GATE 1 — concepts review (before build)

**Gate 1 — concepts review (before build).** 5 concept cards per family in `docs/CONCEPTS.md`, each per §8.1 with ASCII sketch + axes + triage story + API refs + Gate T refs + dark/mobile notes.

- **Table 1:** `variant | keeps | fixes (C#) | adds (A#) | axes | signature interaction | API endpoints`
- **Table 2 — distinctness:** 5 rows × axes A–E. FAIL if any two siblings share A+C, or differ by colour only.
- **Table 3 — coverage:** every C-item present in 5/5; every P1 A-item 5/5; P2–P3 ≥3/5.

```
## GATE 1 (<FAMILY>)
Concept cards: 5/5 · Sketches: 5/5 · Difference test: PASS/FAIL
C coverage 5/5: YES/NO · P1 A coverage 5/5: YES/NO · P2-P3 ≥3/5: YES/NO
Gate: PASS / FAIL
```

## 13. GATE 2a/2b + GATE 3 — build, verify, critique

**Gate 2a — Pilot (hand-built).** Build **V1** fully: all states/tabs, both themes, 5 widths, keyboard end-to-end (including bulk + triage loop where applicable). Do not proceed until it passes §5/§9/§10.

**Gate 2b — Full build (hand-built, one by one).** Build V2–V5, each hand-authored and self-critiqued. Then update the gallery section + `manifest.json` (5 records) + `DECISIONS.md`.

**Gate 3 — Verify and critique.**

- Confirm §1.3: no design-generation scripts; `DECISIONS.md` attests hand-authorship.
- Anti-drift checks (manual): identical-skin side-by-side (fail if 2 siblings near-identical) · remote-URL check (no `http(s)` assets/fonts/scripts) · dead-link check (no `href="#"`) · token check (only §5 colours/radii/spacing; teal only, no blue) · scope check (only your family folder + shared-infra merges + family docs) · C/A coverage check from manifest.
- Exercise every interaction in every variant: queues, bulk, keyboard triage, tabs, filters, search, sort, pagination, dialogs, drawers, theme, reduced-motion, no-JS fallback (content + links reachable), rapid-click races, broken-image placeholders.
- Inspect at 360/390/768/1024/1440, light + dark, **if a browser is available**. If not, say so explicitly and do not claim screenshot QA.
- Apply the report's acceptance checklist (report §7.1 — hierarchy <2s, triage speed, queues, tables, nav, colour AA, type, dark parity, keyboard, empty/loading/error, safety, mobile, performance, legal/ops) to each variant. Classify findings **blocker · major · minor**. No blocker open at hand-off.
- Write `docs/DELIVERY-REPORT.md`: file paths, run command, per-variant verification, and **1 family winner recommendation + why**.

```
## GATE 3 (<FAMILY>)
Variants built by hand: 5/5 · Generator scripts: 0
Widths×themes checked: <…> · Checklist pass: <…>/5 · Blockers open: 0
Gate: PASS / FAIL
```

---

## 14. HARD CONSTRAINTS

- **Do not** push, commit, create/switch/rename a branch.
- **Do not** modify screenshots, HTML snapshots, reports, Swagger specs, example prompts, `scripts/`, or research files (`research-prompt.md`, `questionsare.md`, `research-worklog.md`).
- **Do not** create templates with a generator script. Hand-author every variant (§1.3).
- **Do not** introduce colours outside §5. Teal only — no blue, no second brand hue. Phase/status hues stay inside the token file.
- **Do not** ship 5 recolours of one layout — the Difference Test (§8.2) is a gate, not guidance.
- **Do not** invent console features, operators, numbers, or metrics. Features come from Gate S current-UI + Gate R ADD list + Gate A Swagger — nothing else. Gate T templates inspire composition only.
- **Do not** drop KEEP items, safety dialogs, trust strips, honesty notes, or audit/dispute routes. Destructive lab controls must show confirm + audit copy (lab is static mock — never wire a real action).
- **Do not** ship remote/expiring media, broken routes, `href="#"` destinations, external CDNs, font services, or chart libraries.
- **Do not** present research you did not open; unopened = not verified. Do not claim browser QA you did not run. Do not run Gate T before Gates S/R/A PASS.
- **Do not** build outside `admin-portal-lab/families/<your-slug>/` + the shared-infra merge rules (§9.1) + family docs.

---

## 15. COMPLETION CHECKLIST (25 families × 5 = 125)

- [ ] Gate S PASS per family — screenshots + HTML + audit metadata mapped, `docs/BASELINE-MAP.md` written
- [ ] Gate R PASS — MD + all 10 XLSX sheets studied, `docs/REPORT-STUDY.md` written
- [ ] Gate A PASS — family specs mapped, `docs/API-MAP.md` written (every CTA → real endpoint or demo-labelled)
- [ ] Gate T PASS — after Swagger + full UI requirements: ≥8 refs studied, `docs/TEMPLATE-RESEARCH.md` written
- [ ] Gate 1 PASS — 5 concept cards + sketches + difference tables, `docs/CONCEPTS.md` written
- [ ] Gate 2a PASS — V1 pilot hand-built and frozen · Gate 2b — all 5 **hand-authored**; gallery + `manifest.json` + `DECISIONS.md` updated; zero generator scripts
- [ ] Same token file imported by all 125; no new hues (teal only); C3 AA badges; C5 single brand
- [ ] Every C-item in 5/5 of target families; every P1 A-item in 5/5; P2–P3 in ≥3/5 (manifest-recorded)
- [ ] Every variant: empty + skeleton + error (+ degraded where applicable) states; light + dark; 360–1440; keyboard-clean (bulk + triage loop where applicable); reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — acceptance checklist applied, 0 blockers, `docs/DELIVERY-REPORT.md` with 1 family winner per family
- [ ] Reported: file paths, `python3 -m http.server 8131` run command, verification + limitations

### Operator shortcuts

- **Colour drift:** "Restore tokens from §5 in every variant — teal only, no blue, no new hues."
- **Fake variety:** "V3 fails the Difference Test vs V1 — change geometry or narrative (axis A/C), not colour."
- **No manual craft:** "Gate 2 FAIL — a generator script exists. Delete it and hand-rebuild."
- **Shallow study:** "Gate R/A/T FAIL — REPORT-STUDY/API-MAP/TEMPLATE-RESEARCH must quote every C/A item, endpoint mapping, and ≥8 template refs (Gate T only after Swagger + UI requirements)."
- **Dead CTA:** "Every button links to a Gate-A endpoint or is labelled demo-only in DECISIONS.md."
- **Slow queue:** "This queue can't clear 100 items before lunch — add bulk + keyboard + loop."
- **Freeze:** "F##-V1 approved — never regenerate it."

---

*End of master prompt. Family prompts in `admin-portal-prompts/` carry the same rules scoped to one family. Start at §3 Step 1. Print every gate block. Hand-craft all 125.*
