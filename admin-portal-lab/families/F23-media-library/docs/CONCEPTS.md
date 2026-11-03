# F23 · Media Library — Five concept cards (Gate 1)

Written **before** any variant HTML. All five use the locked `shared/tokens.css` teal system, the same captured content, the same three tabs and the same shared behaviour — but a different information architecture and visual hierarchy (master §8.2: ≥3/5 differentiated axes incl. A or C).

| | V1 · Ground-truth desk | V2 · Grid spine | V3 · Trust review | V4 · Dense console | V5 · Choreography |
|---|---|---|---|---|---|
| **One strong idea** | The captured evidence ledger is the header; everything else is a workbench below it | The asset wall owns the viewport; a docked inspector keeps context | Quarantine trust band leads above the tabs; library is a compact list | One borderless status strip + compact register + always-visible ops rail | A visible four-step upload lane with staggered reveals and a sliding drawer |
| **A · Composition** | 4-cell ledger → 236px Browse rail → work column | Full-width wall (auto-fill ≥160px) + 316px inspector | 1.35fr trust band / 1fr runbook → 266px decision rail + list | 5-cell status strip → 1fr register + 292px rail | 4-step choreography lane → stage + 274px motion rail |
| **B · Dominant element** | Bucket/ledger numbers | Generic asset tiles | Captured "0" quarantined | 10-row compact register | Step lane + progress track |
| **C · Detail model** | Right drawer | Docked inspector + drawer | Decision rail + drawer | Ops rail + drawer | Motion rail + sliding drawer |
| **D · Density** | Comfortable | Visual / spacious | Comfortable, verdict-first | Compact (11px rows) | Editorial / airy |
| **E · Motion** | Minimal | Hover lift only | None | Minimal | Staggered `rise`, sliding drawer, progress fill (reduced-motion honoured) |
| **Axes changed vs V1** | — | A, B, C, D | A, B, C, E | A, B, C, D | A, B, C, D, E |

## Coverage

- Minimal: **V1** (no decoration beyond the ledger). Dense: **V4**. Grid-led: **V2**. Quarantine-led: **V3**. Motion-led: **V5**.
- CHANGE in 5/5: C17 (10s undo + reason/confirm), C3, C5, C9, C12, C18, C20; C19 pagination info added from report §6.1.
- ADD in 5/5: A1 — corrected bulk bar (count / Clear / local Tag / local Move / Delete-gated), with no "Quarantine" action.
- KEEP in 5/5: Storage / Quarantine / Analytics structure, exact microcopy, teal identity.
- All 5: clickable cards → detail drawer, spec-backed staged upload, captured analytics (no invented 30-day series), empty / skeleton / error / upload-progress / undo states, dark + 360–2560, roving grid keyboard + drawer focus trap, no-JS summary.

## Difference verdict

The five are not recolours: V1 leads with a numeric ledger, V2 with a visual wall, V3 with a trust gate above the tabs, V4 with a compact console register, and V5 with a choreographed step lane. **Gate 1: PASS** (5 cards, 5 sketches, ≥3 axes differing, C 8/8, P1 5/5). Sketches are the hand-authored HTML structures themselves; no separate image assets were generated.
