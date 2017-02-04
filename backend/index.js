var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Allow cross origin requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Return json response
app.get('/', function(req, res) {
    res.json({message: 'JSON: ' + new Date().toUTCString()});
});

// Listen for Websockets and return response
io.on('connection', function(socket) {
    io.emit('message', 'WebSocket: ' + new Date().toUTCString());
    socket.on('message', function(msg) {
        io.emit('message', msg);
        io.emit('message', 'WebSocket: ' + new Date().toUTCString());
    });
});

// Start web server
http.listen(3000, function() {
    console.log('listening on *:3000');
});