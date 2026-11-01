# F06 · organization review · 2026-11-02

## Source inspection
Reviewed all five authored HTML pages, shared interaction logic, 007 queue and 008 reply screenshots and the captured 20/14/5/1/0/0 counts. Existing markup repeatedly elevated headline, metric cards and demo notices above the actual work; filter, saved view and search competed with one another; selected inquiry had reply and status actions at the same apparent level.

## Research translated into decisions
- [NN/g progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/): make supporting metadata subordinate to the task; do not bury essential actions. Applied as compact historical summary and secondary status toolbar.
- [Intercom inbox](https://www.intercom.com/help/en/articles/6258745-the-inbox-explained): list/table scan and selected conversation preview are adjacent; preserve the selected-item context. Applied as queue → received message → reply → manage.
- [Zendesk ticket views](https://support.zendesk.com/hc/en-us/articles/203690806-Creating-views-to-manage-ticket-workflow): views are navigational context, not another metric. Applied by keeping saved-view selector with queue controls.

## Revised hierarchy across V1–V5
1. Historical summary: All 20 / New 14 / Read 5 / Responded 1; metadata note below, not a competing hero.
2. Worklist: search + saved view + status chips → record list → honest sample pagination.
3. Selected record: identity/status, incoming message, reply composer/review, then secondary Read/Spam/Archive/Next actions.

V1 remains balanced split; V2 reserves more area for the conversation; V3 keeps cards; V4 keeps dense rows; V5 keeps horizontal focus strip. No counts, labels, records, or backend boundaries changed. `organization.css` is shared hierarchy styling, not a variant generator.
