# F24 · System Configuration — delivery report

**3 November 2026 · F24 only · five hand-authored variants**

## Result

The five designs are implemented and available in the [visual review collection](../index.html) and the [main lab gallery](../../../index.html#f24). All cover **Health / Config / Features / Jobs / Templates / Operations**, using unchanged shared tokens and assets. The full-available-width desktop shell collapses to a named icon rail, persists the choice with the existing lab storage key and becomes a native navigation drawer on phones.

**Automated prototype verification passed. Full 62-record template source closure remains BLOCKED. Production integration and owner approval are not claimed.**

| Design | Default | Distinguishing structure | Assessment |
|---|---|---|---|
| [V1 · Control desk](../V1/index.html) | Health | Quiet full-width desk, four health cards, progressive diagnostics, cache/log pair | Recommended general-purpose baseline; least additional navigation overhead |
| [V2 · Service atlas](../V2/index.html) | Health | Persistent captured-health spine beside inspection workspace | Strongest persistent machine context; the extra spine costs horizontal space |
| [V3 · Change studio](../V3/index.html) | Config | Key index → selected record → local-ledger rail | Best focused settings workflow; selecting one record trades simultaneous visibility for clarity |
| [V4 · Operations register](../V4/index.html) | Templates | Compact register, source-coverage note, contextual right drawer | Best repeated template lookup; technical IDs still make mobile records tall |
| [V5 · Signal flow](../V5/index.html) | Health | Indexed chapters, captured-signal diagram, local receipt stage, full-window editor | Most expressive technical narrative; more vertical travel on a phone |

**Recommendation:** start review with V1; compare V3 if configuration is the main daily task and V4 if template operations dominate. This is a design judgement, not a measured usability improvement or owner approval. Distinctness comes from geometry, priority, narrative, density and interaction—not recolouring. The concept matrix is in [CONCEPTS.md](CONCEPTS.md).

## Evidence before implementation

The master, all 25 family prompts and README were read; only F24 was executed. The scoped run revision is at the top of `admin-portal-prompts/F24-system-config.md`; the earlier text is archived in [PROMPT-ARCHIVE-pre-run.md](PROMPT-ARCHIVE-pre-run.md).

1. **Source study:** nine production screenshots visually inspected, eight System DOM captures and audit metadata parsed. The DOMs are skeletons, not evidence of an outage or populated server records. [Baseline](BASELINE-MAP.md).
2. **Report:** Markdown and all ten XLSX sheets reconciled. A15 is per-operator action permissions, not audit visibility alone; the local change ledger is an additional family requirement. [Report study](REPORT-STUDY.md).
3. **Swagger:** detailed admin/system and gateway-health study, notification-template extension and health cross-check. Admin: 56 paths / 63 operations overall; F24 slice: 18 paths / 21 operations. Response envelopes are open objects, not typed item schemas. [Exact contracts and unresolved conflicts](API-MAP.md).
4. **Research:** nine primary reads across Grafana, Google SRE, Carbon, LaunchDarkly, Unleash, BullBoard, Resend, Drupal and GOV.UK; three reference screenshots visually inspected. These are pattern references, not nine authenticated live consoles. Failed/limited fetches and adoption boundaries are documented. [Research](TEMPLATE-RESEARCH.md) · [visual study](RESEARCH-VISUALS.md).
5. **Five concept cards:** written before the variant layouts. V1 pilot passed before the remaining layouts were authored. Post-pilot V2–V5 were written sequentially but regression-tested in batches, rather than a frozen individual gate after each variant; this procedural deviation is disclosed. Later shared typography, focus and safety fixes were regression-tested across the family. No script generated variant HTML/CSS.

## Source honesty and boundaries

- **Config 14:** 12 named raw keys (SYSTEM 8 + REQUESTS 1 + OTHER 3) plus maintenance/announcement surfaces managed under Operations. The three OTHER values remain captured `{}`. Six incomplete source values stay fragments; their editors start blank for a separate local draft, not a repaired baseline.
- **Flags:** twelve exact captured display names/states, five enabled. Technical IDs and rollout percentages are unavailable. `5/12` is enabled/total, not a traffic percentage. Diagnostic flags are not silently mapped to these switches.
- **Jobs:** twelve captured COMPLETED records. Retry/Cancel are disabled with an explanation; optional FAILED/RUNNING examples are isolated DEMO records. No invented QUEUED enum or production retry result.
- **Templates:** captured total **62 = 10 email + 52 notification**. Ten email identities/subjects plus one notification identity are recoverable; only verification's email body is transcribed. **51 notification identities and 9 email bodies remain unavailable.** Search, local grouping, order, paging and editors cover known records only. Notification UUID/priority/active state remain unknown. Full-source closure is blocked pending data.
- **Health:** historical captured signals and redacted/zeroed diagnostics, timestamp `2026-10-10T12:01:22.083Z`. No live probe, uptime, SLO, latency series, freshness claim or animated count-up.
- **Operations:** exact announcement `dismissable` spelling; per-key config payload; required `{}` full-cache DTO; exact-key path encoding; maintenance session-revocation consequence. Test-recipient and draft-preview request-body gaps stay explicit. No server Undo or restoration of revoked sessions.
- **F25 not executed:** Webhooks/Audit navigation explicitly returns to the existing lab gallery; no unbuilt F25 destination, form or server-audit claim.

## Implemented safety and interaction

Native labelled dialogs; review before local mutation; consequence and exact difference where available; required local reason; safe initial review focus; focus restoration; repeated Escape and dirty-close protection; retained editor values on review Back. Reversible in-memory edits have a **10-second local Undo**, never an assertion of backend rollback.

All five include a local Can edit / Read only demonstration and an **empty-by-default local ledger** with preview actor, local time, reason and difference. No ACL is fetched and no server audit trail is read or written. Nothing is sent to production.

Email draft rendering uses an allowlisted, sandboxed iframe with restrictive CSP, no scripts/origin privilege, no remote images and inert links. Test actions prepare local intent and explicitly say no email was sent. Demo logs export request metadata under `DEMO-system-log-request.csv`, not fabricated production log entries.

Tabs support roving keyboard selection and URL deep links. The command palette, filtering, local order/pagination, state simulations and permission controls operate locally. Every variant provides a no-JavaScript link to the readable [six-workspace source ledger](../source-view.html). V5 uses progressive IO/rAF entrances, finite panel/editor motion and one finite decorative SVG dash draw; it never depends on motion to reveal usable content. Reduced motion removes the effects.

## Fresh verification

Automated verification was run during delivery; ephemeral `docs/qa/` screenshots/scripts/logs were removed from the lab tree afterward. Summary numbers below are retained from that pass. Tests inspected the pages; they never emit variant HTML/CSS.

| Check | Actual result |
|---|---|
| Width/theme matrix | **70 cells**: five variants × 360/390/768/1024/1440/1920/2560 × light/dark |
| Expanded workspaces | 420 active-tab overflow checks (6 tabs × 70 cells) |
| Collapsed desktop workspaces | 300 active-tab overflow checks (6 tabs × 5 desktop widths × 2 themes × 5 variants) |
| Sidebar geometry/persistence | 50 expanded/collapsed desktop pairs; canvas grows immediately, fills available width and persists collapse on reload |
| Typography | One h1; desktop 32–36px; no visible text below 11px in expanded active-workspace scans |
| Main interaction assertions | **365 passed** (73 per variant) |
| Extended dialog/mobile/security assertions | **130 passed** |
| Total interaction assertions | **495 passed** |
| Axe scans | **120**, zero detected violations: 80 main + 40 extended |
| Main-suite errors/resources | Zero page errors, failed resources or external runtime requests |
| Extended suite | Zero page errors or external runtime requests, including malicious draft-content isolation checks |
| No-JS / reduced motion / coarse pointer | Passed per variant; coarse 360px, no-JS source access, no active reduced-motion ambient animation |
| Route checks | Existing local shell/variant/gallery links and fragments inspected in all five variants |
| Protected scope | **415/415 hashes unchanged**, zero missing files; 23 existing manifest records semantically preserved |

The extended suite covers partial-config editors, review/back value retention, repeated native Escape, keyboard submission under read-only permission, resetting editor aria state after permissions change, mobile email/notification geometry, native focus containment and unsafe draft HTML stripping. A final viewport inspection caught V4's inherited modal max-width; the drawer now fills the phone width, and V4 plus all extended regressions were rerun.

**Accessibility qualification:** axe uses WCAG 2 A/AA, 2.1 AA and best-practice tags in legacy mode with `iframes:false`. The isolated email iframe's contents are excluded; its sandbox/CSP/isolation are separately exercised. Finite transitions settle before screenshots/scans. Manual screen-reader, full WCAG 2.2 AA certification, every animation frame and an end-user usability study are **not** claimed.

Defects found and fixed include a filter-blur race that removed the clicked reset button, keyboard-unreachable scrollable JSON/differences, active-channel labelling, compact text below 11px, stale read-only aria state on a subsequent config editor, and V4's phone-drawer width. Shared locked tokens were not modified to resolve these.

## Weight and packaging

Measured decimal KB; includes each page's HTML/CSS/JS **plus** the family runtime/fixtures/boot/CSS and locked `tokens.css`/`base.css`. Images excluded. Gzip is a per-file estimate, **not** a claim that the Python preview server serves compressed responses.

| Variant | Effective raw bytes | Gzip estimate | 70KB soft target | 250KB page target |
|---|---:|---:|---|---|
| V1 | 129,228 | 38,112 | Exceeded | Pass |
| V2 | 134,042 | 38,990 | Exceeded | Pass |
| V3 | 135,817 | 39,509 | Exceeded | Pass |
| V4 | 135,166 | 39,258 | Exceeded | Pass |
| V5 | 140,953 | 41,105 | Exceeded | Pass |

All-five unique runtime code, including the locked shared CSS once: **223,130 bytes**. The no-JS ledger is a separate 10,214-byte document.

**Budget exception:** all five exceed the 70KB soft target because six complete workflows, safe editors and dialogs share a family-local runtime. This is disclosed, not owner-approved or hidden behind compression. Every effective page is below 250KB. There are no remote fonts, libraries or runtime assets. The typography uses the prescribed Inter-first system fallback without fetching a webfont.

This is a **multi-file offline relative-asset bundle**, following F22/F23—not five self-contained HTML files. Keep `admin-portal-lab` together for shell links into earlier families. The visual review sheet links into the live variants; operational pages require their adjacent/shared files and are best opened through the live preview.

## Files and reproduction

- Variant pages: `V1/index.html` … `V5/index.html`, each with its own hand-authored `style.css`; V5 adds `motion.js`.
- Shared family behaviour/data: `system.js`, `system.css`, `fixtures.js`, `boot.js`; static `source-view.html`.
- Main integration: F24 section only in lab gallery, F24 manifest record, appended DECISIONS entry. No sibling prompt, source capture, shared token/base/asset or F25 design was changed.
- Printed gate summary: [GATE-EVIDENCE.md](GATE-EVIDENCE.md).

From repository root: `python3 -m http.server 8131 --bind 0.0.0.0`, then open `/admin-portal-lab/families/F24-system-config/` or the main gallery's F24 section. The existing preview server remains on port8131.

## Handoff questions

Supply the missing notification identities and email bodies; reconcile notification channels object-vs-array and config value schema-vs-prose; confirm deployed gateway/service paths and preview/test DTOs; provide actual ACL/audit persistence contracts and a backend adapter. Select a design before any review-driven edits to other families. No production deployment, live integration, complete-source closure or user acceptance is asserted.
