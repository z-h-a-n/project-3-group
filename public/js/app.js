var Route = Route || {};
var Place = Place || {};
var View = View || {};

$(document).ready(function(){
  // Route.all();
  View.initialize();
});

var Route = {
  all: function(){
    $.get('/routes', function(routes){
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

var View = {
  initialize: function(){
    $('#route-form').on('submit', function(e){
      e.preventDefault();
      Route.show($(this).serialize());
    });
  },
  render: function(templateElement, object, parentElement){
    var template = templateElement.html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, object);
    parentElement.append(rendered);
  }
}