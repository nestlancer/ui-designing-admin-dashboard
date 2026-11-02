# F19 — Gate T research and design synthesis

Research performed **after** Gate S, Gate R and Gate A were written, on 2 November 2026. Primary product documentation and public screenshots were opened; no authenticated competitor account was accessed. References inform composition and operator decisions, never Nestlancer endpoint capability.

## Queries

1. Enterprise trust/safety moderation queue, reported-content review, history and restoration.
2. Enterprise operations inbox/triage dashboard patterns (Linear/Intercom/Front).
3. Admin moderation queue templates, reported-content tables and detail panels.
4. Targeted primary-source searches: GitHub reported content; Zendesk end-user moderation; Discord AutoMod; Moderation API review queues; Salesforce Experience Cloud moderation.

## References opened

| Ref | Primary page / product | Observed pattern and operator decision improved | Adopted / rejected |
|---|---|---|---|
| T1 | [GitHub: managing reported content](https://docs.github.com/en/communities/moderating-comments-and-conversations/managing-reported-content-in-your-organizations-repository) | Reported-content list links to the original comment; resolved reports remain revisitable. Improves “where is the evidence?” and “can a decision be revisited?” | Adopt source links and separate history. GitHub's repository permissions and unresolved operation are not asserted for Nestlancer. |
| T2 | [GitHub: managing disruptive comments](https://docs.github.com/en/communities/moderating-comments-and-conversations/managing-disruptive-comments) | Hide/edit/delete have different consequences; deletion is a last resort; edit history preserves context. | Adopt explicit consequence language and least-destructive default. Do not import GitHub reason codes or expose private history publicly. |
| T3 | [Zendesk: moderating end-user content](https://support.zendesk.com/hc/en-us/articles/4408894193562-Moderating-end-user-content) | **Screenshot inspected:** compact content/type/user/time queue on the left; selected content, placement and source link on the right; selection action bar below. Reduces context switching. | Strong reference for V1/V2 split geometry. Zendesk Approve/Reject/Spam labels are not substituted for Nestlancer Dismiss/Remove/Escalate/Restore. |
| T4 | [Discord Safety Library](https://discord.com/safety-library) | Automated detection and human review are distinct; moderation logs and restricted moderator channels protect context. | Adopt separation of evidence and operator-only notes. No AutoMod, account sanctions or automated severity is added. |
| T5 | [Discord Auto Moderation documentation](https://docs.discord.com/developers/resources/auto-moderation) | Explicit trigger/action/permission structures; alert-only review differs from blocking. | Adopt action-consequence clarity only. Reject rule builder, timeout/ban actions and permission claims unsupported by F19 contracts. |
| T6 | [Moderation API: user-flagged content](https://docs.moderationapi.com/guides/user-flagged-content) | **Detail screenshot inspected:** content first, labels/metadata/activity second, action dock last. A saved reported-profile view defines the workset. | Adopt evidence-before-action hierarchy and named local views. Reject profile removal, model percentages and webhook execution. |
| T7 | [Moderation API: content views](https://docs.moderationapi.com/review/content-views) | **Filter-bar screenshot inspected:** visible filter chips, reset and save; a view is a named filter, not copied data. | Revision 2: visible filters/reset adopted; saved views rejected as unsupported Nestlancer UI. |
| T8 | [Moderation API: review overview](https://docs.moderationapi.com/review/overview) | Inbox is the human-decision safety net; resolved items leave pending work but remain available in other views. | Adopt active/history separation and coherent counts. Reject automatic policy learning and cross-view server semantics. |
| T9 | [Moderation API: reviewing content](https://docs.moderationapi.com/review/reviewing-content) | Surrounding conversation appears inline; action advances to next pending item; selection produces a bulk bar; keyboard shortcuts support flow. | Adopt bounded context, next-item loop and guarded selection. Nestlancer shortcuts never execute a naked destructive action. |
| T10 | [Moderation API: queue glossary](https://moderationapi.com/glossary/moderation-queue) | **Overview screenshot inspected:** four summary tiles and a large trend chart. Clear analytics hierarchy, but not enough record context for judgment. | Reject the chart-first layout for F19. No arrival cohort/severity/virality data exists here. Keep only a compact workset summary. |
| T11 | [Linear: planning for unplanned work](https://linear.app/now/planning-for-unplanned-work) | **Triage screenshot inspected:** quiet list, source and age on secondary lines, explicit review responsibility. Separates intake from execution. | Adopt V2 keyboard spine and quiet source hierarchy. Revision 2 rejects age-led grouping/assignee/SLA because Nestlancer sources do not provide them; V3 groups by captured chat type. |
| T12 | [Salesforce: moderation overview](https://help.salesforce.com/s/articleView?id=experience.networks_moderation_overview_intro.htm&language=en_US&type=5) | **Screenshot inspected:** clickable population tiles drill into a flagged-discussions queue; bulk actions live with that queue. | Adopt count-to-filter drilldown. Do not mix files/posts/comments into this chat-only surface or claim Salesforce permissions. |
| T13 | [shadcn/ui Tasks example](https://ui.shadcn.com/examples/tasks) | **Light screenshot inspected:** restrained filter row, semantic table, stable row rhythm, selection total and explicit pagination. | Adopt V4 ledger density and pagination grammar. No task statuses or row-menu actions are imported. |

Thirteen primary pages opened; six reference screenshots individually inspected, in addition to the two production captures and three image-search results. Reference captures were research evidence only and are not shipped with the family. The image-search Checkstep result was a marketing/video frame and the Deepcleer result was a routing infographic; neither was treated as a verified moderation-queue screenshot.

## Synthesis into five genuinely different directions

- **V1 Queue workspace:** captured empty default; demo workset table + evidence rail.
- **V2 Context review:** narrow case queue / bounded captured context / guidance; keyboard-led.
- **V3 Chat-type triage:** Project / Direct / Group lanes from the captured chat-type filter; card selection and safe dismissal preparation.
- **V4 Decision register:** guidance rail + dense semantic register + expandable record; query-first.
- **V5 Focused reader:** case strip + readable evidence folio, read → decide → confirm, restrained next-case transition.

Revision 2 rejects age bands, saved views and mandatory rationale because they are not source-compatible product facts. All use the same locked teal tokens. The default is the captured empty source; the optional demo reuses captured message text with synthetic flags. The design change is **source state → workset → evidence → guarded local decision → session history**, not decorative KPI cards.

## Explicitly rejected

AI confidence/risk scores, automated moderation rules, user bans, appeals, private investigator notes sent to clients, reviewer assignment, production SLA promises, cross-entity bulk actions, permanent media purge, and “audit saved” success claims. These lack the necessary F19 evidence/contract or belong to another family.

```
GATE T (F19)
Queries: 8 targeted/discovery searches · Primary references opened: 13/≥8
Reference screenshots inspected: 6 · Production screenshots inspected: 2/2
Patterns mapped to V1–V5: YES · Order S→R→A→T respected: YES
No features invented from templates; all CTAs remain Gate-A-based or explicitly demo-only.
Gate: PASS
```