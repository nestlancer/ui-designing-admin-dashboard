# F25 delivery · five offline designs

## Designs
- **V1 Signal desk** — calm integration-first registry, captured signal strip and contextual delivery preferences.
- **V2 Evidence explorer** — audit-first source spine, query workspace, contextual security snapshot.
- **V3 Connections map** — event → endpoint → delivery flow, central local draft and health rail.
- **V4 Trust ledger** — audit-first dense register, security strip, narrow operational context rail.
- **V5 Trace journey** — chaptered connection and delivery path with indexed evidence workspace.

The five HTML layouts were written individually by hand; common family CSS, behavior and captured-data files are shared. The pages are an offline bundle with relative assets, not standalone single-file downloads. Their appearance and interactions are subject to owner review. V1 is a neutral starting recommendation, not an owner-approved winner.

## Source and safety
Captures provide no configured webhook endpoints or delivery history; the catalog count is 12 but its 12 event identities were not captured. The audit source contains 50 system + 50 auth + 32 user-admin row appearances: system and auth show the same 50. Separate from those are 16 captured impersonation sessions. Counts are not live or a count of unique events. The audit data includes sensitive account, session and IP fields: keep the preview within an authorized private workspace.

All creates, tests, toggles, deletes, retry and export reviews are local illustrations; no backend request, actual export, server audit event, access permission or secret handling is claimed. Synthetic failed delivery is labelled as such. No key management endpoints were found in the supplied specs; issue/rotate/revoke/reveal are not simulated as real features. Supplied source does not establish actual timezone, catalog identities, audit diff, delivery payload, or linked entities. Those are not fabricated. Loading and error are explicit preview states, not operational service checks.

## Verification performed
- Chromium: **60** combinations of 5 variants × 6 widths (360, 390, 768, 1440, 1920, 2560) × 2 themes. Audit source switching, 50/32/16 row counts, row inspector, Escape and document overflow; no page errors, HTTP error responses or document-level horizontal overflow in this sweep.
- Five additional desktop interaction flows: form invalid/valid review, local create, inspect synthetic delivery, retry confirmation, audit empty search and Clear, export review, API-key boundary; no page errors.
- Five mobile drawer open/close tests; five desktop sidebar-collapse persistence tests; 15 mobile workspace overflow/theme/logo checks.
- **60 axe-core scans**: 5 variants × 2 widths (390, 1440) × 2 themes × 3 main workspaces; WCAG 2 A/AA and 2.1 AA tags, zero detected violations. An additional **30 scans** covered row detail, loading and error preview dialogs at 390px in both themes across all five variants; zero detected violations. Other dynamic states, screen-reader usability and WCAG 2.2 were not exhaustively tested. Automated scans do not certify accessibility.
- Mobile uses one semantic table with labelled responsive row cards (no duplicated table DOM); at larger widths a table can scroll within its own container. Shared theme and `nl-rail` preferences persist locally; drafts do not.

## Gate status and known gaps
Gate S/R/A: relevant source, report IDs and audit/webhooks contract were reviewed; full master/prompt-pack reading and exhaustive cross-service/report verification are not independently evidenced. Gate T: eight public references were opened, but exploratory online search began before the formal Gate A write-up, so the strict requested order was not followed. Gate 1: five layouts exist, but formal five-axis pairwise difference and owner approval remain open. Gate 3: **not certified**; full source/interaction matrix, all dialogs with assistive technologies, full WCAG 2.2 and user acceptance remain open.

Export currently confirms intent only (no downloaded CSV/PDF). Real delivery logs, replay/test outcomes, server permissions, secret issue/rotation, audit export job status and event-detail fields require a production adapter and verified contracts. Captured impersonation data is read-only; the lab does not implement server-backed impersonation. The shell is a simplified navigation subset. Relative assets need the live preview server. Total effective file weight includes shared captured data and CSS/JS; it is not a single self-contained 70 KB page.
