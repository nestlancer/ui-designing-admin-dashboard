# F24 · System Config — report study

Read the full `reports/NESTLANCER_ADMIN_CONSOLE_UI_RESEARCH_REPORT.md` and all ten worksheets of `reports/Nestlancer_Admin_Console_UI_Research_Report.xlsx`. MD wins where prose differs. 3 November2026.

## Findings relevant to this family

- Executive finding4: admin is teal+Inter with misnamed/stray tokens. Finding5: success/info badge text fails AA. Finding9: dark mode CSS exists but did not engage. Finding10: type is compressed and UUID-hostile. Finding14: seventeen nav items and no nav badges.
- §3.1 System Config inventory: Health / Config14 / Features12 / Jobs / Templates62 / Operations. Webhooks and Audit are sibling routes, not sub-panels of System Config.
- §4.1 System: eight files, current crawl OK, shots059–063+104; principal issue **“Template editors + diagnostics depth unverified.”** Report §2.2 says navigation into editors106/107 was uncaptured. Our GateS separately opens those screenshots; DOM fields remain unavailable.
- No report claim guarantees present service health, server mutation behaviour or a deployed permission model. No other family's production defect is silently attributed to F24.

## Applicable CHANGE items (five-of-five target)

| C | Report meaning | F24 implementation |
|---|---|---|
|C3|Darken success/info text; status not colour alone|Icon+word+token colour. Dark tinted backgrounds overridden locally without touching tokens|
|C5|Rename/purge brand-violet, article-accent/ring blue|Import existing shared tokens unchanged. Brand surfaces only teal. Status hues are semantic only|
|C9|Mono+full IDs on hover; original target Requests/Users/Payments/Audit|F24 extension: keys/UUIDs/timestamps in mono, full value/copy in record context; visually transcribed IDs labelled shot063|
|C12|Ops12–14px, display32–40px for counts/money|H1 32–36px, summary numbers28–32px, metadata12px minimum; tables remain compact|
|C18|Repair dark or remove toggle|Working .dark+?theme= boot, local persistence, screenshot/accessibility checks|
|C20|Logo alt|Shared light/dark mark pair with explicit dimensions and alt|

C4(one table not responsive copies), C19(pagination info), C17(ten-second undo) also inform F24 craft, but are not falsely claimed as original F24-specific report targets. Cache flush/announcement/session revocation cannot be genuinely undone by a client toast; Undo only reverts reversible local edits.

## ADD distinction — correction to original family brief

**A15 is “Per-operator action permissions (who can broadcast / impersonate / refund)”, System/Users, P3.** It is NOT named “Change audit visibility” in the report. The family additionally requests audit visibility on config/flag/template/ops changes. Both are addressed separately:

- All5 variants: Can edit / Read only **local permission demonstration**, deny sensitive edits in read-only mode, explain that server authorization is unknown. No permission editor/API or active-user lookup invented.
- All5 variants: empty-by-default **Local change ledger** with preview actor, local time, target, before/after, reason. Explicitly not server audit persistence. No fictitious Riya history.
- Template closure: find/group/edit/preview recovered records in all5.62 is the captured total, not evidence of62 available fixtures.10 email+one notification identity recoverable;51 notification records unavailable. Structural workflow complete, source-data completion blocked.
- No P1 bulk/assignment/SLA claims: system config is not a hundred-item case triage backlog; contracts expose no bulk mutation API.

## KEEP

Reason-required safety pattern; ⌘K and keyboard hints; honest microcopy; teal+Inter+6px ops identity. Preserve six workspace labels and captured operational consequences. Cross-family payment/quote/capacity assets are not imported into System Config.

## Tokens

Existing `shared/tokens.css` is the immutable master§5.2 source: cool-gray neutrals, teal50–800, AA semantic text, Inter fallback, mono, 232pxsidebar/52pxheader. Family-local dark semantic backgrounds use12–16%tint over card, since the token file intentionally leaves that formula to implementation. No new brand hues.

## Benchmarks inherited + extended

Report§5's13 sources retained as prior research: Signal health grid; Apex/Shadcn/TanStack table grammar; HomeAssistant colour+icon+text; Mercury type/ID hierarchy; TailwindAdmin state checklist. Fresh primary enterprise references are in TEMPLATE-RESEARCH.md (Grafana/GoogleSRE, LaunchDarkly/Unleash, Carbon, BullBoard, Resend/Drupal, GOV.UK). We adopt decision hierarchy, not their branding or unsupported metrics.

## Roadmap mapping

P1 foundations(C3/C5/C9/C12/C20), dark repair(C18); P5 trust/handover(template gap closure and local audit visibility); P6 phone table fallback/drawer; P7 permissions(A15) and motion. P0 backend repair remains outside this static prototype. No production performance/auth-session test is claimed.

## Actual workbook sheets opened

1.Executive Findings(17rows),2.Design Tokens(13),3.Page Inventory(23),4.Benchmark Patterns(21),5.CHANGE list(23),6.ADD list(18),7.KEEP list(12),8.Roadmap(11),9.Acceptance checklist(17),10.Sources(19). System inventory row A16 confirms8files and template/diagnostics gap; ADD A15 explicitly says per-operator permissions. Sheet labels are not guessed from the master prompt.

## §7.1 acceptance as applied QA

| Report gate | F24 check / honest adaptation |
|---|---|
|Hierarchy|Identify captured service verdict and next safe action rapidly; no invented ₹at risk|
|Triage speed|Keyboard tabs/search/edit/confirm/receipt; case bulk workflow N/A|
|Queues|Jobs status/filter/empty; SLA/assignee absent in source and not invented|
|Tables|Single table per visible workspace, search/order, truthful totals and card fallback; no batch mutation|
|Navigation|Hub-grouped sidebar, persisted collapse, mobile drawer, palette to all sixworkspaces|
|Colour|Locked brand ramp; semantic icon+word; automated contrast checks in both themes|
|Typography|Inter fallback, mono keys/IDs/times, displayH1|
|Dark|Real theme and screenshot parity|
|Accessibility|Skip/main, oneH1, labels, native modal focus/Escape/restore, error summary focus, roving tabs|
|States|Manual ready/loading/empty/error demonstration, recover/retry without claiming API failure|
|Safety|Every mutation review-confirmed; reason for risky action; local permission gate; local ledger; reversible in-memory Undo only|
|Mobile|360/390/768/1024/1440/1920/2560, both themes and sidebar states|
|Performance|Offline assets/no requests, skeletons, measured weight; no production FCP/session guarantee|
|Legal/ops|©2026, Terms/Privacy informational dialogs, captured host labelled reference, no unverified live HTTPS/ACL/audit assertion|

```
GATE R · F24
MD read · XLSX10/10 · C-items6/6 · A15 corrected + permissions planned · KEEP/checklist mapped
PASS for evidence-led redesign brief; server integration not claimed
```
