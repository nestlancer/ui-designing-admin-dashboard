# F07 · organization review · 2026-11-02

## Source inspection
Reviewed V1–V5, the shared inbox/ops logic, screenshots 029–034 and captured 576/574 totals. Prior screens stacked totals, demo notice, surface switch, ops intro, ops tabs, composer and evidence without clear priority. Personal filters could read like another level of platform navigation; logs/reports were structurally equal to send flows without explanation.

## Research translated into decisions
- [NN/g progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/): reduce simultaneous competing controls while keeping actions available.
- [Courier notification-center guidance](https://www.courier.com/guides/how-to-build-a-notification-center/chapter-3-best-practices-for-notification-centers): persistent inbox items are scanned and grouped, not presented as transient success toasts.
- [Knock broadcasts](https://docs.knock.app/concepts/broadcasts): recipient targeting and sent/delivered reporting are different stages. Applied as visible compose → review → confirm sequence and a separate evidence explanation.

## Revised hierarchy across V1–V5
1. Historical 576/574 compact summary and subordinate offline disclosure.
2. Clear personal inbox vs restricted platform ops top-level choice.
3. Inbox: saved view, eight filters, grouped rows, contextual bulk controls. Ops: send/broadcast/segment/report/log tabs, one task at a time, explicit evidence limits.

V1 stays baseline split, V2 separate-surface workspace, V3 category spine, V4 dense register, V5 focused stream. No fabricated sends or delivery records. `organization.css` centralizes hierarchy changes across all versions.
