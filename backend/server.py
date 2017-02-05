
import datetime
import asyncio
import websockets

# websockets server
async def handler(websocket, path):
    await websocket.send("WebSocket: " + datetime.datetime.utcnow().isoformat())
    while True:
        message = await websocket.recv()
        await websocket.send(message)
        await websocket.send("WebSocket: " + datetime.datetime.utcnow().isoformat())

start_server = websockets.serve(handler, '0.0.0.0', 3000)
print('websockets localhost:3000');

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()