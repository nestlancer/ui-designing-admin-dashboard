# F05 · Pipeline hubs · User + Project

Completed 2 November 2026. Five hand-authored variants; both hubs in every variant. **Recommendation: V3 · Whole story**, for its entity-first context and connected 360° modules. V4 is the inspection-heavy alternative.

## Open the designs

| Design | Primary approach | Critique |
|---|---|---|
| [V1 · Clear context](../V1/index.html) | Minimal identity rail and native section disclosures | Quietest baseline; more disclosure clicks, least overview density |
| [V2 · Evidence spine](../V2/index.html) | Relationship spine, source-kind evidence filter, source-separated delivery timeline | Strongest explanation of lineage; longest scroll, deliberately not a merged audit stream |
| [V3 · Whole story ★](../V3/index.html) | Identity/selector/next-review header with asymmetric 360° bento | Clearest whole-entity overview; more vertical space than the dense ledger |
| [V4 · Reference ledger](../V4/index.html) | Entity index, keyboard section tabs, semantic evidence table and side inspector | Best for repeated inspection; requires switching sections rather than seeing all at once |
| [V5 · Focus chapters](../V5/index.html) | Reversible chapter navigation and translation-only motion | Strongest focused reading; overview requires stepping through chapters; reduced-motion equivalent provided |

