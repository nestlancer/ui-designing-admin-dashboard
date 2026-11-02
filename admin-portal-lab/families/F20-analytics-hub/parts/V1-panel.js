(function () {
  'use strict';
  var NL = window.NL, D = NL.data, T = NL.tie, U = NL.ui, B = NL.blocks;
  var esc = NL.esc, inr = NL.inr, int = NL.int, pct = NL.pct;

  /* shared detail tables -------------------------------------------------- */
  function breakdownTable(tab, ser) {
    if (tab === 'revenue') {
      return B.table({
        caption: 'Revenue by category — the three categories sum to the completed-payments total.',
        head: '<th scope="col">Category</th><th scope="col" class="num">Amount</th><th scope="col" class="num">Share</th>',
        rows: D.revenue.byCategory.map(function (c) {
          return '<tr><th scope="row" class="cat">' + esc(c.name) + '</th><td class="num">' + inr(c.amount) +
            '</td><td class="num share">' + pct(c.amount / D.revenue.total * 100) + '</td></tr>';
        }).join(''),
        foot: '<tr><th scope="row">Total (ties to the headline)</th><td class="num">' + inr(T.revenueCatSum) + '</td><td class="num">100%</td></tr>'
      });
    }
    if (tab === 'users') {
      return B.table({
        caption: 'Role breakdown — METRIC / VALUE as captured; the three headline counters are identical.',
        head: '<th scope="col">Metric</th><th scope="col" class="num">Value</th><th scope="col">Note</th>',
        rows: [['Total users', D.users.total, 'captured'], ['Active', D.users.active, 'equals total — C16 open'],
          ['New this month', D.users.newThisMonth, 'equals total — C16 open']]
          .map(function (r) { return '<tr><th scope="row">' + r[0] + '</th><td class="num">' + int(r[1]) + '</td><td class="share">' + r[2] + '</td></tr>'; }).join('') +
          '<tr><th scope="row">By role</th><td class="num">User: ' + D.users.roles.User + ' · Admin: ' + D.users.roles.Admin + '</td><td class="share">sums to 34</td></tr>',
        foot: '<tr><th scope="row">Check</th><td class="num">33 + 1 = 34 ✓</td><td class="share">roles tie out</td></tr>'
      });
    }
    if (tab === 'projects') {
      return B.table({
        caption: 'Status breakdown — counted states sum to 14 while the header total is 18.',
        head: '<th scope="col">Status</th><th scope="col" class="num">Count</th><th scope="col">Basis</th>',
        rows: [['ACTIVE', D.projects.active], ['COMPLETED', D.projects.completed], ['ON HOLD', D.projects.onHold], ['CANCELLED', D.projects.cancelled]]
          .map(function (r) { return '<tr><th scope="row">' + r[0] + '</th><td class="num">' + r[1] + '</td><td class="share">counted state</td></tr>'; }).join('') +
          '<tr><th scope="row">Avg. completion (days)</th><td class="num">' + D.projects.avgCompletion + '</td><td class="share">no completion date recorded</td></tr>' +
          '<tr><th scope="row">On-time rate</th><td class="num">' + D.projects.onTimeRate + '%</td><td class="share">of the 10 counted completions</td></tr>',
        foot: '<tr><th scope="row">Uncounted</th><td class="num">' + T.projectsUncounted + '</td><td class="share">18 − 14, no status captured</td></tr>'
      });
    }
    return B.table({
      caption: 'Requests by status — sums to the 46-request total.',
      head: '<th scope="col">Status</th><th scope="col" class="num">Count</th><th scope="col" class="num">Share</th>',
      rows: D.requests.byStatus.map(function (s) {
        return '<tr><th scope="row">' + esc(s.name) + '</th><td class="num">' + s.count + '</td><td class="num share">' +
          pct(s.count / D.requests.total * 100) + '</td></tr>';
      }).join(''),
      foot: '<tr><th scope="row">Total</th><td class="num">' + T.statusSum + '</td><td class="num">100%</td></tr>'
    });
  }

  function seriesTable(tab, ser) {
    var rows = ser.labels.map(function (l, i) {
      var v = ser.values[i];
      return '<tr><th scope="row" class="mono">' + l + '</th><td class="num">' +
        (v > 0 ? (tab === 'revenue' ? inr(v) : int(v)) : '—') +
        '</td><td class="share">' + (v > 0 ? 'value recorded' : 'no data in bucket') + '</td></tr>';
    }).join('');
    return B.table({
      caption: 'Chart data — ' + ser.count + ' buckets, ' + ser.filled + ' with a value. Em dashes are missing buckets, not zero measurements.',
      head: '<th scope="col">Bucket</th><th scope="col" class="num">' + (tab === 'revenue' ? 'Revenue' : 'New ' + tab) + '</th><th scope="col">Note</th>',
      rows: rows
    });
  }

  function completeness(ser) {
    return U.chip(ser.filled === 0 ? 'error' : 'warning', ser.filled + ' of ' + ser.count + ' buckets carry data', 'alert');
  }

  /* per-tab model: north star, drivers, chart copy ------------------------- */
  function model(tab, s, ser) {
    if (tab === 'revenue') {
      return {
        ns: {
          label: D.revenue.totalLabel, unit: 'INR', value: inr(D.revenue.total),
          flag: U.chip('neutral', 'INR'),
          read: 'Three categories account for <b>' + inr(T.revenueCatSum) + '</b> — the headline ties out exactly. ' +
            'The period trend is <b>not verifiable</b>: the screenshot captured <span class="mono">+100 up</span> while the DOM captured <span class="mono">−100 down</span> for the same window.',
          delta: U.chip('warning', 'trend conflict: shot +100 up / DOM −100 down', 'alert'),
          series: ser, window: NL.period() + ' · ' + ser.count + ' buckets · 1 with a payment'
        },
        drivers: [
          { label: 'Period trend', value: '+100 <span class="trend-up">↑</span>', basis: 'screenshot value · comparison period not documented', flag: U.chip('warning', 'unverified', 'alert') },
          { label: 'Series completeness', value: ser.filled + ' / ' + ser.count, basis: 'buckets carrying a completed payment', flag: completeness(ser) },
          { label: 'Latest bucket', value: inr(D.revenue.latest), basis: 'captured footnote value' },
          { label: 'Range effect', value: String(D.rowCount[s.range]), basis: 'buckets · totals keep the captured value across all four ranges' }
        ],
        chartTitle: 'Revenue over time', chartSub: 'Completed payments bucketed per day for the selected range',
        takeaway: 'The whole window rests on <b>one</b> completed payment. The line is drawn flat at zero with a single spike because that is the only shape the capture supports — no smoothing, no rolling average, no comparison series.',
        footLeft: ser.count + ' points · ' + ser.empty + ' empty · latest ' + inr(D.revenue.latest) + ' · zero-based axis',
        detailTitle: 'Revenue by category', detailSub: 'Captured categories, unmodified — the three sum to the headline figure.'
      };
    }
    if (tab === 'users') {
      return {
        ns: {
          label: 'Total users', unit: 'users', value: int(D.users.total),
          flag: U.chip(T.usersTripleEqual ? 'warning' : 'neutral', T.usersTripleEqual ? 'unverified: total = active = new' : 'verified', T.usersTripleEqual ? 'alert' : 'check'),
          read: 'Roles tie out (<b>33 user + 1 admin = 34</b>), but <b>total, active and new-this-month are all 34</b>. Report C16 flags that as a counting bug, so the figure is shown as captured and marked unverified rather than presented as growth.',
          delta: U.chip('warning', 'C16 counting check open', 'alert'),
          series: ser, window: NL.period() + ' · ' + ser.count + ' buckets · 1 with a new user'
        },
        drivers: [
          { label: 'Active', value: int(D.users.active), basis: 'no “active” definition documented' },
          { label: 'New this month', value: int(D.users.newThisMonth), basis: 'equals the total — C16 open' },
          { label: 'By role', value: '33 · 1', basis: 'user · admin — sums to 34' },
          { label: 'Series completeness', value: ser.filled + ' / ' + ser.count, basis: 'buckets with a new user', flag: completeness(ser) }
        ],
        chartTitle: 'User activity', chartSub: 'New users per bucket — one bucket carries the captured 34',
        takeaway: 'One bar at <span class="mono">' + D.users.barDate + '</span> carries all 34 new users; the other ' + (ser.count - 1) + ' buckets are empty. A “trend” cannot be read from a single bar, so the card says so instead of drawing a line.',
        footLeft: ser.count + ' buckets · 1 labelled bar · captured x-ticks 09-27 → 10-25',
        detailTitle: 'Role breakdown', detailSub: 'Captured columns, unmodified — the role split is the only verified decomposition.'
      };
    }
    if (tab === 'projects') {
      return {
        ns: {
          label: 'Total projects', unit: 'projects', value: int(D.projects.total),
          flag: U.chip('error', T.projectsUncounted + ' uncounted', 'alert'),
          read: 'Only <b>14 of 18</b> projects sit in a counted state (4 active + 10 completed). The remaining <b>4</b> have no captured status, so every chart on this tab totals 14 and says which 4 it cannot see.',
          delta: U.chip('error', 'projects API failing in production', 'alert'),
          series: ser, window: NL.period() + ' · lifecycle snapshot, not a time series'
        },
        drivers: [
          { label: 'ACTIVE', value: String(D.projects.active), basis: 'counted state' },
          { label: 'COMPLETED', value: String(D.projects.completed), basis: 'counted state' },
          { label: 'ON HOLD', value: String(D.projects.onHold), basis: 'zero is a value, not missing' },
          { label: 'Reconciliation', value: T.projectsCounted + ' / ' + D.projects.total, basis: T.projectsUncounted + ' projects with no status captured', flag: U.chip('error', 'gap', 'alert') }
        ],
        chartTitle: 'Project statuses', chartSub: 'Distribution across the lifecycle states that were captured',
        takeaway: 'Counted statuses sum to <b>14</b>, not 18. The chart is labelled with the counted figure so a viewer never reads 18 from a 14-slice picture, and each count is printed beside it.',
        footLeft: 'active 4 · completed 10 · counted ' + T.projectsCounted + ' of ' + D.projects.total + ' · ' + T.projectsUncounted + ' uncounted',
        detailTitle: 'Status breakdown', detailSub: 'Captured lifecycle counters plus the reconciliation gap.'
      };
    }
    return {
      ns: {
        label: 'Total requests', unit: 'requests', value: int(D.requests.total),
        flag: U.chip('neutral', 'lifetime — endpoint takes no period', 'cal'),
        read: 'Statuses sum to <b>46</b> and categories sum to <b>46</b> ✓. Conversion is <b>18 ÷ 41 = 43.9%</b> — the denominator excludes the 5 drafts; <span class="mono">18 ÷ 46</span> would read 39.1%, so the basis is printed under every rate.',
        delta: U.chip('warning', 'avg. response 0 min = no responses recorded', 'alert'),
        series: ser, window: 'lifetime · ' + ser.count + ' buckets in the 30d series'
      },
      drivers: [
        { label: 'Conversion rate', value: D.requests.conversionRate + '%', basis: '18 ÷ 41 · drafts excluded', flag: U.chip('neutral', 'basis printed', 'cal') },
        { label: 'Avg. response time', value: D.requests.avgResponseMinutes + ' min', basis: 'absence of responses, not a speed' },
        { label: 'Open pipeline', value: String(D.requests.openPipeline), basis: 'derived: 11 submitted + 2 under review' },
        { label: 'Series completeness', value: ser.filled + ' / ' + ser.count, basis: 'buckets with a new request', flag: completeness(ser) }
      ],
      chartTitle: 'Request volume', chartSub: 'New requests per day — only two days are evidenced',
      takeaway: 'Two bars carry the whole series (<span class="mono">36</span> on 10-05, <span class="mono">10</span> on 10-06). The other ' + (ser.count - 2) + ' buckets are drawn empty, never interpolated into a trend.',
      footLeft: ser.count + ' buckets · 2 labelled bars · x-ticks limited to captured days',
      detailTitle: 'By status', detailSub: 'Statuses sum to the request total; categories follow in the second table.'
    };
  }

  function chart(tab, ser, s) {
    if (s.mode === 'table') return seriesTable(tab, ser);
    if (tab === 'revenue') {
      return '<figure class="chart-figure">' + NL.charts.line(ser, {
        id: 'rev-chart', title: 'Revenue over time — ' + ser.count + ' buckets, one completed payment',
        desc: 'Flat line at zero with a single spike of ' + inr(D.revenue.total) + '. ' + ser.empty + ' of ' + ser.count + ' buckets are empty.',
        yLabel: 'y-axis: ₹ per bucket (zero-based)', unit: '₹'
      }) + '</figure>';
    }
    if (tab === 'users') {
      return '<figure class="chart-figure">' + NL.charts.bars(ser, {
        id: 'usr-chart', title: 'New users over time — one bucket of ' + ser.count + ' carries the captured 34',
        desc: 'Bar chart of new users per bucket. Only 1 of ' + ser.count + ' buckets has a value (34).', yLabel: 'y-axis: new users per bucket'
      }) + '</figure>';
    }
    if (tab === 'projects') {
      var segs = [{ name: 'ACTIVE', value: D.projects.active }, { name: 'COMPLETED', value: D.projects.completed }];
      return '<figure class="chart-figure">' + NL.charts.donut(segs, {
        id: 'prj-chart', title: 'Project statuses — 4 active, 10 completed',
        desc: 'Donut of counted projects. 14 of 18 projects are counted; 4 have no captured status.',
        centre: String(T.projectsCounted), centreLabel: 'counted of 18'
      }) + '</figure>' +
        '<div class="chart-legend"><span class="key"><span class="swatch"></span>ACTIVE: ' + D.projects.active + '</span>' +
        '<span class="key"><span class="swatch s2"></span>COMPLETED: ' + D.projects.completed + '</span>' +
        '<span class="key hint">second hue removed (C5) — both series use the teal ramp</span></div>';
    }
    return '<figure class="chart-figure">' + NL.charts.bars(ser, {
      id: 'req-chart', title: 'Request volume — 36 on 10-05 and 10 on 10-06',
      desc: 'Bar chart. Only two buckets carry values: 36 and 10. The remaining ' + (ser.count - 2) + ' buckets are empty.',
      yLabel: 'y-axis: new requests per day'
    }) + '</figure>';
  }

  /* secondary panels ------------------------------------------------------ */
  function extraPanels(tab) {
    if (tab !== 'requests') return '';
    return B.chartCard({
      title: 'By category', sub: 'Captured categories and counts — a second decomposition of the same 46',
      body: B.table({
        caption: 'Requests by category — sums to 46.',
        head: '<th scope="col">Category</th><th scope="col" class="num">Count</th><th scope="col" class="num">Share</th>',
        rows: D.requests.byCategory.map(function (c) {
          return '<tr><th scope="row" class="cat">' + esc(c.name) + '</th><td class="num">' + c.count + '</td><td class="num share">' + pct(c.count / D.requests.total * 100) + '</td></tr>';
        }).join(''),
        foot: '<tr><th scope="row">Total</th><td class="num">' + T.categorySum + '</td><td class="num">100%</td></tr>'
      }),
      footLeft: '6 categories · sums to ' + T.categorySum, footRight: 'GET /api/v1/admin/requests/stats'
    }) + B.chartCard({
      title: 'Quote conversion', sub: 'Quote counters are lifetime too — no period parameter is documented',
      body: '<div class="strip strip-flat">' +
        '<div class="cell"><div class="cell-label">Total quotes</div><div class="cell-value">' + D.requests.quotes.total + '</div><div class="cell-sub">captured</div></div>' +
        '<div class="cell"><div class="cell-label">Accepted value</div><div class="cell-value">' + inr(D.requests.quotes.acceptedValue) + '</div><div class="cell-sub">INR</div></div>' +
        '<div class="cell"><div class="cell-label">Acceptance rate</div><div class="cell-value">' + D.requests.quotes.acceptanceRate + '%</div><div class="cell-sub">18 ÷ 36</div></div>' +
        '<div class="cell"><div class="cell-label">Request conversion</div><div class="cell-value">' + D.requests.quotes.requestConversion + '%</div><div class="cell-sub">18 ÷ 41</div></div>' +
        '</div>',
      footLeft: 'two rates, two different denominators — both printed', footRight: 'GET /api/v1/admin/quotes/stats'
    });
  }

  /* render ---------------------------------------------------------------- */
  function render(s) {
    var tab = s.tab, ser = NL.series(tab, s.range), el = document.getElementById('panel');
    var meta = D.tabs.filter(function (t) { return t.id === tab; })[0];
    el.setAttribute('aria-labelledby', 'tab-' + tab);

    /* chrome reflects state (tabs, ranges, chart/table, demo state) */
    Array.prototype.forEach.call(document.querySelectorAll('[data-tabs] [role="tab"]'), function (b) {
      var on = b.dataset.tab === tab;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-ranges] [role="radio"]'), function (b) {
      var on = b.dataset.range === s.range;
      b.setAttribute('aria-checked', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-view]'), function (b) {
      b.setAttribute('aria-pressed', b.dataset.view === s.mode ? 'true' : 'false');
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-states] [data-state]'), function (b) {
      b.setAttribute('aria-pressed', b.dataset.state === s.state ? 'true' : 'false');
    });

    if (s.state === 'loading') {
      el.innerHTML = '<h2 class="sr-only-title">' + meta.label + '</h2>' + U.skeleton(meta.label + ' analytics');
      return;
    }
    if (s.state === 'empty') { el.innerHTML = '<h2 class="sr-only-title">' + meta.label + '</h2>' + U.emptyView(tab, meta); return; }
    if (s.state === 'error') {
      el.innerHTML = '<h2 class="sr-only-title">' + meta.label + '</h2>' +
        U.error('Analytics series could not be loaded', 'The ' + meta.label.toLowerCase() + ' series returned an error. Nothing is displayed rather than showing stale numbers.', NL.endpointFor(tab));
      var f = el.querySelector('[data-error-focus]'); if (f) f.focus();
      return;
    }

    var m = model(tab, s, ser);
    var read = '';
    if (tab === 'projects') read += U.degraded('GET /api/dashboard/projects');
    read += B.alerts(B.tabAlerts(tab), 'Read this before the numbers');
    read += B.northStar(m.ns);
    read += B.drivers(m.drivers);
    read += B.chartCard({
      title: m.chartTitle, sub: m.chartSub, takeaway: m.takeaway,
      tools: '<span class="badge badge-neutral badge-mono hide-sm">' + esc(NL.endpointFor(tab)) + '</span>',
      body: chart(tab, ser, s), footLeft: m.footLeft, footRight: NL.endpointFor(tab)
    });
    read += B.chartCard({
      title: m.detailTitle, sub: m.detailSub,
      tools: '<button class="btn btn-sm btn-secondary" data-csv>' + U.icon('down') + 'CSV</button>',
      body: breakdownTable(tab, ser), footLeft: 'columns exactly as captured · no derived column except share',
      footRight: NL.endpointFor(tab)
    });
    read += extraPanels(tab);

    el.innerHTML = '<div class="analytics-split">' +
      '<div class="read-col">' + read + B.dictionary(tab) + B.exportNote(tab) + '</div>' +
      B.healthRail(tab) + '</div>';
  }

  /* chrome is static between renders */
  document.getElementById('chrome').innerHTML = B.chrome(NL.state);
  NL.mount(render);
})();
