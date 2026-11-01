from pathlib import Path
from bs4 import BeautifulSoup
import hashlib,json,re,gzip
ROOT=Path(__file__).resolve().parents[5];F=ROOT/'admin-portal-lab/families/F05-pipeline-user-project-hubs';O=F/'docs/v6-v7'
report={'checks':0,'errors':[]}
def check(value,message):
 report['checks']+=1
 if not value:report['errors'].append(message)
before=json.loads((O/'PRESERVE-BEFORE.json').read_text())
for file,digest in before.items():
 p=ROOT/file;check(p.is_file() and hashlib.sha256(p.read_bytes()).hexdigest()==digest,'Changed protected file: '+file)
report['protectedFiles']=len(before)
merge=json.loads((O/'MERGE-BEFORE.json').read_text());gallery=(ROOT/'admin-portal-lab/index.html').read_text();clean=re.sub(r'\n      <!-- F05 V6 V7 CARDS START -->.*?<!-- F05 V6 V7 CARDS END -->','',gallery,flags=re.S);clean=re.sub(r'  <!-- F05 V6 V7 NOTES START -->.*?<!-- F05 V6 V7 NOTES END -->\n','',clean,flags=re.S)
check(clean==merge['admin-portal-lab/index.html'],'Gallery has changes outside bounded additions')
m=json.loads((ROOT/'admin-portal-lab/manifest.json').read_text());v=m['families']['F05-pipeline-user-project-hubs']['variants'];check([x['id'] for x in v]==['V1','V2','V3','V4','V5','V6','V7'],'Seven manifest entries');m['families']['F05-pipeline-user-project-hubs']['variants']=v[:5];check(m==json.loads(merge['admin-portal-lab/manifest.json']),'Prior manifest data changed')
check((ROOT/'admin-portal-lab/DECISIONS.md').read_text().startswith(merge['admin-portal-lab/DECISIONS.md']),'Prior decisions changed');check(not(ROOT/'.git').exists(),'Git repository unexpectedly created')
D=json.loads((F/'evidence-v67.json').read_text());R=D['records'];check(D['counts']=={'requests':15,'quotes':14,'projects':18,'payments':11,'milestones':7,'sessions':6,'activity':22,'timeline':7,'deliverables':1},'Captured inventory counts');check(len(D['milestoneReferences'])==7,'Seven separate unjoined F12 milestone observations')
for key,source in D['sources'].items():check((ROOT/source['path']).is_file(),'Missing source '+key)
for kind,rows in R.items():
 ids=[r['id'] for r in rows if r['id']];check(len(ids)==len(set(ids)),'Duplicate IDs '+kind)
 for row in rows:
  check(row['id'] is None or re.fullmatch(r'[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}',row['id']) is not None,'Invalid/fictitious ID')
  check(all(x in D['sources'] for x in row['sources']),'Unknown provenance key')
  if kind=='milestones':check(row['sources']==['s46'] and row['fields']['Due'].startswith('Not captured'),'F12 fields improperly title-joined to milestone ID')
for n,kind,prefix in [(67,'quotes','/quotes/'),(76,'payments','/payments/')]:
 soup=BeautifulSoup(next((ROOT/'nestlancer-admin-pages-html').glob(str(n)+'-*')).read_text(),'html.parser')
 for tr in soup.select('tbody tr'):
  a=tr.select_one('a[href^="'+prefix+'"]');id=a['href'].split('/')[-1];row=next((x for x in R[kind] if x['id']==id),None)
  if row:
   tds=tr.select('td');amount=tds[2 if kind=='quotes' else 1].get_text(' ',strip=True);check(row['fields']['Amount']==amount,'Amount not exact-ID matched '+id)
   if kind=='payments':pid=tr.select_one('a[href^="/payments/projects/"]')['href'].split('/')[-1];check(row['projectId']==pid,'Payment project join mismatch')
check(sum(x['hub'] for x in R['payments'])==10,'Exactly ten hub payment rows');check(next(x for x in R['payments'] if x['id'].endswith('cf61167d4900'))['hub'],'Deposit belongs to visible user capture');check(not next(x for x in R['payments'] if x['id'].endswith('d1c6262906e9'))['hub'],'₹30,000 additional payment must not pretend to be visible user-hub row')
check(sum(x['fields'].get('Amount')!='Not captured' for x in R['payments'])==9,'Nine evidenced payment amounts');check(sum(x['userId']==D['users'][1]['id'] for x in R['activity'])==10,'Ten Karthik activity observations');check(all(x.get('userId')!=D['users'][1]['id'] for x in R['requests']+R['quotes']+R['payments']+R['sessions']),'Arjun rows leaked to Karthik')
report['payloads']={}
for v in [6,7]:
 p=F/f'V{v}/index.html';s=BeautifulSoup(p.read_text(),'html.parser')
 for tag in s.select('a[href],link[href],script[src],img[src]'):
  href=tag.get('href') or tag.get('src')
  if href.startswith(('#','data:','http:','https:')):continue
  target=(p.parent/href.split('?')[0].split('#')[0]).resolve();check(target.is_file(),'Broken local link '+str(target))
 check(s.select_one('script[src="../evidence-v67.js"]') is not None,'Missing new evidence model');check(s.select_one('script[src="../hubs.js"]') is None,'Approved controller incorrectly reused')
 portable=F/f'V{v}/V{v}-complete.html';sp=BeautifulSoup(portable.read_text(),'html.parser');check(not sp.select('script[src],link[rel=stylesheet]'),'Standalone depends on external JS/CSS');check(all(x['src'].startswith('data:') for x in sp.select('img[src]')),'Standalone images not embedded')
 assets=[p,F/'evidence-v67.js',F/'workspace-v67.js',F/'evidence-v67.css',ROOT/'admin-portal-lab/shared/tokens.css'];raw=sum(x.stat().st_size for x in assets);images=sum((ROOT/f'admin-portal-lab/assets/{n}').stat().st_size for n in ['logo-mark-light.svg','logo-mark-dark.svg','favicon.svg']);gz=sum(len(gzip.compress(x.read_bytes())) for x in assets)+images;report['payloads'][f'V{v}']={'rawInclImages':raw+images,'gzipEstimateInclImages':gz,'standaloneBytes':portable.stat().st_size};check(raw+images<250000,'Hard 250KB budget');check(portable.stat().st_size<250000,'Standalone hard 250KB budget')
report['status']='PASS' if not report['errors'] else 'FAIL';(O/'QA-STATIC.json').write_text(json.dumps(report,indent=2));print(json.dumps(report,indent=2));raise SystemExit(bool(report['errors']))
