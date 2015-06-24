var express = require('express');

// These values are sent in from server.js, where we set them.
module.exports = function(app, db, router, routesRoute, routeRoute, placesRoute, placeRoute, commentsRoute, commentRoute){

  //  Routes
  app.get('/', function (req, res){
   console.log(req.query);
   res.render('index');
  });

  // Routes ROUTES - Think of Routes as flight ids..
  // Create Routes GET Route - Path(here is routesRoute) is defined in server.js.
  // Create endpoint /api/routes for GET.  
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
    route.startlat = req.body.startlat;
    route.startlong = req.body.startlong;
    route.endlat = req.body.endlat;
    route.endlong = req.body.endlong;
    route.lengthDist = req.body.lengthDist;
    route.lengthTime = req.body.lengthTime;
    route.places = req.body.places;
    // NEED TO FILL THESE OUT AS NEEDED
    // Save the route and check for errors
    route.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Route added', data: route });
    });
  });

  // Routes View route / for Edit/DELETE
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
      // Update the existing route 
      route.start = req.body.start;
      route.end = req.body.end;
      route.startlat = req.body.startlat;
      route.startlong = req.body.startlong;
      route.endlat = req.body.endlat;
      route.endlong = req.body.endlong;
      route.lengthDist = req.body.lengthDist;
      route.lengthTime = req.body.lengthTime;
      route.places = req.body.places;
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

  // PLACES ROUTES

  // Create Places GET Route
  // Create endpoint /api/routes/:id/places for GET. 
  placesRoute.get(function(req, res) {
    // Use the Place model to find all places
    db.Place.find(function(err, places) {
      if (err)
        res.send(err);
      res.json(places);
    });
  });

  // Create place POST Route
  // Create endpoint - /api/routes/:id/places - for POSTS
  placesRoute.post(function(req, res) {
    // Create a new instance of the Place model
    var place = new db.Place();
    // Set the place properties that came from the POST data
    place.name = req.body.name;
    place.latitude = req.body.latitude;
    place.longitude = req.body.longitude;
    place.comments = req.body.comments;  
    place.imageurl = req.body.imageurl;
    // Save the place and check for errors
    place.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Place added', data: place });
    });
  });

  // Places View route / for Edit/DELETE
  // Create endpoint /api/routes/:id/places/:place_id for GET
  placeRoute.get(function(req, res) {
    // Use the Place model to find a specific place
    db.Place.findById(req.params.place_id, function(err, place) {
      if (err)
        res.send(err);
      res.json(place);
    });
  });

  // Places Edit Route
  // Create endpoint /api/routes/:id/places/:place_id for PUT
  placeRoute.put(function(req, res) {
    // Use the Place model to find a specific place
    db.Place.findById(req.params.place_id, function(err, place) {
      if (err)
        res.send(err);
      // Update the existing place 
      place.name = req.body.name;
      place.latitude = req.body.latitude;
      place.longitude = req.body.longitude;
      place.comments = req.body.comments;
      place.imageurl = req.body.imageurl;
      // Save the place and check for errors
      place.save(function(err) {
        if (err)
          res.send(err);
        res.json(place);
      });
    });
  });

  // Create endpoint /api/routes/:id/places/:place_id for DELETE
  placeRoute.delete(function(req, res) {
    // Use the Place model to find a specific place and remove it
    db.Place.findByIdAndRemove(req.params.place_id, function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Place removed from the database!' });
    });
  });

  // COMMENTS Routes
  // Create Comments GET Route
  // Create endpoint /api/routes/:id/places/:place_id/comments for GET.
  placesRoute.get(function(req, res) {  
    // Use the Comment model to find all comments
    db.Comment.find(function(err, comments) {
      if (err)
        res.send(err);
      res.json(comments);
    });
  });

  // Create comment POST Route
  // Create endpoint - /api/routes/:id/places/:place_id/comments - for POSTS
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

  // Create endpoint /api/routes/:id/places/:place_id/comments/:comment_id for GET
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
      // Update the existing comment 
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

  // Create endpoint /api/routes/:id/places/:place_id/comments/:comment_id for DELETE
  commentRoute.delete(function(req, res) {
    // Use the Comment model to find a specific comment and remove it
    db.Comment.findByIdAndRemove(req.params.comment_id, function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Comment removed from the database!' });
    });
  });

// Close import(module.exports)
}
