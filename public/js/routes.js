// The routes object/model might be better named flight id.

var View = View || {};
var Route = Route || {};

$(document).ready(function(){
  console.log("Document public/js/routes.js Ready")
  // Route.all();
  View.initialize();
});

var Route = {
  all: function(){
    $.get('/routes', function(routes){
      console.log(routes);
      $.each(routes, function(index, route){
        View.render($('#route-template'), route, $('#list-routes'));
        showMarker(route);
        showLine(route);
      })
    })
  },
  show: function(routeParams){
    $.post('/route', routeParams)
    .done(function(route) {
      console.log(route);
      showLine(route);
    })
  }
}


View = {
  initialize: function(){
    $('#route-form').on('submit', function(e){
      e.preventDefault();
      console.log($(this));
      // Route.create($(this).serialize());
      Route.show($(this).serialize());
    });
    // Event delegation - Need to talk to TA about this
    // $('#route-ul').on('click', '.NAMETHIS', function(e) {
    //   route.delete($(this).data('id'));
    // });
  },

  render: function(templateElement, object, parentElement){
    var template = templateElement.html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, object);
    parentElement.append(rendered);
  }
}