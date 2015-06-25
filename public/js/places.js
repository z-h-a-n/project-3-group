
var PlaceView = PlaceView || {};
var Place = Place || {};

$(document).ready(function(){
  // console.log("inside public/js/places.js")
  PlaceView.initialize();
});

Place = {
  all: function(){
    $.get('/api/routes/' + $("path").attr('data-id') + '/places', 
      function(places){
      showMarker(places);
    })    
  },
  create: function(lng, lat){
    var id = $("path").attr('data-id');
    $.post('/api/routes/' + id + '/places', {lng:lng, lat:lat}).done(function(place) {
      $('img').last().attr("data-id", place._id)
    });
  },
  show: function(lng, lat) {
    var id = $("path").attr('data-id')
    $.get('/api/routes/' + id + '/places', {lng:lng, lat:lat})
  },
  update: function(placeParams) {
    var id = $("path").attr('data-id');
    var markerId = $("img").last().attr('data-id')
    $.post('/api/routes/' + id + '/places/' + markerId, {placeParams}).done(function(place) { 
      // debugger;
      console.log(place[0].name);
      console.log(place[0].title); 
    });
  }
}

PlaceView = {
  initialize: function(){
    $('#map').on('submit', 'form#pin-form', function(e) {
      e.preventDefault();
      Place.update($(this).serialize());
      Place.all();
    });
  },

  render: function(templateElement, object, parentElement){
    var template = templateElement.html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, object);
    parentElement.append(rendered);
  }
}