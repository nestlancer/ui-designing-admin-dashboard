"""Bundle the two already-authored designs. Packaging only; not a layout generator."""
from pathlib import Path
from bs4 import BeautifulSoup
import base64
ROOT = Path(__file__).resolve().parents[5]
F = ROOT / 'admin-portal-lab/families/F05-pipeline-user-project-hubs'
for v in (6, 7):
    src = F / f'V{v}/index.html'
    soup = BeautifulSoup(src.read_text(), 'html.parser')
    for link in soup.select('link[rel=stylesheet]'):
        asset = (src.parent / link['href']).resolve()
        node = soup.new_tag('style')
        node.string = asset.read_text()
        link.replace_with(node)
    for img in soup.select('img[src]'):
        asset = (src.parent / img['src']).resolve()
        img['src'] = 'data:image/svg+xml;base64,' + base64.b64encode(asset.read_bytes()).decode()
    favicon = soup.select_one('link[rel=icon]')
    favicon['href'] = 'data:image/svg+xml;base64,' + base64.b64encode((src.parent / favicon['href']).resolve().read_bytes()).decode()
    for old in soup.select('script[src]'):
        old.decompose()
    for asset in ('evidence-v67.js', 'workspace-v67.js'):
        node = soup.new_tag('script')
        node.string = (F / asset).read_text().replace('</script', '<\\/script')
        soup.body.append(node)
    note = soup.new_tag('p', attrs={'class': 'meta'})
    note.string = 'Self-contained HTML view. Source files, documentation and linked designs require the supplied repository or live preview.'
    soup.select_one('footer').append(note)
    node = soup.new_tag('script')
    node.string = "document.querySelectorAll('a[href=\"../evidence-v67.json\"]').forEach(a=>{a.href=URL.createObjectURL(new Blob([JSON.stringify(window.F05Evidence,null,2)],{type:'application/json'}));a.download='F05-captured-evidence.json'});"
    soup.body.append(node)
    dest = F / f'V{v}/V{v}-complete.html'
    dest.write_text(str(soup))
    print(dest.relative_to(ROOT), dest.stat().st_size)
