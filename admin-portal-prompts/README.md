# Nestlancer Admin Portal Lab — Family Prompt Pack (25 prompts)

### The master prompt, split: one AI prompt per page family · each prompt hand-crafts 5 variants of its page · one shared teal scheme

> **Relation to `admin-portal-prompt.md`:** the master holds the full rules once (§1–§15: roles, craft law, tokens, gates, build, components, perf, constraints). Each family file below re-scopes them to ONE family (own baseline, own C/A/KEEP, own roster) and cites the master for shared procedures — single-sourced to prevent drift. The 25 prompts together produce the same **125-template lab** (25 families × 5 variants) the master specifies.
>
> **Review provenance:** every family brief was verified on 2026-10-30 against the repo's actual captures — the 194 HTML snapshots, the 119-screenshot index, the research report (C1–C20 / A1–A15 / KEEP) and the 17 Swagger specs. Counts, ₹ figures and labels quoted in the prompts are the **captured** values; report illustrations that differ are labelled as such. States the live crawl could not reproduce (report §2.2) are flagged per family with their fallback baseline (screenshots and/or Swagger).

## How to use

1. Open the `ui-designing-admin-dashboard` repo in your agent (Arena Agent Mode, Cursor, Claude Code).
2. Paste **one** prompt file from this folder (e.g. `F10-quote-details-builder.md`) as the task.
3. The agent studies that family's screenshots + HTML + report + **Swagger**, locks the full UI page requirements, **then** searches online for similar great design templates, prints its gates (**S → R → A → T → 1 → 2a → 2b → 3**), and hand-builds **5 variants** in `admin-portal-lab/families/<slug>/V1…V5/`.
4. Repeat with the next prompt — **any order works**; every prompt is standalone (shared rules via the master). Suggested order: **F02** (establishes the shell + dark + mobile proof) → **F08** → **F10** → **F13** → **F16** → the rest in ID order.

### Outage note (F11 / F12)

