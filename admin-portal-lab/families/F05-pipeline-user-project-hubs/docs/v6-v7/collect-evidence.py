"""Offline evidence transcription + exact-ID DOM enrichment; never generates HTML designs."""
from pathlib import Path
from bs4 import BeautifulSoup
import re,json
ROOT=Path(__file__).resolve().parents[5]; F=ROOT/'admin-portal-lab/families/F05-pipeline-user-project-hubs'; P=ROOT/'nestlancer-admin-pages-html'; S=ROOT/'Nestlancer-admin-screenshots/admin'
D={'policy':'Captured evidence only. Historical snapshots; no live requests. Unknown means not captured, not zero.','sources':{},'records':{}}
def source(key,path,label):D['sources'][key]={'path':str(path.relative_to(ROOT)),'label':label}
def dom(n):return next(P.glob(str(n)+'-*'))
def soup(n):return BeautifulSoup(dom(n).read_text(),'html.parser')
for n,name in [(114,'Messages'),(115,'Payments'),(116,'Projects'),(117,'Quotes'),(118,'Requests'),(119,'Trust & account'),(45,'Project selector'),(46,'Selected project'),(53,'Project overview'),(89,'Daily progress'),(90,'Milestones & files')]:
 p=next(S.glob(f'{n:03}-*'));source('s'+str(n),p,f'Screenshot {n:03} · {name}')
for n in [65,66,67,68,69,70,71,72,74,76,156]:source('h'+str(n),dom(n),'HTML '+str(n)+' · '+dom(n).stem.split('-',1)[1])
USER='01a10a2a-a99a-7578-825a-c7de8bce4d2b'; KAR='01a10a2b-1039-77dd-90c9-2793dd606216'; PROJ='01a10a2b-5eaa-769e-a5d9-0d58fcca6924'
D.update(userId=USER,projectId=PROJ,users=[{'id':USER,'name':'Arjun Mehta','email':'arjun.mehta@nestlancer.com','status':'Active','role':'USER','source':['s118'],'reported':{'Requests':26,'Quotes':22,'Active projects':4,'Payments':11,'Messages':0,'Sessions':6},'fields':{'Snapshot':'October 2026 · historical','Open requests header':'10 · Submitted + in review','Pending payments header':'8 · inclusion rule unverified','Cross-category alerts':'2 · active project with pending payments; submitted requests not yet under review','Registered':'Not captured','Last active':'Not captured'}},{'id':KAR,'name':'Karthik Menon','email':'karthik.menon@nestlancer.com','status':'ACTIVE','role':'USER','source':['h156'],'reported':{'Requests':1,'Projects':0,'Sessions':0,'Activity events':24},'fields':{'Registered':'Oct 5, 2026','Lifetime paid':'₹36,000.00','Last active':'— in capture','Operator notes':'No operator notes on file','Coverage':'Profile only. No request IDs, quote records, payment rows or messages captured.'}}])
def rec(kind,id,title,status,refs,fields=None,**extra):
 o={'id':id,'title':title,'status':status,'sources':refs,'fields':fields or {},**extra};D['records'].setdefault(kind,[]).append(o);return o
