var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
server.listen(process.env.PORT || 3000);
var bodyParser = require ('body-parser');
var db = require('./models');

