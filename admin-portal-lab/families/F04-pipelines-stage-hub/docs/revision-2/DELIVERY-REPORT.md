# F04 · research-led operating-workbench revision 2

**Delivered 2 November 2026. Fresh functional, accessibility and scope checks pass. Two process/budget exceptions are disclosed below; this is not a claim of exception-free gate compliance.**

## Open the revised designs

| Design | Primary operating composition | Best fit / trade-off |
|---|---|---|
| [V1 Atlas](../../V1/index.html) | Minimal exception rows with an evidence-first review guide | Quiet, straightforward daily review; supporting guide is omitted at narrower widths |
| [V2 Current](../../V2/index.html) | Handoff board: ownership, evidence and dependencies travel with each case | Richer collaborative context; more vertical space per record; retained keyboard stage inspector below |
| [V3 Fieldguide](../../V3/index.html) | Three-part brief: admin decisions / client next / data visibility | Strongest explanation of why work waits; long decision chapter and more reading |
| **[V4 Switchboard — recommended](../../V4/index.html)** | **Semantic work table with record, condition, next actor, example age and next step** | **Best scanning density for the operating job; secondary route register and opt-in API dock remain below** |
| [V5 Passage](../../V5/index.html) | Three functional lanes: Intake / Delivery / Money & signals | Spatial overview and dependencies; lanes stack on narrow screens, so scrolling increases |