requests=[
('01a10fa4-8fd5-712e-97d7-7d3d12f94976','AUDIT-P23-LINE-20261005-7r0l Request','Submitted'),
('01a10fa3-acfd-702b-a224-a956a39a7bc6','AUDIT-P23-SUPP-20261005-6grw Request','Submitted'),
('01a10f87-f3cf-73ac-9a0a-62335d571d11','AUDIT-P25-20261005-73dhk Project Fixture','Converted To Project'),
('01a10f86-72a4-75f5-be0e-66bf26a8a6ec','Copy of AUDIT-P24-20261005-6y6fa-sent Request','Draft'),
('01a10f84-ddf5-75c8-9110-113258a17674','AUDIT-P24-20261005-6y6fa-draft Request','Submitted'),
('01a10f84-31f1-75a6-aeb1-cbe61a191581','AUDIT-P24-20261005-6y6fa-sent Request','Quoted'),
('01a10f84-89ee-75de-99e9-a83c487085e8','Copy of AUDIT-P24-20261005-6v89t-sent Request','Draft'),
('01a10f82-c72d-72ce-96f8-80799ed2d7c7','AUDIT-P24-20261005-6v89t-draft Request','Submitted'),
('01a10f82-1ddb-75cc-ba1b-93609e9e7dc4','AUDIT-P24-20261005-6v89t-sent Request','Quoted'),
('01a10f7f-7698-71f1-8c99-709e45f72b67','AUDIT-P23-20261005-6rdsf Request to Quote Builder','Quoted')]
for a,b,c in requests:rec('requests',a,b,c,['s118'],{'Budget':'Not captured','Created':'Not captured','Assignee':'Not captured','Brief':'Not captured','Quote / project relationship':'Not established by matching titles'},userId=USER,hub=True)
quotes=[
('01a10fa5-253c-727b-a29d-563918dfe3b4','AUDIT-P23-SUPP-20261005-6grw Request','Draft'),
('01a10f88-5d7e-73fe-8e56-922499638ca6','AUDIT-P25-20261005-73dhk Project Fixture','Accepted'),
('01a10f86-72b8-7184-8474-e486115856a3','Copy of AUDIT-P24-20261005-6y6fa-sent Request','Draft'),
('01a10f85-2f4a-7324-a404-2dddf401826a','AUDIT-P24-20261005-6y6fa-draft Request','Draft'),
('01a10f84-8b40-7141-b478-5b26e82278bd','Copy of AUDIT-P24-20261005-6v89t-sent Request','Draft'),
('01a10f84-85e8-772e-a384-1ce152381d9e','AUDIT-P24-20261005-6y6fa-sent Request','Viewed'),
('01a10f83-3849-76fa-9553-d31729e85c50','AUDIT-P24-20261005-6v89t-draft Request','Draft'),
('01a10f82-6e95-70de-8501-aaf5d9a03466','AUDIT-P24-20261005-6v89t-sent Request','Viewed'),
('01a10f80-3144-755f-a145-b48ad8a72557','AUDIT-P23-20261005-6rdsf Request to Quote Builder','Viewed'),
('01a10cc2-0f7c-74f8-af2d-cdcb2585e421','AUDIT-P23-SUPP-20261005-bwrn Request','Draft')]
for a,b,c in quotes:rec('quotes',a,b,c,['s117'],{'Amount':'Not captured','Client':'arjun.mehta@nestlancer.com','Valid until':'Not captured','Source request ID':'Not captured'},userId=USER,hub=True)
# List adds four captured drafts; exact UUIDs enrich six existing hub rows.
for tr in soup(67).select('tbody tr'):
 c=[x.get_text(' ',strip=True) for x in tr.select('td')];id=tr.select_one('a[href^="/quotes/"]')['href'].split('/')[-1]
 o=next((x for x in D['records']['quotes'] if x['id']==id),None)
 if not o:o=rec('quotes',id,c[0],c[1],[],{'Source request ID':'Not captured','Valid until':'Not captured'},userId=USER,hub=False)
 o['sources'].append('h67');o['fields'].update({'Amount':c[2],'Client':c[3]})
for n in range(68,73):
 s=soup(n);id=re.search(r'[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}',dom(n).name)[0];o=next(x for x in D['records']['quotes'] if x['id']==id);request=s.select_one('a[href^="/requests/"]')['href'].split('/')[2]
 o['sources'].append('h'+str(n));o['requestId']=request;txt=s.get_text(' ',strip=True); ins=s.select('input');line=s.select_one('tbody tr').select('td')[1].get_text(' ',strip=True)
 o['fields'].update({'Source request ID':request,'Phase':ins[0].get('value'),'Line item':line,'Quantity':ins[1].get('value'),'Unit price (INR)':ins[2].get('value'),'Subtotal':'₹2,400.00' if n==69 else '₹1,250.00','Tax':'18% · ₹432.00' if n==69 else '0% · ₹0.00','Valid until':'2026-10-19','History': 'Created Oct 5, 2026, 6:04 AM' if n==69 else 'Created Oct 5, 2026, 6:27 AM' if n==70 else 'Loading history… in capture · not recovered'})
 # A linked request is evidence of an ID, not of its title or status.
 rec('requests',request,'Linked source request','Not captured',['h'+str(n)],{'Linked from quote ID':id,'Title':'Not captured in request detail','Budget':'Not captured','Created':'Not captured','Assignee':'Not captured','Brief':'Not captured'},userId=USER,hub=False,quoteId=id)
