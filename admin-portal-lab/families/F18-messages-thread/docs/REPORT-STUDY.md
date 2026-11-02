# F18 · Report study

## Report/workbook review

Read the full Markdown report and all 10 workbook sheets. Markdown governs if workbook values are shortened or disagree.

## Applicable Findings

- Finding 6: inbox/header pressure (99+ notifications and 21 messages) is visible but not enough to establish a workable triage loop.
- Finding 8: `/messages/new/group` is a dead production route; F17 owns the corrected local creation route.
- Finding 9: dark-mode control failed its captured test; the thread must render correctly in both modes.
- Finding 10: IDs and timestamps benefit from mono typography; captured thread IDs are monospace and must not be invented for the screenshot-only group.
- Finding 14: messages have no sidebar badge at source; retain captured header message count and do not add a new nav count.
- Inventory §4.1: reply/edit/mark-read captured; group-members panel remained unverified live. Screenshot 079 is the authoritative intended member-panel reference.

## CHANGE items (every variant)

C3 AA badge/notice text and non-color status; C5 exact locked teal system; C9 mono for captured identifiers/timestamps only; C12 readable thread hierarchy with dense operator body; C18 actual light/dark parity; C20 logo alt text. Do not insert fake IDs to satisfy C9.

## ADD / KEEP

The family craft addition is **member closure**: all participants are visible or immediately accessible, with captured role labels. This is not a new API feature. Keep message anatomy/events, screenshot-backed group copy, direct-thread identity separation, honest operator microcopy, teal + Inter identity. No F18-targeted bulk queue controls, notes, reactions, assignment, canned replies, AI, or SLA. The system supports precise message/thread actions, but the lab does not execute them.

## Operational acceptance derived from §7.1

- The reader can identify who is speaking, which group/direct thread is open, and who is in the room without leaving the stream.
- Chronology and source context survive reply/edit states; no unseen messages or attachments are implied.
- A visible Flag action explains the route to F19 but does not say flagged unless state is captured.
- Reply is labelled operator-side, ≤5,000 characters per CreateMessageDto, and simulated send returns a local preview receipt only.
- Edit and mark-read states are locally previewed; delete requires a confirmation preview; none claims an API success or audit event.
- Empty stream, loading skeleton, error/retry, and no-JS readable capture are present; responsive member panel stays reachable.
- Focus order, names, visible focus, Escape handling, theme, and reduced motion are verified as far as the available local browser permits.

## Known data issues (preserved)

The canonical HTML thread belongs to Amit Verma; screenshots depict the Razorpay payments ops group. HTML rows `86–90` are five distinct direct threads. The screenshot and HTML reply/edit/mark-read states cannot safely be joined across identities. Variants keep the group screenshot fixture and Amit direct HTML record separate. Screenshot member emails are truncated. No member IDs, attachment IDs, permissions, unread labels, delivery states or audit results are inferred.

## Gate R

`Markdown YES · workbook 10/10 · C-items 6/6 · member closure 5/5 · KEEP YES · acceptance checklist adapted YES · Gate: PASS.`
