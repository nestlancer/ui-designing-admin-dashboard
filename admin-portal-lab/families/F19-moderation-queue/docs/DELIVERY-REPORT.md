# F19 · Moderation Queue — Delivery Report (revision 2)

Date: 2 November 2026. Scope: F19 only. F01–F18 and F20–F25 preserved; locked tokens/base unchanged; no Git metadata, commit, branch or push.

## Why this revision exists

The owner reported that the first F19 templates and demo data did not match the screenshots and Swagger documentation. Re-inspection confirmed the mismatch. Revision 1 invented populated moderation anatomy (reporter, reason, age, rationale, saved views, sort controls, seeded history and DEMO-MOD identifiers) that is not present in the captured empty pages or typed in `messaging.openapi.json`. The discrepancy audit is `docs/SOURCE-RECONCILIATION.md`.

## Source truth now used

- Default view: exact captured empty queue/history from `027/028` and HTML captures 91/169/170: three zero summary cards, captured filters, empty copy and footers.
- Shell: full captured Operator Console navigation (18 links), account footer, sign-out, breadcrumb, notification/message badges, theme toggle and collapsible sidebar.
- Optional workflow demo: six captured Nestlancer message excerpts with synthetic flags (`F19-DEMO-01…06`). Group text from screenshot 026; Amit Verma direct text from capture 162; three inbox previews from captures 85/168. No captured project-chat transcript exists, so Project chats remains 0.
- No reporter, reason, age, SLA, assignee, mandatory rationale, saved view, sort control or seeded history is presented as a Nestlancer product fact.
- History starts empty and records only local session actions. Receipts say local preview; no request, permission check or audit write is claimed.
- API actions remain contract-bounded: Dismiss, Escalate, Remove, Restore. Bulk is dismissal-only local preparation; ten-second undo reverses local preview state only.

## Five variants

| Variant | Name | Geometry / job |
|---|---|---|
| V1 | Queue workspace | Captured empty default; demo table + evidence pane. General-purpose recommendation. |
| V2 | Context review | Case rail + bounded captured context + guidance rail. Dedicated triage recommendation. |
| V3 | Chat-type triage | Project / Direct / Group lanes from the captured chat-type filter. |
| V4 | Decision register | Dense semantic register with in-place expanded review. |
| V5 | Focused reader | Case strip + evidence folio + reduced-motion next-case continuity. |

All five share the same source/demo boundary, guarded two-step review, optional non-sent local note, selection, safe bulk-dismiss preparation, keyboard shortcuts, session history, loading/error/empty previews, dark parity and responsive shell.

## Verification actually run

Playwright + axe-core 4.10.2 and a static audit were run for revision 2 (build-time QA scripts and result JSON were removed after verification; findings summarized below).

- 5/5 variants pass.
- Default source empty copy/zero counts and empty history verified.
- Demo counts 6 / 1 escalated / 0 project; session history starts empty.
- Captured search/status/chat filters, Clear and project drilldown verified. No sort/saved-view/age controls tested because they are intentionally absent.
- Pagination boundary verified at Page 1 of 1 for the six-case demo.
- Bulk dismissal requires opened context, excludes escalated, applies locally and undoes.
- Guard validation, individual dismiss/undo, escalate, active restore, remove, history detail and history restore verified.
- Loading/error/retry/empty previews verified.
- Keyboard help, sidebar collapse persistence and mobile drawer verified.
- axe WCAG 2 A/AA + 2.1 AA: 0 violations on light source, light demo, open review dialog and dark demo for all five.
- No console errors, failed requests or external requests. No document overflow at 360, 390, 768, 900, 1024, 1100, 1280, 1440, 1920, 2560.
- Static audit: 18 nav links per variant, required DOM contract, source/demo controls, no duplicate IDs, no missing local resources, no external resources, all images have alt, no revision-1 DEMO-MOD identifiers in active files, sibling hashes unchanged, tokens/base unchanged, `.git` absent, no fetch/XHR.
- Authored HTML+CSS per variant: ~14.7–16.6 KB; estimated transfer with shared runtime/assets: ~103–105 KB.

## Limits and unresolved integration questions

- `GET /api/v1/admin/messages/flagged` marks `userId`, `projectId`, `page`, `limit` required; no all-users/all-projects sentinel or typed row schema is documented. The lab does not invent a global-feed override.
- Moderation responses use an open `data: object`; no flagged-message/history DTO, reporter/reason/age/rationale/actor/batch/SLA/lock/idempotency contract is claimed.
- Restore description mentions optional `body.content`, but no requestBody schema is declared. The local edit preview is labelled as such.
- No production permission, audit persistence, notification delivery, server undo or batch execution is claimed.
- Owner approval is pending. This report certifies the offline revision-2 prototype checks above, not production fidelity of undocumented populated states.

## Recommendation

Use V1 as the general-purpose moderation workspace and V2 for dedicated keyboard-led context triage. V3 is useful when chat surface is the primary triage axis; V4 for dense register review; V5 for deliberate focused reading. Keep the captured empty source as the default until backend confirms populated row/history schemas.
