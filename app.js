const dgram = require('dgram');
const express = require('express');

const app = express();

const port = 3000;

const udpSocket = dgram.createSocket('udp4');

udpSocket.on('message', (msg, info) => {
    console.log(`Mensaje: ${msg.toString()}Info: ${info.address}\n `);
});

udpSocket.on('listening', () => {
    const address = udpSocket.address();
    console.log(`Escuchando UDP en : ${address.address}:${address.port}`);
});

udpSocket.bind(port);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});