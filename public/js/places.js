
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
      L.marker([place[0].latitude, place[0].longitude]).bindLabel(place[0].name, place[0].message).addTo(map);
      $("img[src='//api.tiles.mapbox.com/mapbox.js/v2.2.0/images/marker-icon-2x.png']").css("opacity", 0);
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
      $('div.leaflet-popup').hide()
      // Place.all();
      // place.show();
    });
  },

  render: function(templateElement, object, parentElement){
    var template = templateElement.html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, object);
    parentElement.append(rendered);
  }
}