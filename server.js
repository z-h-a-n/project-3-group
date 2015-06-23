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

//  Views / File system(?)
app.set('views', './views');
app.set('view engine', 'ejs');

//  Start Server
var server = http.createServer(app);
server.listen(process.env.PORT || 3000);

//Routing
var placesRoute = router.route('/places');
var commentsRoute = router.route('/comments');
// // Create a new route with the /places/:place_id prefix
var placeRoute = router.route('/places/:place_id');

require('./app/routes.js')(app, placesRoute, commentsRoute, db, router)

app.use('/app', router)
// Register all our routes with /api
app.use('/api', router);