for n,pre,brief,reqs,time in [(65,'AUDIT-P24-20261005-uc3d4-draft Request','P24 audit draft request for admin quote management list/detail/templates/library/schedules/documents.','AUDIT-P24 draft; Admin quotes list/detail coverage; Documents and library coverage','6:01 AM'),(66,'AUDIT-P23-SUPP-20261005-8p13 Request','P23 supplement audit request for quote builder template, duplicate, add/remove, schedule, and browser-back coverage.','Template and prefill coverage; Duplicate and reorder coverage; Payment schedule edge coverage','6:25 AM')]:
 id=re.search(r'[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}',dom(n).name)[0];o=next(x for x in D['records']['requests'] if x['id']==id);o.update(title=pre,status='Submitted');o['sources'].append('h'+str(n));o['fields'].update({'Title':pre,'Category':'Web Development','Client':'Arjun Mehta (arjun.mehta@nestlancer.com)','Created':'Oct 5, 2026, '+time,'Last updated':'Oct 5, 2026, '+time,'Brief':brief,'Budget':'₹1,000.00 – ₹5,000.00','Preferred start':'Oct 5, 2026','Deadline':'Nov 4, 2026','Requirements':reqs,'Attachments':'No attachments','Status history':'Submitted — Submitted for review; Draft — Request created. Both Oct 5, 2026, '+time,'Internal notes':'No note entries visible'})
# Project billing table: all 18 records, not fabricated selector rows.
for tr in soup(74).select('tbody tr'):
 c=[x.get_text(' ',strip=True) for x in tr.select('td')];a=tr.select_one('a[href^="/payments/projects/"]');id=a['href'].split('/')[-1]
 rec('projects',id,a.get_text(' ',strip=True),c[5],['h74'],{'Budget':c[2],'Paid':c[3],'Balance':c[4],'Installment progress':c[1],'Client':'Not captured in this billing row','Delivery status':'Not captured in this billing row','Delivery progress':'Not captured'},hub=False)
projectids=['01a10f88-c023-7368-84d5-6b13855a5d1f','01a10cbc-ed76-704f-af30-8d47048df523','01a10aac-cfc0-70fb-9272-7482f9b0a227','01a10a2b-661c-733e-be12-b5a70715a19e',PROJ]
for i,id in enumerate(projectids):
 o=next(x for x in D['records']['projects'] if x['id']==id);o.update(userId=USER,hub=True,status=(['Pending Payment']*3+['Completed','In Progress'])[i]);o['sources'].append('s116');o['fields'].update({'Client':'arjun.mehta@nestlancer.com','Delivery status':o['status']})
