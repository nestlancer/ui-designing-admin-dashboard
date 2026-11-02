/* F20 · analytics-blocks.js — the shared *decision-grade* composition layer.
   Built from the second research round (ops IA: north-star → drivers → diagnostic → detail;
   metric definitions next to the numbers; visible freshness + source health; three-tier drill).
   Every block is presentation over the captured fixture — no number, target, owner or
   timestamp is invented. Attaches to window.NL as NL.blocks. */
(function () {
  'use strict';
  var NL = window.NL, D = NL.data, T = NL.tie, U = NL.ui, esc = NL.esc, inr = NL.inr, int = NL.int, pct = NL.pct;

  /* ---------------------------------------------------------------- metric dictionary
     Researched pattern: every metric needs a written definition, a source, an owner and a
     refresh cadence in one place, next to the number. Only source/formula are Gate-A backed;
     owner and cadence are marked as not captured rather than invented. */
  var DICT = {
    revenue: [
      ['Completed payments (total)', 'Sum of completed payments in the window', '/api/dashboard/revenue · period', 'Not captured', 'Captured once (2026-10-30)'],
      ['Period trend', 'Change vs the previous comparable window', '/api/dashboard/revenue · from/to documented', 'Not captured', 'Not captured'],
      ['Revenue over time', 'Completed payments bucketed per day', '/api/dashboard/revenue', 'Not captured', '30 captured points'],
      ['Revenue by category', 'Completed payments grouped by payment category', '/api/v1/admin/payments/revenue/report · groupBy', 'Not captured', 'Not captured']
    ],
    users: [
      ['Total users', 'Count of user records', '/api/dashboard/users', 'Not captured', 'Captured once'],
      ['Active', 'Count of active users — activity definition not documented', '/api/dashboard/users', 'Not captured', 'Not captured'],
      ['New this month', 'Users created in the current month', '/api/dashboard/users', 'Not captured', 'Not captured'],
      ['By role', 'User vs Admin split', '/api/dashboard/users', 'Not captured', 'Not captured']
    ],
    projects: [
      ['Total projects', 'Count of all project records', '/api/dashboard/projects', 'Not captured', 'Endpoint failing'],
      ['Counted states', 'ACTIVE + COMPLETED + ON HOLD + CANCELLED', '/api/dashboard/projects', 'Not captured', 'Endpoint failing'],
      ['Avg. completion (days)', 'Mean days from start to completion', '/api/v1/admin/progress/projects/{id}/analytics', 'Not captured', 'Endpoint failing'],
      ['On-time rate', 'Share of completions inside the planned window', '/api/dashboard/projects', 'Not captured', 'Endpoint failing']
    ],
    requests: [
      ['Total requests', 'Count of request records (lifetime endpoint, no period)', '/api/v1/admin/requests/stats', 'Not captured', 'Lifetime'],
      ['Conversion rate', 'Converted To Project ÷ (total − drafts) = 18 ÷ 41', '/api/v1/admin/requests/stats', 'Not captured', 'Lifetime'],
      ['Avg. response time', 'Mean minutes to first operator response', '/api/v1/admin/requests/stats', 'Not captured', 'Lifetime'],
      ['Open pipeline', 'Submitted + Under Review = 11 + 2', '/api/v1/admin/requests/stats', 'Not captured', 'Lifetime'],
      ['Quote conversion', 'Accepted quotes ÷ total quotes = 18 ÷ 36', '/api/v1/admin/quotes/stats', 'Not captured', 'Lifetime']
    ]
  };

  /* coverage strip — one cell per bucket: filled = data, hollow = no data.
     Sparse windows are the norm in this capture, so the strip is the honest hero ornament. */
  function coverage(values) {
    var n = values.length, w = n * 6, filled = values.filter(function (v) { return v > 0; }).length;
    var s = '<svg class="cov" viewBox="0 0 ' + w + ' 12" preserveAspectRatio="none" aria-hidden="true" focusable="false">';
    values.forEach(function (v, i) {
      s += '<rect class="' + (v > 0 ? 'on' : 'off') + '" x="' + (i * 6) + '" y="0" width="4" height="12" rx="1"/>';
    });
    return s + '</svg><span class="cov-cap">' + filled + ' of ' + n + ' buckets carry data</span>';
  }

  /* ---------------------------------------------------------------- page furniture */
  function pageHead(state, opts) {
    opts = opts || {};
    return '<div class="page-head">' +
      '<div class="ph-main">' +
      '<p class="eyebrow">Analytics</p>' +
      '<h1>Analytics hub</h1>' +
      '<p class="lede">Revenue, users, projects, and requests — KPI strips, charts, and breakdowns.</p>' +
      '</div>' +
      '<div class="ph-actions">' +
      '<div class="seg" role="radiogroup" aria-label="Reporting range" data-ranges>' +
      D.ranges.map(function (r) {
        return '<button role="radio" data-range="' + r + '" aria-checked="' + (state.range === r) + '" tabindex="' + (state.range === r ? 0 : -1) + '">' + r + '</button>';
      }).join('') +
      '</div>' +
      '<button class="btn btn-secondary" data-csv>' + U.icon('down') + 'Export CSV</button>' +
      '</div></div>';
  }

  function tabBar(state) {
    return '<div class="tabs" role="tablist" aria-label="Analytics areas" data-tabs tabindex="0">' +
      D.tabs.map(function (t) {
        var on = state.tab === t.id;
        return '<button role="tab" id="tab-' + t.id + '" aria-controls="panel" data-tab="' + t.id + '" aria-selected="' + on + '" tabindex="' + (on ? 0 : -1) + '">' +
          t.label + '</button>';
      }).join('') + '</div>';
  }

  function sectionHead(tab, state, extra) {
    var meta = D.tabs.filter(function (t) { return t.id === tab; })[0];
    return '<div class="sec-head">' +
      '<div><h2>' + esc(meta.section) + '</h2><p class="panel-sub">' + esc(meta.sub) + '</p></div>' +
      '<div class="sec-meta">' + (extra || '') +
      U.chip('neutral', state.range + ' → ' + NL.period(), 'cal') +
      '</div></div>';
  }

  /* ---------------------------------------------------------------- north star
     Top-left = most valuable real estate (research: north-star card with value, comparison,
     trend, definition). Target/benchmark are NOT invented — the slot says so. */
  function northStar(o) {
    return '<section class="ns" aria-label="Headline metric">' +
      '<div class="ns-main">' +
      '<div class="ns-label">' + esc(o.label) + (o.flag ? ' ' + o.flag : '') + '</div>' +
      '<div class="ns-value">' + o.value + '<span class="ns-unit">' + esc(o.unit || '') + '</span></div>' +
      '<p class="ns-read">' + o.read + '</p>' +
      '<div class="ns-foot">' + (o.delta || '') +
      '<span class="ns-target">' + U.icon('alert') + 'No target or benchmark is set in the capture — this is a reading, not a verdict.</span>' +
      '</div></div>' +
      '<div class="ns-side">' +
      '<div class="ns-cov">' + coverage((o.series && o.series.values) || []) + '</div>' +
      '<dl class="ns-meta">' +
      '<dt>Window</dt><dd>' + esc(o.window || (NL.period() + ' · ' + D.rowCount[NL.state.range] + ' buckets')) + '</dd>' +
      '<dt>Freshness</dt><dd>' + esc(D.captured.split(' · ')[0]) + '</dd>' +
      '<dt>Definition</dt><dd><a href="#dictionary">Metric dictionary ↓</a></dd>' +
      '</dl></div></section>';
  }

  /* ---------------------------------------------------------------- driver row */
  function drivers(list) {
    return '<div class="drivers" role="list">' + list.map(function (d) {
      return '<article class="driver" role="listitem">' +
        '<div class="d-label">' + esc(d.label) + '</div>' +
        '<div class="d-value">' + d.value + (d.flag ? ' ' + d.flag : '') + '</div>' +
        '<div class="d-basis">' + esc(d.basis) + '</div>' +
        (d.series ? '<div class="d-spark" aria-hidden="true">' + NL.charts.spark(d.series.values) + '</div>' : '') +
        '</article>';
    }).join('') + '</div>';
  }

  /* ---------------------------------------------------------------- chart card */
  function chartCard(o) {
    return '<section class="panel chart-panel">' +
      '<div class="panel-head"><div><h2 class="panel-title">' + esc(o.title) + '</h2>' +
      '<div class="panel-sub">' + esc(o.sub) + '</div></div>' +
      '<div class="panel-tools">' + (o.tools || '') + '</div></div>' +
      '<div class="panel-body">' +
      (o.takeaway ? '<p class="takeaway">' + o.takeaway + '</p>' : '') +
      (o.body || '') +
      '<div class="figure-caption"><span class="calibration">' + o.footLeft + '</span><span class="mono hint">' + esc(o.footRight) + '</span></div>' +
      (o.legend ? '<div class="chart-legend">' + o.legend + '</div>' : '') +
      '</div></section>';
  }

  /* ---------------------------------------------------------------- data health rail
     Research: freshness incidents are 30–40% of data downtime and stale dashboards look fine.
     So the page states, per source, when it was read, whether it works, and what is unverified. */
  function healthRail(tab) {
    var src = [];
    if (tab === 'revenue') src = [
      ['/api/dashboard/revenue', 'ok', 'series + total, read at capture'],
      ['/api/v1/admin/payments/revenue/report', 'ok', 'category grouping via groupBy'],
      ['/api/v1/admin/payments/revenue/export', 'ok', 'csv format documented']
    ];
    if (tab === 'users') src = [
      ['/api/dashboard/users', 'ok', 'counters, read at capture'],
      ['/api/dashboard/analytics/users', 'ok', 'documented alias of the above'],
      ['/api/v1/admin/users/logs/security-stats', 'ok', 'documented, not rendered here']
    ];
    if (tab === 'projects') src = [
      ['/api/dashboard/projects', 'down', 'failing in production'],
      ['/api/dashboard/analytics/projects', 'down', 'alias of the failing route'],
      ['/api/v1/admin/projects/stats', 'unknown', 'documented, never captured']
    ];
    if (tab === 'requests') src = [
      ['/api/v1/admin/requests/stats', 'ok', 'lifetime counters'],
      ['/api/v1/admin/quotes/stats', 'ok', 'quote conversion basis'],
      ['/api/v1/admin/requests/capacity/dashboard', 'unknown', 'capacity not in the capture']
    ];
    var dot = function (s) { return '<span class="dot dot-' + s + '" aria-hidden="true"></span>'; };
    var word = { ok: 'reachable', down: 'failing', unknown: 'not captured' };
    return '<aside class="health" aria-label="Data health and provenance">' +
      '<div class="health-head"><h2>Data health</h2><span class="badge badge-neutral badge-mono">' + esc(D.captured.slice(0, 19)) + '</span></div>' +
      '<ul class="health-list">' + src.map(function (s) {
        return '<li>' + dot(s[1]) + '<span class="h-src"><b class="mono">' + esc(s[0]) + '</b><span>' + esc(s[2]) + ' · ' + word[s[1]] + '</span></span></li>';
      }).join('') + '</ul>' +
      '<div class="health-notes">' +
      '<p>' + U.icon('alert') + '<span><b>Schema</b> Every analytics payload is <span class="mono">additionalProperties: true</span>, so field names are not documented and only captured fields are shown.</span></p>' +
      '<p>' + U.icon('alert') + '<span><b>Range</b> The 7d/30d/90d/1y control maps to the API enum <span class="mono">WEEK/MONTH/QUARTER/YEAR</span>.</span></p>' +
      (tab === 'requests' ? '<p>' + U.icon('alert') + '<span><b>Scope</b> Request and quote counters take no period — they are lifetime figures.</span></p>' : '') +
      '</div>' +
      '<a class="btn btn-sm btn-secondary btn-block" href="../docs/API-MAP.md">Open the API map</a>' +
      '</aside>';
  }

  /* ---------------------------------------------------------------- metric dictionary */
  function dictionary(tab) {
    var rows = DICT[tab] || [];
    return '<section class="panel dict-panel" id="dictionary" aria-labelledby="dict-h">' +
      '<div class="panel-head"><div><h2 class="panel-title" id="dict-h">Metric dictionary</h2>' +
      '<div class="panel-sub">One written definition per number, next to the number — owner and cadence are marked “not captured” rather than guessed.</div></div>' +
      '<div class="panel-tools"><span class="badge badge-neutral">' + rows.length + ' metrics</span></div></div>' +
      '<div class="table-wrap"><table class="data-table dict vis-caption"><caption class="sr-only">Metric definitions for the ' + esc(tab) + ' tab</caption>' +
      '<thead><tr><th scope="col">Metric</th><th scope="col">Definition</th><th scope="col">Source</th><th scope="col">Owner</th><th scope="col">Refresh</th></tr></thead><tbody>' +
      rows.map(function (r) {
        return '<tr><th scope="row">' + esc(r[0]) + '</th><td>' + esc(r[1]) + '</td><td class="mono">' + esc(r[2]) + '</td><td class="muted">' + esc(r[3]) + '</td><td class="muted">' + esc(r[4]) + '</td></tr>';
      }).join('') + '</tbody></table></div></section>';
  }

  /* ---------------------------------------------------------------- alerts strip */
  function alerts(items, title) {
    if (!items.length) return '';
    return '<section class="alerts" aria-label="' + esc(title || 'Exceptions on this page') + '">' +
      '<div class="alerts-h">' + U.icon('alert') + '<span>' + esc(title || 'Read this before the numbers') + '</span><span class="badge badge-warning">' + items.length + ' open</span></div>' +
      '<ul>' + items.map(function (i) {
        return '<li><span class="badge badge-' + i.k + '">' + esc(i.tag) + '</span><span class="a-text"><b>' + esc(i.text) + '</b><span>' + esc(i.sub) + '</span></span></li>';
      }).join('') + '</ul></section>';
  }

  /* ---------------------------------------------------------------- page chrome
     Rendered once into #chrome. The chart/table toggle, the demo-state switch and the CSV
     action live here — outside the tab subtree — so a re-render can never strand the user
     in one mode (a defect found in the previous build). */
  function chrome(state) {
    return pageHead(state) +
      '<div class="controls-bar">' +
      tabBar(state) +
      '<div class="cb-right">' +
      '<div class="seg view-seg" role="group" aria-label="Chart or table">' +
      '<button data-view="chart" aria-pressed="' + (state.mode === 'chart') + '">Chart</button>' +
      '<button data-view="table" aria-pressed="' + (state.mode === 'table') + '">Table</button></div>' +
      '<details class="lab-states"><summary>' + U.icon('dot') + 'Demo states</summary>' +
      '<div class="states-pop"><p class="hint">Production states for review. Not captured data.</p>' +
      '<div class="seg" role="group" aria-label="Demo data state" data-states>' +
      ['live', 'loading', 'empty', 'error'].map(function (k) {
        return '<button data-state="' + k + '" aria-pressed="' + (state.state === k) + '">' + k + '</button>';
      }).join('') + '</div></div></details>' +
      '</div></div>';
  }

  /* ---------------------------------------------------------------- tab-scoped exceptions */
  function tabAlerts(tab) {
    var out = [];
    if (tab === 'revenue') {
      out.push({ k: 'warning', tag: 'conflict', text: 'Period trend differs between captures', sub: 'screenshot +100 up · DOM −100 down for the same window' });
      out.push({ k: 'warning', tag: 'basis', text: 'One payment carries the whole window', sub: '29 of 30 buckets are empty — a trend line cannot be read from this' });
    }
    if (tab === 'users') {
      out.push({ k: 'warning', tag: 'unverified', text: 'Total, active and new-this-month are all 34', sub: 'report C16 flags this as a counting bug; the figure is shown as captured' });
      out.push({ k: 'warning', tag: 'undefined', text: '“Active” has no documented definition', sub: 'no activity endpoint or field is described in Swagger' });
    }
    if (tab === 'projects') {
      out.push({ k: 'error', tag: 'degraded', text: 'Projects API is failing in production', sub: 'GET /api/dashboard/projects — only captured values can be shown' });
      out.push({ k: 'warning', tag: 'reconciliation', text: '4 of 18 projects have no counted status', sub: 'ACTIVE 4 + COMPLETED 10 + ON HOLD 0 + CANCELLED 0 = 14' });
    }
    if (tab === 'requests') {
      out.push({ k: 'warning', tag: 'basis', text: 'Conversion is 18 ÷ 41, not 18 ÷ 46', sub: 'drafts are excluded from the denominator; 18 ÷ 46 would read 39.1%' });
      out.push({ k: 'warning', tag: 'absence', text: '“Avg. response time 0 minutes” is an absence', sub: 'no operator responses are recorded, so 0 is not a speed' });
    }
    return out;
  }

  /* ---------------------------------------------------------------- table helper */
  function table(o) {
    return '<div class="table-wrap" role="region" aria-label="' + esc(o.caption.replace(/<[^>]+>/g, '')) + '" tabindex="0"><table class="data-table' + (o.cls ? ' ' + o.cls : '') + '">' +
      '<caption>' + o.caption + '</caption>' +
      '<thead><tr>' + o.head + '</tr></thead><tbody>' + o.rows + '</tbody>' + (o.foot ? '<tfoot>' + o.foot + '</tfoot>' : '') + '</table></div>';
  }

  /* ---------------------------------------------------------------- export menu
     Gate-A note: POST-free. Revenue has a documented export (`format`), everything else exports
     client-side from the rendered view with a manifest. */
  function exportNote(tab) {
    var ep = tab === 'revenue'
      ? 'GET /api/v1/admin/payments/revenue/export?format=csv'
      : 'client-side CSV of the rendered view (no export route documented for this tab)';
    return '<p class="export-note">' + U.icon('down') + '<span>Export: <span class="mono">' + esc(ep) + '</span> · demo build downloads a CSV with a manifest (view, range, endpoint, captured, rows).</span></p>';
  }

  NL.blocks = {
    pageHead: pageHead, tabBar: tabBar, coverage: coverage, sectionHead: sectionHead, chrome: chrome,
    northStar: northStar, drivers: drivers, chartCard: chartCard,
    healthRail: healthRail, dictionary: dictionary, alerts: alerts, tabAlerts: tabAlerts,
    table: table, exportNote: exportNote, DICT: DICT
  };
})();
