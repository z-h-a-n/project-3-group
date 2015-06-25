// Depedencies
var express = require('express');
var http = require('http');
var bodyParser = require ('body-parser');
var db = require('./models');


// This is probably redundant
var $ = require('jquery')(require("jsdom").jsdom().parentWindow);

//  Express
var app = express();
var router = express.Router();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//  Views / ejs Templates
app.set('views', './views');
app.set('view engine', 'ejs');

// Twitter
var Twit = require('twit')

var twitter = new Twit({
   consumer_key: process.env.TWITTER_CONSUMER_KEY,     
   consumer_secret: process.env.TWITTER_CONSUMER_SECRET, 
   access_token: process.env.TWITTER_ACCESS_TOKEN,
   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET 
});

// Assign what you want the lat long to be. Search is run in app.js.  Radius is set to 100miles in app.js.
var tweetLatitude = '37.781157'
var tweetLongitude = '-122.398720'
// twitter.searchTwitter(tweetLatitude, tweetLongitude)

// Should return a value called tweets.

//  Routes
app.get('/', function (req, res){
 // console.log(req.query);
  console.log('this should be the root');
  var radius = '100mi';
  var gofind = twitter.get('search/tweets', { q: ' ', geocode: tweetLatitude +',' + tweetLongitude + ',' + radius, }, function(err, data, response) {
    console.log(data, JSON.stringify(data))
    res.render('index', {tweets: data});
    // need to use res.render here instead?
  });

});

// app.get('/twitter'), function (req, res){
//   console.log('hello')
//   var tweetLatitude = req.body.lat 
//   var tweetLongitude = req.body.lng
  // var radius = '100mi';
  // var gofind = twitter.get('search/tweets', { q: ' ', geocode: tweetLatitude +',' + tweetLongitude + ',' + radius, }, function(err, data, response) {
  //   console.log(data, JSON.stringify(data))
  //   res.send(data);
    
  // });
// };

app.get("/routes/:id/edit", function (req, res) {
  console.log(req.params.id);
  db.Route.findById(req.params.id, function (err, route){
    // console.log(route);
    res.render('edit', {route:route})
 });
});

// display the route entered in the form
app.get("/routes", function (req, res){
  if(req.query['origin'] && req.query['destination']) {
    db.Route.findOne({start: req.query.origin, end: req.query.destination}, function (err, route) {
      res.send(route);
    });
  } else {
    db.Route.find({}, function (err, routes){
    // console.log(routes);
      res.send(routes)
    });
  }
});

app.post('/tweets', function(req, res){
  var tweetLatitude = req.body.lat 
  var tweetLongitude = req.body.lng
  var radius = '100mi';
  var gofind = twitter.get('search/tweets', { q: ' ', geocode: tweetLatitude +',' + tweetLongitude + ',' + radius, }, function(err, data, response) {
    console.log(data, JSON.stringify(data))
    res.send(data); 
  });
})

// from api
app.post("/routes/:id/update", function (req, res) {
  console.log(req.params.id);
  db.Route.findById(req.params.id, function (err, route){
    // console.log(route);
    res.render('edit', {route:route})
 });
});

// Routes Post Path from api
app.post("/routes/new", function (req, res){
 db.Route.find({}, function(err, routes){
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

// PLACES ROUTES
// Places Index Path
app.get("/places", function (req, res){
	// console.log(req.params.id);
  db.Place.find({}, function (err, places){
    if(err)
      console.log(error)
  res.render('places')
 });
});

// display markers belong to the same route places.js
app.get("/api/routes/:id/places", function (req, res){
  db.Route.find({_id: req.params.id}, function (err, route){
  	res.send(route[0].places);
 });
});

// app.post("/api/routes/:id/places", function (req, res){
// 	db.Route.find({_id: req.params.id}, function(err, route) {
// 		db.Place.create({longitude: req.body.lng, latitude: req.body.lat}, function(err, place){
// 			route[0].places.push(place);
// 			route[0].save();
// 		});
// 	});
// });



//  Start Server
var server = http.createServer(app);
server.listen(process.env.PORT || 3000);

//Routing
// Create a new route with the prefix /routes for GET and POST
var routesRoute = router.route('/routes');
// Create a new route with the /routes/:route_id prefix
var routeRoute = router.route('/routes/:route_id');
// var routeRoute = router.route('/routes/:route_id');

// This maybe should be in server.js as well but seems ok?

var placesRoute = router.route('/routes/:route_id/places');
var placeRoute = router.route('/routes/:route_id/places/:place_id');

var commentsRoute = router.route('/routes/:route_id/places/:place_id/comments');
var commentRoute = router.route('/routes/:route_id/places/:place_id/comments/:comment_id');

require('./app/routes.js')(app, db, router, routesRoute, routeRoute, placesRoute, placeRoute, commentsRoute, commentRoute, twitter, tweetLatitude, tweetLongitude);

// Sending the needed stuff to routes.js

// This line may be defunct but not 100% sure on that -A
app.use('/app', router);
// Register all our routes with /api
app.use('/api', router);

