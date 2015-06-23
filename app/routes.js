var express = require('express');
module.exports = function(app, placesRoute, commentsRoute, db, router, placeRoute, commentRoute){

//  Routes
app.get('/', function (req, res){
 console.log(req.query);
 res.render('index');
});

app.use('/app', router)
// Register all our routes with /api
app.use('/api', router);

// NEW ROUTE Routes

// Routes ROUTES
// Create a new route with the prefix /routes for GET and POST
var routesRoute = router.route('/routes');

// Create Routes GET Route
// Create endpoint /api/routes for GET.  Relative to route route defined above
routesRoute.get(function(req, res) {
  // Use the Route model to find all routes
  db.Route.find(function(err, routes) {
    if (err)
      res.send(err);
    res.json(routes);
  });
});

// Create route POST Route
// Create endpoint - /api/routes - for POSTS
routesRoute.post(function(req, res) {
  // Create a new instance of the Route model
  var route = new db.Route();
  // Set the route properties that came from the POST data
  route.start = req.body.start;
  route.end = req.body.end;
  // NEED TO FILL THESE OUT AS NEEDED
  // Save the route and check for errors
  route.save(function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Route added', data: route });
  });
});

// Routes View route / for Edit/DELETE

// Create a new route with the /routes/:route_id prefix
var routeRoute = router.route('/routes/:route_id');

// Create endpoint /api/routes/:route_id for GET
routeRoute.get(function(req, res) {
  // Use the Route model to find a specific route
  db.Route.findById(req.params.route_id, function(err, route) {
    if (err)
      res.send(err);

    res.json(route);
  });
});

// Routes Edit Route
// Create endpoint /api/routes/:route_id for PUT
routeRoute.put(function(req, res) {
  // Use the Route model to find a specific route
  db.Route.findById(req.params.route_id, function(err, route) {
    if (err)
      res.send(err);
    // Update the existing route quantity
    route.start = req.body.start;
    route.end = req.body.end;
    // PUT ALL THE PARAMS HERE
    // Save the route and check for errors
    route.save(function(err) {
      if (err)
        res.send(err);
      res.json(route);
    });
  });
});

// Create endpoint /api/routes/:route_id for DELETE
routeRoute.delete(function(req, res) {
  // Use the Route model to find a specific route and remove it
  db.Route.findByIdAndRemove(req.params.route_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Route removed from the database!' });
  });
});

// OLD ROUTES KEEP UNTILL WORKING - Delete when new routes implemented
// // Routes Index Path
// app.get("/routes", function (req, res){
//   db.Route.find({}, function (err, routes){
//     console.log(routes);
//     res.send(routes)
//  });
// });

// app.get("/routes/:id/edit", function (req, res) {
//   console.log(req.params.id);
//   db.Route.findById(req.params.id, function (err, route){
//     console.log(route);
//     res.render('edit', {route:route})
//  });
// });

// app.post("/route", function (req, res){
//   db.Route.findOne({start: req.body.origin, end: req.body.destination}, function (err, route) {
//       res.send(route);
//       console.log(route);
//   });
// });

// app.post("/routes/:id/update", function (req, res) {
//   console.log(req.params.id);
//   db.Route.findById(req.params.id, function (err, route){
//     console.log(route);
//     res.render('edit', {route:route})
//  });
// });

// // Routes Post Path
// app.post("/routes/new", function (req, res){
//   db.Route.create(req.body, function(err, routes){
//   });
//   var newRoute = req.body;
//   routes.length >= 1 ? newRoute.id = routes[routes.length -1].id +1 : newRoute.id = 0;
//   routes.push(newRoute);
//   res.send(JSON.stringify(newRoute));
//   // I think maybe this is creating a url with 2 params because it is being created with only 2 params.?  Would it make a different url if it had more?
// });

// PLACES ROUTES
// Create a new route with the prefix /places for GET and POST
// var placesRoute = router.route('routes/:route_id/places');

