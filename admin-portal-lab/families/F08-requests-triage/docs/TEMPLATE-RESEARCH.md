# F08 queue research (Gate T)

## Eight relevant workflow references
The research report’s benchmark shortlist, supplemented by current operational-dashboard UX sources, gives eight relevant reference patterns. These are composition/workflow references; no unsupported Nestlancer feature was borrowed.

1. **Moxo** — whose-move/next-step queue framing; use row age and responsible action, not just a count.
2. **Apex / TanStack Table** — bulk selection and dense operator grid patterns.
3. **Tabler** — filter, table, pagination grammar and compact operational layouts.
4. **Tailwind Admin** — accessible table states, status/search/filter/pagination checklist.
5. **AdminLTE SaaS dashboards** — settled/owed separation and aged exceptions as actionable queues.
6. **Mercury** — amount hierarchy and restrained financial/operational status cues.
7. **Signal** — at-a-glance service status grid pattern; use only for honest observed state.
8. **Moxo-style workflow + Zendesk/Intercom ticket-queue conventions** — keep assignment, context and next response adjacent; generic convention only, no vendor feature claim.

Sources: internal report benchmark shortlist §5.3 and sources §8 (https://adminlte.io/blog/saas-admin-dashboard-templates/; https://tailwind-admin.com/blogs/dashboard-design-templates; https://adminlte.io/blog/free-dashboard-templates/); current desk research opened from https://polado.io/en/blog/admin-dashboard-ux-design-operational-screens, https://rv-grid.com/blog/building-enterprise-dashboards, https://www.lazarev.agency/articles/dashboard-ux-design, https://digitalelliptical.com/blog/dashboard-ui-design-best-practices/.

## Applied lessons
Capacity stays separate from current queue count; exceptions have explicit age; details open without losing queue context; ID/copy and status are legible; bulk actions show selection count; keyboard help and next-item controls are discoverable; operational actions remain local preview only. No fabricated SLA target or real assignee list is claimed. Web sources are references, not eight individual live product teardowns.

## Detail-open pattern decision (owner review, 2026-11-02)
A request review is a repeatable record-inspection task that benefits from list context and adjacent-item movement; it is not a short interrupting decision. Therefore use a **right-side contextual drawer/inspector** on desktop and a full-screen sheet on small screens, not a centered modal. Keep the queue visible, provide a clear Close action and Escape, restore focus to the opening row, and support Next request. Reserve modal dialogs for confirmation of consequential actions such as sending/deleting. This follows the distinction in UX pattern research: drawers suit contextual record detail while modals interrupt and are best for focused/short decisions.

Additional sources opened for this decision:
- SaaS UI Design, “Modal vs Drawer vs Side Panel”: https://www.saasui.design/blog/saas-modal-dialog-ux-patterns
- Userpilot, “10+ UI Modal Examples That Make Sense”: https://userpilot.com/blog/ui-modal-examples/
- Onething, “Modal vs Drawer: When to Use Each UI Pattern”: https://www.onething.design/post/modal-vs-drawer
- Daily.dev, “A Good Data Table Is More Than Rows and Columns”: https://daily.dev/posts/a-good-data-table-is-more-than-rows-and-columns-3tn9yikbz