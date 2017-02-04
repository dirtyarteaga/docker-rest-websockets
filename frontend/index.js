var express = require('express');
var app = express();
var http = require('http').Server(app);

// Allow user to access static files
app.use(express.static(__dirname + '/static'))

// Start web server
http.listen(3001, function() {
    console.log('listening on *:3001');
});