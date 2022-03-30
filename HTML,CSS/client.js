const websocket = require('ws');
const url = "ws://127.0.0.1:8080";
const ws = new websocket(url);

ws.on('open',function () {
    ws.send("Hello server");
    
})

ws.on('message',function (msg) {
    console.log("server: "+msg);
})