// Depedencies
var express = require('express');
var http = require('http');
var bodyParser = require ('body-parser');
var db = require('./models');

//  Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//  Views / File system(?)
app.set('views', './views');
app.set('view engine', 'ejs');

//  Start Server
var server = http.createServer(app);
server.listen(process.env.PORT || 3000);

//  Routes
app.get('/', function (req, res){
 res.render('index');
});

// Places Index Path
app.get("/places", function (req, res){
  db.Place.find({}, function (err, places){
    if(err)
      console.log(error)
  res.send(places)
 });
});

// Routes index Path
app.get("/routes", function (req, res){
  db.Route.find({}, function (err, routes){
  console.log(routes);
  res.send(routes)
 });
});

app.post("/routes", function (req, res){
  db.Route.create(req.body, function(err, routes){
  });
  var newRoute = req.body;
  routes.length >= 1 ? newRoute.id = routes[routes.length -1].id +1 : newRoute.id = 0;
  routes.push(newRoute);
  res.send(JSON.stringify(newRoute));
});

