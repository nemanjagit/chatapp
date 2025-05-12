import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
    }
});

export function getRecieverSocketId(userId){
    return userSocketMap[userId];
}

//store online users
const userSocketMap = {}; // {userId: socketId}


io.on("connection", (socket) => {
    console.log("New client connected: " + socket.id);
    const userId = socket.handshake.query.userId;
    if (userId) {
        userSocketMap[userId] = socket.id;
    }
    // send event to all clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        // remove user from online users
        delete userSocketMap[userId];
        // send event to all clients
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
        console.log("Client disconnected: "+ socket.id);
    });
});

export {io, app, server};