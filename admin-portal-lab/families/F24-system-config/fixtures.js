/* F24 evidence fixture, transcribed by hand from shots 059–063,104–107.
   Internal keys (c01/f01/etc.) are local indexes, NEVER API identifiers.
   Null means unavailable, not empty. No production requests are made. */
window.NL_SYSTEM={
 configs:[
  {id:'c01',group:'SYSTEM',name:'Rate limits',key:'system.rate_limits',value:null,fragment:'{\n  "admin": {\n    "limit": 300,\n    "windowSeconds": 60\n  },\n  … continuation not captured',note:'Only the admin scope is visible. Other scopes are unknown.'},
  {id:'c02',group:'SYSTEM',name:'File upload',key:'system.file_upload',value:null,fragment:'{\n  "maxFileSizeMB": 50,\n  "maxChunkSizeMB": 5,\n  "allowedMimeTypes": [\n    "image/jpeg",\n    … continuation not captured',note:'The complete allowed MIME list is not captured.'},
  {id:'c03',group:'SYSTEM',name:'Pagination',key:'system.pagination',value:{maxLimit:100,defaultPage:1,defaultLimit:20}},
  {id:'c04',group:'SYSTEM',name:'Jwt',key:'system.jwt',value:{refreshTokenExpiryDays:7,maxRefreshTokensPerUser:10,accessTokenExpiryMinutes:15}},
  {id:'c05',group:'SYSTEM',name:'Security',key:'system.security',value:null,fragment:'{\n  "maxLoginAttempts": 5,\n  "passwordMaxLength": 128,\n  "passwordMinLength": 8,\n  "lockoutDurationMinutes": 15,\n  … closing content not captured',note:'Visible keys only; the lower portion of the textarea is clipped.'},
  {id:'c06',group:'SYSTEM',name:'Currency',key:'system.currency',value:null,fragment:'{\n  "symbol": "₹",\n  "default": "INR",\n  "subunit": "paise",\n  "subunitMultiplier": 100\n  … closing content not captured',note:'Visible values only. Full source JSON is not available.'},
  {id:'c07',group:'SYSTEM',name:'Media',key:'system.media',value:null,fragment:'{\n  "maxVersions": 10,\n  "imageSizeLimit": 10485760,\n  "thumbnailSizes": {\n    "large": 600,\n    … continuation not captured',note:'Other thumbnail sizes and trailing fields are unknown.'},
  {id:'c08',group:'SYSTEM',name:'Notifications',key:'system.notifications',value:{batchSize:50,expiryDays:90,maxUnreadCount:100}},
  {id:'c09',group:'REQUESTS',name:'Categories',key:'request.categories',value:null,fragment:'[\n  {\n    "key": "webDevelopment",\n    "label": "Web Development",\n    "description": "Websites and web applications"\n    … continuation not captured',note:'Only the first category fragment is visible. Array shape conflicts with the DTO’s object schema.'},
  {id:'c10',group:'OTHER',name:'Settings',key:'blog.settings',value:{}},
  {id:'c11',group:'OTHER',name:'Settings',key:'media.settings',value:{}},
  {id:'c12',group:'OTHER',name:'Settings',key:'payment.settings',value:{}}
 ],
 flags:[
  {id:'f01',name:'Enforce 2FA for all admin accounts',on:false,risk:'This changes the sign-in requirements for all admin accounts.'},
  {id:'f02',name:'Enable outbound webhook delivery',on:false,risk:'This changes outbound event delivery across the platform.'},
  {id:'f03',name:'Enable virus scanning for uploaded files',on:true,risk:'This changes security scanning of uploaded files.'},
  {id:'f04',name:'Enable system-wide maintenance mode',on:false,risk:'This may affect client access. Its relationship to Operations maintenance is not documented.'},
  {id:'f05',name:'Enable API rate limiting',on:true,risk:'This changes API request protection platform-wide.'},
  {id:'f06',name:'Enable email notification delivery',on:true,risk:'This changes platform email notification delivery.'},
  {id:'f07',name:'Enable push notification delivery',on:false,risk:'This changes platform push notification delivery.'},
  {id:'f08',name:'Enable advanced analytics dashboard',on:false,risk:'This changes access to the advanced analytics dashboard.'},
  {id:'f09',name:'Enable blog commenting system',on:true,risk:'This changes the blog commenting capability.'},
  {id:'f10',name:'Make portfolio items publicly visible',on:true,risk:'This changes public portfolio visibility.'},
  {id:'f11',name:'Enable chunked file upload support',on:false,risk:'This changes how uploaded files can be transferred.'},
  {id:'f12',name:'Enable CDN processing for media files',on:false,risk:'This changes media processing through the CDN.'}
 ],
 queues:['email.queue','notification.queue','audit.queue','media.queue','webhook.queue','cdn.queue','analytics.queue','document.queue','export.queue','payments.webhook.queue','system.webhook.queue','projects.lifecycle.queue'],
 emails:[
  {name:'verification',id:'01a10a1d-77fc-74f8-bbec-04a288aa07bc',subject:'Verify your Nestlancer account',group:'Account'},
  {name:'welcome',id:'01a10a1d-7827-730b-8f17-f5e1a2e30d58',subject:'Welcome to Nestlancer!',group:'Account'},
  {name:'password-reset',id:'01a10a1d-78f7-7629-b770-8593fbc45d7f',subject:'Reset your Nestlancer password',group:'Account'},
  {name:'quote-sent',id:'01a10a1d-79d9-709f-8d94-9a86adfaf754',subject:'New quote for your project: {{projectTitle}}',group:'Projects'},
  {name:'payment-receipt',id:'01a10a1d-7a4e-766d-8b02-b07aceeacb59',subject:'Payment receipt for {{projectTitle}}',group:'Payments'},
  {name:'project-update',id:'01a10a1d-7a77-7059-ae4a-4ba423b63401',subject:'Update on your project: {{projectTitle}}',group:'Projects'},
  {name:'milestone-completed',id:'01a10a1d-7aa9-706a-8ea4-27cdd62e3ed3',subject:'Milestone completed: {{milestoneName}}',group:'Projects'},
  {name:'new-message',id:'01a10a1d-7ae5-742a-8726-9558b604cacc',subject:'New message in {{projectTitle}}',group:'Projects'},
  {name:'account-suspended',id:'01a10a1d-7b14-7548-b8e3-4c5d1464df2f',subject:'Your Nestlancer account has been suspended',group:'Account'},
  {name:'contact-received',id:'01a10a1d-7b45-7059-9961-616e7e64775b',subject:'We received your message – Ticket #{{ticketId}}',group:'Contact'}
 ],
 verificationBody:'<h1>Verify your email</h1><p>Almost there</p><p>Hi {{userName}},</p><p>Thanks for joining Nestlancer. Confirm your email address so we can secure your account.</p><p><a href="{{link}}">Verify email</a></p><p>This link expires in 24 hours. If you did not create an account, ignore this email.</p>',
 notification:{name:'account-deleted-user',eventType:'account.deleted',titleTemplate:'Account deleted',messageTemplate:'Your account has been deleted.',channels:['IN_APP'],id:null,group:'Account'},
 diagnostics:{status:'healthy',timestamp:'2026-10-10T12:01:22.083Z',server:{hostname:'redacted',platform:'redacted',architecture:'redacted',nodeVersion:'redacted',memory:{total:0,free:0,used:0,usagePercent:0},cpu:{cores:0,model:'redacted',loadAverage:[]},disk:{total:0,free:0,used:0,usagePercent:0}},process:{pid:0,uptime:0,memory:{rss:0,heapTotal:0,heapUsed:0,external:0}},dependencies:{database:{connected:true},cache:{connected:true},queue:{connected:true}},featureFlags:{newDashboard:true,advancedAnalytics:false,betaFeatures:true}},
 maintenanceMessage:'System is under maintenance. Please check back later.'
};
