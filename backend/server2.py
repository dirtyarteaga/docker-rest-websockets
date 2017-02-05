import http.server
import socketserver

# http server
Handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(('0.0.0.0', 3000), Handler)
print('http localhost:3000');
httpd.serve_forever()
