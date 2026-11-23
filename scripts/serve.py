#!/usr/bin/env python3
"""Static server with no-store headers so edits always show after reload."""
import http.server, socketserver, os

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

class ReusableThreadingTCPServer(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True
    allow_reuse_port = True

if __name__ == "__main__":
    os.chdir(os.path.join(os.path.dirname(__file__), "..", "dist"))
    with ReusableThreadingTCPServer(("", 4173), NoCacheHandler) as httpd:
        print("Serving dist/ at http://localhost:4173 with no-store headers")
        httpd.serve_forever()
