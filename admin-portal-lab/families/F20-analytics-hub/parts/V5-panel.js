(function () {
  'use strict';
  /* V5 · Choreograph
     Range → read → evidence → export. A three-beat stage: the headline verdict, the evidence
     that produced it, and an exportable receipt that repeats every caveat with the file. */
  var NL = window.NL, D = NL.data, T = NL.tie, U = NL.ui, B = NL.blocks;
  var esc = NL.esc, inr = NL.inr, int = NL.int, pct = NL.pct;

  function beats(tab, s, ser) {
    if (tab === 'revenue') {
      return [
        { t: 'Read', h: 'One completed payment of ' + inr(D.revenue.total) + ' carries the entire window', d: 'The three categories tie out exactly, and ' + ser.empty + ' of ' + ser.count + ' buckets are empty. The trend shown on the production page cannot be verified.' },
        { t: 'Evidence', h: ser.filled + ' of ' + ser.count + ' buckets carry data', d: 'The line is drawn flat at zero with a single spike — the only shape the capture supports. No smoothing or comparison series is invented.' },
        { t: 'Export', h: 'A CSV with the caveats attached', d: 'The download repeats the view, range, endpoint, capture time and row count so the file cannot drift from the page.' }
      ];
    }
    if (tab === 'users') {
      return [
        { t: 'Read', h: 'Total, active and new-this-month all read ' + int(D.users.total), d: 'Roles tie out (33 user + 1 admin), but the identical triple is a known counting bug in report C16, so no growth claim is made.' },
        { t: 'Evidence', h: 'One bar carries all ' + int(D.users.total) + ' users on ' + D.users.barDate, d: 'With a single populated bucket the chart is a bar, not a line — a trend cannot be inferred from one measurement.' },
        { t: 'Export', h: 'Every caveat travels with the file', d: 'The CSV manifest names the counting check so a recipient cannot mistake the number for verified growth.' }
      ];
    }
    if (tab === 'projects') {
      return [
        { t: 'Read', h: '14 of 18 projects sit in a counted state', d: '4 projects have no captured status, and the lifecycle endpoint is failing in production, so the split is labelled 14 of 18.' },
        { t: 'Evidence', h: '4 active · 10 completed · 0 on hold · 0 cancelled', d: 'On-time rate is 100% of the 10 completions and average completion reads 0 days because no completion dates were recorded.' },
        { t: 'Export', h: 'The gap is exported, not hidden', d: 'The CSV includes the uncounted remainder and the degraded-endpoint note.' }
      ];
    }
    return [
      { t: 'Read', h: '46 requests · 43.9% conversion · 13 in the open pipeline', d: 'Statuses and categories both sum to 46. Conversion is 18 ÷ 41 because the 5 drafts are excluded from the denominator.' },
      { t: 'Evidence', h: 'Two days carry the whole request series', d: '36 on 10-05 and 10 on 10-06. The remaining ' + ser.empty + ' buckets are gaps; “0 min response” means no responses were recorded.' },
      { t: 'Export', h: 'Both denominators ship with the file', d: 'The CSV repeats 18 ÷ 41 and 18 ÷ 36 so the two rates cannot be confused after export.' }
    ];
  }

  function receipt(tab, s, ser) {
    return '<div class="receipt"><div class="rc-head">' + U.icon('down') + '<span>Export receipt</span></div>' +
      '<dl class="rc-list">' +
      '<dt>View</dt><dd>' + esc(tab) + ' · ' + esc(s.range) + ' → ' + esc(NL.period()) + '</dd>' +
      '<dt>Endpoint</dt><dd class="mono">' + esc(NL.endpointFor(tab)) + '</dd>' +
      '<dt>Captured</dt><dd class="mono">' + esc(D.captured) + '</dd>' +
      '<dt>Rows</dt><dd>' + (tab === 'revenue' ? D.revenue.byCategory.length : tab === 'users' ? 5 : tab === 'projects' ? 5 : D.requests.byStatus.length) + ' breakdown rows + ' + ser.count + ' series buckets</dd>' +
      '<dt>Caveats</dt><dd>' + B.tabAlerts(tab).length + ' open — listed in the manifest header</dd>' +
      '</dl>' +
      '<button class="btn btn-primary btn-block" data-csv>' + U.icon('down') + 'Download CSV + manifest</button>' +
      '<p class="rc-note">Demo build: the file is generated in the page. No request is made.</p></div>';
  }

  function evidence(tab, ser, s) {
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
      return '<figure class="chart-figure">' + NL.charts.donut([{ name: 'ACTIVE', value: D.projects.active }, { name: 'COMPLETED', value: D.projects.completed }],
        { id: 'prj-chart', title: 'Project statuses — 4 active, 10 completed', desc: 'Donut of counted projects; 4 of 18 uncounted.', centre: String(T.projectsCounted), centreLabel: 'counted of 18' }) + '</figure>';
    }
    return '<figure class="chart-figure">' + NL.charts.line(ser, {
      id: tab + '-stage-chart', title: ser.filled + ' of ' + ser.count + ' buckets carry data',
      desc: 'Only evidenced buckets are drawn; the rest are gaps.', yLabel: 'y-axis: ' + (tab === 'revenue' ? '₹' : tab) + ' per bucket', unit: tab === 'revenue' ? '₹' : ''
    }) + '</figure>';
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

    var b3 = beats(tab, s, ser);
    var body = '<nav class="chapter" aria-label="Reading order"><ol>' +
      '<li><a class="ch on" href="#stage-read" aria-current="true">1 · Read</a></li>' +
      '<li><a class="ch" href="#stage-evidence">2 · Evidence</a></li>' +
      '<li><a class="ch" href="#stage-export">3 · Export</a></li></ol></nav>';

    if (tab === 'projects') body += U.degraded('GET /api/dashboard/projects');
    body += B.alerts(B.tabAlerts(tab), 'What this reading rests on');

    body += '<div class="chapter-body"><div class="stage">' +
      '<section class="stage-read" id="stage-read"><p class="eyebrow">' + esc(meta.label) + ' · ' + esc(s.range) + ' → ' + esc(NL.period()) + '</p>' +
      '<h2 class="stage-verdict">' + b3[0].h + '</h2>' +
      '<p class="stage-d">' + b3[0].d + '</p></section>' +
      '<section class="stage-panel" id="stage-evidence"><div class="stage-head"><h2>Evidence</h2>' +
      '<div class="board-tools"><span class="badge badge-neutral badge-mono">' + ser.filled + ' / ' + ser.count + '</span></div></div>' +
      '<figure class="stage-figure">' + evidence(tab, ser, s) + '</figure>' +
      '<div class="stage-foot"><span class="calibration">' + ser.count + ' points · ' + ser.empty + ' empty · zero-based axis</span>' +
      '<span class="mono">' + esc(NL.endpointFor(tab)) + '</span></div></section>' +
      '<section class="stage-panel"><div class="stage-head"><h2>Breakdown</h2>' +
      '<div class="board-tools"><button class="btn btn-sm btn-secondary" data-csv>' + U.icon('down') + 'CSV</button></div></div>' +
      '<div class="panel-body panel-body--tight">' + (tab === 'revenue'
        ? B.table({
          caption: 'Revenue by category — sums to the total.',
          head: '<th scope="col">Category</th><th scope="col" class="num">Amount</th><th scope="col" class="num">Share</th>',
          rows: D.revenue.byCategory.map(function (c) { return '<tr><th scope="row">' + esc(c.name) + '</th><td class="num">' + inr(c.amount) + '</td><td class="num share">' + pct(c.amount / D.revenue.total * 100) + '</td></tr>'; }).join(''),
          foot: '<tr><th scope="row">Total</th><td class="num">' + inr(T.revenueCatSum) + '</td><td class="num">100%</td></tr>'
        })
        : tab === 'users'
          ? B.table({
            caption: 'Role breakdown.',
            head: '<th scope="col">Metric</th><th scope="col" class="num">Value</th>',
            rows: [['Total', D.users.total], ['Active', D.users.active], ['New this month', D.users.newThisMonth], ['User', D.users.roles.User], ['Admin', D.users.roles.Admin]]
              .map(function (r) { return '<tr><th scope="row">' + r[0] + '</th><td class="num">' + int(r[1]) + '</td></tr>'; }).join('')
          })
          : tab === 'projects'
            ? B.table({
              caption: 'Status breakdown — counted states sum to 14.',
              head: '<th scope="col">Status</th><th scope="col" class="num">Count</th>',
              rows: [['ACTIVE', D.projects.active], ['COMPLETED', D.projects.completed], ['ON HOLD', D.projects.onHold], ['CANCELLED', D.projects.cancelled], ['Uncounted', T.projectsUncounted]]
                .map(function (r) { return '<tr><th scope="row">' + r[0] + '</th><td class="num">' + r[1] + '</td></tr>'; }).join('')
            })
            : B.table({
              caption: 'Requests by status — sums to 46.',
              head: '<th scope="col">Status</th><th scope="col" class="num">Count</th><th scope="col" class="num">Share</th>',
              rows: D.requests.byStatus.map(function (x) { return '<tr><th scope="row">' + esc(x.name) + '</th><td class="num">' + x.count + '</td><td class="num share">' + pct(x.count / D.requests.total * 100) + '</td></tr>'; }).join(''),
              foot: '<tr><th scope="row">Total</th><td class="num">' + T.statusSum + '</td><td class="num">100%</td></tr>'
            })) + '</div></section>' +
      '</div><aside class="stage-rail" id="stage-export">' + receipt(tab, s, ser) +
      '<div class="stage-panel"><div class="stage-head"><h2>Next</h2></div><div class="panel-body"><p class="stage-d" style="border:0;padding:0">' +
      'Requests, quotes and projects link back to their own families. Analytics stays a read-only surface — no write action is offered here.</p>' +
      '<p class="rc-note">Related: <a href="../../F08-requests-triage/V1/index.html">Requests triage</a> · <a href="../../F13-projects-board/V1/index.html">Projects board</a></p></div></div>' +
      '</aside></div>';
    body += B.dictionary(tab);
    el.innerHTML = body;
  }

  document.getElementById('chrome').innerHTML = B.chrome(NL.state);
  NL.mount(render);
})();
