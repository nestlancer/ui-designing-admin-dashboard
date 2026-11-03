# F24 · Printed gate evidence — final handoff

3 November 2026. These blocks summarize the evidence-backed prototype scope in the overriding run revision, not the stale requirement to invent a complete62-record fixture. See [DELIVERY-REPORT.md](DELIVERY-REPORT.md) for limitations, defects, procedural and budget exceptions.

```text
GATE S · F24
Shots visually inspected: 9/9
System HTML + audit metadata: 8/8 (skeletons, not populated records)
Workspaces: Health / Config / Features / Jobs / Templates / Operations
Known template identities: 11/62 captured total
Missing: 51 notification identities; 9 email bodies; notification UUID/state
Result: PASS available-source reconstruction / BLOCKED full-template source closure
```

```text
GATE R · F24
MD: YES / XLSX: 10/10 sheets
Required C items: C3 C5 C9 C12 C18 C20, all5/5
A15: per-operator permissions, correctly separated from local change visibility
KEEP: six workspaces, guarded power, captured microcopy and teal identity
Result: PASS scoped report interpretation
```

```text
GATE A · F24
Admin: 56 paths / 63 operations read; F24 slice18 paths /21 operations
Gateway: 22 paths /23 operations; health slice19 paths /20 operations
Notification template extension: 2 paths /4 operations; DTOs read
Health spec: cross-check, not an additional live integration
Open envelopes, missing preview/test DTOs, channels/value conflicts: explicit
Every mutation: local-only review/consequence/reason/receipt; no production request
Result: PASS prototype contract mapping / production integration unverified
```

```text
GATE T · F24
Primary reads: 9 (Grafana, Google SRE, Carbon, LaunchDarkly, Unleash,
                BullBoard, Resend, Drupal, GOV.UK)
Reference images visually inspected: 3
Mapping to V1–V5: YES / no copied brand or invented capabilities: YES
S → R → A → T → concepts order: YES
Limit: pattern research, not authenticated live-console testing
Result: PASS
```

```text
GATE 1 · F24
Pre-build concept cards: 5/5
Minimal / health-led / config-led / dense / motion-led: covered
All pairs differ on ≥3 A–E axes including geometry or narrative
Identical teal tokens: YES / shared A+C pair: NO
Result: PASS design-direction review (not owner approval)
```

```text
GATE 2a · V1 pilot
14 width/theme cells / six workspaces /73 interaction assertions
16 axe scans /0 detected violations /0 page errors or external runtime requests
Pilot passed before remaining variant markup
Result: PASS pilot; shared fixes later rerun across all five
```

```text
GATE 2b · F24
Five hand-authored index.html + style.css files: YES
No variant-design generator: YES
Shared family runtime reused; native dialogs, not five duplicated runtimes
Six workspaces + local states + no-JS access: 5/5
Gallery / manifest / DECISIONS integration: complete
Procedural exception: post-pilot variants authored sequentially, then batch-tested,
not individually frozen before writing each subsequent variant
Result: PASS delivered implementation; exception disclosed
```

```text
GATE 3 · F24
70 width/theme cells at360/390/768/1024/1440/1920/2560
720 active-workspace overflow checks across expanded and collapsed states
50 desktop geometry/persistence pairs
365 main +130 extended interaction assertions =495 passed
80 main +40 extended axe scans =120; detected violations0
Main: page errors0 / failed resources0 / external runtime requests0
Extended: page errors0 / external runtime requests0
Coarse pointer / no-JS source access / reduced motion: 5/5
Protected files: 415/415 unchanged / missing0
Existing manifest families preserved: 23/23
Effective page bytes129,228–140,953: under250KB; over70KB soft target
Result: PASS automated prototype checks, with soft-budget exception
```

## What these gates do not certify

- Complete62-template content: BLOCKED by missing source data.
- Server permissions, audit persistence, maintenance/cache/email/job effects: not connected or tested.
- Full WCAG2.2AA certification or manual screen-reader/usability testing: not performed.
- Axe excludes isolated email iframe contents and runs after finite transitions settle.
- Production deployment, owner selection/approval, or later family revisions: not performed.

Evidence summary retained in this file and in [DELIVERY-REPORT.md](DELIVERY-REPORT.md). Ephemeral QA screenshots/scripts were not kept in the lab tree. Research visuals are logged at **`docs/RESEARCH-VISUALS.md`**; local research reference copies live under `docs/research/`.
