"""Additive preview server. Does not alter the approved F05 preview script."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from functools import partial
ROOT = Path(__file__).resolve().parents[5]
class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.send_response(302)
            self.send_header('Location', '/admin-portal-lab/families/F05-pipeline-user-project-hubs/V6/index.html')
            self.end_headers()
        else:
            super().do_GET()
if __name__ == '__main__':
    print('V6 Evidence desk + V7 Client casebook: http://0.0.0.0:8132', flush=True)
    ThreadingHTTPServer(('0.0.0.0', 8132), partial(Handler, directory=str(ROOT))).serve_forever()
