# F18 · Enterprise thread research (redesign pass, 2 Nov 2026)

## Scope and guardrails

The two local thread fixtures are not merged. The Payments ops group is screenshot-backed; the Amit Verma direct conversation is HTML-backed. Competitor products are composition references only. Nestlancer screenshots/HTML and `messaging.openapi.json` bound all labels, members, messages and actions. No channels, attachments, read receipts, assignment, SLA, delivery status or extra message types are inferred. All actions remain local previews without permission checks or audit writes.

## References opened

1. **Intercom — The Inbox explained** · <https://www.intercom.com/help/en/articles/6258745-the-inbox-explained> — selected conversation preview beside a queue, thread stream, keyboard actions and optional details panel. Supports the classic V1 layout and context toggling.
2. **Intercom — Conversation events** · <https://www.intercom.com/help/en/articles/13334840-conversation-events-in-the-inbox> — left-aligned chronological event line, predictable actor/action text and readable centered stream. Informs V3/V5 timeline hierarchy, but no new event types are added.
3. **Zendesk — Agent Workspace** · <https://support.zendesk.com/hc/en-us/articles/4408821259930-About-the-Zendesk-Agent-Workspace> — oldest-to-newest conversation, newest at bottom, customer context in a side panel. Supports transcript-first reading and responsive context.
4. **Zendesk — Side conversations and context panel** · <https://support.zendesk.com/hc/en-us/articles/4408832279962-Activating-and-configuring-side-conversations> — external/internal side conversation is a distinct capability. Used as a guardrail: F18 does not invent a private-note/side-thread feature.
5. **Freshdesk — Ticket Details View** · <https://support.freshdesk.com/support/solutions/articles/37588-understand-the-ticket-details-view> — quick list + conversation + properties/context panels; list can be collapsed while working in a detail view. Supports V1/V2 responsive hierarchy.
6. **Slack — Use threads to organize discussions** · <https://slack.com/help/articles/115000769927-Use-threads-to-organize-discussions> — replies preserve parent context and can be opened alongside the main conversation. Used for reply-context display only; no Slack threading behavior is imported.
7. **Front — Internal discussions** · <https://help.front.com/en/articles/2098> — separate internal discussion vs customer-facing message, with participant/topic context. Used to distinguish group identity from direct-client content, not to add private comments.
8. **Help Scout — List Threads API** · <https://developer.helpscout.com/mailbox-api/endpoints/conversations/threads/list/> — thread body, actor, state/status, source, timestamps and attachments are separate fields. This is a contract-model reference only; it does not prove any Nestlancer field exists.
9. **SaaSUI — Master-detail layout patterns** · <https://www.saasui.design/blog/saas-list-detail-master-detail-ux-patterns> — persistent selection, pane lockstep and mobile transition to list-first drill-in. Informs V1 and responsive behavior.
10. **Figr — Ticket detail template** · <https://figr.design/templates/ticket-detail> — calm editorial split, conversation primary, customer context nearby but subordinate. Informs V5.
11. **IBM Carbon — Data table** · <https://carbondesignsystem.com/building-blocks/core/components/data-table/guidelines> — consistent density and toolbar/row hierarchy. Informs V4's register-like message metadata, not a new data table or controls.
12. **Figma Community — Customer Support Dashboard UI Kit** · <https://www.figma.com/community/file/1502557663697104018/customer-support-dashboard-ui-kit> — reusable modular components and responsive template construction. Used only as a comparative template reference.

## Pattern synthesis → five directions

A thread should expose source/identity, author, chronology, and reply context before operational controls. Side context should be available without competing with the active message. Narrow screens become a readable sequence rather than three cramped columns. The five layouts now differ in geometry, chronology and context treatment:

- **V1 Three-pane desk** — queue, transcript and room context at once, aligned to the familiar agent workspace.
- **V2 Thread reader** — transcript gets the largest reading area; narrow queue rail and collapsible context preserve orientation.
- **V3 Room directory** — group/direct fixture switch and participant roster lead, then selected transcript follows; membership evidence remains scoped to the group.
- **V4 Message ledger** — compact chronological register with explicit actor/time rhythm; secondary context in a controlled rail.
- **V5 Conversation folio** — central dated narrative with generous message reading width and subordinate source/participant rail.

No design direction changes the data fixture, enables a server action, or claims a message was sent/edited/deleted/flagged.
