var Route = Route || {};
var View = View ||{};


$(document).ready(function(){

Route.all();
View.initialise();

});

View = {
  initialise: function() {
    $('#route-form').on('submit', function(e) {
      e.preventDefault();
      Route.create($(this).serialize());
    });
  }
}

Route = {
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