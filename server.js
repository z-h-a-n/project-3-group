var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
server.listen(process.env.PORT || 3000);
var bodyParser = require ('body-parser');
var db = require('./models');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
 res.render('index');
});

app.get("/routes", function (req, res){
 db.Route.find({}, function(err, routes){
   res.send(routes)
 });
});

app.post("/routes", function (req, res){
  db.Route.create(req.body, function(err, routes){
  });
  var newPost = req.body;
  routes.length >= 1 ? newRoute.id = routes[routes.length -1].id +1 : newRoute.id = 0;
  routes.push(newRoute);
  res.send(JSON.stringify(newRoute));
});

