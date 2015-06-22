var Route = Route || {};
var View = View ||{};


$(document).ready(function(){

Route.all();
View.initialise();

});

var View = {
  initialise: function() {
    $.get('/routes', function(blogposts){
      $.each(routes, function(index, routes){
        View.render($('#route-template'), routes, $('#list-routes'));
      })
    })
  }
}

var Route = {
  all: function() {
    $.get('/routes', function(res) {
      var routes = JSON.parse(res)
      $.each(routes, function(index, route) {
        var template = $('#route-template').html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, route);
        $('#list-routes').append(rendered);
      })
    });
  }
}