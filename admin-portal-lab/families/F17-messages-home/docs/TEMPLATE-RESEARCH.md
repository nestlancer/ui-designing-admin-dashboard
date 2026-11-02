# F17 · Enterprise inbox research (redesign pass, 2 Nov 2026)

## Scope and guardrails

Research is for composition and usability patterns only. Nestlancer's captures and `messaging.openapi.json` remain the sole source of product content and actions. Competitor features such as assignment, snooze, saved views, priority, attachments and presence were not imported into F17 because the local evidence does not establish them. The shared teal tokens stay locked. All writes and creation controls remain local-only previews.

## References opened

1. **Intercom — The Inbox explained** · <https://www.intercom.com/help/en/articles/6258745-the-inbox-explained> — conversation list, selectable table mode, preview pane, filter access and keyboard shortcuts. Useful for V2/V3 and fast navigation. No Intercom actions are copied.
2. **Intercom — Command-K in Inbox** · <https://www.intercom.com/help/en/articles/6272267-how-to-use-command-k-with-intercom-inbox> — discoverable action menu, keyboard navigation and Escape dismissal. Applied only to local palette behavior; no new message actions.
3. **Intercom — Customize the Inbox** · <https://www.intercom.com/help/en/articles/7911926-customize-the-inbox-to-suit-you-and-how-you-work-best> — panel collapse, table/chat modes and configurable sidebars. Informs responsive geometry and context-panel prioritization only.
4. **Zendesk — Agent Workspace** · <https://support.zendesk.com/hc/en-us/articles/4408821259930-About-the-Zendesk-Agent-Workspace> — customer-centric ticket pane, chronological conversation, and optional context panel. Used to strengthen reading order without importing channels or side-conversation features.
5. **Freshdesk — Ticket Details View** · <https://support.freshdesk.com/support/solutions/articles/37588-understand-the-ticket-details-view> — quick list, conversation, properties and additional-info regions; resizable/collapsible task context. Used as a hierarchy reference, not as a source of Nestlancer fields.
6. **Front — Internal discussions** · <https://help.front.com/en/articles/2098> — a clear distinction between external message and internal discussion; participants/topic belong to the discussion's context. F17 does not gain an internal-note mode absent local evidence.
7. **Atlassian — Triage requests with queues** · <https://support.atlassian.com/jira-service-management-cloud/docs/triage-customer-requests-for-your-agents-with-queues/> — queues scoped to actionable work, search/filter refining the workset, priority queues. Used for navigation and active-filter clarity only.
8. **IBM Carbon — Data table** · <https://carbondesignsystem.com/building-blocks/core/components/data-table/guidelines> — consistent row/header sizing, meaningful table toolbar and selection-driven batch action bar. Applied to list density and selection hierarchy; no new bulk action added.
9. **SaaSFrame — Inbox examples / guide** · <https://www.saasframe.io/categories/inbox> — curated inbox screenshots and guidance on queue identity, list/thread relationship, customer-visible vs internal composition, and mobile collapse. Used as comparative visual desk research, not proof of platform behavior.
10. **SaaSUI — Master-detail patterns** · <https://www.saasui.design/blog/saas-list-detail-master-detail-ux-patterns> — persistent list/detail lockstep, strong selected state, flexible split and honest mobile drill-in. Drives V2 and informs V1.
11. **Figr — Ticket detail template** · <https://figr.design/templates/ticket-detail> — calm editorial split, thread primary and adjacent customer context. Informs F17 hierarchy without importing SLA, priority or assignment controls.
12. **Figma Community — Customer Support Dashboard UI Kit** · <https://www.figma.com/community/file/1502557663697104018/customer-support-dashboard-ui-kit> — modular overview/request screens, reusable tables/cards and auto-layout. Used as a template-format reference only; no components or data were copied.

## Pattern synthesis → five directions

Enterprise inboxes make the work object, selected conversation, and available evidence legible before decoration. Dense lists earn an explicit scan rhythm; detail panes preserve list context; task routes show what is available and what remains local. The redesign uses five separate compositions, not a palette swap:

- **V1 Signal brief** — paired, clearly separated historical snapshots; the counts are evidence blocks, not live KPI wallpaper.
- **V2 Queue workbench** — persistent queue-first list with a compact captured-snapshot/evidence rail and direct links to known F18 thread fixtures.
- **V3 Conversation index** — wide, column-like scan surface; queue filters and source state are prominent; no invented sorting/action controls.
- **V4 Operations ledger** — compact register with predictable row rhythm, IDs/times and controlled metadata density.
- **V5 Compose paths** — creation choices and their validation requirements lead; direct/group forms remain local previews.

## Source/content constraints

The overview and inbox totals remain distinct (18/21/11 vs 18/20/10). The captured 18-row inbox is not backfilled with synthetic records. New-group is locally routed as `/messages/new-group` because the observed `/messages/new/group` production route returned Page not found; this does not claim that either path successfully creates a group. No client UUID lookup is available. No SLA, assignment, unread-per-row, archive, channel, presence, send or delivery-success feature is asserted.
