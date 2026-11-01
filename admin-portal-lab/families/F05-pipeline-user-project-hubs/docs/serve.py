"""Read-only static lab preview. No API adapter, write route or mutation handler."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[4]
ENTRY = '/admin-portal-lab/families/F05-pipeline-user-project-hubs/V3/index.html'

class Preview(SimpleHTTPRequestHandler):
    def do_GET(self):
        parts = urlsplit(self.path)
        if parts.path == '/':
            self.send_response(302)
            self.send_header('Location', ENTRY + ('?' + parts.query if parts.query else ''))
            self.end_headers()
            return
        super().do_GET()

if __name__ == '__main__':
    print('Nestlancer F05 preview on 0.0.0.0:8131 — V3 Whole story', flush=True)
    ThreadingHTTPServer(('0.0.0.0', 8131), partial(Preview, directory=str(ROOT))).serve_forever()
