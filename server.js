// from rags to riches

const express = require('express');
const path = require('path');

const server = express();


server.use(express.json());
server.use(express.urlencoded({extended: true}));


server.get('/', (req, res, next) => {
    res.send("Hello Reaped");
});

server.use('/api', require('./routes/api').route)    
server.use('/', express.static(path.join(__dirname, 'public')))


server.listen(3000, (req, res, next) => {
    console.log("Server started on port https://localhost:3000")
});