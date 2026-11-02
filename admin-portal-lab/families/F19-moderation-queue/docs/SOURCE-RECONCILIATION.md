# F19 source reconciliation — owner feedback revision

**Trigger:** owner reported that the HTML templates and demo data did not match the screenshots and Swagger docs.

## Confirmed mismatches in revision 1

1. **Wrong default state.** The pages opened on eight invented active cases. The actual moderation screenshots and all four moderation HTML captures show an empty active queue and empty history.
2. **Invented identities and projects.** “Demo sender A”, “Northwind redesign”, “Harbor onboarding”, etc. do not appear in the supplied Nestlancer captures.
3. **Unsupported fields presented as product data.** Reporter, report reason/annotation, review age, SLA-like bands, and mandatory rationale are not defined by the moderation Swagger contracts or visible in the moderation captures.
4. **Shell drift.** The first revision used a reduced sidebar and “Demo operator” instead of the captured Operator Console navigation, Riya Kapoor header, notification/message badges, account footer, and `© 2026 Nestlancer Admin` footer.
5. **Prototype controls dominated the product.** Source/demo/state switches, saved views, age presets and keyboard help were placed in the main workspace instead of being secondary design-lab affordances.
6. **History was seeded with fictional audit events.** The captured history is empty; Swagger does not provide a typed history row or actor/time schema. Seeded “Demo operator A/B” events looked like production audit data.

## Source facts re-verified

- `027-moderation.webp`, `028-moderation-history.webp`, `12/91/169/170` captures: active queue 0 / escalated 0 / project chats 0; history 0 events.
- Captured moderation controls: Active queue / History; search; Review status (All statuses / Flagged / Escalated); Chat type (All chats / Project / Direct / Group); Clear. History: search; Action (All actions / Flagged / Escalated / Removed / Dismissed / Restored); Clear.
- Messaging Swagger: queue/history/dismiss/escalate/remove/restore are documented; success payload is an open `data: object`. No flagged-message DTO, reporter, reason, age, rationale, batch, idempotency or lock schema is declared.
- `CreateMessageDto` supports `projectId` or `threadId`, `content` (max 5000), `replyToId`, `mediaId`, and `type` TEXT/FILE/SYSTEM/NOTIFICATION. This informs demo message shape, not moderation response shape.
- Captured message sources for the optional workflow demo: `026-messages-thread-details.webp` (Payments ops group), `162-messages-thread.html` (Amit Verma direct), `85-messages-index.html` / `168-messages-inbox.html` (captured inbox previews). These are message sources, not moderation records.

## Revision 2 decisions

- **Default = captured empty state** in all five variants. Exact moderation copy/counts are preserved.
- **Optional workflow demo** uses captured Nestlancer message text, sender names and thread titles. Flags/escalations are explicitly synthetic; no reporter, reason, age or rationale is invented.
- **No seeded production-looking history.** Demo history starts empty and only records local preview actions performed in the browser.
- **Swagger-aligned action dialogs.** Confirmation shows the documented effect. An optional local note is clearly not sent; restore may preview optional edited content because the Swagger description mentions `body.content`, while the missing requestBody schema remains an integration gap.
- **Captured shell restored.** Full Operations/Content/System navigation, Riya Kapoor header, 99+/21 badges, account footer, and source footer copy. Collapse/mobile drawer remain as reviewed lab ergonomics.
- **Professional product hierarchy.** Lab controls move into a collapsed “Preview options” disclosure. Main page keeps the captured H1, description, queue/history switch, summary cards, filter bar and empty state.
- **Five layouts remain, but around source-supported fields.** V1 queue + review panel; V2 conversation context; V3 chat-type lanes; V4 dense register; V5 focused reader. Age bands and saved-view chrome are removed.

## Still unresolved (not silently fixed)

- Global queue query requires `userId` and `projectId` in Swagger; no all-users/all-projects sentinel is documented.
- Moderation response rows, history rows, permissions, notifications, audit retention, request bodies and conflict handling are not typed in the supplied specs.
- The optional demo is a design aid, not evidence that any captured message was actually flagged in production.