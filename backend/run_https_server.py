import sys
import http.server
import ssl

def run_https_server(port, certfile, keyfile):
    server_address = ('', port)
    
    httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
    
    httpd.socket = ssl.wrap_socket(httpd.socket, keyfile=keyfile, certfile=certfile, server_side=True)
    
    print(f"Serving on port {port} (HTTPS)...")
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python server.py <port> <certfile> <keyfile>")
        sys.exit(1)
    
    port = int(sys.argv[1])
    certfile = sys.argv[2]
    keyfile = sys.argv[3]
    
    run_https_server(port, certfile, keyfile)