kh=next(x for x in D['records']['projects'] if x['id']==PROJ);kh['sources']+=['s46','s90'];kh['fields'].update({'Delivery progress':'57% · selected hub screenshot 046','Selector progress':'0% · separate screenshot 045','Target end':'Oct 5, 2027 · F12','Operator':'admin@nestlancer.com · F12','Milestones':'7 total / 7 open in hub; 4 Approved rows visible','Deliverables':'1 in hub and F12; billing list independently says 4 deliveries','Hub timeline':'0 events · No recent activity','Request origin':'— · no captured request ID','Quote origin':'01a10a2b-5c32-72e7-99ac-ba6c1c58b2ad'})
raz=next(x for x in D['records']['projects'] if x['id']=='01a10a2c-2c98-70ad-9d65-19c80c4cb784');raz['sources'].append('s53');raz['fields'].update({'Client':'ananya.iyer@nestlancer.com','Delivery status':'Revision Requested','Delivery progress':'40% · separate F12 reference'});raz['status']='Revision Requested'
# Ten screenshot payment IDs plus the eleventh recovered from the explicit project table.
payments=[('01a10f88-c103-710c-8c8d-c28fec9226a8','Pending'),('01a10f88-c103-710c-8c8d-be1873c17d44','Created'),('01a10cbc-edbf-764c-bc51-b5debebadc56','Pending'),('01a10cbc-edbf-764c-bc51-b35825aea61d','Created'),('01a10aac-d034-723e-8841-eb0ec84d268d','Created'),('01a10aac-d034-723e-8841-ee3e98977730','Pending'),('01a10a2b-663e-7019-87c4-f4403da353e0','Completed'),('01a10a2b-663e-7019-87c4-fa82caf14f0b','Completed'),('01a10a2b-5ed2-73bc-8aee-d4cdcbb6e6d6','Pending'),('01a10a2b-5ed2-73bc-8aee-cf61167d4900','Completed')]
for id,status in payments:rec('payments',id,'Captured payment',status,['s115'],{'Amount':'Not captured','Project ID':'Not captured','Milestone ID':'Not captured','Method':'Not captured','Created / paid date':'Not captured'},userId=USER,hub=True)
for tr in soup(76).select('tbody tr'):
 a=tr.select_one('a[href^="/payments/"]');id=a['href'].split('/')[-1];o=next((x for x in D['records']['payments'] if x['id']==id),None)
 if o:
  c=[x.get_text(' ',strip=True) for x in tr.select('td')];pid=tr.select_one('a[href^="/payments/projects/"]')['href'].split('/')[-1];o['sources'].append('h76');o['projectId']=pid;o['fields'].update({'Amount':c[1],'Transaction-list status':c[2],'Client':c[3],'Project':c[4],'Project ID':pid,'Status note':'Hub wording retained; owner-list wording shown separately'})
ms=[('01a10a2b-5eca-760b-8ae6-d33d2131d708','Deposit','Pending','Paid','Oct 5, 2027'),('01a10a2b-5eca-760b-8ae6-d723b0524e0a','Mid-project payment','Pending','Payment due','Oct 5, 2027'),('01a10a2b-5eca-760b-8ae6-db511c21e3b5','Final payment','Pending','Payment due','Oct 5, 2027'),('01a10a2b-5ee3-72f8-841f-7ee941ba7636','Project delivery','Approved','Approved','Oct 5, 2027'),('01a10a2b-7765-721c-86f7-506c98b91e5e','Design & Architecture','Approved','Approved','Jul 15, 2026'),('01a10a2b-777d-721e-bf80-f46a10c1d45e','Storefront & Checkout','Approved','Approved','Aug 15, 2026'),('01a10a2b-77b5-7674-abec-84864264cf08','QA, SEO & Launch','Approved','Approved','Sep 30, 2026')]
for i,(id,title,st,f12,due) in enumerate(ms):rec('milestones',id,title,st,['s46','s90'],{'Hub status':st,'F12 status':f12,'Due':due,'Type':('deposit · pay-only' if i==0 else 'installment · pay-only') if i<3 else 'Delivery milestone','Payment column':'— in hub; explicit payment ref links shown separately'},projectId=PROJ)
for id,mid,raw,st in [('01a10a2b-5ed2-73bc-8aee-d1c6262906e9',ms[1][0],3000000,'Pending'),('01a10a2b-5ed2-73bc-8aee-cf61167d4900',ms[0][0],2250000,'Completed'),('01a10a2b-5ed2-73bc-8aee-d4cdcbb6e6d6',ms[2][0],2250000,'Pending')]:
 o=next((x for x in D['records']['payments'] if x['id']==id),None)
 if not o:o=rec('payments',id,'Captured payment',st,[],{'Method':'Not captured','Created / paid date':'Not captured'},userId=USER,hub=False)
 o['sources'].append('s46');o.update(projectId=PROJ,milestoneId=mid);o['fields'].update({'Amount':'₹'+format(raw/100,',.2f'),'Raw amount (paise)':raw,'Project ID':PROJ,'Milestone ID':mid,'Relationship evidence':'REF column in screenshot 046 · exact milestone UUID'})
