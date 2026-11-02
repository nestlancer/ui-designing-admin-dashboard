# F19 — Gate S baseline lock

Inspected 2 November 2026. This is an offline redesign of repository evidence, not a new production crawl.

## Sources opened

- `Nestlancer-admin-screenshots/admin/027-moderation.webp`: active queue, all three counts zero, empty state.
- `Nestlancer-admin-screenshots/admin/028-moderation-history.webp`: history, zero events.
- All four HTML captures below, including their main DOM, controls and embedded route identification.
- `nestlancer-admin-pages-html/audit-metadata.json`: the four F19 entries, including failed requests, console errors, controls and tokens.
- `nestlancer-admin-pages-html/README.md`: source-to-route/screenshot map.

| Capture | SHA-256 | Capture time (UTC) | Finding |
|---|---|---|---|
| `12-dashboard-sub-moderation.html` | `d1aed412c7a6c640e4d1d52a190784f9454ef05933fc83e525d04ea7140794b1` | 2026-10-30 13:38:32 | Harvested `/moderation`; same visible main content as 91/169, different serialized DOM bytes. |
| `91-moderation-index.html` | `97a696808767b88a26e3ab52f157aeaa008e0c2eac8aa02d1b8e3de28ade1866` | 2026-10-30 13:44:35 | Canonical active queue. |
| `169-moderation-index-state-active-queue.html` | `d58bf74e12f13dfc781fa217c1308c9b8c986ba25c6f3e724792bddcdd8766c9` | 2026-10-30 13:52:07 | Active-queue click state; no populated records. |
| `170-moderation-index-state-history.html` | `732c37b3f38dd2d9aaadea3f42ea3f205dab296a9a84692cb20ebf9e4e93cd88` | 2026-10-30 13:52:09 | History click state; no history rows or columns. |

The three active-queue files are **semantic duplicates, not byte-identical files**. Four captures represent two distinct content states. The report/workbook count three moderation captures; this pack includes the additional harvested duplicate.

## Frozen visible content

- Eyebrow: `Operations`; H1: `Moderation`.
- Description: `Review flagged chats, escalate or remove them, and restore from history when needed.`
- Views: `Active queue`, `History` (plain buttons in the capture; no tab roles).
- Active summary: `Queue / 0 / Nothing flagged right now`; `Escalated / 0 / Blurred in chat for senior review`; `Project chats / 0 / From client delivery threads`.
- Queue search placeholder: `Search message, sender, project, chat…`.
- `Review status`: `All statuses`, `Flagged`, `Escalated`.
- `Chat type`: `All chats`, `Project`, `Direct`, `Group`.
- Queue empty heading: `No flagged messages in the queue`.
- Queue empty explanation: `Items appear here when a user or admin flags a message in project, direct, or group chat.`
- Queue footer: `Showing 0 of 0 flagged messages`.
- History search placeholder: `Search history content, actors, chats…`.
- History `Action`: `All actions`, `Flagged`, `Escalated`, `Removed`, `Dismissed`, `Restored`.
- History empty: `No moderation history yet.`; footer `0 moderation history events`.
- `Clear` is a filter reset, not a queue-delete operation.
- Shell identity: Riya Kapoor; notification badge 99+; message badge 21 in 12/91/169 but **20 in 170**. Do not describe these as one simultaneous live snapshot.

## Not present in the evidence

No populated message, reporter, report reason, timestamp, row action, confirmation dialog, rationale field, history column, decision receipt, assignee, SLA, or moderation permission result was captured. The old family prompt incorrectly treated these as frozen anatomy. They are now explicitly **unknown**, not invented historical facts.

The history screenshot is larger on disk because of serialized DOM/route-prefetch content; it does not contain hidden moderation records. Main DOM has zero tables in both states.

## Audit observations

- Each entry has one missing image alt, consistent with the global logo finding.
- All four have a production inline-style CSP console error. This is evidence about the capture, not a claim about current health.
- 169 additionally records failed RSC prefetches for other routes; no moderation endpoint response payload or moderation HTTP failure is documented there.
- Empty plus successful visual rendering does not prove that every documented endpoint works.

## Redesign data boundary

Revision 2 defaults to the exact captured zero state. An optional **workflow demo** reuses captured Nestlancer message text and identities with synthetic flags; it never claims captured moderation records, reporter/reason/age fields, seeded history or production execution. History starts empty and records only local session actions. Blog comments belong to F21; media quarantine belongs to F23. F19 links to those workflows rather than mixing entity types or actions.

```
GATE S (F19)
Screenshots opened: 2/2 · HTML opened: 4/4 · Audit metadata read: YES
Distinct content states: 2 · Content and unknowns frozen: YES
Production mutations performed: 0
Gate: PASS — baseline evidence locked; populated production anatomy remains unavailable
```