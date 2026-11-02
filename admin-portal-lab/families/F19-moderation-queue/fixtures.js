/* F19 revision 2 — source-reconciled fixtures.
   Default UI state is the captured empty moderation queue/history.
   Optional workflow demo reuses captured Nestlancer message text only.
   Flags/escalations in the demo are synthetic; no production moderation record is implied. */
(function () {
  'use strict';
  const GROUP = 'Payments ops — Razorpay settlement and webhooks';
  const groupContext = [
    { sender: 'Riya Kapoor', role: 'Admin', content: 'Karthik, Ananya — this thread is for settlement and webhook questions that overlap both engagements. Project files stay in each project.', timeLabel: 'Oct 5, 3:49 AM', reported: false },
    { sender: 'Karthik Menon', role: 'Client', content: 'Useful. Our UPI adapter is still in staging; I want the same retry rules Ananya’s reconciliation service already uses for duplicate captures.', timeLabel: 'Oct 5, 3:49 AM', reported: true },
    { sender: 'Ananya Iyer', role: 'Client', content: 'Happy to share the webhook idempotency notes. Duplicate payment refunds are the case we keep hitting on settlement day.', timeLabel: 'Oct 5, 3:49 AM', reported: false }
  ];
  const amitContext = [
    { sender: 'Riya Kapoor', role: 'Admin', content: 'Hi Amit — welcome to Nestlancer. Let us know if you have questions about your request.', timeLabel: 'Oct 5, 3:48 AM', reported: false },
    { sender: 'Amit Verma', role: 'Client', content: 'Thanks — we’re Verma Properties based in Delhi. Looking forward to working together.', timeLabel: 'Oct 5, 3:48 AM', reported: true }
  ];
  const cases = [
    {
      key: 'F19-DEMO-01', messageId: null, threadId: null, projectId: null, type: 'TEXT',
      chat: 'Group', threadTitle: GROUP, sender: 'Karthik Menon', senderRole: 'Client',
      content: 'Useful. Our UPI adapter is still in staging; I want the same retry rules Ananya’s reconciliation service already uses for duplicate captures.',
      timeLabel: 'Oct 5, 3:49 AM', provenance: '026-messages-thread-details.webp', status: 'Flagged', syntheticFlag: true,
      context: groupContext, contextNote: 'Captured group thread snippet. The flag itself is synthetic.'
    },
    {
      key: 'F19-DEMO-02', messageId: null, threadId: null, projectId: null, type: 'TEXT',
      chat: 'Group', threadTitle: GROUP, sender: 'Ananya Iyer', senderRole: 'Client',
      content: 'Happy to share the webhook idempotency notes. Duplicate payment refunds are the case we keep hitting on settlement day.',
      timeLabel: 'Oct 5, 3:49 AM', provenance: '026-messages-thread-details.webp', status: 'Escalated', syntheticFlag: true,
      context: groupContext.map(m => ({ ...m, reported: m.sender === 'Ananya Iyer' })), contextNote: 'Captured group thread snippet. Escalation is a synthetic preview state.'
    },
    {
      key: 'F19-DEMO-03', messageId: null, threadId: '01a10a2d-850b-7147-b023-efb5e17d8b73', projectId: null, type: 'TEXT',
      chat: 'Direct', threadTitle: 'Amit Verma', sender: 'Amit Verma', senderRole: 'Client',
      content: 'Thanks — we’re Verma Properties based in Delhi. Looking forward to working together.',
      timeLabel: 'Oct 5, 3:48 AM', provenance: '162-messages-thread.html', status: 'Flagged', syntheticFlag: true,
      context: amitContext, contextNote: 'Captured direct thread. The flag itself is synthetic.'
    },
    {
      key: 'F19-DEMO-04', messageId: null, threadId: null, projectId: null, type: 'TEXT',
      chat: 'Direct', threadTitle: 'Sandeep Chopra', sender: 'Sandeep Chopra', senderRole: 'Client',
      content: 'Thanks — we’re Chopra Fleet Logistics based in Chandigarh. Looking forward to working together.',
      timeLabel: '25 days ago · captured inbox', provenance: '85-messages-index.html / 168-messages-inbox.html', status: 'Flagged', syntheticFlag: true,
      context: null, contextNote: 'Captured inbox preview only; the full thread was not opened in this source.'
    },
    {
      key: 'F19-DEMO-05', messageId: null, threadId: null, projectId: null, type: 'TEXT',
      chat: 'Direct', threadTitle: 'Ananya Iyer', sender: 'Ananya Iyer', senderRole: 'Client',
      content: 'Thanks. Our finance team confirmed the duplicate NEFT on their end too. Replay UI remains the priority for month-end.',
      timeLabel: '25 days ago · captured inbox', provenance: '168-messages-inbox.html', status: 'Flagged', syntheticFlag: true,
      context: null, contextNote: 'Captured inbox preview only; the full thread was not opened in this source.'
    },
    {
      key: 'F19-DEMO-06', messageId: null, threadId: null, projectId: null, type: 'TEXT',
      chat: 'Direct', threadTitle: 'Priya Nair', sender: 'Priya Nair', senderRole: 'Client',
      content: 'Understood. Subtitles stay in the current milestone. I’ll confirm the revised quote in writing before we invoice the next installment.',
      timeLabel: '25 days ago · captured inbox', provenance: '168-messages-inbox.html', status: 'Flagged', syntheticFlag: true,
      context: null, contextNote: 'Captured inbox preview only; the full thread was not opened in this source.'
    }
  ];
  const source = {
    h1: 'Moderation',
    description: 'Review flagged chats, escalate or remove them, and restore from history when needed.',
    cards: [
      { label: 'Queue', sub: 'Nothing flagged right now', drill: 'all' },
      { label: 'Escalated', sub: 'Blurred in chat for senior review', drill: 'escalated' },
      { label: 'Project chats', sub: 'From client delivery threads', drill: 'project' }
    ],
    queueSearch: 'Search message, sender, project, chat…',
    historySearch: 'Search history content, actors, chats…',
    queueEmptyTitle: 'No flagged messages in the queue',
    queueEmptyBody: 'Items appear here when a user or admin flags a message in project, direct, or group chat.',
    queueFooter: 'Showing 0 of 0 flagged messages',
    historyEmpty: 'No moderation history yet.',
    historyFooter: '0 moderation history events'
  };
  const demoNote = 'Workflow demo: captured Nestlancer message text with synthetic flags. No production moderation record, reporter, reason or audit event is implied.';
  window.F19Data = { source, cases, history: [], demoNote };
})();
