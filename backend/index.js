var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 3000});

// Listen for Websockets and return response
wss.on('connection', function(ws) {
    ws.send('WebSocket: ' + new Date().toUTCString());
    ws.on('message', function(msg) {
        ws.send(msg);
        ws.send('WebSocket: ' + new Date().toUTCString());
    });
});
console.log('listening on *:3000');