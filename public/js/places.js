
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
      console.log('marker with tooltip created')
    //   $('#map').attr("data-id",'button.popupInput', place._id)

    });
  },
  show: function(lng, lat) {
    var id = $("path").attr('data-id')
    $.get('/api/routes/' + id + '/places', {lng:lng, lat:lat})
  },
  update: function(placeParams, lng, lat) {
    // debugger;
    console.log('clicked');
  }
}

PlaceView = {
  initialize: function(){
    $('#map').on('submit', 'form#pin-form', function(e) {
      e.preventDefault();
      Place.update($(this).serialize());
      Place.show();
    });
  },

  render: function(templateElement, object, parentElement){
    var template = templateElement.html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, object);
    parentElement.append(rendered);
  }
}