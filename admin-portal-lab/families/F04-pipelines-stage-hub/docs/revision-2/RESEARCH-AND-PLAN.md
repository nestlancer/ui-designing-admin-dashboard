# F04 revision 2 · enterprise operations research and design plan

2 November 2026. Trigger: owner liked the five designs but was not satisfied; asked for detailed online enterprise-pipeline research, repo Swagger understanding, and design/data revision. This explicitly extends F04 beyond the original orientation-only boundary. Earlier screenshots/counts remain evidence, not a restriction against improving task context. F01–F03 remain untouched. Prior version is archived in `../review-1-archive.zip`.

## Diagnosis of first delivery

A polished sitemap is not an operating surface. Six large inventory numbers do not explain: which work needs attention, who must act, why it is waiting, what is related, what may safely happen next, or whether the underlying source is trustworthy. Native destination receipts are honest, but generic receipts alone fail to demonstrate the actual domain. Also count-up animation temporarily shows wrong numbers; remove it. Avoid decorative funnel graphics: these are different entity populations, not one conversion cohort.

## Opened research, not just search snippets

Five text queries across enterprise workflow dashboards, service-workspace queues, SAP floorplans and NN/g application complexity. Nine substantive primary pages opened (SAP chunks 0 and 1), plus two product screenshots visually inspected; research images are references, not shipped assets.