[Gallery](../../../../index.html#F04-pipelines-stage-hub) · [Research and domain plan](RESEARCH-AND-PLAN.md) · [All-service Swagger inventory](SWAGGER-INVENTORY.md) · [Case data / exact action boundaries](CASE-DATA.md)

The recommendation is a design judgment, not a user-tested throughput claim. V2 remains a strong alternative when handoff context matters more than scanning density. No sibling design was overwritten.

## What was wrong with the first pass

The earlier delivery was primarily a polished sitemap: counts and destinations, but little evidence about which work needs review, who must act or why it waits. It also implied an overly linear journey and animated temporarily false numerical values in V5. A better operating surface separates **overview → filtered workset → record context → safe next step**.

The refresh therefore changes function and data structure, not just spacing or colour:

- Added six independently authored, readable example cases in **every** design; same scenarios allow fair comparison, distinct geometry/narrative avoids five cosmetic skins.
- Added working All / Admin next / Client next / Data gaps filters, reference/condition/actor search, real within-group age ordering, live result counts, no-match guidance and reset.
- Added a native case dialog showing condition, next actor, why it needs attention, related example references, workflow and contract provenance. Keyboard initial focus, containment, Escape and caller restoration are tested.
- Added **local-only** request-assignment and offline-transfer approval/rejection preparation with field validation, denied-permission simulation, client-visible reason disclosure and contract-shaped JSON text. Editing invalidates stale previews. Switching approval/rejection clears internal notes rather than silently making them client-facing.
- Added worklist loading/zero/error/recovery states, while preserving useful independent source/trust context. All six primary cases remain readable without JavaScript.
- Corrected the linear-flow wording: payments can overlap delivery; messages support all stages; inventory populations are not a conversion funnel. Inquiry qualification guides request submission, with no invented conversion endpoint.
- Removed V5 count-up execution at its source. Only quiet non-numerical entry/reveal motion remains, respecting reduced motion.
- Visibly marked captured Payments milestone creation **historical only / removed in the published spec**, rather than advertising it as a current operation.
- Retained six destinations, three trust cards, seven standalone consoles, sixteen native read-only API areas, full-width shell, shared theme/sidebar preferences, mobile drawer, local destination receipts and honest F05 handoffs.

## Research and contract understanding

Nine primary references were opened and synthesised: Jira queues and service management, SAP analytical list pages, Azure flow-metric guidance, progressive disclosure, Carbon tables, Stripe payment lifecycle, WAI modal dialogs and GOV.UK service monitoring. SAP analytical-list and Jira queue screenshots were also visually inspected. The [research plan](RESEARCH-AND-PLAN.md) gives source URLs, takeaways and rejected imports. No external product branding or assets were copied into the shipped UI.

All **17** bundled Swagger specs were inventoried: **560 service-local path entries, 648 HTTP operations and 218 schema definitions**. These are not deduplicated public routes. The inventory includes parameters, bodies, enums, responses, security and ambiguity across auth/admin, requests, quotes, projects, progress, payments, messages, notifications, contact, moderation, content, files and gateway services.

Important effects on the design:

- Requests have an assign-to-active-admin capability; quoting is request-first. Admin quote listing requires sortBy/sortOrder.
- Client quote acceptance initiates project creation; the project agreement/signature precedes deposit when required. Admins do not sign on behalf of clients.
- Deliverable revision, delivery completion, client approval and settlement are separate. Delivery milestones can be non-billable when a separate payment schedule exists.
- ApproveTransferDto notes are internal; RejectTransferDto reason is client-visible, with allowRetry defaulting true. Assignment DTO contains assigneeId, not an invented note field.
- Contact schema enums take precedence over stale description prose. Projects/Progress overlap on milestone writes with conflicting bodies; published routing must be verified before integration.
- Success envelopes are often open objects. A documented endpoint does not prove runtime response shape, current authorization, health, deployment or freshness. **No “90% runtime understanding” claim is made.**

## Data: useful without pretending it is live

The UI separates three layers:

1. **Historical inventory:** Inquiries 23 / Requests 46 / Quotes 36 / Projects unavailable / Payments 48 / Messages uncounted; Users 34 in trust. These remain captured 30 October figures, not current readings. Unavailable is not zero; reference header 157 versus area sum 199 remains disclosed, not silently reconciled.
2. **Six synthetic examples:** DEMO-PAY-01 transfer, DEMO-REQ-01 assignment, DEMO-PRJ-01 unsigned agreement, DEMO-DEL-01 revision, DEMO-INQ-01 inquiry and DEMO-SOURCE-01 visibility gap. They are **not** a subset of the historical counts. The ₹30,000.00 amount and 18/26/48/8/6h ages are illustrative, not revenue, SLA or measured stage dwell. Source age is unmeasured.
3. **Documented contracts:** local Swagger examples and safe payload previews. DEMO IDs are never substituted into a production URL. No fetch/executor, live lookup, mutation or audit write exists.

[CASE-DATA.md](CASE-DATA.md) records exact fixtures, units, actor semantics, payload fields, privacy boundaries and integration prerequisites.

## Fresh validation — not reused revision-1 results

| Evidence | Result |
|---|---|
| Retained-behavior regression, rerun against revised pages | **2,196 / 2,196** checks; no runtime errors or external requests |
| New workbench interaction/layout matrix | **5,996 / 5,996** checks; no runtime errors or unsafe requests |
| Browser-check total | **8,192 / 8,192** |
| Existing page/reference/handoff/drawer accessibility matrix, rerun | **130 scans / 0 automated violations** |
| Workbench ready, six cases, validation, denied, approval/rejection and assignment accessibility matrix | **260 scans / 0 automated violations** after fix and complete rerun |
| Accessibility total | **390 scans / 0 automated violations** |
| Offline scope/data/asset audit | **42 / 42**; **403 protected files unchanged** |
| Offline method/path/DTO checks | **23 / 23** against local specs, not live routing |

Coarse-pointer operating controls, hub tabs and preview-state selects also meet the 44px target in the phone contexts. Both themes at **360, 390, 768, 1024, 1440, 1920 and 2560px**; desktop expanded/collapsed shells, mobile drawer, no-JS primary content and reduced motion. Native reference keyboard behavior and original hub/route handoffs are retained. Additional workbench checks include no page/dialog overflow, exact example filter counts, real group sorting, validation focus, modal keyboard loops, permission-submit bypass guard, stale-preview invalidation and unchanged inventory after preparation.

A real issue was found: enabled/disabled opacity transition on a permission-sensitive primary button could briefly fall below contrast requirements after permission restoration. Local modal styles now avoid that transition and use explicit theme-aware disabled colours. The complete **260-scan / 5,996-check** workbench suite was rerun clean. Initial failing evidence is retained in `WORKBENCH-QA-initial.json` / `WORKBENCH-AXE-initial.json`, not concealed.

Automated scans are not a WCAG certification or screen-reader/user study. No timed comprehension, performance improvement percentage or production integration is claimed.

### Reproduce

Serve repo root on port 8131, then run from repo root:

```sh
node admin-portal-lab/families/F04-pipelines-stage-hub/docs/revision-2/regression.cjs
node admin-portal-lab/families/F04-pipelines-stage-hub/docs/revision-2/accessibility.cjs
node admin-portal-lab/families/F04-pipelines-stage-hub/docs/revision-2/workbench-qa.cjs
node admin-portal-lab/families/F04-pipelines-stage-hub/docs/revision-2/contract-qa.cjs
python admin-portal-lab/families/F04-pipelines-stage-hub/docs/revision-2/scope-audit.py
```

Browser tools use Playwright/axe installed under `/home/user/node_modules`; reinstall them if the workspace package cache is absent. Scripts only inspect pages and write QA evidence/screenshots; none creates variant designs.

Evidence: `QA-RESULTS.json`, `AXE-RESULTS.json`, `WORKBENCH-QA.json`, `WORKBENCH-AXE.json`, `CONTRACT-QA.json`, `SCOPE-AND-PAYLOAD.json`; full-page, worklist and dialog screenshots in this folder (palette-optimized for workspace size; live HTML and DOM-based tests are authoritative). Earlier code/docs are archived in `../review-1-archive.zip`; revision-1 result files remain historical.

## Scope, authorship and disclosed exceptions

- **Preserved:** 403 protected screenshot/HTML/report/Swagger/F01–F03/shared files hash-match the pre-refresh scope record. Shared teal tokens/base are unchanged; .git remains absent. Gallery and manifest edits are limited to F04; other manifest family values were asserted unchanged.
- **Authorship:** every variant’s primary workset HTML and workspace.css was hand-written. Existing distinct stage-map geometry remains. Shared workbench.css contains operating components; workbench.js contains behavior, fixtures and **one shared interactive dialog component**, not a script that emits five pages.
- **Prompt improvements:** master §16 propagates research/operating-truth rules to every family prompt. F04 has an explicit review-scope override and revised domain/data/test requirements. Earlier approved family HTML was not retroactively changed.
- **Process exception:** V1 primary markup was authored first, but sibling primary markup was authored before the first browser pilot. The initial pilot exercised V1 plus V4/V5 stress cases. This refresh therefore does **not** strictly meet the master’s pre-sibling Gate-2a sequence; fresh complete cross-variant checks mitigate technical risk but do not rewrite that history.
- **Soft size exception:** retained historical reference plus the new case/preparation behavior exceeds the original soft 70KB target. Exact HTML+linked CSS+JS, excluding images: V1 **92,494 B**, V2 **95,424 B**, V3 **95,584 B**, V4 **97,990 B**, V5 **98,091 B**. All are below the master’s **250KB page contract**. Sum of individually gzip-compressed assets is approximately 27–28KB; this is an estimate, **not** a claim the preview server sends compression. Readable source is retained; no hidden budget pass is claimed.

## Remaining integration work, deliberately not faked

Implement authenticated reads and eligible-user lookup; resolve service routing/response contracts; enforce server-side permissions and state freshness; reconcile quote→project agreement identity; execute deliberate record-specific mutations with actual receipts/audit; obtain real history before flow metrics; user-test the workset and screen-reader experience. F05 hubs remain future work. No bulk approve/refund/status-force, fake SLA, revenue aggregate, live freshness, invented health or cross-service mutation is shipped.
