//dependencies
const express = require('express');
const { appendFile } = require('fs');
const path = require('path');

//variables and constants
const server = express();

//setting
server.set('port', 3000);
server.set('views', path.join(__dirname, 'views'));
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'ejs');

//middlewares

//routes
server.use(require('./routes/index.js'));

//static files
server.use(express.static(path.join(__dirname, 'public')))

//listening the server
server.listen(server.get('port'), ()=>{
    console.log("server listening at port " + server.get('port'));
});