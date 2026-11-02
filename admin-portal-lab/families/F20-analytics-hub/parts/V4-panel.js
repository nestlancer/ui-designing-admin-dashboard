(function () {
  'use strict';
  /* V4 · Dense board
     A compact bento for operators who live on this page: an attention strip wired to the real
     exceptions, a hero tile plus dense KPI tiles, the chart beside the breakdown, and a
     collapsible dictionary so the board still fits one dense screen. */
  var NL = window.NL, D = NL.data, T = NL.tie, U = NL.ui, B = NL.blocks;
  var esc = NL.esc, inr = NL.inr, int = NL.int, pct = NL.pct;

  function heroAndTiles(tab, s, ser) {
    var hero = '', tiles = [];
    if (tab === 'revenue') {
      hero = { k: D.revenue.totalLabel, v: inr(D.revenue.total), note: 'Ties out to the three categories · ' + ser.filled + ' of ' + ser.count + ' buckets carry it', chip: U.chip('neutral', 'INR'), series: ser.values };
      tiles = [
        { k: 'Period trend', v: '+100 <span class="trend-up">↑</span>', note: 'screenshot value · comparison undocumented' },
        { k: 'Completeness', v: ser.filled + ' / ' + ser.count, note: 'buckets with a payment' },
        { k: 'Latest bucket', v: inr(D.revenue.latest), note: 'footnote value' },
        { k: 'Range effect', v: String(D.rowCount[s.range]), note: 'buckets · totals unchanged' }
      ];
    } else if (tab === 'users') {
      hero = { k: 'Total users', v: int(D.users.total), note: 'roles tie out 33 + 1 · the three counters are identical', chip: U.chip('warning', 'C16', 'alert'), series: ser.values };
      tiles = [
        { k: 'Active', v: int(D.users.active), note: 'equals the total' },
        { k: 'New this month', v: int(D.users.newThisMonth), note: 'equals the total' },
        { k: 'By role', v: '33 · 1', note: 'user · admin' },
        { k: 'Completeness', v: ser.filled + ' / ' + ser.count, note: 'one bar of 34' }
      ];
    } else if (tab === 'projects') {
      hero = { k: 'Total projects', v: int(D.projects.total), note: T.projectsCounted + ' counted · ' + T.projectsUncounted + ' with no status', chip: U.chip('error', 'API failing', 'alert') };
      tiles = [
        { k: 'ACTIVE', v: String(D.projects.active), note: 'counted state' },
        { k: 'COMPLETED', v: String(D.projects.completed), note: 'counted state' },
        { k: 'On-time', v: D.projects.onTimeRate + '%', note: 'of 10 completions' },
        { k: 'Uncounted', v: String(T.projectsUncounted), note: 'no status captured' }
      ];
    } else {
      hero = { k: 'Total requests', v: int(D.requests.total), note: 'lifetime · statuses and categories both sum to it', chip: U.chip('neutral', 'lifetime'), series: ser.values };
      tiles = [
        { k: 'Conversion', v: D.requests.conversionRate + '%', note: '18 ÷ 41' },
        { k: 'Avg. response', v: D.requests.avgResponseMinutes + ' min', note: 'no responses recorded' },
        { k: 'Open pipeline', v: String(D.requests.openPipeline), note: '11 + 2 derived' },
        { k: 'Completeness', v: ser.filled + ' / ' + ser.count, note: 'two evidenced days' }
      ];
    }
    var out = '<div class="bento"><article class="tile tile--hero">' +
      '<div class="t-k">' + esc(hero.k) + ' ' + (hero.chip || '') + '</div>' +
      '<div class="t-v">' + hero.v + '</div>' +
      '<div class="t-note">' + hero.note + '</div>' +
      (hero.series ? '<div class="t-spark" aria-hidden="true">' + NL.charts.spark(hero.series) + '</div>' : '') +
      '</article>' +
      tiles.map(function (t) {
        return '<article class="tile tile--kpi"><div class="t-k">' + esc(t.k) + '</div><div class="t-v t-v--sm">' + t.v + '</div><div class="t-note">' + esc(t.note) + '</div></article>';
      }).join('') + '</div>';
    return out;
  }

  function chartBody(tab, ser, s) {
    if (s.mode === 'table') {
      return B.table({
        caption: 'Chart data — ' + ser.count + ' buckets, ' + ser.filled + ' with a value. Em dashes are missing buckets, not zero measurements.',
        head: '<th scope="col">Bucket</th><th scope="col" class="num">Value</th>',
        rows: ser.labels.map(function (l, i) {
          var v = ser.values[i];
          return '<tr><th scope="row" class="mono">' + l + '</th><td class="num">' + (v > 0 ? (tab === 'revenue' ? inr(v) : int(v)) : '—') + '</td></tr>';
        }).join('')
      });
    }
    if (tab === 'projects') {
      return '<figure class="chart-figure">' + NL.charts.donut([{ name: 'ACTIVE', value: D.projects.active }, { name: 'COMPLETED', value: D.projects.completed }],
        { id: 'prj-chart', title: 'Project statuses — 4 active, 10 completed', desc: 'Donut of counted projects; 4 of 18 uncounted.', centre: String(T.projectsCounted), centreLabel: 'counted of 18' }) + '</figure>';
    }
    return '<figure class="chart-figure">' + NL.charts.line(ser, {
      id: tab + '-board-chart', title: (tab === 'revenue' ? 'Revenue' : tab === 'users' ? 'New users' : 'New requests') + ' per bucket — ' + ser.filled + ' of ' + ser.count + ' carry data',
      desc: ser.filled + ' of ' + ser.count + ' buckets carry a value; the rest are gap-drawn.',
      yLabel: 'y-axis: ' + (tab === 'revenue' ? '₹' : tab) + ' per bucket', unit: tab === 'revenue' ? '₹' : ''
    }) + '</figure>';
  }

  function breakdown(tab) {
    if (tab === 'revenue') {
      return B.table({
        caption: 'Revenue by category — sums to the total.',
        head: '<th scope="col">Category</th><th scope="col" class="num">Amount</th>',
        rows: D.revenue.byCategory.map(function (c) { return '<tr><th scope="row">' + esc(c.name) + '</th><td class="num">' + inr(c.amount) + '</td></tr>'; }).join(''),
        foot: '<tr><th scope="row">Total</th><td class="num">' + inr(T.revenueCatSum) + '</td></tr>'
      });
    }
    if (tab === 'users') {
      return B.table({
        caption: 'Role breakdown.',
        head: '<th scope="col">Metric</th><th scope="col" class="num">Value</th>',
        rows: [['Total', D.users.total], ['Active', D.users.active], ['New this month', D.users.newThisMonth], ['User', D.users.roles.User], ['Admin', D.users.roles.Admin]]
          .map(function (r) { return '<tr><th scope="row">' + r[0] + '</th><td class="num">' + int(r[1]) + '</td></tr>'; }).join('')
      });
    }
    if (tab === 'projects') {
      return B.table({
        caption: 'Status breakdown — counted states sum to 14.',
        head: '<th scope="col">Status</th><th scope="col" class="num">Count</th>',
        rows: [['ACTIVE', D.projects.active], ['COMPLETED', D.projects.completed], ['ON HOLD', D.projects.onHold], ['CANCELLED', D.projects.cancelled], ['Uncounted', T.projectsUncounted]]
          .map(function (r) { return '<tr><th scope="row">' + r[0] + '</th><td class="num">' + r[1] + '</td></tr>'; }).join('')
      });
    }
    return B.table({
      caption: 'Requests by status — sums to 46.',
      head: '<th scope="col">Status</th><th scope="col" class="num">Count</th>',
      rows: D.requests.byStatus.map(function (s) { return '<tr><th scope="row">' + esc(s.name) + '</th><td class="num">' + s.count + '</td></tr>'; }).join(''),
      foot: '<tr><th scope="row">Total</th><td class="num">' + T.statusSum + '</td></tr>'
    });
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

    var items = B.tabAlerts(tab);
    var body = '<div class="board-head"><div><h2>' + esc(meta.section) + '</h2><p class="panel-sub">' + esc(meta.sub) + '</p></div>' +
      '<div class="board-tools">' + U.chip('neutral', s.range + ' → ' + NL.period(), 'cal') +
      '<span class="badge badge-neutral badge-mono">' + esc(NL.endpointFor(tab)) + '</span></div></div>';

    if (tab === 'projects') body += U.degraded('GET /api/dashboard/projects');

    /* attention strip — every item is a real exception, each jumps to its evidence */
    body += '<section class="attention" aria-label="Exceptions needing attention">' +
      '<h3 class="attention-h">' + U.icon('alert') + 'Attention · ' + items.length + ' open</h3>' +
      '<ul class="attention-list">' + items.map(function (i, idx) {
        return '<li><button class="att-item" type="button" data-att="' + idx + '"><span><strong>' + esc(i.text) + '</strong>' +
          '<span class="att-d">' + esc(i.sub) + '</span></span>' + U.icon('arrow') + '</button></li>';
      }).join('') + '</ul></section>';

    body += heroAndTiles(tab, s, ser);
    body += '<div class="board-grid"><section class="tile board-chart"><div class="panel-head"><div><div class="panel-title">' +
      (tab === 'revenue' ? 'Revenue per bucket' : tab === 'users' ? 'New users per bucket' : tab === 'projects' ? 'Lifecycle split' : 'New requests per bucket') +
      '</div><div class="panel-sub">' + ser.filled + ' of ' + ser.count + ' buckets carry data · ' + NL.period() + '</div></div></div>' +
      '<div class="panel-body">' + chartBody(tab, ser, s) +
      '<div class="figure-caption"><span class="calibration">' + ser.count + ' points · ' + ser.empty + ' empty · zero-based axis</span></div></div></section>' +
      '<section class="tile board-table" id="breakdown"><div class="panel-head"><div><div class="panel-title">Breakdown</div>' +
      '<div class="panel-sub">Captured columns</div></div><div class="panel-tools"><button class="btn btn-sm btn-secondary" data-csv>' + U.icon('down') + 'CSV</button></div></div>' +
      '<div class="panel-body panel-body--tight">' + breakdown(tab) + '</div></section></div>';

    body += '<details class="board-dict"><summary>' + U.icon('list') + 'Metric dictionary · ' + (B.DICT[tab] || []).length + ' metrics</summary>' +
      B.dictionary(tab) + '</details>';
    body += B.exportNote(tab);
    el.innerHTML = body;

    Array.prototype.forEach.call(el.querySelectorAll('[data-att]'), function (btn) {
      btn.addEventListener('click', function () {
        var row = el.querySelector('.drivers, .bento');
        var target = btn.dataset.att === '0' ? el.querySelector('.board-chart') : el.querySelector('.board-table');
        if (target) { target.scrollIntoView({ block: 'center', behavior: 'smooth' }); target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
        NL.announce('Jumped to the evidence for this exception.');
      });
    });
  }

  document.getElementById('chrome').innerHTML = B.chrome(NL.state);
  NL.mount(render);
})();
