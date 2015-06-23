
var Route = Route || {};
var View = View || {};
var Place = Place || {};

$(document).ready(function(){
  Route.all();
  Place.all();
  // View.initialise();
});

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

var Place = {
  all: function(){
    $.get('/places', function(places){
      $.each(places, function(index, place){
        View.render($('#place-template'), place, $('#list-places'));        
      })
    })
  }
}




