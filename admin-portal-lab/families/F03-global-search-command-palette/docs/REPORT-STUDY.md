# F03 Report Study — Global Search / ⌘K Palette

## GATE R (F03)

```
## GATE R (F03) · MD: YES · XLSX: 10/10 · C: 6/6 · A: completeness audit (family brief) · KEEP: YES · Gate: PASS
```

## Sources

- `reports/NESTLANCER_ADMIN_CONSOLE_UI_RESEARCH_REPORT.md` — read cover-to-cover for F03-touching rows.
- `reports/Nestlancer_Admin_Console_UI_Research_Report.xlsx` — all 10 sheets opened (workbook sheet names verified: Executive Findings · Design Tokens · Page Inventory · Benchmark Patterns · CHANGE · ADD · KEEP · Roadmap · Acceptance checklist · Sources). Shared-string extract was empty in this environment; sheet inventory + MD prose used; **MD wins** on conflicts.

## Executive findings touching F03

- State coverage includes the global search ⌘K dialog among audited dialogs.
- Header on every page: `Search pages… ⌘K` — trigger owned by shell (F02); open palette owned by F03.
- Dashboard inventory row lists ⌘K (1 dialog) alongside Command center.
- Benchmark pattern: Webflow / Apex / Shadcn Admin cite ⌘K as baseline; admin already has it — **audit actions for operator completeness** (jump-to-queue, jump-to-user).
- Pattern table: “Command palette completeness” → ⚠️ Exists, ops coverage unknown → **Audit**: every queue/user/action reachable.
- KEEP: ⌘K palette + keyboard hints — above benchmark average; complete it, don’t restyle it away.
- Acceptance (Navigation): ⌘K reaches every queue/user/action.

## F03 CHANGE items (all 5/5)

| ID | Requirement | F03 application |
|---|---|---|
| C3 | AA-safe status text | Result badges (queue age, payment status) use `--status-*-text` |
| C5 | Teal-only tokens | Import shared tokens; no blue accent in palette |
| C9 | Mono IDs/refs | Request/payment/user IDs in result rows use `--mono` |
| C12 | Readable hierarchy | Result primary label ≥13–14px; no 11px primary |
| C18 | Dark parity | Palette + frame work in dark |
| C20 | Logo alt | Frame logo has accessible name |

## ADD / family brief

- Report does not assign a numbered A# solely to palette completeness; F03 prompt elevates **completeness audit** as the family ADD (5/5). Missing Gate-A jumps (queues, people, payment verification/disputes, mono-ID rows) ship in every variant.
- No P1 bulk/triage ADD belongs to F03 (not a queue page).

## KEEP

- ⌘K palette + footer keyboard hints.
- Honest microcopy; teal + Inter + 6px ops identity.
- Captured group/action labels retained; completeness only **adds** Gate-A jumps, never renames the story.

## Acceptance checklist excerpt (QA for Gate 3)

- Hierarchy readable <2s (groups + active row).
- Keyboard: ↑↓↵ esc, focus trap, restore, `aria-activedescendant`.
- Empty / loading / no-results honest.
- Dark parity; mobile sheet at 375px.
- No dead actions; no invented APIs.
