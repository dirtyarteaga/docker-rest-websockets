var app = require('express')();
var http = require('http').Server(app);

// Allow cross origin requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Return json response
app.get('*', function(req, res) {
    res.json({message: 'JSON: ' + new Date().toUTCString()});
});

// Start web server
http.listen(3000, function() {
    console.log('listening on *:3000');
});