/* F23 · Media Library — hand-transcribed fixtures.
   Provenance: S = production screenshot (Nestlancer-admin-screenshots/admin), D = DOM capture
   (nestlancer-admin-pages-html), A = backend-api-swagger/media.openapi.json contract.
   Nothing here is a live API response. Conflicts are preserved, not repaired. */
window.NL_MEDIA = (function () {
  var captured = 'Captured dataset · 30 Oct 2026 (screenshots + 7 DOM states)';
  var assets = [
    { key:'a01', name:'sandeep-chopra-gps-fleet-gps-fleet-staging-review.zip', mime:'application/zip', size:'353 B', type:'ARCHIVE', status:'READY', visibility:'PRIVATE', uploader:'Riya Kapoor', context:'project', src:'S 073/074/077' },
    { key:'a02', name:'sandeep-chopra-gps-fleet-gps-fleet-staging-spec.pdf', mime:'application/pdf', size:'20.3 KB', type:'DOCUMENT', status:'READY', visibility:'PRIVATE', uploader:'Riya Kapoor', context:'project', src:'S 074/077 (truncated)' },
    { key:'a03', name:'karthik-menon-ui-switch-ui-staging-review.zip', mime:'application/zip', size:'356 B', type:'ARCHIVE', status:'READY', visibility:'PRIVATE', uploader:'Riya Kapoor', context:'project', src:'S 074/077 (truncated)' },
    { key:'a04', name:'karthik-menon-ui-switch-milestone-spec.pdf', mime:'application/pdf', size:'20.3 KB', type:'DOCUMENT', status:'READY', visibility:'PRIVATE', uploader:'Riya Kapoor', context:'project', src:'S 074/077 (truncated)' },
    { key:'a05', name:'pooja-kulkarni-clinic-booking-final-spec.zip', mime:'application/zip', size:'319 B', type:'ARCHIVE', status:'READY', visibility:'PRIVATE', uploader:'Riya Kapoor', context:'project', src:'S 074/077 (truncated)' },
    { key:'a06', name:'pooja-kulkarni-clinic-booking-final-spec-handoff.pdf', mime:'application/pdf', size:'20.3 KB', type:'DOCUMENT', status:'READY', visibility:'PRIVATE', uploader:'Riya Kapoor', context:'project', src:'S 074/077 (truncated)' },
    { key:'a07', name:'suresh-iyer-mandi-app-nestlancer-app-v1.0.zip', mime:'application/zip', size:'319 B', type:'ARCHIVE', status:'READY', visibility:'PRIVATE', uploader:'Riya Kapoor', context:'project', src:'S 074/077 (truncated)' },
    { key:'a08', name:'suresh-iyer-mandi-app-milestone-final-handoff.pdf', mime:'application/pdf', size:'20.3 KB', type:'DOCUMENT', status:'READY', visibility:'PRIVATE', uploader:'Riya Kapoor', context:'project', src:'S 074/077 (truncated)' },
    { key:'a09', name:'neha-gupta-attendance-saas-final-spec.zip', mime:'application/zip', size:'319 B', type:'ARCHIVE', status:'READY', visibility:'PRIVATE', uploader:'Riya Kapoor', context:'project', src:'S 074/077 (truncated)' },
    { key:'a10', name:'neha-gupta-attendance-saas-final-spec-handoff.pdf', mime:'application/pdf', size:'20.3 KB', type:'DOCUMENT', status:'READY', visibility:'PRIVATE', uploader:'Riya Kapoor', context:'project', src:'S 074/077 (truncated)' },
    { key:'a11', name:'ananya-iyer-reconciliation-services-PB2-001-webhook-events.md', mime:'text/markdown', size:'431 B', type:'DOCUMENT', status:'READY', visibility:'PRIVATE', uploader:'Riya Kapoor', context:'project', src:'S 077 (truncated)' },
    { key:'a12', name:'sameera-patel-lending-page-suite-nestlancer-landing-pages-v1.0.zip', mime:'application/zip', size:'539 B', type:'ARCHIVE', status:'READY', visibility:'PRIVATE', uploader:'Riya Kapoor', context:'project', src:'S 077 (truncated)' }
  ];
  var detail = {
    key:'a01', name:'sandeep-chopra-gps-fleet-gps-fleet-staging-review.zip',
    preview:'No preview available', previewAction:'Open file',
    badges:['READY','PRIVATE','353 B'],
    mime:'application/zip',
    context:'project: 01a10a2e-4f64-740a-b4ca-0d9ab8dc1899',
    mediaId:'01a10a2e-6e69-71b8-ad19-25eb4e081e2f',
    uploader:'admin@nestlancer.com', uploaderAction:'View user',
    uploaded:'10/5/2026, 3:49:36 AM',
    description:'Receipt for milestone 2',
    visibility:'PRIVATE',
    referencesNote:'2 references',
    referencesWarning:'This file is linked elsewhere. Deleting without force may fail or break content.',
    references:[
      { label:'project', id:'01a10a2e-4f64-740a-b4ca-0d9ab8dc1899' },
      { label:'Deliverable', id:'01a10a2e-6efe-71e5-ab46-a7328d4436bc', note:'Staging build shared for progress review (work in progress; not final delivery).' }
    ],
    shares:'No active share links.',
    actions:['Download','Replace','Reprocess','Delete'],
    src:'S 073 · S 076',
    endpoints:{
      details:'GET /api/v1/admin/media/{id}',
      references:'GET /api/v1/admin/media/{id}/references',
      shares:'GET /api/v1/admin/media/{id}/shares',
      download:'GET /api/v1/admin/media/{id}/download',
      patch:'PATCH /api/v1/admin/media/{id}',
      share:'POST /api/v1/admin/media/{id}/share',
      reprocess:'POST /api/v1/admin/media/{id}/reprocess',
      replace:'POST /api/v1/admin/media/{id}/replace?force=',
      del:'DELETE /api/v1/admin/media/{id}?force='
    }
  };
  var analytics = {
    kpi:[
      { label:'Total files', value:'146', src:'D 122 / S 019' },
      { label:'Storage used', value:'19.3 MB', src:'D 122 / S 019' },
      { label:'Quarantined', value:'0', src:'D 122 / S 019 / S 021' },
      { label:'Processing', value:'0', src:'S 019' }
    ],
    types:[
      { mime:'image/jpeg', count:118, size:'19 MB' },
      { mime:'text/markdown', count:1, size:'431 B' },
      { mime:'application/zip', count:12, size:'4.2 KB' },
      { mime:'application/pdf', count:15, size:'304.5 KB' }
    ],
    uploads:'Uploads (last 30 days)',
    uploadsNote:'Baseline dashes and one prominent bar only. No labelled 30-day series was captured; no values are inferred.',
    maintenance:'Preview unattached private media (no context, excluding published site assets) before cleanup. Dry run does not delete anything.',
    actions:['Preview cleanup','Run cleanup'],
    endpoints:{ analytics:'GET /api/v1/admin/media/analytics', usage:'GET /api/v1/admin/media/storage-usage', orphans:'GET /api/v1/admin/media/orphans', cleanup:'POST /api/v1/admin/media/cleanup?dryRun=' }
  };
  var buckets = [
    { name:'Public', note:'Blog, portfolio, and other published-site assets', count:'118 files · 19 MB', src:'D 119 / S 018' },
    { name:'Private', note:'User-owned private storage', count:'28 files · 309.1 KB', src:'D 119 · S 018 reads 30.91 KB', conflict:true }
  ];
  var conflicts = [
    { title:'Private bucket size', a:'309.1 KB — DOM 119 / 120 / 177', b:'30.91 KB — shot 018', resolution:'Both printed; neither corrected.' },
    { title:'Browse file count', a:'"145 files · previews load as you scroll" — shot 074', b:'"Page 1 of 7 · 146 files" — shots 074 / 077', resolution:'Both printed; the 146 total ties to analytics and buckets.' },
    { title:'Header messages badge', a:'21 — DOM 119–122', b:'20 — DOM 177 / 178 / 187', resolution:'Capture-time drift; no current value claimed.' },
    { title:'Status vocabulary', a:'UI select: READY / PROCESSING / QUARANTINED / FAILED / UPLOADING', b:'Swagger adds PENDING', resolution:'UI labels frozen; spec enum documented in API-MAP only.' },
    { title:'"Display name" field', a:'Shot 076 form field', b:'AdminUpdateMediaDto has originalFilename', resolution:'Plausible mapping, unverified; no claim of a field name.' }
  ];
  var labels = {
    h1:'Media Library',
    subtitle:'Browse public and private storage, preview assets, and manage quarantine and analytics.',
    tabs:['Storage','Quarantine','Analytics'],
    browse:['All storage','Public library','Private'],
    upload:'Drag & drop to upload', uploadNote:'Images, documents, video, and archives', browseFiles:'Browse files',
    types:['All types','IMAGE','DOCUMENT','VIDEO','ARCHIVE'],
    sources:['All sources','Message attachments','Projects','Deliveries','Uploads only','Folders'],
    search:'Search filename, mime, or ID…',
    statuses:['All statuses','READY','PROCESSING','QUARANTINED','FAILED','UPLOADING'],
    sorts:['Newest','Oldest','Largest','Name A–Z'],
    viewAll:'View all files', backToFolders:'Back to folders', selectPage:'Select page',
    quarantineEmpty:'No quarantined media',
    quarantineNote:'Files flagged by security scanning will appear here for release, reprocess, or delete.',
    loading:'Loading…',
    pagination:'Page 1 of 7 · 146 files',
    browseCount:'145 files · previews load as you scroll',
    share:{ title:'Create share link', intro:'Describe why you are sharing sandeep-chopra-gps-fleet-gps-staging-review.zip. Each purpose gets its own link with a timeout — expired links are revoked automatically.', purpose:'Purpose / statement', placeholder:'e.g. Client preview for milestone 2 — expires after re…', timeout:'Link timeout', timeoutValue:'7 days — auto-revoke after expiry', password:'Password (optional)', passwordPlaceholder:'Enter a password, or leave blank', cancel:'Cancel', submit:'Create link' },
    metadata:{ fields:['Filename','Display name','Description','Visibility'], save:'Save metadata', cancel:'Cancel edit' },
    footer:'© 2026 Nestlancer Admin'
  };
  var api = {
    list:'GET /api/v1/admin/media',
    quarantine:'GET /api/v1/admin/media/quarantine',
    analytics:'GET /api/v1/admin/media/analytics',
    bulkDelete:'POST /api/v1/admin/media/bulk-delete',
    cleanup:'POST /api/v1/admin/media/cleanup?dryRun={boolean}',
    uploadRequest:'POST /api/v1/media/upload/request',
    uploadConfirm:'POST /api/v1/media/upload/confirm',
    uploadDirect:'POST /api/v1/media/upload/direct',
    chunkInit:'POST /api/v1/media/upload/chunked/init',
    chunkPart:'POST /api/v1/media/upload/chunked/{uploadId}/part',
    chunkComplete:'POST /api/v1/media/upload/chunked/{uploadId}/complete',
    chunkStatus:'GET /api/v1/media/upload/chunked/{uploadId}/status',
    chunkAbort:'POST /api/v1/media/upload/chunked/{uploadId}/abort',
    release:'POST /api/v1/admin/media/quarantine/{id}/release',
    purge:'DELETE /api/v1/admin/media/quarantine/{id}?force={boolean}',
    reprocess:'POST /api/v1/admin/media/{id}/reprocess',
    note:'Admin 200 responses are data: object, additionalProperties: true. Field names not documented in Swagger. No bulk tag / bulk move / bulk quarantine endpoint. No multipart binary body declared.'
  };
  var demoOnly = [
    'Upload progress / confirm / done (no captured shot; local staged simulation, no binary sent)',
    'Folder rows (shot 020 is a Loading… state only)',
    'Quarantine review rows (captured count is 0; local demo rows are labelled)',
    'Created share-link record and resolved URL',
    'Cleanup dry-run result payload',
    'Bulk Tag / Move preparation (no bulk endpoint; staged locally only)'
  ];
  return { captured:captured, assets:assets, detail:detail, analytics:analytics, buckets:buckets,
    conflicts:conflicts, labels:labels, api:api, demoOnly:demoOnly };
})();
