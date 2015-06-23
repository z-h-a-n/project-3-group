

var View = View || {};
var Route = Route || {};

$(document).ready(function(){
  console.log("Document public/js/routes.js Ready")
  Route.all();
});

var Route = {
  all: function(){
    $.get('/routes', function(routes){
      console.log(routes);
      $.each(routes, function(index, route){
        View.render($('#route-template'), route, $('#list-routes'));
        createMarker(route);
        createLine(route);
      })
    })
  }
}


View = {
  initialize: function(){
    $('#route-form').on('submit', function(e){
      e.preventDefault();
      console.log($this);
      Route.create($(this).serialize());
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