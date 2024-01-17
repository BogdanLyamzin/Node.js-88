import { WebSocketServer } from "ws";

const wsServer = new WebSocketServer({
    port: 5000,
});

const socketList = [];

wsServer.on("connection", (socket) => {
    // console.log("New frontend connected")
    socket.send("Welcome to web-socket server");

    socketList.forEach(item => item.send(`Now we have ${socketList.length + 1} members`));

    socketList.push(socket);
})