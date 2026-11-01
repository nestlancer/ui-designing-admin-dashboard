# F08–F10 research and implementation notes

Date: 2026-11-02. The family-specific final reports now live under each family `docs/`; see F08 `DELIVERY-REPORT.md`, F09 `DELIVERY-REPORT.md`, and F10 `DELIVERY-REPORT.md`. This file is the consolidated initial research note. It does not replace those detailed reports.

## Source-product read

Reviewed the family prompts F08, F09, F10, the master prompt, family prompt README, screenshots, HTML snapshot index, report markdown and workbook, and bundled Requests/Quotes/Users OpenAPI specs. The screenshot baseline is a cool-gray fixed navigation rail, compact top bar, wide operational canvas, thin-bordered summary cards, filter strip, dense table, restrained teal actions, text-labelled status chips and pagination. Requests captures include the capacity dashboard (7 active, 16 queued, 28%, max active 25), queue summary (46 total, 6 categories, 0 minutes average response, 43.9% conversion) and 13 displayed rows. Quotes captures show 36 total, ₹9,68,950 accepted value, 50% acceptance and 17 active Inbox rows. These are historical snapshots, not current metrics.

F08 screenshot states include queue, ready-to-quote details, detail history/attachments, inline edit and request-to-quote entry. F09 has the quote list. F10 includes detail, scope/line items, pricing and schedule, terms/review, line library, duplicate-phase state and a custom schedule screenshot-only live gap. The final baseline maps enumerate each named HTML snapshot and capture.

## Report and spreadsheet findings used

The report's executive findings emphasize unstable sessions, queue ergonomics, dark-mode parity and status contrast. Its F08/F09/F10 relevant additions are A1 bulk actions, A2 keyboard triage, A3 saved views, A4 age/SLA labels and A5 queue/detail/next loop; relevant changes include C3/C5/C9/C12/C18/C19/C20. KEEP includes the requests capacity card and quote stepper/library. Workbook ten sheets were opened and iterated (Executive Findings, Design Tokens, Page Inventory, Benchmark Patterns, CHANGE, ADD, KEEP, Roadmap, Acceptance checklist, Sources); markdown is conflict authority.

## API analysis

Requests spec routes used in the surface map: admin requests/list/stats, capacity dashboard/settings, request get/patch/delete, status patch, assign, notes, quote create/prefill and attachment download. Quotes spec includes admin list/stats/detail/patch, send/resend/duplicate/revise/history/document versions/PDF/contract, line item library and payment schedule presets. Users admin list/search is the assignee lookup context, but no live assignment call is made. API route existence does not confirm production authorization, schema semantics, service health or audit behavior.

## Research and application

Enterprise dashboard guidance supports action queues over passive metrics, visible filter context, direct drilldown, keyboard paths, row state text plus semantic color, and separately visible financial values. Quote system comparisons reviewed Salesforce Revenue Cloud, HubSpot Quotes, PandaDoc, Proposify, Qwilr, QuoteWerks, DealHub and Oracle CPQ. The external references informed hierarchy and guardrails only; no unsupported integration, approval rule, margin calculation or e-signature feature is added.

## Delivery boundaries

All five pages per family exist. Final family reports disclose exact controls and validation status. The prototypes use local fixtures only; send, assignment, capacity changes, export and edit do not persist or call a service. Full browser/axe/target-size visual evidence is not available, so Gate 3 is not claimed PASS. F10 remains incomplete for strict capture parity in separate multi-phase records, full read-only version/document retrieval and backend-specific custom-schedule semantics. Prompt files are unchanged for your planned joint review.