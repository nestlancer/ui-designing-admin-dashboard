# F17 · Messages home + inbox — delivery report

**Current status (owner redesign pass, 2 Nov 2026):** five refreshed offline variants are ready for source-level review. Latest static audit passed: 10 pages checked, 10 distinct variant stylesheets parsed, 33 unique local resources and 230 local-resource/link fetches; zero CSS parse errors or duplicate IDs/missing image alt/unlabelled fields/broken local targets. It rechecked the 18 captured inbox rows and both separate snapshot triplets; both shared scripts pass `node --check`. No browser-based visual, responsive, keyboard, screen-reader or interaction verification was performed; Gate 3 is **not claimed as passed**. Older results below describe the initial delivery where they differ.

## Delivered

- `V1/index.html` — Signal brief
- `V2/index.html` — Queue workbench
- `V3/index.html` — Conversation index
- `V4/index.html` — Operations ledger
- `V5/index.html` — Compose paths
- Shared offline shell and local interaction script: `messaging.css`, `messaging.js`
- Baseline, report, API, research and five-concept records are in this folder's `docs/`.

All five preserve the captured overview and inbox totals as separate historical snapshots. The new-direct and new-group forms are local-only previews. Group form requires at least two checked client entries to prepare a preview, consistent with the request DTO's minimum, but no client IDs are available and no thread is created. The captured production `/messages/new/group` 404 is not treated as proof of a successful route; the local path uses `/messages/new-group` and clearly stays offline.

## Source boundaries retained

- Overview: 18 conversations / 21 unread messages / 11 unread threads.
- Inbox: 18 conversations / 20 unread / 10 waiting; type counts are kept as their own capture.
- These figures are not reconciled or presented as live counts.
- No unsupported assignment, archive, SLA, channel, send-success or read-receipt behavior is claimed.

## Static checks actually run

- `node --check` passed for `messaging.js` after fixing a syntax error found during this review.
- Parsed all five variant documents: no duplicate IDs, missing image alt text, or unlabeled form fields were found. Each view intentionally has its own view-level H1; only the selected view is exposed when JavaScript initializes.
- Local links, fragments, stylesheets, scripts and image/icon resources were checked. A stale F19 placeholder fragment was corrected to point to the family gallery. HTTP checks fetched 75 referenced resources across F17/F18 pages during the combined audit; all returned success.
- CSS parse checks were run on referenced CSS files; no parse errors were reported.

These are source-level checks, not browser verification. No performance, axe, responsive screenshot, keyboard-flow or assistive-technology checks are claimed.

## Still for review / integration

- Browser-check five variants at 360, 390, 768, 1024, 1440 and wide desktop, in light/dark; verify sidebar collapse/drawer, tab/view controls, filters, compose validation and focus restoration.
- Production client lookup, IDs, permissions and message creation require a verified integration; nothing here sends a request.

## Owner review redesign pass · 2 November 2026

The owner reviewed the prior five directions and authorized a full visual refresh while retaining F17's evidenced content and required states. The earlier names/directions above describe the prior pass and are superseded by the current variants:

- V1 **Signal brief** · V2 **Queue workbench** · V3 **Conversation index** · V4 **Operations ledger** · V5 **Compose paths**.
- Each page now links its own `V#/design.css`; the family-wide messaging shell, content, local interaction behavior, captures and API boundaries remain shared/unchanged. Variants are differentiated by evidence masthead, queue-plus-snapshot rail, scan-first index, dense register, and task-led compose geometry, not a palette-only reskin.
- Online pattern research and its application are recorded in `TEMPLATE-RESEARCH.md`; updated concept rationale is in `CONCEPTS.md`.
- F17 source snapshots stay separate: overview 18 / 21 / 11 and inbox 18 / 20 / 10. Existing states/forms/18 captured inbox records are retained. No new backend behavior or production action was introduced.
- The initial QA results above predate the redesign. The fresh audit for this pass is recorded in the current status: new design CSS parsed cleanly and all local references/resources checked successfully. No browser engine is available, so visual/responsive/keyboard/accessibility verification remains unperformed. The F17 family prompt was refreshed to match the approved roster, research basis and evidence boundaries; the master and unrelated family prompts remain untouched.

