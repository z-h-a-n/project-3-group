var Route = Route || {};
var View = View || {};

$(document).ready(function(){
  Route.all();
});

var Route = {
  all: function(){
    $.get('/routes', function(routes){
      $.each(routes, function(index, route){
        View.render($('#route-template'), route, $('#list-routes'));
        createMarker(route);
        createLine(route);
      })
    })
  }
}

var View = {
  render: function(templateElement, object, parentElement){
    var template = templateElement.html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, object);
    parentElement.append(rendered);
  },
  initialize: function(){
    $('#route-form').on('submit', function(event){
      event.preventDefault();
      console.log($this);
    })
  }
}