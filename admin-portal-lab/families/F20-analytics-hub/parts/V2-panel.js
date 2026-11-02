(function () {
  'use strict';
  /* V2 · Signal spine
     One shared time axis. Every tab opens with query-value cards that carry their own series
     background (the Datadog/ops-monitor pattern), the shared axis chart sits on the spine, and
     the rail docks the breakdown tables so the axis never moves as you change tab. */
  var NL = window.NL, D = NL.data, T = NL.tie, U = NL.ui, B = NL.blocks;
  var esc = NL.esc, inr = NL.inr, int = NL.int, pct = NL.pct;

  function qv(label, value, note, opt) {
    opt = opt || {};
    return '<article class="qv' + (opt.series ? ' qv--series' : '') + '">' +
      '<div class="qv-k">' + esc(label) + (opt.flag || '') + '</div>' +
      '<div class="qv-v">' + value + '</div>' +
      '<div class="qv-note">' + note + '</div>' +
      (opt.series ? '<div class="qv-bg" aria-hidden="true">' + NL.charts.spark(opt.series) + '</div>' : '') +
      '</article>';
  }

  function cards(tab, s, ser) {
    var out = '';
    if (tab === 'revenue') {
      out =
        qv(D.revenue.totalLabel, inr(D.revenue.total), 'Ties out to the three categories', { flag: U.chip('neutral', 'INR'), series: ser.values }) +
        qv('Period trend', '+100 <span class="trend-up">↑</span>', 'Screenshot value · comparison period not documented', { flag: U.chip('warning', 'unverified', 'alert') }) +
        qv('Series completeness', ser.filled + ' / ' + ser.count, 'Buckets carrying a completed payment', { flag: U.chip('warning', 'thin', 'alert') }) +
        qv('Latest bucket', inr(D.revenue.latest), 'Captured footnote value');
    } else if (tab === 'users') {
      out =
        qv('Total users', int(D.users.total), 'Roles tie out to 34', { flag: U.chip('warning', 'C16', 'alert'), series: ser.values }) +
        qv('Active', int(D.users.active), 'Equals the total — definition undocumented', { flag: U.chip('warning', 'unverified', 'alert') }) +
        qv('New this month', int(D.users.newThisMonth), 'Equals the total — counting check open') +
        qv('By role', '33 · 1', 'user · admin — sums to 34');
    } else if (tab === 'projects') {
      out =
        qv('Total projects', int(D.projects.total), T.projectsUncounted + ' projects have no counted status', { flag: U.chip('error', 'degraded', 'alert') }) +
        qv('ACTIVE', String(D.projects.active), 'Counted state') +
        qv('COMPLETED', String(D.projects.completed), 'Counted state') +
        qv('Reconciliation', T.projectsCounted + ' / ' + D.projects.total, 'Counted states sum to 14, not 18', { flag: U.chip('error', 'gap', 'alert') });
    } else {
      out =
        qv('Total requests', int(D.requests.total), 'Lifetime endpoint — no period parameter', { flag: U.chip('neutral', 'lifetime'), series: ser.values }) +
        qv('Conversion rate', D.requests.conversionRate + '%', '18 ÷ 41 · drafts excluded from the denominator', { flag: U.chip('neutral', 'basis') }) +
        qv('Avg. response time', D.requests.avgResponseMinutes + ' min', 'No responses recorded — an absence, not a speed', { flag: U.chip('warning', 'absence', 'alert') }) +
        qv('Open pipeline', String(D.requests.openPipeline), '11 submitted + 2 under review');
    }
    return '<div class="qv-grid">' + out + '</div>';
  }

  function spineChart(tab, ser, s) {
    if (s.mode === 'table') {
      return B.table({
        caption: 'Chart data — ' + ser.count + ' buckets, ' + ser.filled + ' with a value. Em dashes are missing buckets, not zero measurements.',
        head: '<th scope="col">Bucket</th><th scope="col" class="num">' + (tab === 'revenue' ? 'Revenue' : 'New ' + tab) + '</th><th scope="col">Note</th>',
        rows: ser.labels.map(function (l, i) {
          var v = ser.values[i];
          return '<tr><th scope="row" class="mono">' + l + '</th><td class="num">' + (v > 0 ? (tab === 'revenue' ? inr(v) : int(v)) : '—') +
            '</td><td class="share">' + (v > 0 ? 'value recorded' : 'no data in bucket') + '</td></tr>';
        }).join('')
      });
    }
    if (tab === 'projects') {
      return '<figure class="chart-figure">' + NL.charts.donut(
        [{ name: 'ACTIVE', value: D.projects.active }, { name: 'COMPLETED', value: D.projects.completed }],
        { id: 'prj-chart', title: 'Project statuses — 4 active, 10 completed', desc: 'Donut of counted projects. 14 of 18 are counted; 4 have no captured status.', centre: String(T.projectsCounted), centreLabel: 'counted of 18' }
      ) + '</figure>' +
        '<div class="chart-legend"><span class="key"><span class="swatch"></span>ACTIVE: ' + D.projects.active + '</span>' +
        '<span class="key"><span class="swatch s2"></span>COMPLETED: ' + D.projects.completed + '</span>' +
        '<span class="key hint">no time axis exists for this tab — the projects route is failing</span></div>';
    }
    return '<figure class="chart-figure">' + NL.charts.line(ser, {
      id: tab + '-spine', title: (tab === 'revenue' ? 'Revenue' : tab === 'users' ? 'New users' : 'New requests') + ' per bucket across the shared ' + s.range + ' axis',
      desc: ser.filled + ' of ' + ser.count + ' buckets carry a value; the rest are drawn empty rather than interpolated.',
      yLabel: 'y-axis: ' + (tab === 'revenue' ? '₹ per bucket' : tab + ' per bucket') + ' (zero-based)', unit: tab === 'revenue' ? '₹' : ''
    }) + '</figure>';
  }

  function rail(tab, ser) {
    var detail;
    if (tab === 'revenue') {
      detail = B.table({
        caption: 'Revenue by category — sums to the completed-payments total.',
        head: '<th scope="col">Category</th><th scope="col" class="num">Amount</th><th scope="col" class="num">Share</th>',
        rows: D.revenue.byCategory.map(function (c) {
          return '<tr><th scope="row">' + esc(c.name) + '</th><td class="num">' + inr(c.amount) + '</td><td class="num share">' + pct(c.amount / D.revenue.total * 100) + '</td></tr>';
        }).join(''),
        foot: '<tr><th scope="row">Total</th><td class="num">' + inr(T.revenueCatSum) + '</td><td class="num">100%</td></tr>'
      });
    } else if (tab === 'users') {
      detail = B.table({
        caption: 'Role breakdown — METRIC / VALUE as captured.',
        head: '<th scope="col">Metric</th><th scope="col" class="num">Value</th>',
        rows: [['Total', D.users.total], ['Active', D.users.active], ['New this month', D.users.newThisMonth], ['User role', D.users.roles.User], ['Admin role', D.users.roles.Admin]]
          .map(function (r) { return '<tr><th scope="row">' + r[0] + '</th><td class="num">' + int(r[1]) + '</td></tr>'; }).join(''),
        foot: '<tr><th scope="row">Check</th><td class="num">33 + 1 = 34 ✓</td></tr>'
      });
    } else if (tab === 'projects') {
      detail = B.table({
        caption: 'Status breakdown — counted states sum to 14, the header total is 18.',
        head: '<th scope="col">Status</th><th scope="col" class="num">Count</th>',
        rows: [['ACTIVE', D.projects.active], ['COMPLETED', D.projects.completed], ['ON HOLD', D.projects.onHold], ['CANCELLED', D.projects.cancelled], ['Uncounted', T.projectsUncounted]]
          .map(function (r) { return '<tr><th scope="row">' + r[0] + '</th><td class="num">' + r[1] + '</td></tr>'; }).join(''),
        foot: '<tr><th scope="row">Avg. / on-time</th><td class="num">' + D.projects.avgCompletion + ' d · ' + D.projects.onTimeRate + '%</td></tr>'
      });
    } else {
      detail = B.table({
        caption: 'Requests by status — sums to 46.',
        head: '<th scope="col">Status</th><th scope="col" class="num">Count</th><th scope="col" class="num">Share</th>',
        rows: D.requests.byStatus.map(function (s) {
          return '<tr><th scope="row">' + esc(s.name) + '</th><td class="num">' + s.count + '</td><td class="num share">' + pct(s.count / D.requests.total * 100) + '</td></tr>';
        }).join(''),
        foot: '<tr><th scope="row">Total</th><td class="num">' + T.statusSum + '</td><td class="num">100%</td></tr>'
      });
    }
    return '<div class="panel"><div class="panel-head"><div><div class="panel-title">Breakdown</div>' +
      '<div class="panel-sub">Docked beside the axis so the spine never moves</div></div>' +
      '<div class="panel-tools"><button class="btn btn-sm btn-secondary" data-csv>' + U.icon('down') + 'CSV</button></div></div>' +
      '<div class="panel-body panel-body--tight">' + detail + '</div></div>' +
      '<div class="panel"><div class="panel-head"><div><div class="panel-title">Axis coverage</div>' +
      '<div class="panel-sub">What the shared ' + NL.state.range + ' window actually contains</div></div></div>' +
      '<div class="panel-body"><div class="strip strip-flat">' +
      '<div class="cell"><div class="cell-label">Buckets</div><div class="cell-value">' + ser.count + '</div><div class="cell-sub">' + NL.period() + '</div></div>' +
      '<div class="cell"><div class="cell-label">With data</div><div class="cell-value">' + ser.filled + '</div><div class="cell-sub">' + ser.empty + ' empty</div></div>' +
      '</div><p class="spine-foot">Empty buckets are drawn as gaps, never as zero-measurements (Grafana “no data” rule).</p></div></div>';
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

    var body = '<div class="spine-head"><div><h2>' + esc(meta.section) + '</h2><p class="panel-sub">' + esc(meta.sub) + '</p></div>' +
      '<div class="sec-meta">' + U.chip('neutral', s.range + ' → ' + NL.period(), 'cal') +
      '<span class="badge badge-neutral badge-mono">' + esc(NL.endpointFor(tab)) + '</span></div></div>';

    if (tab === 'projects') body += U.degraded('GET /api/dashboard/projects');
    body += B.alerts(B.tabAlerts(tab), 'Before you read the spine');
    body += cards(tab, s, ser);
    body += '<div class="spine-grid"><div class="spine-main panel"><div class="panel-head"><div><div class="panel-title">' +
      (tab === 'revenue' ? 'Revenue per bucket' : tab === 'users' ? 'New users per bucket' : tab === 'projects' ? 'Lifecycle split' : 'New requests per bucket') +
      '</div><div class="panel-sub">Shared ' + s.range + ' axis · ' + ser.count + ' buckets · ' + ser.filled + ' with data</div></div>' +
      '<div class="panel-tools"><span class="badge badge-neutral badge-mono hide-sm">' + esc(NL.endpointFor(tab)) + '</span></div></div>' +
      '<div class="panel-body"><p class="takeaway">' + (
        tab === 'revenue' ? 'One completed payment inside ' + ser.count + ' buckets. The spine is drawn flat at zero because that is the only shape the capture supports.'
          : tab === 'users' ? 'One bucket carries all 34 new users. A trend cannot be read from a single bar.'
            : tab === 'projects' ? 'Counted statuses total 14, not the 18 in the header — the split is labelled with the counted figure.'
              : 'Two days carry the series; the other ' + ser.empty + ' buckets are gap-drawn, not interpolated.') + '</p>' +
      spineChart(tab, ser, s) +
      '<div class="figure-caption"><span class="calibration">' + ser.count + ' points · ' + ser.empty + ' empty · zero-based axis</span>' +
      '<span class="mono hint">' + esc(NL.endpointFor(tab)) + '</span></div></div></div>' +
      '<div class="spine-rail">' + rail(tab, ser) + '</div></div>';
    body += B.dictionary(tab) + B.exportNote(tab);

    el.innerHTML = body;
  }

  document.getElementById('chrome').innerHTML = B.chrome(NL.state);
  NL.mount(render);
})();
