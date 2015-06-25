var View = View || {};
var Route = Route || {};

$(document).ready(function(){
  View.initialize();
});

var Route = {
  all: function(){
    $.get('/routes', function(routes){
      console.log(routes);
      $.each(routes, function(index, route){
        View.render($('#route-template'), route, $('#list-routes'));
        showLine(route);
      })
    })
  },
  show: function(routeParams){
    $.get('/routes', routeParams)
    .done(function(route) {
      console.log(route);
      showLine(route);
      $("path").attr("data-id", route._id);
      Place.all();
    })
  }
}

View = {
  initialize: function(){
    $('#route-form').on('submit', function(e){
      e.preventDefault();
      Route.show($(this).serialize());
      console.log($(this).serialize());
    });
  },


  render: function(templateElement, object, parentElement){
    var template = templateElement.html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, object);
    parentElement.append(rendered);
  }
}