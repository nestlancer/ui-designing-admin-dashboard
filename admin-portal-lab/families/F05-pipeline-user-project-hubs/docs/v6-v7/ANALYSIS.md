# F05 V6/V7 · Detailed design and data analysis

**Revision date:** 2 November 2026 · **Policy selected by the user:** captured evidence only.  
**Scope:** extend the approved five designs, not replace or rewrite them. Both new HTML pages contain User and Project hubs. No production requests, account actions or financial mutations.

## Executive finding

The five approved versions differ meaningfully in layout and interaction, but **all five load the same `reference.js` and `hubs.js`**. Their shared evidence model is the limiting factor. Restyling another page without replacing that model would leave the user's complaint unresolved.

The old data file represents requests with four status-distribution rows, quotes with three distributions, user payments with three distributions, and sessions with six numbered placeholders. It does not expose the row-level evidence visibly present in the captures. The old project payment entries omit their actual UUIDs and REF-column milestone associations. Only three of seven F12 progress entries are included. Project selection uses six references, including local fixture keys, despite 18 captured selector/billing references.

This was **incomplete transcription**, not proof that the IDs were absent. V6/V7 therefore have a separately named evidence dataset and controller. The approved pages, controller, data, styles and earlier research remain unchanged.

## 1. Version-by-version study

### V1 · Clear context

**Existing structure:** a 280px identity/selector rail and a quiet reading column; section disclosures keep six user and four project areas approachable. Its ten semantic sections and consistent identity context are sound. The light visual hierarchy is useful when an operator reads a client case rather than scans a queue.

**Data-depth weakness:** expanding Requests reveals status distributions rather than individual request records. A user cannot distinguish the ten captured titles and UUIDs. Session rows are positions, not their visible actual IDs. Project payments expose amounts but not their captured IDs or exact linked milestone references. Disclosure reduces noise but cannot compensate for absent data.

**Practical consequence:** easy to understand the high-level case, difficult to investigate one record or explain a financial association. A source row cannot be reliably revisited by its actual ID.

**Retain:** stable identity, deliberate progressive disclosure, narrow source-aware reading. **Change in V6/V7:** full-ID records, real per-record fields, source links, exact-ID associations, and explicit not-captured fields.

### V2 · Evidence spine

**Existing structure:** source-kind filtering and a vertical relationship spine; origin, delivery and timeline evidence are visually separated. The approach correctly avoids treating every source as one chronological audit.

**Data-depth weakness:** the spine is composed from the same small shared dataset as V1. The source-kind filter does not recover the missing ten-row user tables or the four omitted F12 progress entries. A row named “Captured session · row 1” is still a placeholder even when connected to a beautifully labelled spine.

**Practical consequence:** the evidence story appears more complete than the underlying record inventory. Operators can follow categories but cannot inspect the complete captured detail within each category.

**Retain:** distinct source streams and explicit relationships. **Change:** distinguish the empty hub feed from all seven F12 entries, preserve two separate six-row Arjun login snapshots, and expose exact source links rather than an implied unified sequence.

### V3 · Whole story

**Existing structure:** asymmetric 360° bento, strong selected-entity hero, association-led overview and contextual inspection. This remains the recommended overview of the approved five. It makes the relation between requests, quotes, projects and financial context legible without becoming a mutation console.

**Data-depth weakness:** card summaries inherit the distributions and missing IDs. The inspector cannot reveal fields that the shared dataset never transcribed. Three fixture keys are local placeholders, and the captured third fixture is incorrectly named `uki6c` instead of `uk6ic`. Project payment amounts are visible, but exact IDs and REF associations are missing.

**Practical consequence:** excellent orientation, insufficient drill depth. Increasing card density alone would not fix the underlying evidence problem.

**Retain:** overview-to-detail flow, explicit entity boundary, contextual sources. **Change:** keep the overview benefits but replace the model with row-level captured evidence; V6 gives one record a persistent inspector, V7 gives it a full record sheet.

### V4 · Reference ledger

**Existing structure:** compact entity index, semantic tables, local filter/sort/paging and an inspector. It is the strongest approved foundation for dense review.

