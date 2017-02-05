import datetime
from django.http import HttpResponse
from channels.handler import AsgiHandler

# Connected to websocket.connect
def ws_add(message):
    message.reply_channel.send({"text": "WebSocket: " + datetime.datetime.utcnow().isoformat()})

# Connected to websocket.receive
def ws_message(message):
    message.reply_channel.send({"text": message.content['text']})
    message.reply_channel.send({"text": "WebSocket: " + datetime.datetime.utcnow().isoformat()})

# Connected to websocket.disconnect
def ws_disconnect(message):
    print('disconnected!')
    