| Opened reference | Evidence / pattern | Decision here |
|---|---|---|
| [7](https://learn.microsoft.com/en-us/azure/devops/report/dashboards/cumulative-flow-cycle-lead-time-guidance?view=azure-devops) | Defines WIP, lead/cycle time and CFD state-over-time basis | Do not turn unrelated snapshot totals into throughput, a funnel, WIP or conversion. No chart without event/cohort history. No borrowed WIP threshold |
| [3](https://www.atlassian.com/software/jira/service-management/features/service-desk) | Linked work, queues, triage, assignment and SLA context | Work-before-navigation; show action actor and next step, not merely totals. Do not import Jira's SLA engine |
| [1](https://support.atlassian.com/jira-service-desk-cloud/docs/make-queues-for-your-team/) | Queue is a filtered set of work items | Local actor/category/search filters, explicit visible example count; no fake global backlog count |
| [1](https://learning.sap.com/courses/discovering-sap-s-4hana-embedded-analytics/working-with-analytical-list-pages_eb3f7ef0-4d48-42bd-928b-b72179df9f8b) | Analytical/transactional context, filter then investigate/act; worklist sorting | Overview → worklist → case detail → documented handoff, without leaving context |
| https://www.nngroup.com/articles/progressive-disclosure/ | Most-used choices first, specialist complexity on demand | Keep key record/actor/next step visible; API metadata inside optional disclosure/dialog, not dominant first screen |
| https://www.carbondesignsystem.com/building-blocks/core/components/data-table/guidelines | Toolbar search/filter, row expansion, sort, consistent density | V4 real semantic table; mobile labelled card fallback; no inappropriate generic cross-service bulk action |
| https://docs.stripe.com/payments/paymentintents/lifecycle | Payment lifecycle distinguishes asynchronous processing and successful completion | Adopt lifecycle clarity only. Use Nestlancer enums, not Stripe enums. Preparing review never means transfer approved or money received |
| https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/ | Inert background, trapped Tab, Escape, focus placement/return | Native dialog for case context/action preparation; initial static heading focus; explicit close and caller restoration |
| https://www.gov.uk/service-manual/technology/monitoring-the-status-of-your-service | User/technical metrics, clear alerts, errors tracked/delegated | Partial data must explain impact and next investigation. Unknown ≠ healthy, unavailable ≠ zero. No fake refreshed timestamp |

Visual references inspected: SAP analytical-list screenshot from SAP-docs/sapui5 standard-floorplans; Jira queue configuration screenshot from Deviniti. Observed filter hierarchy, separate worklist and context, dense identifiable rows. Reject blue recolouring, chart wallpaper, copying branded layouts, global drag/drop, AI triage and unsupported SLA counts.

## Platform understanding from all 17 Swagger specs

Full extracted contract inventory: `SWAGGER-INVENTORY.md` (all path operations, descriptions, parameters, bodies, response schemas, security and DTOs). 560 path entries, 648 HTTP operations, 218 schema definitions across service-local namespaces; not a deduplicated public route count. Some routes overlap across services. Read-only specs downloaded 15 October 2026; no production request made.

| Domain | What it means to this product / UI consequence |
|---|---|
| auth + users | Admin/client portal distinction, JWT/2FA/sessions, roles/security history; never expose admin preparation as a client action |
| contact | Inquiry qualification/respond/spam; NEW/READ/RESPONDED/ARCHIVED/SPAM are enum authority. Description mentions other states inconsistently; do not use those. No verified one-click inquiry→request conversion endpoint |
| requests | Client draft→submit; admin inbox excludes drafts, supports submitted/underReview/changesRequested; assign via active admin ID. Prefer request-first quote creation |
| quotes | RequestId, line items, tax, validity, revision/history, reusable library; legacy templates removed/deprecated. Client acceptance starts project creation; do not invent an admin “accept for client” button |
| projects | Accepted-quote backing, client ownership, team, status reason/history, archive/template workflow. From-template makes draft Request+Quote, not instant active Project. Contract signing is project-level before deposit |
| progress | Delivery milestones, deliverables, client approvals/revisions, time entries, project timeline. Physical completion is not client approval and not payment settlement |
| payments | Billable schedule, offline bank/UPI review, gateway verify, manual entry, disputes, reconciliation and documents. PENDING due/payable ≠ NOT_DUE. Delivery milestones non-billable when schedule exists. Units vary by DTO (major currency quote inputs vs paise persisted/payment fields) |
| messaging + notifications | Project threads and moderation; notifications often asynchronous/outbox. Sent/requested does not prove delivered/read. Communication crosses delivery/payment phases |
| media | Upload confirmation, quarantine, entity-linked media, shares/expiring downloads; evidence belongs to the record context |
| portfolio + blog | Publication/showcase and editorial workflows; not stages in paid client delivery. SourceProjectId supports project→portfolio lineage |
| admin | Overview/revenue/activity, resource audit, jobs/config/flags, outbound webhook deliveries/retries, legal documents/reports. /api/* prefix differs from service /api/v1/* |
| health + gateway + webhooks | Dependency health plus spec registry; inbound provider events differ from admin outbound integrations. Health 503 is documented; failed projects does not prove every service is down |

### Contract limits and corrections

- Most admin list/stats responses use open `data: object / additionalProperties: true`. No exact total/pending/assignee/lastUpdated field shape can be guaranteed from Swagger. An adapter must be validated against authenticated real responses before integration.
- No universal pipeline/attention endpoint, global assignment, universal bulk transition, cross-service SLA deadline or stage dwell-time model verified. Do not pretend these exist. Cross-service worklist is a UI composition proposal using documented per-domain reads.
- Quotes list requires sortBy and sortOrder in its query schema. Status inbox semantics are described, not a complete quote-status enum. Prototype queries must include required sorts.
- Request status exact case: draft, submitted, underReview, quoted, accepted, rejected, convertedToProject, changesRequested. Project aliases PAUSED→ON_HOLD; ACTIVE→IN_PROGRESS. Preserve labels but never invent canonical transitions.
- Captured POST /admin/payments/projects/:projectId/milestones is removed. Use project-service milestone creation; payment-side PATCH description explicitly says so. Existing captured inventory will be marked obsolete, not advertised as runnable.
- /api/v1/admin/projects/{projectId}/milestones is described by both projects (batch) and progress (single milestone). Gateway ownership/body needs runtime confirmation. Do not issue this ambiguous write from F04.
- Generic verify/cancel descriptions can drift (payment cancel describes verify behavior). Mark discrepancies and withhold risky mutations pending contract tests.
- 157 versus sum199 captured API inventory remains an unresolved historical mismatch. This is not “fixed” by inventing a current endpoint total.

## Data plan

Historical overview remains exactly: Inquiries23, Requests46, Quotes36, Projects unavailable, Payments48; Users34. No claim that historical totals are actionable queue sizes. Uncounted Messages/Moderation/Audit remain uncounted. Label snapshot scope/source; no conversion percentages, revenue sum or fake sparkline.

Add **six illustrative cases**, every reference prefixed DEMO, explicitly not real client records or a subset/reconciliation of historical totals. Fixed synthetic ages are example hours, not measured SLA or service-stage dwell time. Prioritization is a demo review sequence, not backend risk scoring. Required production additions: exact response adapters, role/permission checks, fresh evidence, client/project joins, policy-approved urgency/SLA and authenticated audit.

Cases: offline transfer PENDING_VERIFICATION; unassigned request underReview; project contract required/client next; deliverable REVISION_REQUESTED; inquiry NEW; project-count source unavailable. Related demo project/milestone/quote references explain lineage without a false one-to-one funnel. Currency example INR3,000,000 paise = ₹30,000.00; no fake current balance.

Actions: inspect all six; prepare request assignment and transfer review only (no API writes); others show correct actor, dependency and documented read/handoff. Preparation shows exact route template, payload, policy/permission caveat and “not executed”; no fake audit entry or success count decrement. No bulk approve/refund/force-status controls.

## Revised concepts (before implementation)

| Variant | New geometry / first-screen job | Interaction / sketch |
|---|---|---|
| V1 Atlas / operating desk | Minimal exception queue + small review guide; inventory map secondary | `[filters][work rows + next actor] / [inspect dialog] / [compact stage map]`; search/filter/order, safe preparation |
| V2 Current / handoff board | Flow-first two-column handoff cards; request↔quote↔project↔payment context explicit | `[case cards][handoff rationale] / [stage chain]`; actor filters, linked-entity context, old roving stage inspector retained |
| V3 Fieldguide / daily brief | Purpose-led narrative “what needs a decision / what waits / what we cannot see”; named cases in ledger | `[review brief][case ledger] / [chapter rail + map]`; narrative groups + same operable search, record context |
| V4 Switchboard / ops register | Semantic dense table with record/type/condition/actor/age/action; API dock secondary | `[search + filters][table] / [case dialog + payload] / [route register | docs]`; real sort and clear, no repeated page skeleton |
| V5 Passage / flow desk | Stage-lane work cards on wide canvas, mobile stack; quiet motion only on entry | `[Intake][Delivery][Money & signals] / [case preview] / [milestone map]`; filter-to-lane, case review, no animated numerical truth |

All pairs differ in A geometry + C narrative plus density/hierarchy/interaction. Every variant covers historical snapshot + six example cases + unfiltered/filtered/no-match/empty/loading/error/degraded/permission-blocked preparation + source provenance + retained trust/consoles/reference + mobile/dark/full-width shell.

## Acceptance before coding

1. All six demo cases readable without JS; JS enhances filters, sorting and native detail/preparation.
2. Filter/search counts refer only to examples; no changes to historical inventory counts on case actions.
3. Every case reveals what/why/actor/related records/next step/data provenance. Unknown values remain unknown.
4. Financial/assignment preparation requires review context, validates fields, never fetches or claims completion. Denied preview cannot bypass to prepare.
5. Old tests plus new case tests, both themes at 360/390/768/1024/1440/1920/2560, expanded/collapsed desktop and phone drawer, modal keyboard, no-JS and reduced-motion. Axe state scan. No live personal data.

**Revision research + domain map + concept gates PASS.** New approved scope adds domain-oriented worklist examples, not backend or destination-family implementations.
