// websockets
var form = document.getElementById('form');
var message = document.getElementById('message');
var messages = document.getElementById('messages');
var ws = new WebSocket('ws://localhost:3000/');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    ws.send(message.value);
    message.value = '';
});
ws.onmessage = function (event) {
    console.log('onmessage', event);
    messages.innerHTML += '<li>' + event.data + '</li>';
};

// get
//var get = document.getElementById('get');
//var xhr = new XMLHttpRequest();
//xhr.onload = function() {
//    get.innerHTML += xhr.responseText;
//};
//xhr.open('GET', 'http://localhost:3000/message');
//xhr.send();