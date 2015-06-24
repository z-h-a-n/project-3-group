// Depedencies
var express = require('express');
var http = require('http');
var bodyParser = require ('body-parser');
var db = require('./models');

//  Express
var app = express();
var router = express.Router();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//  Views / ejs Templates
app.set('views', './views');
app.set('view engine', 'ejs');

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

require('./app/routes.js')(app, db, router, routesRoute, routeRoute, placesRoute, placeRoute, commentsRoute, commentRoute);
// Sending the needed stuff to routes.js

// This line may be defunct but not 100% sure on that -A
app.use('/app', router);
// Register all our routes with /api
app.use('/api', router);