for id in ['01a125ac-f30a-7128-b205-cccd856f2a55','01a125a7-698e-77b4-8a74-0c17c526ebf9','01a12573-fe46-70b8-9235-a143aea09b0f','01a12558-ed84-72df-9ad4-49b18bf2ba99','01a124e2-5ed7-7748-b602-fe2caea75a9c','01a124c5-8cae-71fd-b0fc-faddf55e29c3']:rec('sessions',id,'Active session','Active',['s119'],{'Device':'Not captured','IP address':'Not captured','Created':'Not captured','Last used':'Not captured'},userId=USER)
for time in ['2026-10-10T11:57:09.639Z','2026-10-10T11:51:13.562Z','2026-10-10T11:50:30.767Z','2026-10-10T10:55:13.613Z','2026-10-10T10:24:57.630Z','2026-10-10T10:22:13.105Z']:rec('activity',None,'LOGIN','auth',['s119'],{'Timestamp':time,'Description':'User signed in successfully','IP':'Not captured','Event ID':'Not captured'},userId=USER)
# All ten visible Karthik activity rows; keep 24 reported total distinct.
for tr in soup(156).select('tbody tr'):
 c=[x.get_text(' ',strip=True) for x in tr.select('td')]
 if len(c)==5:rec('activity',None,c[1],c[2],['h156'],{'Timestamp':c[0],'Description':c[3],'IP':c[4],'Timezone':'Not stated'},userId=KAR)
timeline=[('Wireframe pack uploaded for review','Deliverable upload','Milestone 1 wireframes attached — please review checkout UPI flow and Hindi toggle placement.','Design & Architecture'),('Milestone Approved','Daily update','Reconciled after deliverable approval.','QA, SEO & Launch'),('Milestone Approved','Daily update','Reconciled after deliverable approval.','Storefront & Checkout'),('Milestone Approved','Daily update','Reconciled after deliverable approval.','Design & Architecture'),('Internal — Shiprocket rate API spike','Internal note','Confirmed Shiprocket v2 rates endpoint supports pincode checker on cart. Keeping COD threshold at ₹2,000 per Arjun’s note.','Design & Architecture'),('Daily update — homepage and PLP wireframes','Daily update','Completed homepage hero, product listing with variant swatches (50g/200g/500g), and mobile-first navigation. Hindi toggle wireframes shared in Figma.','Design & Architecture'),('Milestone Approved','Daily update','Reconciled after deliverable approval.','Project delivery')]
for title,status,body,phase in timeline:rec('timeline',None,title,status,['s89'],{'Body':body,'Milestone':phase,'Timestamp':'Oct 5, 2026, 3:46 AM','Timezone':'Not stated; not converted to UTC','Event ID':'Not captured','Visibility':'Internal' if status=='Internal note' else 'Client visibility not independently established'},projectId=PROJ)
rec('deliverables',None,'Milestone 1 wireframes — homepage, PLP, PDP, cart, checkout (Hindi + English).','Approved',['s46','s90'],{'Submitted':'Oct 5, 2026, 3:46 AM','File':'arjun-mehta-e-commerce-platform-milestone-1-wireframes.pdf','Download URL':'Not captured; filename is not a downloadable file','Deliverable ID':'Not captured'},projectId=PROJ)
# The F12 screenshot does not expose phase UUIDs. Preserve its seven observations
# separately; never join a due date or status to a hub milestone by title alone.
D['milestoneReferences']=[{'title':title,'status':f12,'due':due,'type':('deposit · pay-only' if i==0 else 'installment · pay-only') if i<3 else 'Delivery milestone','sources':['s90'],'boundary':'F12 named-project reference. Phase UUID not visible; not joined to a hub milestone ID.'} for i,(_,title,_,f12,due) in enumerate(ms)]
for o in D['records']['milestones']:
 o['sources']=['s46'];o['fields']={'Hub status':o['status'],'Due':'Not captured in the ID-bearing hub row','Type':'Not captured in the ID-bearing hub row','Payment column':'— in hub; exact payment REF associations are separately captured','F12 comparison':'See separate, unjoined F12 phase observations. No title-only field join.'}
for o in D['records']['deliverables']:
 o['sources']=['s90'];o['contextProjectId']=o.pop('projectId');o['fields']['Association boundary']='Separate F12 named-project reference. Deliverable UUID not captured; not ID-joined to the hub deliverable.'