`/api/v1/admin/projects*` is down in production (report finding #1). F11 designs the loading/degraded/error experience first-class; F12 rebuilds delivery UI from its 13 screenshots + the `projects`/`progress` Swagger specs. Both ship the degraded banner (A11) in all 5 variants.

## The 25 prompts

| Prompt file | Family | Scope | Key fixes / adds |
|---|---|---|---|
| [`F01-auth-login.md`](F01-auth-login.md) | **F01** · Auth · Operator sign-in | 2 HTML states · 0 screenshots | Global fixes (C3 C5 C9 C12 C18 C20) |
| [`F02-dashboard-command-center.md`](F02-dashboard-command-center.md) | **F02** · Dashboard · Command center (**owns the shell**) | 13 HTML states · 3 screenshots | Fix C1 C2 C6 C10 · Add A9 A11 A13 |
| [`F03-global-search-command-palette.md`](F03-global-search-command-palette.md) | **F03** · Global search / ⌘K palette | 1 HTML state · 1 screenshot | Palette completeness audit (KEEP) |
| [`F04-pipelines-stage-hub.md`](F04-pipelines-stage-hub.md) | **F04** · Pipelines · Stage pipeline | 12 HTML states · 1 screenshot | Fix C11 · global fixes |
| [`F05-pipeline-user-project-hubs.md`](F05-pipeline-user-project-hubs.md) | **F05** · Pipeline hubs · User + Project | 16 HTML states · 3 screenshots | Fix C9 C11 · Add A13 |
| [`F06-contact-inquiries.md`](F06-contact-inquiries.md) | **F06** · Contact · Inquiries triage | 7 HTML states · 2 screenshots | Fix C14 C19 · Add A1 A2 A3 A4 A5 |
| [`F07-notifications-center.md`](F07-notifications-center.md) | **F07** · Notifications center + ops | 7 HTML states · 6 screenshots | Fix C7 C8 · Add A1 A3 |
| [`F08-requests-triage.md`](F08-requests-triage.md) | **F08** · Requests triage + details | 8 HTML states · 5 screenshots | Fix C9 C19 · Add A1 A2 A3 A4 A5 |
| [`F09-quotes-list.md`](F09-quotes-list.md) | **F09** · Quotes list | 1 HTML state · 1 screenshot | Fix C9 C19 · Add A1 A2 A3 A5 |
| [`F10-quote-details-builder.md`](F10-quote-details-builder.md) | **F10** · Quote details + builder | 11 HTML states · 8 screenshots | Fix C9 · report §4.2 guardrails |
| [`F11-projects-list.md`](F11-projects-list.md) | **F11** · Projects list (**outage family**) | 3 HTML states · 1 screenshot | **Add A11** (degraded-first) |
| [`F12-project-details-delivery.md`](F12-project-details-delivery.md) | **F12** · Project details + delivery (**screenshot-only**) | 1 HTML (error) · 13 screenshots | Fix C9 · Add A11 |
| [`F13-payments-money-ops.md`](F13-payments-money-ops.md) | **F13** · Payments money-ops | 17 HTML states · 8 screenshots | Fix C9 C12 C19 · Add A1 A4 A5 |
| [`F14-settlement-legal.md`](F14-settlement-legal.md) | **F14** · Settlement accounts + company legal | 2 HTML states · 4 screenshots | Fix C9 C17 · form craft |
| [`F15-users-directory.md`](F15-users-directory.md) | **F15** · Users directory | 1 HTML state · 1 screenshot | Fix C9 C16 C19 · Add A1 A2 |
| [`F16-user-details-safety.md`](F16-user-details-safety.md) | **F16** · User details + safety dialogs | 14 HTML states · 13 screenshots | Safety flows (KEEP) · Add A15 |
| [`F17-messages-home.md`](F17-messages-home.md) | **F17** · Messages home + inbox + new | 5 HTML states · 4 screenshots | Fix C9 C11 |
| [`F18-messages-thread.md`](F18-messages-thread.md) | **F18** · Messages thread | 9 HTML states · 4 screenshots | Fix C9 · members closure |
| [`F19-moderation-queue.md`](F19-moderation-queue.md) | **F19** · Moderation queue | 4 HTML states · 2 screenshots | Fix C17 · Add A1 A4 A5 |
| [`F20-analytics-hub.md`](F20-analytics-hub.md) | **F20** · Analytics hub | 16 HTML states · 4 screenshots | Fix C10 · CSV kept |
| [`F21-content-blog.md`](F21-content-blog.md) | **F21** · Content · Blog + editor | 18 HTML states · 11 screenshots | Fix C11 C17 |
| [`F22-portfolio-studio.md`](F22-portfolio-studio.md) | **F22** · Portfolio studio | 8 HTML states · 4 screenshots | Fix C9 C17 |
| [`F23-media-library.md`](F23-media-library.md) | **F23** · Media library | 7 HTML states · 9 screenshots | Fix C17 · Add A1 |
| [`F24-system-config.md`](F24-system-config.md) | **F24** · System config | 8 HTML states · 9 screenshots | Template closure · Add A15 |
| [`F25-integrations-audit.md`](F25-integrations-audit.md) | **F25** · Integrations + Audit logs | 4 HTML states · 3 screenshots | Fix C4 C13 C19 · Add A7 A12 |

## Shared infrastructure (every prompt maintains it the same way)

- `admin-portal-lab/shared/tokens.css` — **ONE locked teal scheme** (master §5.2). The first family to build creates it; every later run imports it as-is (never edit, never fork).
- `admin-portal-lab/shared/base.css` — reset + primitives only, same create-if-missing rule.
- **Owner review — full-width shell:** F02–F25 authenticated page canvases fill the available viewport beside the sidebar, not a centered max-width column. Desktop gets a visible, persistent collapse/expand control and an accessible icon rail; mobile retains a drawer. Test 1920/2560 as well as the usual widths. F01's standalone sign-in and appropriately sized dialogs are exceptions; do not change the locked tokens.
- `admin-portal-lab/assets/` — one shared logo/icon set; add to it, never fork it.
- `admin-portal-lab/index.html` — the gallery; each run adds/replaces only its own family's section.
- `admin-portal-lab/manifest.json` — 5 records per family; merge-only, never delete other families' records.
- `admin-portal-lab/DECISIONS.md` — one section per family; append/extend only your own.
- Family docs live in `admin-portal-lab/families/<slug>/docs/` — `BASELINE-MAP.md` · `REPORT-STUDY.md` · `API-MAP.md` · `TEMPLATE-RESEARCH.md` · `CONCEPTS.md` · `DELIVERY-REPORT.md`.
- **Gate T order (non-negotiable):** understand Swagger + complete UI requirements first → **then** search online for ≥8 similar great design templates. Templates inspire layout/hierarchy/triage-flow only; they never invent features.
- Preview: `python3 -m http.server 8131` from the repo root → `/admin-portal-lab/` (8130 belongs to the client lab).

## The rules that did not change

- **ONE colour scheme across all 125** — the Difference Test runs per family; colour is never the difference. Teal only — no blue.
- **Hand-crafted variants only** — no generator scripts (master §1.3).
- **Content lock** — same IA, labels, counts, ₹ figures, microcopy and safety copy per family.
- **Coverage:** C-items in 5/5 of each target family; P1 ADDs in 5/5; P2–P3 in ≥3/5 (manifest-recorded).
- **WCAG 2.2 AA**, light + dark, 360–1440 px, keyboard (bulk + triage loop where applicable), reduced-motion, honest empty/loading/error/degraded states.
- **Do not** push, commit, or branch; **do not** modify the input captures (screenshots, HTML snapshots, reports, Swagger specs, example prompts, scripts).
- Features come only from: the current UI (Gate S) + the report's CHANGE/ADD lists (Gate R) + the Swagger specs (Gate A). Nothing invented. Online templates (Gate T) are composition references only.
- **The operator question** gates every family: one operator, 100 items, before lunch, without fear.
- **Enterprise standards (2026-11-01, master §5.4):** every family prompt now carries an *Enterprise-standards addendum* — `role=alert` errors with focus, dismissible notices, password Show/Hide + Caps-Lock hint, consent line + © 2026 footer + Secured·HTTPS chip, 44px coarse targets, autofocus/skip-link, progressive disclosure allowed on auth/creation flows. Backed by 12 live enterprise login pages studied 2026-11-01 (AWS, GCP, Azure, Salesforce, Cloudflare, Datadog, Stripe, Vercel, GitHub, Atlassian, DigitalOcean, Heroku). Plus the **creative bar (master §5.5)**: every variant is art-directed with one strong idea — teal-ramp background art only, transform/opacity motion + at most one stroke-dashoffset element, display type, 8px rhythm; "if it could be any SaaS page, rebuild axis A/C, never the colour."

## Family → input map (quick reference)

- **Screenshots:** `Nestlancer-admin-screenshots/admin/` (119 `.webp`) — each prompt lists its own.
- **HTML snapshots:** `nestlancer-admin-pages-html/` (194 files + `audit-metadata.json` + `README.md` map) — each prompt lists its own.
- **Report:** `reports/NESTLANCER_ADMIN_CONSOLE_UI_RESEARCH_REPORT.md` + `.xlsx` (10 sheets) — read in full by every prompt.
- **Swagger:** `backend-api-swagger/` (17 specs + `README.md`, 560 paths) — each prompt lists its family's specs.
