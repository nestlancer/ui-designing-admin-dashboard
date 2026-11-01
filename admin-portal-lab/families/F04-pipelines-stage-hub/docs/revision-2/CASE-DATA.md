# F04 revision 2 · data provenance and case contracts

2 November 2026. This is a **static frontend operating-workbench prototype**, not a connected admin dashboard. No production API, user lookup, permission check, mutation or audit write is performed. All five variants use the same domain scenarios to make comparison fair, with independently authored primary HTML and geometry.

## Three data layers — never interchangeable

1. **Captured historical inventory:** 30 October screenshot/DOM snapshot: Inquiries 23, Requests 46, Quotes 36, Projects **unavailable**, Payments 48, Messages **uncounted**; Users 34 in trust. Populations differ; there is no valid conversion denominator. Original reference header 157 versus sum of area counts 199 remains unresolved and disclosed. None is labelled live.
2. **Illustrative operating cases:** six deliberately constructed DEMO references below. These are NOT returned records, not a sample of the captured inventory, and do not explain its totals. Actors/related references/conditions/ages are a frontend composition. The success bodies in many Swagger operations are open objects; this is not a promised server response shape.
3. **Documented capability:** methods/routes/enums/DTOs from the bundled 17 service-local Swagger specs, captured 15 October. Deployment, routing, current ACL and runtime side effects still require integration validation. Repeated service-local paths are not unique public endpoints.

## Fixture manifest

| Case / example reference | Displayed condition | Next actor | Example age | Related references / amount | Safe next step |
|---|---|---|---|---|---|
| Offline transfer / DEMO-PAY-01 | PENDING_VERIFICATION | Admin · payment review | 18h | DEMO-PRJ-01 / DEMO-MIL-01; ₹30,000.00 = 3,000,000 paise | Read evidence; prepare approval or rejection locally |
| Unassigned request / DEMO-REQ-01 | underReview | Admin · intake review | 26h | DEMO-CLIENT-01; example operator DEMO-ADMIN-RK | Read scope; prepare assignment locally |
| Unsigned agreement / DEMO-PRJ-01 | Contract required — scenario, **not** a project status enum | Client · signature | 48h | DEMO-QUO-01 / DEMO-CLIENT-01 | Inspect project agreement; coordinate with client; no admin signing |
| Revision / DEMO-DEL-01 | REVISION_REQUESTED | Admin · delivery coordination | 8h | DEMO-PRJ-02 / DEMO-MIL-02 | Read feedback in project delivery context |
| Inquiry / DEMO-INQ-01 | NEW | Admin · intake review | 6h | None supplied | Qualify/respond; client request submission is a separate flow |
| Visibility dependency / DEMO-SOURCE-01 | Unknown — historical count request failed | Admin · investigation | **Not measured** | Captured Projects stats failure | Investigate source; do not invent zero, all-project blockage or live health |

Ages are illustrative display values with no asserted origin timestamp, freshness, stage-entry time or SLA. Sorting orders these example ages, unmeasured last; it does not promise backend prioritization. In V3 and V5, sorting is **within each named group/lane**, not a global reorder across incompatible categories. Review sequence is authored for exploration, not a severity score. Filters are All 6 / Admin-next 4 / Client-next 1 / Data-gaps 1. Source investigation has an admin actor but is deliberately classified under Data gaps, not Admin-next decisions.

Related DEMO references are context labels, not fabricated working record links. The dialog’s source handoff is an honest existing local receipt. F05 User/Project hubs remain explicitly unimplemented handoffs.

## Contract-backed action preparation

### Assign request

- Documented `POST /api/v1/admin/requests/{id}/assign`.
- `AssignRequestDto`: required `assigneeId` string, max 64 characters; user must be an active admin. The example option is **not** a real eligibility lookup.
- Preview payload: `{ "assigneeId": "DEMO-ADMIN-RK" }`.
- Review context is required by the **demo’s policy** (5–2,000 trimmed characters), retained only in the displayed local preview. It is **not** silently added to AssignRequestDto.
- Production must resolve actual IDs, fetch eligible admins, enforce server authorization and current record state, execute deliberately and obtain a real audit result. None happens here.

### Review offline bank/UPI transfer

- Read documented payment detail, transactions and timeline. The example amount is not a platform balance or revenue aggregate.
- Approval preview: `POST /api/v1/admin/payments/{id}/approve-transfer`, `{ "verificationNotes": "…" }`. Notes are **internal** and optional in ApproveTransferDto (max 2,000); this demo requires context as a review guard.
- Rejection preview: `POST /api/v1/admin/payments/{id}/reject-transfer`, `{ "reason": "…", "allowRetry": true }`. Reason is required, max 2,000, **shown to the client**. allowRetry defaults true; its documented effect is resetting to CREATED for retry, not a refund.
- Switching approve/reject clears previously entered text and the prepared preview, preventing internal notes silently becoming a client-facing rejection reason. Editing inputs invalidates the previous payload.
- A permission-denied simulation leaves context readable, disables preparation and guards direct form submission. It is **not** real authentication/authorization.
- The displayed endpoint retains `{id}`; DEMO labels are never substituted into a production URL. Submission produces only text via `textContent`; no network API call exists.

## Read-only cases and workflow boundaries

- Request-first quote creation is documented; legacy orphan quoting is not promoted. Admin quote listing requires sortBy/sortOrder. Quote acceptance initiates project creation; resolve that project before its contract context. Client signature is before deposit when required. A quote-contract read is not itself proof a project agreement has been signed.
- Progress deliverables and timeline support revision context. Delivery completion, approval and settlement are separate. With a separate payment schedule, delivery milestones can be non-billable. No global status-force/approve/refund or cross-service bulk action is introduced.
- Contact schema enum NEW/READ/RESPONDED/ARCHIVED/SPAM takes precedence over stale PENDING/RESOLVED description text. There is no invented contact→request conversion endpoint.
- Captured `POST /admin/payments/projects/:projectId/milestones` is visibly marked **historical only / removed in the published Payments spec**. Projects and Progress have overlapping milestone creation paths with conflicting bodies; deployment routing remains unresolved.
- Payments cancellation has a mismatched description; not offered as an action. Generic success schemas do not establish production response fields or live freshness.

## State model

- Ready: six labelled fixtures, historical degraded source still disclosed.
- Search no-match: zero matching **examples**, clear/reset and live announcement; no production all-clear.
- Zero/loading/error: explicit local simulations, no service queries; worklist and controls replaced appropriately, other source context retained. Retry restores examples, not production health.
- Permission denied: context readable, preparation blocked. No mutation permission is inferred from the simulation’s allowed option.
- No JavaScript: six fully readable authored cases and provenance; native reference and map remain usable. Dynamic case inspection/filtering/preparation requires JS and is declared as such.

Implementation: primary case HTML in each Vn/index.html, geometry in each Vn/workspace.css; shared workbench.js holds fixture context and one interactive native-dialog component. No script emits variant pages. Existing stage/trust/consoles/reference content remains below the operating workset, with domain corrections rather than false historical freezes.
