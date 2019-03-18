const express = require('express'),
    { PORT } = require('../constants/CONSTANTS'),
    app = express(),
    http = require('http').Server(app),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path'),
    io = module.exports.io = require('socket.io')(http),
    socketManger = require('./sockets/socketManger');

app.use(bodyParser.json(), cors());
app.use(express.static(path.join(__dirname, '../../build')));
io.on('connection', socketManger);

app.get('/*', (res, req, next) => {
    try {
        res.sendFile(path.join(__dirname, '../../build/index.html'));
    } catch (error) {
        return next();
    }
});

http.listen(PORT, _ => {
    console.log(`listen on port ${PORT}`)
});