(function () {
  'use strict';
  /* V3 · Readout stack
     Tables are the interface. Every rate expands into its own computation, with the formula,
     the numerator, the denominator and the endpoint printed inside the row. The page reads
     like a working paper an ops lead could defend in a review. */
  var NL = window.NL, D = NL.data, T = NL.tie, U = NL.ui, B = NL.blocks;
  var esc = NL.esc, inr = NL.inr, int = NL.int, pct = NL.pct;

  /* the readout: one row per headline figure, expandable to its computation ---- */
  function readout(tab, s, ser) {
    var rows = [];
    if (tab === 'revenue') {
      rows = [
        { m: 'Completed payments', v: inr(D.revenue.total), unit: 'INR', basis: 'sum of the three captured categories', calc: '6,66,100.00 + 30,060.00 + 12,000.00 = ' + inr(T.revenueCatSum), ep: '/api/dashboard/revenue?period=' + NL.period() },
        { m: 'Period trend', v: '+100 ↑', unit: 'screenshot', basis: 'comparison window not documented', calc: 'DOM captured −100 ↓ for the same window — the two captures disagree, so neither is asserted', ep: '/api/dashboard/revenue (from/to documented)' },
        { m: 'Series completeness', v: ser.filled + ' / ' + ser.count, unit: 'buckets', basis: 'buckets carrying a completed payment', calc: ser.count + ' buckets drawn · ' + ser.empty + ' have no data · 1 carries ' + inr(D.revenue.total), ep: '/api/dashboard/revenue?period=' + NL.period() },
        { m: 'Latest bucket', v: inr(D.revenue.latest), unit: 'INR', basis: 'captured footnote value', calc: 'the most recent bucket was read as ₹0.00 while the window total is ' + inr(D.revenue.total), ep: '/api/dashboard/revenue?period=' + NL.period() }
      ];
    } else if (tab === 'users') {
      rows = [
        { m: 'Total users', v: int(D.users.total), unit: 'users', basis: 'count of user records', calc: '33 user + 1 admin = 34 ✓ — roles tie out even though the three headline counters do not', ep: '/api/dashboard/users?period=' + NL.period() },
        { m: 'Active', v: int(D.users.active), unit: 'users', basis: 'definition not documented', calc: 'equals the total (34) and equals new-this-month — flagged as a counting bug in report C16', ep: '/api/dashboard/users?period=' + NL.period() },
        { m: 'New this month', v: int(D.users.newThisMonth), unit: 'users', basis: 'created inside the month', calc: 'equals the total; the time series shows one bar of 34 on ' + D.users.barDate, ep: '/api/dashboard/analytics/users?period=' + NL.period() },
        { m: 'Series completeness', v: ser.filled + ' / ' + ser.count, unit: 'buckets', basis: 'buckets with a new user', calc: '1 of ' + ser.count + ' buckets carries a value — a single bar, drawn as a bar', ep: '/api/dashboard/users?period=' + NL.period() }
      ];
    } else if (tab === 'projects') {
      rows = [
        { m: 'Total projects', v: int(D.projects.total), unit: 'projects', basis: 'count of project records', calc: '14 counted + 4 uncounted = 18', ep: '/api/dashboard/projects?period=' + NL.period() },
        { m: 'ACTIVE', v: String(D.projects.active), unit: 'projects', basis: 'counted lifecycle state', calc: '4 + 10 completed + 0 on hold + 0 cancelled = 14', ep: '/api/dashboard/projects?period=' + NL.period() },
        { m: 'On-time rate', v: D.projects.onTimeRate + '%', unit: 'of completions', basis: '10 counted completions', calc: 'of the 10 completions that carry a status, not of all 18 projects', ep: '/api/dashboard/projects?period=' + NL.period() },
        { m: 'Avg. completion', v: D.projects.avgCompletion + ' days', unit: 'days', basis: 'no completion dates recorded', calc: '0 is the absence of a duration, not an instant delivery', ep: '/api/v1/admin/progress/projects/{id}/analytics' }
      ];
    } else {
      rows = [
        { m: 'Total requests', v: int(D.requests.total), unit: 'lifetime', basis: 'counter endpoint takes no period', calc: 'statuses 5+11+18+3+7+2 = 46 ✓ and categories 37+4+2+1+1+1 = 46 ✓', ep: '/api/v1/admin/requests/stats' },
        { m: 'Conversion rate', v: D.requests.conversionRate + '%', unit: 'converted', basis: 'drafts excluded from the denominator', calc: '18 ÷ 41 = 43.9% · 18 ÷ 46 would read 39.1% — the basis is printed, not implied', ep: '/api/v1/admin/requests/stats' },
        { m: 'Avg. response time', v: D.requests.avgResponseMinutes + ' min', unit: 'first reply', basis: 'no responses recorded', calc: 'zero replies in the capture, so 0 is an absence rather than a speed', ep: '/api/v1/admin/requests/stats' },
        { m: 'Open pipeline', v: String(D.requests.openPipeline), unit: 'requests', basis: 'derived from two statuses', calc: 'Submitted 11 + Under Review 2 = 13 (derived, not a captured field)', ep: '/api/v1/admin/requests/stats' }
      ];
    }
    var n = 0;
    return '<section class="readout-panel" aria-labelledby="ro-h">' +
      '<div class="ro-head"><div><h2 id="ro-h">' + esc(D.tabs.filter(function (t) { return t.id === tab; })[0].section) + '</h2>' +
      '<p class="panel-sub">Every figure carries its own computation — open a row to see the arithmetic and the endpoint.</p></div>' +
      '<div class="sec-meta">' + U.chip('neutral', s.range + ' → ' + NL.period(), 'cal') + '</div></div>' +
      '<div class="table-wrap"><table class="data-table readout">' +
      '<caption>' + esc(tab) + ' readout · ' + rows.length + ' headline figures, all expandable</caption>' +
      '<thead><tr><th scope="col" class="c-exp"><span class="visually-hidden">Computation</span></th><th scope="col">Metric</th><th scope="col" class="num">Value</th><th scope="col">Basis</th></tr></thead><tbody>' +
      rows.map(function (r) {
        n++;
        var id = tab + '-calc-' + n;
        return '<tr class="ro-row"><td class="c-exp"><button class="row-toggle" type="button" aria-expanded="false" aria-controls="' + id + '" data-calc><span aria-hidden="true">+</span><span class="visually-hidden">Show computation for ' + esc(r.m) + '</span></button></td>' +
          '<th scope="row">' + esc(r.m) + '</th><td class="num">' + r.v + ' <span class="unit">' + esc(r.unit) + '</span></td><td class="basis">' + esc(r.basis) + '</td></tr>' +
          '<tr class="calc-row" id="' + id + '" hidden><td></td><td colspan="3"><div class="calc">' +
          '<p><b>Computation</b> <span class="mono">' + esc(r.calc) + '</span></p>' +
          '<p><b>Endpoint</b> <span class="mono">' + esc(r.ep) + '</span></p>' +
          '<p><b>Captured</b> <span class="mono">' + esc(D.captured) + '</span> · <b>Target</b> none set in the capture</p>' +
          '</div></td></tr>';
      }).join('') + '</tbody></table></div></section>';
  }

  function drawer(tab, ser, s) {
    var chart;
    if (s.mode === 'table') {
      return B.table({
        caption: 'Chart data — ' + ser.count + ' buckets, ' + ser.filled + ' with a value. Em dashes are missing buckets, not zero measurements.',
        head: '<th scope="col">Bucket</th><th scope="col" class="num">Value</th><th scope="col">Note</th>',
        rows: ser.labels.map(function (l, i) {
          var v = ser.values[i];
          return '<tr><th scope="row" class="mono">' + l + '</th><td class="num">' + (v > 0 ? (tab === 'revenue' ? inr(v) : int(v)) : '—') + '</td><td class="basis">' + (v > 0 ? 'value recorded' : 'no data in bucket') + '</td></tr>';
        }).join('')
      });
    }
    if (tab === 'projects') {
      chart = NL.charts.donut([{ name: 'ACTIVE', value: D.projects.active }, { name: 'COMPLETED', value: D.projects.completed }],
        { id: 'prj-chart', title: 'Project statuses — 4 active, 10 completed', desc: 'Donut of counted projects; 4 of 18 have no captured status.', centre: String(T.projectsCounted), centreLabel: 'counted of 18' });
    } else {
      chart = NL.charts.line(ser, {
        id: tab + '-chart', title: ser.filled + ' of ' + ser.count + ' buckets carry data',
        desc: 'Only evidenced buckets are drawn; the rest are gaps.', yLabel: 'y-axis: ' + (tab === 'revenue' ? '₹' : tab) + ' per bucket', unit: tab === 'revenue' ? '₹' : ''
      });
    }
    return '<figure class="chart-figure">' + chart + '</figure>';
  }

  function render(s) {
    var tab = s.tab, ser = NL.series(tab, s.range), el = document.getElementById('panel');
    var meta = D.tabs.filter(function (t) { return t.id === tab; })[0];
    el.setAttribute('aria-labelledby', 'tab-' + tab);
    Array.prototype.forEach.call(document.querySelectorAll('[data-tabs] [role="tab"]'), function (b) {
      var on = b.dataset.tab === tab;
      b.setAttribute('aria-selected', on ? 'true' : 'false'); b.tabIndex = on ? 0 : -1;
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-ranges] [role="radio"]'), function (b) {
      var on = b.dataset.range === s.range;
      b.setAttribute('aria-checked', on ? 'true' : 'false'); b.tabIndex = on ? 0 : -1;
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-view]'), function (b) {
      b.setAttribute('aria-pressed', b.dataset.view === s.mode ? 'true' : 'false');
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-states] [data-state]'), function (b) {
      b.setAttribute('aria-pressed', b.dataset.state === s.state ? 'true' : 'false');
    });

    if (s.state === 'loading') { el.innerHTML = '<h2 class="sr-only-title">' + meta.label + '</h2>' + U.skeleton(meta.label + ' analytics'); return; }
    if (s.state === 'empty') { el.innerHTML = '<h2 class="sr-only-title">' + meta.label + '</h2>' + U.emptyView(tab, meta); return; }
    if (s.state === 'error') {
      el.innerHTML = '<h2 class="sr-only-title">' + meta.label + '</h2>' +
        U.error('Analytics series could not be loaded', 'The ' + meta.label.toLowerCase() + ' series returned an error. Nothing is displayed rather than stale numbers.', NL.endpointFor(tab));
      var f = el.querySelector('[data-error-focus]'); if (f) f.focus();
      return;
    }

    var body = '';
    if (tab === 'projects') body += U.degraded('GET /api/dashboard/projects');
    body += B.alerts(B.tabAlerts(tab), 'Before you read the table');
    body += readout(tab, s, ser);
    body += '<div class="charts-drawer"><div class="panel-head"><div><div class="panel-title">Evidence</div>' +
      '<div class="panel-sub">The same window, drawn — ' + ser.filled + ' of ' + ser.count + ' buckets carry a value</div></div>' +
      '<div class="panel-tools"><span class="badge badge-neutral badge-mono hide-sm">' + esc(NL.endpointFor(tab)) + '</span></div></div>' +
      '<div class="panel-body">' + drawer(tab, ser, s) +
      '<div class="figure-caption"><span class="calibration">' + ser.count + ' points · ' + ser.empty + ' empty · zero-based axis</span><span class="mono hint">' + esc(NL.endpointFor(tab)) + '</span></div>' +
      '</div></div>';
    body += B.dictionary(tab) + B.exportNote(tab);
    el.innerHTML = body;

    /* row disclosures — scoped to this render, no global delegation needed */
    Array.prototype.forEach.call(el.querySelectorAll('[data-calc]'), function (btn) {
      btn.addEventListener('click', function () {
        var row = document.getElementById(btn.getAttribute('aria-controls'));
        var open = row.hidden;
        row.hidden = !open;
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        btn.firstChild.textContent = open ? '−' : '+';
        NL.announce((open ? 'Opened' : 'Closed') + ' computation');
      });
    });
  }

  document.getElementById('chrome').innerHTML = B.chrome(NL.state);
  NL.mount(render);
})();
