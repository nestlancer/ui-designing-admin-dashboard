CI failures at 2 a.m. should not wait for a human to parse logs. **Agentic pipelines** interpret failures, propose fixes, and open draft PRs—while keeping merge gates firmly human-controlled.

## Human-in-the-loop architecture

```
fail job → agent reads logs + diff → proposes fix branch → engineer approves merge
```

Never auto-merge to main. Agents lack context on business risk, migrations, and customer commitments.

## What agents handle well

- Lint and formatter failures with deterministic fixes
- Missing lockfile updates after dependency bumps
- Flaky test triage: rerun vs quarantine recommendations
- Typo fixes in error messages surfaced by snapshot tests

## What requires escalation

- Database migration failures
- Security scanner blocks on new CVEs
- Contract test breaks across service boundaries
- Any change touching auth, payments, or PII retention

## GitHub Actions wiring

```yaml
on:
  workflow_run:
    workflows: [CI]
    types: [completed]
jobs:
  triage:
    if: ${{ github.event.workflow_run.conclusion == 'failure' }}
    steps:
      - uses: actions/checkout@v4
      - run: node scripts/agent-triage.mjs
```

Store prompts and tool configs in-repo for reviewability. Cap token spend per run.

Agentic CI augments engineers—it does not replace judgment on production-bound changes.

## Instrumentation for agent pipelines

Log every agent suggestion with PR link, diff size, and human acceptance outcome. Monthly review: which failure classes agents resolve reliably vs which still need runbook docs. Cap concurrent agent jobs so flaky retries do not starve human CI capacity.
