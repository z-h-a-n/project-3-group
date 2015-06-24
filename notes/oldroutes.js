
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