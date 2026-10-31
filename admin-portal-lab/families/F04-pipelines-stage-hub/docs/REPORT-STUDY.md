# F04 Report Study — Pipelines · Stage Pipeline

## GATE R (F04)

```
## GATE R (F04) · MD: YES · XLSX: 10/10 · C: 7/7 · A: A11 · KEEP: YES · Gate: PASS
```

## Findings touching F04

- Projects API down (`GET /api/v1/admin/projects*`) — Pipeline project hub network-error; stage Projects card must stay honest (**No data** / degraded), not invent a count.
- Pipeline inventory: 3 hub tabs, stage cards, API reference (~157 endpoints). Partial because project hub empty; **API reference is a “dev-tool in ops clothing”** — variants may keep collapsible or relocate without inventing features.
- C11: unify creation/route grammar — hub jump links must use real routes (no dead guesses).
- KEEP: stage-map mental model (end-to-end flow in order).

## CHANGE (5/5)

| ID | F04 application |
|---|---|
| C11 | Stage/console jumps use unified routes (`/contact`, `/requests`, …) |
| C3 | AA status text on No-data / error badges |
| C5 | Teal-only tokens |
| C9 | Mono for endpoint counts / base path `/api/v1` |
| C12 | Display-scale stage counts |
| C18 | Dark parity |
| C20 | Logo alt on shell frame |

## ADD

- **A11** (P2 ≥3/5): Degraded/error honesty on Projects (and optional global banner). Manifest record coverage.

## KEEP

- Stage-map order Inquiries → … → Messages.
- Honest microcopy; teal + Inter + 6px identity.
- Shared Stage / User / Project tab bar (User/Project deep-link to F05 destinations).