**Data-depth weakness:** some of its most useful interactions operate on distributions rather than individual records. Sorting three quote-status summaries is not equivalent to sorting 14 captured quote records. Pagination over aggregate rows cannot stand in for missing source pages.

**Practical consequence:** the design has the right mechanics, but the available payload underuses them. Counts and row types need to make clear whether the operator is seeing a status bucket, a captured record or a linked-only reference.

**Retain:** table semantics, search, sorting, real local paging. **Change:** operate on actual IDs, label captured-versus-reported totals, separate “hub only” from additional captured sources, and never create rows merely to fill a total.

### V5 · Focus chapters

**Existing structure:** editorial chapter presentation, previous/next navigation, strong identity banner and reversible chapter transitions with reduced-motion support. Useful when reading one topic at a time.

**Data-depth weakness:** sequential navigation does not supply the missing records. It can also make cross-checking a milestone against a payment less immediate because adjacent chapters are not simultaneously visible.

**Practical consequence:** comfortable guided reading, but more navigation is required during evidence comparison, and the same shared payload still limits depth.

**Retain:** chapter hierarchy and readable narrative. **Change in V7:** chapters can stay open together; a sticky index jumps to any source area; record sheets show all available fields, provenance and read contracts. V6 deliberately chooses a different desk-based workflow instead of becoming another chapter skin.

## 2. Concrete before/after data coverage

| Area | V1–V5 shared model | V6/V7 captured model |
|---|---|---|
| Requests | 4 status distribution rows | 10 visible hub IDs + 5 exact source-request links; 2 linked requests have full captured briefs, budgets, dates, requirements and history |
| Quotes | 3 status distributions | 10 hub rows + 4 additional captured drafts; 10 amounts and 5 complete visible single-line pricing/phase details |
| User projects | 5 names, several local keys / untranscribed IDs | 5 full UUID rows; each joined by exact project ID to captured billing; original active-header conflict retained |
| Project selector | 6 references | All 18 captured project IDs, names, client emails, selector statuses/progress and separate billing references |
| User payments | 3 status distributions | All 11 IDs evidenced across captures; 9 amounts, 6 fixture project links and 3 exact Khandesh milestone links; 2 amounts remain unknown |
| Trust | 6 positional session placeholders | 6 full session UUIDs; device/IP/timestamps explicitly unknown |
| Login activity | Not fully exposed | Arjun: two separate 6-row snapshots. Karthik: 10 of 24 profile activity rows including visible IPs. No deduplication into invented unique events |
| Khandesh milestones | 7 titles/statuses, no UUIDs | All 7 hub UUIDs, plus a separate seven-row F12 reference containing statuses, due dates and pay-only types; no phase UUIDs are visible in F12, so these fields are not title-joined |
| Khandesh payments | 3 monetary references without UUIDs | 3 full payment UUIDs, raw paise, formatted INR and exact REF → milestone associations |
| Delivery timeline | 3 examples | All 7 F12 entries, full text, milestone labels and captured timestamps; hub's zero remains separate |
| Deliverable | Title/status only | Title, status, submitted time and captured filename; no fictitious download URL |
| Razorpay | Partial status/progress reference | Captured overview description, creation/update/end dates, client, quote ID, operator and reported milestone/deliverable counts; no invented milestone rows |
| Karthik | Summary-only alternative profile | All available profile fields and 10 visible authentication rows; no borrowed Arjun records |

The full structured payload has **101 primary evidence rows/observations, seven additional unjoined F12 milestone observations, and two user profiles**. This count includes 22 authentication observations across three source snapshots, not 22 unique events. It is not a claim of complete production data. Quote-origin IDs for Khandesh and Razorpay also appear as linked project fields, not fabricated full quote records.

## 3. Source corrections found in the fresh audit

Direct image inspection confirms these actual files:

- `045-pipeline-projects.webp`: project selector; `046-pipeline-projects-details.webp`: selected Khandesh hub.
- `115-user-pipeline-payments.webp`: Payments; `117-user-pipeline-quotes.webp`: Quotes; `118-user-pipeline-requests.webp`: Requests; `119-user-pipeline-trust-account.webp`: Trust & account.
- `053-projects-details.webp`: Razorpay overview, not Khandesh.
- `089-project-details-daily-progress.webp` and `090-project-details-milestones-and-files.webp`: Khandesh F12 references.

