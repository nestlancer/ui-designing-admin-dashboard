> **Historical revision 1 evidence.** The owner requested a research-led functional/data refresh. Current designs, workflows and fresh validation are documented in [revision 2 delivery](revision-2/DELIVERY-REPORT.md), [research](revision-2/RESEARCH-AND-PLAN.md) and [case data](revision-2/CASE-DATA.md). Original counts/claims below describe the earlier pass, not new verification.

# F04 · Report study / Gate R

Master, family prompt, example prompt craft/gate discipline and report reviewed. Workbook all ten sheets inspected: 1. Executive Findings, 2. Design Tokens, 3. Page Inventory, 4. Benchmark Patterns, 5. CHANGE list, 6. ADD list, 7. KEEP list, 8. Roadmap, 9. Acceptance checklist, 10. Sources. MD takes precedence over abbreviated workbook text.

## Findings / requirements
- Finding #1: “Projects data is down in production” — historical evidence, not a new live check; A11 banner + per-card No data, retry restores historical state only.
- Report §4.1: “API reference is dev-tool in ops clothing” — operational map must lead; keep reference behind native details (V1/V2/V3/V5) or a local dock (V4).
- Finding #8: “Dead routes reveal IA drift” — freeze captured route grammar; never invent F05 pages or link known 404 routes.
- Finding #5: “Success + info badges fail WCAG AA” — locked safe text tokens, dark tinted backgrounds, icon+text.
- Finding #9: “Dark mode exists in CSS but never engaged” — real persisted theme + query boot.
- Finding #10: “The type scale is compressed and ID-hostile” — 32–40px counts, mono paths/references, readable body.

## C / A / KEEP
C11 route integrity; C3 contrast; C5 teal tokens unchanged; C9 mono counts/paths; C12 display counts; C18 full dark parity; C20 logo alt. All seven 5/5. C6 existing shell language and grouped navigation with historically labelled counts; no new live badges. A11 P2 ≥3/5 required, ship 5/5. No F04-targeted P1 adds; no bulk queues, AI, PWA or mutation flows invented.
KEEP stage-map mental model, six delivery stages in order, trust group separate from delivery, standalone consoles explicitly not stages, honest microcopy and teal/Inter/6px identity. Missing counts ≠ zero.

## Source discrepancies
Screenshot Projects 18 vs settled DOM No data → DOM wins with note. Captured reference summary 157 vs sum 199 → preserve both with visible inconsistency notice. Report describes 157 in inventory, but repeats the captured summary, not a verified total. Admin paths are /api/*, not uniformly /api/v1; API-MAP separates captured reference strings from published actual paths.

## Roadmap
P0 degraded state but no backend repair; P1 contrast/type/alt/dark; P2 keyboard-ready navigation (not mutation triage); P3 keep dashboard owner unchanged; P4 money jump only; P5 accurate reference provenance; P6 responsive route map/drawer; P7 reduced-motion signature without new features.

## Acceptance checklist quoted from report §7.1
| Gate | Pass criteria |
|---|---|
| Hierarchy | Operator can name the single most important queue + ₹ at risk in < 2 s |
| Triage speed | 20-item queue clearable by keyboard alone; bulk bar on every queue; next-item loop unbroken |
| Queues | Every queue shows age/SLA/assignee; saved views persist; stale items escalate visibly |
| Tables | Search, filter, status badge, sort, pagination + totals, bulk select, mobile card-fallback — one table per page |
| Navigation | ≤ 9 top-level items or hub-grouped; live badges on queue-bearing items; ⌘K reaches every queue/user/action |
| Colour | One brand ramp per product (documented split); status = icon + colour + text; **all text ≥ 4.5:1** |
| Typography | Inter (admin) + mono for IDs/money/refs; display size for amounts and queue counts |
| Dark mode | Either full parity (verified page-by-page) or no toggle — no dead controls |
| Accessibility | Full keyboard nav, visible focus, roving tabindex on dense lists, ARIA on tabs/dialogs/toggles, alt everywhere |
| Empty/loading/error | Designed skeleton, empty, sparse-data, and degraded states for every queue/table/chart |
| Safety | Destructive actions reason-confirmed + audited + undoable where feasible; broadcasts role-gated |
| Mobile | 375/414/768 px pass; no page-level horizontal scroll; no clipped CTAs |
| Performance | Skeletons over spinners; FCP < 1.5 s; no layout shift on async data; no session drops in a 30-min triage session |
| Legal/ops | Exports GST-ready; impersonation/deactivation trails complete; data-retention noted |

---


Applicability: navigation, hierarchy, keyboard, colour, type, dark, states, mobile and static performance apply here. Bulk/SLA/action audit/GST/session endurance are destination/backend concerns; not claimed as F04 features.

**Gate R PASS · MD YES · XLSX 10/10 · C 7/7 · A11 mapped · KEEP YES.**

## Verbatim report rows · traceability supplement

| C3 | **Fix success/info badge contrast** | All pages | Darken text like warning was (`160 84% 25%`-ish, `217 91% 40%`-ish); keep dot + text | [2] status ≠ colour; WCAG AA |
| C5 | **Rename + purge token leaks** | Design system | `--brand-violet` → `--brand-teal`; delete/rescope `--article-accent`, `--tw-ring-color`; document admin-teal vs client-blue split | Token hygiene; §3.2 |
| C9 | **Mono + full IDs on hover** | Requests, Users, Payments, Audit | `font-mono` for IDs/refs/timestamps; full value on hover; click-to-copy keeps working | Ops readability; [2] Mercury |
| C11 | **Unify creation URL grammar** | Messages, Content, Payments | `/messages/new-group` or dialog-only (pick one); redirect `/content/new` → `/posts/new`; kill `/transactions` guess | Finding #8; IA integrity |
| C12 | **Compress type for ops, hero for money** | All pages | Keep 12–14px density; add 32–40px display for ₹ amounts + queue counts | [2] density follows expertise; [13] |
| C18 | **Repair dark mode or remove the toggle** | Shell | Either wire the toggle to the existing `.dark` system + expand 14 → full coverage, or remove the dead control | [7] matching dark mode |
| C20 | **Logo alt text** | Shell | One attribute; every page currently reports 1 missing-alt image | [12] a11y baseline |
| A11 | **System-status/degraded banner** (“Project data unavailable — retrying”) | Global | 🟠 P2 | The outage showed a bare loader; reassure instead |
### 6.3 KEEP — what's already good and must not be lost in the redesign

| Keep | Why |
|---|---|
| **Needs-attention strip** | Verdict-first, live, counted — the best 120px in either product |
| **Reason-required safety dialogs** (impersonation, deactivate, set-password, sole-admin safeguards) | Exemplary destructive-action UX; a compliance asset |
| **Payments 5-tab money-ops model + installment bars + settlement/legal pages** | Genuinely good finance-ops IA; extend, don't rebuild |
| **Quote Scope/Pricing/Terms stepper + line-item library** | Revenue-critical flow with real structure |
| **Capacity card on Requests** (Active/Queued/28%/Max + thresholds + clear disabled-state copy) | Ops-specific intelligence competitors lack |
| **⌘K command palette + keyboard hints** | Above benchmark average; audit for operator completeness |
| **Microcopy honesty** (“operators cannot create users here”, “Checkout not available yet”-equivalents) | Trust-building; keep the voice |
| **Teal + Inter + 6px radii ops identity** | Distinct from client blue is *fine* — document the split, don't merge blindly |
| **Razorpay trust strips / settlement transparency** | Converts anxious operators the way it converts payers |

---
