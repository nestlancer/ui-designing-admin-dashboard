"""Read-only QA + report generation; no page/template generation."""
from pathlib import Path
from html.parser import HTMLParser
import json, hashlib, gzip
ROOT=Path(__file__).resolve().parents[5]
FAMILY=ROOT/'admin-portal-lab/families/F04-pipelines-stage-hub'
DOC=Path(__file__).parent
checks=[]
def check(name,value): checks.append({'name':name,'pass':bool(value)})
protected=json.loads((DOC/'SCOPE-BEFORE.json').read_text())
changed=[name for name,digest in protected.items() if not (ROOT/name).is_file() or hashlib.sha256((ROOT/name).read_bytes()).hexdigest()!=digest]
check('403 protected source/report/F01-F03/shared files unchanged',not changed)
check('cloned .git absent',not (ROOT/'.git').exists())
class Assets(HTMLParser):
    def __init__(self): super().__init__();self.paths=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='link' and a.get('rel')=='stylesheet': self.paths.append(a['href'])
        if tag=='script' and a.get('src'): self.paths.append(a['src'])
payloads=[]
for n in range(1,6):
    p=FAMILY/f'V{n}/index.html';s=p.read_text();parser=Assets();parser.feed(s);assets=[p]+[(p.parent/url).resolve() for url in parser.paths]
    missing=[str(a) for a in assets if not a.is_file()];check(f'V{n} all local CSS/JS assets exist',not missing)
    size=sum(a.stat().st_size for a in assets if a.exists());compressed=sum(len(gzip.compress(a.read_bytes(),mtime=0)) for a in assets if a.exists());payloads.append({'variant':f'V{n}','rawBytes':size,'sumIndividualGzipBytes':compressed,'underSoft70KB':size<=70000,'under250KBContract':size<=250000,'assets':[str(a.relative_to(ROOT)) for a in assets]})
    check(f'V{n} under hard 250KB page contract',size<=250000)
    check(f'V{n} six authored cases',s.count('data-work-case=')==6)
    check(f'V{n} obsolete captured mutation visibly flagged','Historical only: POST /admin/payments/projects/:projectId/milestones' in s)
    check(f'V{n} no linear-funnel claim','Each stage feeds the next' not in s)
    check(f'V{n} manual inquiry handoff wording','Qualify lead; guide client request submission' in s)
    check(f'V{n} source gap is not zero','Projects</dt><dd class="unavailable">Unavailable' in s)
specs={p.name:json.loads(p.read_text()) for p in (ROOT/'backend-api-swagger').glob('*.openapi.json')}
counts={'specs':len(specs),'serviceLocalPathEntries':sum(len(d.get('paths',{})) for d in specs.values()),'httpOperations':sum(sum(k in {'get','post','put','patch','delete','head','options','trace'} for k in ops) for d in specs.values() for ops in d.get('paths',{}).values()),'schemas':sum(len(d.get('components',{}).get('schemas',{})) for d in specs.values())}
check('full documented inventory totals match research',counts=={'specs':17,'serviceLocalPathEntries':560,'httpOperations':648,'schemas':218})
for route in ['/api/v1/admin/payments/{id}/approve-transfer','/api/v1/admin/payments/{id}/reject-transfer']:
    check('documented POST '+route, 'post' in specs['payments.openapi.json']['paths'].get(route,{}))
check('assignment DTO only assigneeId',set(specs['requests.openapi.json']['components']['schemas']['AssignRequestDto']['properties'])=={'assigneeId'})
check('no frontend request executor',all(x not in (FAMILY/'workbench.js').read_text() for x in ['fetch(','XMLHttpRequest','sendBeacon(']))
result={'protectedFiles':len(protected),'changedProtectedFiles':changed,'passed':sum(c['pass'] for c in checks),'total':len(checks),'failed':[c for c in checks if not c['pass']],'swagger':counts,'payloads':payloads,'softBudgetNote':'70KB soft target exceeded by research-driven case functionality plus retained historical reference. Shared tokens remain unchanged; all variants remain below 250KB page contract. Gzip is an estimate, not a claim the local preview server compresses.'}
(DOC/'SCOPE-AND-PAYLOAD.json').write_text(json.dumps(result,indent=2))
print(json.dumps({k:v for k,v in result.items() if k!='payloads'},indent=2));print([(p['variant'],p['rawBytes'],p['sumIndividualGzipBytes']) for p in payloads])
if result['failed']: raise SystemExit(1)
