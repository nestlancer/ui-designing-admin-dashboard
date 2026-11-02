# F18 · Messages thread — delivery report

**Current status (owner redesign pass, 2 Nov 2026):** five refreshed offline variants are ready for source-level review. Latest static audit passed: 10 pages checked, 10 distinct variant stylesheets parsed, 33 unique local resources and 230 local-resource/link fetches; zero CSS parse errors or duplicate IDs/missing image alt/unlabelled fields/broken local targets. It rechecked group/direct source markers; both shared scripts pass `node --check`. No browser-based visual, responsive, keyboard, screen-reader or interaction verification was performed; Gate 3 is **not claimed as passed**. Older results below describe the initial delivery where they differ.

## Delivered

- `V1/index.html` — Three-pane desk (queue, transcript and context)
- `V2/index.html` — Thread reader (wide transcript, narrow queue, toggled context)
- `V3/index.html` — Room directory (participant/source context first)
- `V4/index.html` — Message ledger (compact chronology)
- `V5/index.html` — Conversation folio (dated narrative, wide reading column)
- Shared offline shell, transcript styles and local interaction code: `thread-shell.css`, `thread.css`, `thread.js`
- Baseline, report, API, research and five-concept records are in this folder's `docs/`.

The screenshot-backed Payments ops group and HTML-backed Amit Verma direct conversation are separate selectable fixtures. The visible group membership is Riya Kapoor, Karthik Menon and Ananya Iyer. The prototype does not infer a relationship between these different captures or invent message/thread/client IDs.

## Contract and action boundaries

- Reply, edit, read/state controls, flag, delete, and membership affordances only provide local previews; no request is sent, no permission is checked, and no audit event is written.
- Group creation requires at least two `clientUserIds`; the screenshot provides no usable IDs/lookup results, so no group-create operation is asserted.
- Message length is bounded at 5,000 characters. Reply text is not sent. Edit preview is not a server PATCH.
- No unsupported attachments, assignment, SLA, channel or delivery claims are introduced.
- F19 review links now return to the family gallery instead of a nonexistent placeholder fragment; F19 itself is outside this delivery scope.

## Static checks actually run

- `node --check` passed for `thread.js`.
- Parsed all five variant documents: no duplicate IDs, missing image alt text, or unlabeled form fields were found. Queue, transcript and member panel were verified as sibling regions in the V1 DOM structure; this parser check does not prove layout or visual behavior.
- Local links, fragments, stylesheets, scripts and image/icon resources were checked. HTTP checks fetched 75 referenced resources across F17/F18 pages during the combined audit; all returned success.
- CSS parse checks were run on referenced CSS files; no parse errors were reported.

These are source-level checks, not browser verification. No performance, axe, responsive screenshot, keyboard-flow or assistive-technology checks are claimed.

## Still for review / integration

- Browser-check all five variants at 360, 390, 768, 1024, 1440 and wide desktop, in both themes. Test queue/thread switching, member panel at tablet/mobile widths, palette/dialog Escape and focus restoration, message reply/edit previews, and sidebar collapse/drawer.
- Production thread/client IDs, permissions, lookup and persisted audit behavior require verified integration; nothing here contacts the API.

## Owner review redesign pass · 2 November 2026

The owner reviewed the initial directions and authorized five new, clearly differentiated layouts. The earlier names/directions above describe the prior pass and are superseded by the current variants:

- V1 **Three-pane desk** · V2 **Thread reader** · V3 **Room directory** · V4 **Message ledger** · V5 **Conversation folio**.
- Each variant links its own `V#/design.css`; captured fixtures, state controls, family shell and local-only behaviors remain unchanged. The redesign explores queue/transcript/context at once, wide transcript reading, participant/source-first context, compact chronology, and a dated narrative folio.
- Research sources and the product-to-pattern synthesis are recorded in `TEMPLATE-RESEARCH.md`; updated concept rationale is in `CONCEPTS.md`.
- Payments ops remains screenshot-backed and Amit Verma remains HTML-backed; their content and relationships are not reconciled or invented. No new API action or server request was introduced.
- Prior static results above predate the new CSS; they do **not** validate this redesign. A fresh static audit is required. Browser-based visual, responsive, keyboard and accessibility verification remains unperformed because no browser engine is available. The F18 family prompt was refreshed to match the approved roster, research basis and source/action boundaries; the master and unrelated family prompts remain untouched.

