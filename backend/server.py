from flask import Flask
from flask_sockets import Sockets


app = Flask(__name__)
sockets = Sockets(app)


@app.route('/')
def hello():
    return 'Hello World!'

@sockets.route('/')
def echo_socket(ws):
    # on connect

    # while connected
    while True:
        message = ws.receive()
        if message is None:
        # socket has closed/errored
            break
        for c in ws_conns:
            c.send(message)

    # disconnected
    ws.close()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)

# or use
# gunicorn -k flask_sockets.worker server:app