[All-family gallery](../../../index.html#F05-pipeline-user-project-hubs). Each page includes a five-design switcher and User hub / Project hub tabs. Stage pipeline is a real link to preserved F04. User↔project links transfer only the verified Arjun/Khandesh relationship.

## What is implemented

- User sections: **Requests, Quotes, Projects, Payments, Messages, Trust & account**.
- Project sections: **Milestones, Payments, Origin chain, Timeline**; includes approved deliverable reference and next-actor uncertainty.
- Search/select known captured references; selected, unselected, unknown-ID and partial-reference states; keyboard search/selection; URL-scoped hub/entity/section; browser Back/Forward.
- Independent reference/full, empty, skeleton, error, degraded and permission-denied previews for all ten sections. Retry restores a local reference, not service recovery. Sibling evidence stays visible.
- A11 source/degraded notice; A13 per-hub **reference-coverage** strip, not fabricated live service health.
- Scoped inspectors with captured source, canonical destination grammar and published inert read contract. Full known UUIDs; unresolved identifiers stay unresolved. Native dialogs with Escape/focus return and honest clipboard fallback.
- Local command navigation (⌘/Ctrl+K). V2 source-kind filtering; V4 loaded-evidence search/status/sort/pagination; V5 chapter controls and vertical keyboard navigation on desktop.
- Locked teal/shared tokens, supplied light/dark logo pair with alt/dimensions, real theme persistence and URL override before paint, full available width, desktop232→68rail, persisted `nl-sidebar`, mobile drawer with inert background/focus containment/Escape.
- No-JS: both hubs and ten source sections remain readable/reachable. Reduced-motion: no animation or smooth scrolling. Coarse-pointer controls meet44×44px checks.

## Operating truth and boundaries

The UI is a **historical reference prototype**, not a production connection. There are no API requests, financial/security mutations, actual audit events, approvals, signatures, settlement actions or fabricated operators/health/SLA metrics.

Arjun’s full hub and Karthik’s profile-only capture are separate. Six project references are transcribed; the captured selector total18 is explicitly not represented as eighteen loaded rows. Some request/quote/payment evidence uses captured status distributions rather than individual record transcriptions; these are labelled **distribution/evidence rows**, not backend records or pagination over missing rows.

Conflicts remain visible:4active projects vs5rows; payment header8 vs detailed5Pending+3Created; selector0% vs selected57%;7open milestones vs4Approved rows; Deposit Pending vs separate Paid capture; empty hub timeline vs separate F12 progress evidence. No silent reconciliation or inference of request links, settlement, next actor or current outage status.

F08/F10/F12/F13/F16/F18 remain owner-family integration handoffs, not duplicate full consoles or broken local routes. Actual production routing, typed fields in open response envelopes, authorization, selected-client messaging scope, freshness, pagination, identity resolution and audit receipts require integration work.

## Research, contracts and sequence

Required source studies and six final documents:

1. [BASELINE-MAP](BASELINE-MAP.md):3principal screenshots,16family HTML snapshots/audit metadata, F16 and F12 reference evidence, content/filename reconciliation.
2. [REPORT-STUDY](REPORT-STUDY.md): Markdown report, all10workbook sheets,7targeted C-items and2ADDs, KEEP and checklist mapping.
3. [API-MAP](API-MAP.md):8required service specs targeted;23read-capability mappings; separate full17-spec inventory retained from F04. Published schemas do not prove runtime health or field completeness.
4. [TEMPLATE-RESEARCH](TEMPLATE-RESEARCH.md):11opened/studied references,8entity-workspace pages plus3supporting interaction references; failed/irrelevant attempts excluded.
5. [CONCEPTS](CONCEPTS.md): five cards/sketches and three review tables; axes/distinctness/coverage and final recheck.
6. This delivery report.

S/R/A were completed before online research. The initial nine-reference study preceded concepts/code. **Timing exception:** that initial set contained six narrowly classified entity references and three supporting interaction references. The final audit added Salesforce record views and Microsoft productive record forms to reach eight direct entity-workspace references. Those two were studied after the first concept/build pass; all eleven must not be represented as preceding the original draft. No feature scope was expanded.

**Strict V1 pilot-before-siblings sequencing was met:** V1 passed572browser checks and120axe scans before the one allowed V1→V2 skeleton copy or V3–V5 implementation. V2 was then manually redesigned; V3–V5 primary markup/layout CSS were independently authored. Shared data, shell primitives and interaction components are reused, not a variant generator. QA scripts only inspect and write test evidence.

## Fresh verification

| Evidence | Actual result |
|---|---|
| `PILOT-QA.json` |572checks;120axe scans;0violations, before siblings |
| `QA-RESULTS.json` / `QA-V1…V5.json` |**2,860checks passed**;**600axe scans,0violations** |
| `SUPPLEMENTAL-QA.json` |**328checks passed**;**105additional axe scans,0violations** |
| `STATIC-QA.json` |40checks passed;547protected files unchanged; additive gallery/manifest verified |
| Final browser total |**3,188checks /705automated accessibility scans**;0violations |
| Final captures |40final PNGs:5variants ×2hubs ×1440/390 ×light/dark;8pilot PNGs retained |

The main suite exercises9widths:360,375,390,414,768,1024,1440,1920,2560; both hubs/themes; both desktop rail states. It records260layout configurations, measured H1 size28–40px, full available width and no page overflow. Supplemental checks cover published read paths/required query parameters, entity isolation, unknown/local-reference guards, dialog focus return, source-index filtering, real table search/sort/pagination, vertical chapter keys, persisted cross-family sidebar preference, reduced motion,44px touch controls, mobile focus trap and broken-logo text fallback.

Zero JavaScript errors or external requests in the main suite. Automated accessibility is not WCAG certification, screen-reader testing, human usability research or a measured60second task-performance claim.

### Issues found and resolved

- Light source-tint links and dark initials had insufficient contrast; fixed with existing teal ramp tokens.
- Selected section tabs needed the darker teal text on tinted light surfaces.
- Opacity-fading text caused transient contrast failures; V5 now uses translation-only motion at full contrast, including its inspector.
- Source notices now follow selection; partial/unknown entities do not inherit another entity’s discrepancy counts or detail.
- Missing-request/project/deliverable drills now show the correct owner/read contract, not a generic quote destination.
- Touch dismiss target36px wide and compact ledger foot controls were raised to44px.
- Supplemental focus tests wait for the native dialog close event before asserting restored focus.

Initial failed QA JSON is retained as diagnostic history, not advertised as final passing evidence.

## Acceptance / coverage

C9/C11/C3/C5/C12/C18/C20: **5/5 each**. A11P2 andA13P3: **5/5 each**, exceeding the3/5threshold. No newly targeted P1ADD. Both hubs, ten sections, all preview states, keyboard, theme, mobile, noJS and reduced-motion paths:5/5. Same teal; no pair shares the same A+C layout/narrative combination; minimal1 /timeline2 /3603 /dense4 /motion5.

Report checklist applied to each design: hierarchy/identity, contextual triage handoff, scope-qualified queues, responsive evidence tables/cards, grouped navigation, contrast/icon/text, mono/INR, dark parity, keyboard/dialogs/drawer, states/recovery, safe owner-family handoffs, full-width responsive layouts and legal/transport honesty. **No open functional blockers or majors.** Remaining evaluation items are human task timing, assistive-technology/user testing and production integration—not claimed complete.

### Payload exception

Raw complete-page payload is approximately**82–87KB**, including unchanged shared CSS and all family data/behavior, excluding images. This exceeds the family’s **soft70KB target** but remains below the master250KBhard limit. Exact current bytes and gzip estimates are in `STATIC-QA.json`; gzip estimates are not a claim that the preview server compresses responses. Both supplied logo files total4,940bytes, with dimensions. No CDN, remote fonts, chart library or generated image payload.

## Preservation and run instructions

F01–F04, source screenshots/HTML/reports/Swagger/prompts and shared token/base files remain unchanged:547protected hashes checked. Gallery is an additive F05 block; prior manifest family values remain identical; DECISIONS is append-only. `.git` remains absent. No push, commit or branch action.

From repository root:

```sh
python3 admin-portal-lab/families/F05-pipeline-user-project-hubs/docs/serve.py
# :8131 opens V3; the Gallery control reaches all five and the earlier families.
```

Or generic static serving:

```sh
python3 -m http.server 8131 --bind 0.0.0.0
# /admin-portal-lab/families/F05-pipeline-user-project-hubs/V3/index.html
```

Re-run browser checks when Playwright/axe are installed in the tool environment:

```sh
node admin-portal-lab/families/F05-pipeline-user-project-hubs/docs/run-suite.cjs
node admin-portal-lab/families/F05-pipeline-user-project-hubs/docs/supplemental.cjs
```

**Final recommendation: V3 · Whole story.** It makes selected identity and source boundaries explicit before asking the operator to inspect connected modules. ChooseV4for concentrated evidence review. Production actions remain in their correctly scoped destination families.
