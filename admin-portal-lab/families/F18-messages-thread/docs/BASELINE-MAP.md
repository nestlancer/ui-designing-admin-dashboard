# F18 · Baseline map — message thread

## Gate S evidence

- Screenshots opened: 4/4 — `026-messages-thread-details.webp`, `078-messages-edit-message-form.webp`, `079-messages-group-members-panel.webp`, `080-messages-reply-composer.webp`.
- Thread HTML states inspected: 9/9 — `162` canonical, `163` mark-read, `164` reply, `165` edit, and the five distinct captured client threads `86`–`90`. `audit-metadata.json` message/thread route filter reviewed.
- `nestlancer-admin-pages-html/README.md` confirms all 9 family states and links screenshots. No mutation was submitted during the source capture.

## Route and source identity reconciliation

Route `/messages/thread/01a10a2d-850b-7147-b023-efb5e17d8b73` appears in canonical HTML 162–165 as a **Direct conversation with Amit Verma**. The visible HTML content is “Hi Amit — welcome to Nestlancer. Let us know if you have questions about your request.” and the state controls include Mark read, Reply, Edit, Delete. HTML 163 shows the count badge changing 21→20 after its captured mark-read state; this is historical UI evidence, not a live mutation in this lab.

Screenshots 026/078/079/080 instead show the **group** “Payments ops — Razorpay settlement and webhooks,” with 3 members and the screenshot-backed exchange among operator Riya Kapoor, Karthik Menon and Ananya Iyer. The group page shows system events “Karthik Menon joined the group” and “Ananya Iyer joined the group,” date divider “Monday, Oct 5,” plus reply/edit/flag controls. This is not Amit's conversation. The five captures 86–90 select other direct clients: Amit Verma, Suresh Iyer, Pooja Kulkarni, Karthik Menon and one additional client captured by the IDs/titles; these are not asserted as group members.

**Prototype truth:** the primary thread is screenshot-backed group, with the three named members. Amit is separately switchable as a separate HTML-backed direct thread and shows only its own visible welcome message. No records are merged, no date is augmented with a year, and no unknown IDs, attachments or unseen messages are fabricated. Message edit state is represented using the screenshot's visible own group message text (not Amit's). The HTML 164 reply flow is noted as a captured direct-thread state; reply UI is kept reachable, but no claim is made that its selected direct record equals the group screenshot.

## Frozen visible group stream

- Header: “Payments ops — Razorpay settlement and webhooks”; Group · 3 members.
- Riya's visible message: “Karthik, Ananya — this thread is for settlement and webhook questions that overlap both engagements. Project files stay in each project.” The screenshot timestamp is Oct 5 3:49 AM; no timezone/year is inferred.
- Karthik Menon: “Useful. Our UPI adapter is still in staging; I want the same retry rules Ananya's reconciliation service already uses for duplicate captures.”
- Ananya Iyer: “Happy to share the webhook idempotency notes. Duplicate payment refunds are the case we keep hitting on settlement day.”
- Earlier two join events and date divider are in screenshot 026.
- Member panel 079: Riya Kapoor (Admin · admin@nestlancer…), Karthik Menon (Client · karthik…), Ananya Iyer (Client · ananya…). Exact full emails are not visible in screenshot and are not completed.
- No attachment is visible; screenshot's paperclip control does not prove an uploaded file. No message is currently marked flagged; Flag remains an action affordance and F19 handoff.

## Shell and discrepancy notes

F02 shell language, full-width collapsible desktop shell and mobile drawer. Thread is the primary task area; participant context must remain one keystroke/tap away. Screenshot is a three-pane queue/thread/member layout; HTML state `162` uses a direct selection. Count 18 conversations, 11 waiting and header 21 messages are captured family shell snapshots, not thread analytics. Keep distinct from inbox's separate 20/10 snapshot.

## Gate S

`Shots 4/4 · HTML states 9/9 · metadata YES · identities reconciled separately YES · content frozen YES · Gate: PASS with mismatch explicitly preserved.`