Several old source labels in `reference.js` are incorrect. They are corrected in the new dataset and revision documents **without modifying the approved historical files**. The third fixture is `uk6ic`, as confirmed by exact-ID billing/selector evidence.

The user-hub payment table's last visible row is the Completed deposit `01a10a2b-5ed2-73bc-8aee-cf61167d4900`. The additional row recovered from the project table is Pending ₹30,000, `01a10a2b-5ed2-73bc-8aee-d1c6262906e9`. It is not fabricated to fill the total.

The admin deliverables read `/api/v1/admin/projects/{projectId}/deliverables` is defined in **progress.openapi.json**. The Projects specification exposes a different, unprefixed client route. New integration notes use the correct service owner.

## 4. Rules governing richer detail

1. **Exact IDs establish cross-source joins.** Matching titles do not prove a request → quote → project relation. Fixture names remain visibly audit data.
2. **Snapshot totals stay separate.** Fifteen captured request IDs across different surfaces are not claimed to be a reconciled current 15-of-26 server response. The same applies to 14 captured quotes versus 22 reported.
3. **Unknown is neither zero nor unavailable in production.** It means the local evidence did not capture the value.
4. **Financial evidence is scoped.** Paise ÷ 100 is explicitly labelled for the raw Khandesh rows. No client-wide sum is calculated from incomplete amounts; no Paid/Completed status is treated as verified settlement.
5. **Source conflicts remain visible.** 0%/57%; 7 open/4 Approved; 4 active/5 visible projects; 8 pending header/5 Pending + 3 Created; Deposit Pending/Paid; empty hub timeline/seven F12 updates; billing four deliveries/one visible hub deliverable.
6. **Authentication is not audit.** Repeated LOGIN observations with no event IDs are not deduplicated into invented events. IPs from Karthik's profile never populate Arjun's sessions.
7. **Global reference selection is not account membership.** The project selector can show UPI Switch's captured `karthik.menon@…` email while Karthik's separate profile reports zero projects. Without a captured client UUID association, this is not silently rewritten into his user-hub project list.
8. **Swagger is a contract, not a data source.** No examples, write DTO defaults, inferred ACLs or health states are used as record values.

## 5. Two new design hypotheses

### V6 · Evidence desk

A **three-zone investigation workspace**: identity/selector rail, one active section's paged records, persistent selected-record evidence pane. The inspector is independently scrollable on wide desktop; on narrower layouts it stacks beneath the record list, and Expand opens a native modal.

Why it exists: efficient exact-record comparison, source checking and reference lookup. Source-scoped filtering distinguishes the hub page from additional captured records. Selecting a row actually updates detailed fields; project/source-request relationships navigate to the exact captured target.

### V7 · Client casebook

An **editorial dossier**: full-width identity/selection hero, chapter index and independently expandable source chapters. Multiple chapters can remain open. Record detail opens a wider two-column native record sheet rather than a persistent side panel.

Why it exists: complete-case review and source-to-source reading. The design combines V5's readable hierarchy with V2's source boundaries, but avoids a forced single chapter or a falsely unified chronology.

These are independently authored HTML structures, not a loop producing reskinned copies. Only the evidence model, data-rendering utilities and locked visual tokens are shared. Neither page loads the old F05 controller or dataset.

## 6. Interaction and delivery boundaries

Both include full-width responsive layouts, locked teal tokens, the provided light/dark logo pair, Inter/system fallback and monospaced IDs; persistent local theme/sidebar preferences; mobile drawer, Escape/focus handling; native modal focus return; reduced-motion styles; readable no-JavaScript summaries and full-data links.

Search, status filter, four sort modes, source scope and five-row paging act on the loaded captures only. Entity selection, section/deep-link navigation and source-request/project inspection are functional local reads. Section-state controls are explicitly local simulations, not health checks or claims about current permissions. Missing owner pages are shown as integration route text, not dead links or duplicate mutation consoles.

See [DATA-AUDIT](DATA-AUDIT.md) for row inventories and precise sources; [SWAGGER-REVIEW](SWAGGER-REVIEW.md) for fresh contract extraction; [DELIVERY](DELIVERY.md) for executed QA and preservation results.