for o in D['records']['timeline']:
 o['contextProjectId']=o.pop('projectId');o['fields']['Association boundary']='Separate F12 named-project snapshot, not ID-bearing hub timeline events.'

# Second login snapshot is retained as separate observations, not deduplicated into events.
for time in ['2026-10-10T12:03:30.382Z','2026-10-10T11:57:09.639Z','2026-10-10T11:51:13.562Z','2026-10-10T11:50:30.767Z','2026-10-10T10:55:13.613Z','2026-10-10T10:24:57.630Z']:
 rec('activity',None,'LOGIN','auth',['s117'],{'Timestamp':time,'Description':'User signed in successfully','IP':'Not captured','Event ID':'Not captured','Snapshot boundary':'Separate screenshot 117 observation. Not an additional unique login inferred from repeated timestamps.'},userId=USER)
# All 18 selector records are ID-matched to billing, without inferred user UUIDs.
clientlocals={'01a10a2e-4f64-740a-b4ca-0d9ab8dc1899':'sandeep.chopra','01a10a2e-2015-72f9-8347-645cab96c44e':'karthik.menon','01a10a2d-f356-748e-bbab-2cc07a848f9d':'pooja.kulkarni','01a10a2d-bbc4-777f-ba19-f51900dd5438':'suresh.iyer','01a10a2d-8ed9-767b-a4de-5701369ddfdf':'neha.gupta','01a10a2d-61cd-733c-bd2c-7936be163dec':'amit.verma','01a10a2d-30c7-749f-ab46-a90c19658f51':'divya.sharma','01a10a2c-e744-724f-ad7d-b247f2d86ff2':'rajan.kumar','01a10a2c-b485-766a-8ed6-94cc3ead00af':'kavya.reddy','01a10a2c-8397-72f9-9f80-56b345e4d34a':'vikram.shah','01a10a2c-5cfb-71fa-854b-d88f4481e3e8':'priya.nair','01a10a2c-2c98-70ad-9d65-19c80c4cb784':'ananya.iyer','01a10a2b-ca23-72d6-84d3-47fde5ca5746':'samira.patel'}
for o in D['records']['projects']:
 id=o['id'];o['sources'].append('s45');o['fields']['Selector progress']='0% · screenshot 045'
 if id in clientlocals:o['fields']['Client']=clientlocals[id]+'@nestlancer.com'
 selectorstatus='Pending Payment' if id in projectids[:3] else 'Revision Requested' if id==raz['id'] else 'In Progress' if id in ['01a10a2e-4f64-740a-b4ca-0d9ab8dc1899','01a10a2e-2015-72f9-8347-645cab96c44e','01a10a2c-5cfb-71fa-854b-d88f4481e3e8',PROJ] else 'Completed'
 o['fields']['Selector delivery status']=selectorstatus
 if o['fields']['Delivery status']=='Not captured in this billing row':o['fields']['Delivery status']=selectorstatus;o['status']=selectorstatus
raz['fields'].update({'Created':'Oct 5, 2026, 3:47 AM','Last updated':'Oct 5, 2026, 3:47 AM','Target end':'Oct 5, 2027','Operator':'Riya Kapoor · admin@nestlancer.com','Milestones':'5 reported · no milestone row IDs captured','Deliverables':'1 reported · billing separately says 2 deliveries; no file row captured','Quote origin':'01a10a2c-26a7-727f-9252-a3154d836492','Description':'Node.js microservice to reconcile Razorpay settlement reports with our internal ledger — idempotent webhook ingestion for payment.captured and settlement.processed events, transactional outbox for downstream accounting, and an admin replay UI for ops to reprocess failed settlements after the 18 June payout outage.','Portfolio note':'Portfolio drafts can only be created from completed projects.'})

D['counts']={k:len(v) for k,v in D['records'].items()}
(F/'evidence-v67.json').write_text(json.dumps(D,ensure_ascii=False,indent=2));(F/'evidence-v67.js').write_text('/* Captured evidence only. Generated by offline transcription script. */\nwindow.F05Evidence='+json.dumps(D,ensure_ascii=False,separators=(',',':'))+';\n');print(json.dumps(D['counts'],indent=2))
