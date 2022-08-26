import express from 'express';
import http from 'http';
import * as dotenv from 'dotenv';
import { Server } from 'socket.io';
import { handleTransferEvent } from './handler';

dotenv.config()
const app = express();
const server = http.createServer(app);
const socket = new Server(server);

server.listen(3000, async () => {
    await handleTransferEvent(socket);

    socket.on('connection', () => {
        console.log("client connected")
    });
});