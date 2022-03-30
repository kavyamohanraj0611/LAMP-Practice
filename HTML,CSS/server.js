const websocket = require('ws');

const wss = new websocket.Server({
    port:8080
})

wss.on('connection',function (socket) {
    console.log("connection ready");     // console.log("connection ready");

    socket.on('message',function (msg) {
        console.log("Client : "+msg);
        socket.send("Hi client");
    })
})