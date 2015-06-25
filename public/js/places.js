
var View = View || {};
var Place = Place || {};

var Place = {
  all: function(){
    $.get('/api/routes/' + $("path").attr('data-id') + '/places', 
      function(places){
      showMarker(places);
    })    
  },
  create: function(lng, lat){
    var id = $("path").attr('data-id')
    $.post('/api/routes/' + id + '/places', {lng:lng, lat:lat})     
  },
  show: function(lng, lat) {
    console.log(lng, lat);
    var id = $("path").attr('data-id')
    $.get('/api/routes/' + id + '/places', {lng:lng, lat:lat})
  }
}

View = {
  initialize: function(){
    $('#route-form').on('submit', function(e){
      e.preventDefault();
      // console.log($this);
      Route.create($(this).serialize());
    });
   
  },

  render: function(templateElement, object, parentElement){
    var template = templateElement.html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, object);
    parentElement.append(rendered);
  }
}

$(document).ready(function(){
  // console.log("inside public/js/places.js")
  View.initialize();
});




