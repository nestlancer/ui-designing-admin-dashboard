# F17 · Baseline map — home, inbox and compose

## Gate S evidence

- Screenshots opened: 4/4 — `022-messages.webp`, `023-messages-inbox.webp`, `024-messages-new-direct.webp`, `025-messages-new-group.webp` (the new-group image is a screenshot of intended flow; HTML `167` is the actual 404).
- HTML states inspected: 5/5 relevant canonical states — `85-messages-index.html`, `168-messages-inbox.html`, `166-messages-new-direct.html`, `167-messages-new-group.html`, plus duplicate `20-dashboard-sub-messages.html` for route/home comparison. `audit-metadata.json` family filter reviewed.
- Screenshot README confirms 194 DOM captures, 119 screenshots; 83 reproduced live. Messaging has 13 listed captures. Captures are read-only; no form was submitted.

## Routes and anatomy

| UI state | Captured route/state | Source truth | Lab route grammar |
|---|---|---|---|
| Messages overview | `/messages` | `85` / `022`: “Review inbox health, then open the messaging panel to triage and reply.” CTA: Message client, New group, Open messaging panel. | `?view=home` |
| Inbox | `/messages/inbox` | `168` / `023`: queue, search, type/state filters, sort, selected-empty workspace, inbox snapshot. | `?view=inbox` |
| Direct compose | `/messages/new-direct` | `166` / `024`: “Start or resume a direct conversation with a client. Existing threads are reopened automatically.” Search clients by name/email; Cancel; Open conversation. | `?view=new-direct` |
| Group compose | `/messages/new/group` | `167` is a production **404**; `025` captures intended title (optional), client users, at least two clients, Cancel/Create group. | `?view=new-group`, canonical local route label `/messages/new-group` (C11); no server create is claimed |
| Thread | `/messages/thread/[id]` | Owned by F18; F17 links to F18. | Explicit local family link |
| Flagged review | `/moderation` | F19 owns review; overview count in F02 is captured as Flagged msgs 0. | F19 handoff only |

## Frozen content and discrepancies

Overview capture (`85`): Open conversations **18**; Unread messages **21**; Unread threads **11** (“11 threads waiting”, “Needs triage”). Recent rows use direct/group labels and the captured preview copy. The HTML's age wording says “25 days ago”; screenshot `022` says “5 days ago”. Neither is presented as current freshness; variant rows omit age or display a source-only capture note.

Inbox capture (`168`): **18 conversations**, snapshot Open **18**, Unread **20**, Waiting **10**; by type Project **0**, Direct **15**, Group **3**. These are separate captured views, not a reconciled live metric set. Display them only within the corresponding state, labelled “Captured overview” or “Captured inbox snapshot”; do not combine/animate the mismatch. Search/list includes the 18 captured conversation entries; not every row has a verified unread semantic. Green screenshot dots are retained as visual markers only unless a row's label is explicit.

Group form's route is broken in production; existence of `POST /api/v1/messages/threads/group` is API documentation, not proof the route works live. Source captures show no submitted compose, sent receipt, client lookup response, assignment, mute, saved view or SLA. Flagged count in F02 is **0**; do not invent a flagged conversation. “Muted” is a requested visual treatment, not a captured record; it is documented as unverified, not asserted for a user.

## Shared shell observations

F02 shell reference: 232px sidebar, 52px header, Home › Operations › Messages breadcrumb, global search ⌘K, bell 99+, messages badge 21, shield, operator Riya Kapoor (RK), theme control, footer. Authenticated pages use full available width, persistent collapse/icon rail and mobile drawer per master §9.2a. All observed identities are captured; no extra people or counts introduced.

## Gate S

`Shots 4/4 · HTML 5/5 · metadata YES · routes mapped YES · count discrepancy documented YES · content frozen YES · Gate: PASS (with explicit source boundary above).`
