
var View = View || {};
var Place = Place || {};

$(document).ready(function(){
 
  console.log("inside public/js/places.js")

  Place.all();
  // View.initialise();
});

var Place = {
  all: function(){
    console.log('place var is working')
    $.get('/api/places', function(places){
      $.each(places, function(index, place){
        View.render($('#place-template'), place, $('#list-places'));        
      })
    console.log(places)
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