// Create Places GET Route
// Create endpoint /api/places for GET.  Relative to place route defined above
placesRoute.get(function(req, res) {
  // Use the Place model to find all places
  db.Place.find(function(err, places) {
    if (err)
      res.send(err);
    res.json(places);
  });
});

// Create place POST Route
// Create endpoint - /api/places - for POSTS
placesRoute.post(function(req, res) {
  // Create a new instance of the Place model
  var place = new db.Place();
  // Set the place properties that came from the POST data
  place.username = req.body.username;
  place.body = req.body.body;
  place.createdtime = req.body.createdtime;
  // Save the place and check for errors
  place.save(function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Place added', data: place });
  });
});

// Places View route / for Edit/DELETE

// Create a new route with the /places/:place_id prefix
// var placeRoute = router.route('routes/:route_id/places/:place_id');

// Create endpoint /api/places/:place_id for GET
placeRoute.get(function(req, res) {
  // Use the Place model to find a specific place
  db.Place.findById(req.params.place_id, function(err, place) {
    if (err)
      res.send(err);

    res.json(place);
  });
});

// Places Edit Route
// Create endpoint /api/places/:place_id for PUT
placeRoute.put(function(req, res) {
  // Use the Place model to find a specific place
  db.Place.findById(req.params.place_id, function(err, place) {
    if (err)
      res.send(err);
    // Update the existing place quantity
    place.username = req.body.username;
    place.body = req.body.body;
    place.createdtime = req.body.createdtime;
    // Save the place and check for errors
    place.save(function(err) {
      if (err)
        res.send(err);
      res.json(place);
    });
  });
});

// Create endpoint /api/places/:place_id for DELETE
placeRoute.delete(function(req, res) {
  // Use the Place model to find a specific place and remove it
  db.Place.findByIdAndRemove(req.params.place_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Place removed from the database!' });
  });
});

// COMMENTS Routes

// Create a new route with the prefix /comments for GET and POST

// var commentsRoute = router.route('/comments');

// Create Comments GET Route
// Create endpoint /api/comments for GET.  Relative to comment route defined above
commentsRoute.get(function(req, res) {
  // Use the Comment model to find all comments
  db.Comment.find(function(err, comments) {
    if (err)
      res.send(err);
    res.json(comments);
  });
});

// Create comment POST Route
// Create endpoint - /api/comments - for POSTS
commentsRoute.post(function(req, res) {
  // Create a new instance of the Comment model
  var comment = new db.Comment();
  // Set the comment properties that came from the POST data
  comment.username = req.body.username;
  comment.body = req.body.body;
  comment.createdtime = req.body.createdtime;
  // Save the comment and check for errors
  comment.save(function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Comment added', data: comment });
  });
});


// Comments View route / for Edit/DELETE

// Create a new route with the /comments/:comment_id prefix
// var commentRoute = router.route('/comments/:comment_id');

// Create endpoint /api/comments/:comment_id for GET
commentRoute.get(function(req, res) {
  // Use the Comment model to find a specific comment
  db.Comment.findById(req.params.comment_id, function(err, comment) {
    if (err)
      res.send(err);

    res.json(comment);
  });
});

// Comments Edit Route
// Create endpoint /api/comments/:comment_id for PUT
commentRoute.put(function(req, res) {
  // Use the Comment model to find a specific comment
  db.Comment.findById(req.params.comment_id, function(err, comment) {
    if (err)
      res.send(err);
    // Update the existing comment quantity
    comment.username = req.body.username;
    comment.body = req.body.body;
    comment.createdtime = req.body.createdtime;
    // Save the comment and check for errors
    comment.save(function(err) {
      if (err)
        res.send(err);
      res.json(comment);
    });
  });
});

// Create endpoint /api/comments/:comment_id for DELETE
commentRoute.delete(function(req, res) {
  // Use the Comment model to find a specific comment and remove it
  db.Comment.findByIdAndRemove(req.params.comment_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Comment removed from the database!' });
  });
});

// Close import
}
