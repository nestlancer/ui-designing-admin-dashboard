# F17 · Five redesign concepts (review pass, 2 Nov 2026)

All five concepts preserve the captured source split, all 18 captured inbox rows, and the same home/inbox/direct-compose/group-compose states. The visual architecture changes per variant; data and backend claims do not. F17's local preview controls remain non-mutating. Teal tokens stay locked.

| Variant | Concept | Distinct composition | Job supported |
|---|---|---|---|
| V1 | **Signal brief** | Paired source-snapshot masthead, compact historical figures and recent activity full width. | Read home-state evidence without confusing separate captures. |
| V2 | **Queue workbench** | Persistent queue-first split with a compact captured-snapshot/evidence rail. | Scan and search the inbox, then follow known thread links. |
| V3 | **Conversation index** | Wide, column-like index with compact row anatomy, filter ribbon and clear source scope. | Find one conversation in the captured list without opening each row. |
| V4 | **Operations ledger** | Dense, consistent row register with captured metadata secondary and details aligned. | Fast scan across the captured list at desktop widths. |
| V5 | **Compose paths** | Creation tasks lead with separated direct/group paths, contracts and client-ID requirements. | Prepare the correct local compose form without implying a successful send/create. |

## Difference-test intent

- Layout axes: V1 evidence masthead; V2 queue plus snapshot rail; V3 wide index scan; V4 dense register; V5 task/form-led.
- Content remains frozen across variants; variations never rely on hue alone.
- Accessibility and browser verification still need to be performed before claiming Gate 3.
