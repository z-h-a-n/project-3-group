
L.mapbox.accessToken = 'pk.eyJ1IjoiemhhbnciLCJhIjoiYzcwMjAwYzQ4MWYxZGQyMjkxMTFkYWQ0M2YxMjcwN2YifQ.q_Daj_EF2x_eGq6dl_jORw';



function showSidebar() {
  console.log('hitting show sidebar.');
   
 };


function hideRetrievalButton(){
 
};



var map = L.mapbox.map('map', null, {
      maxZoom: 18
  }).setView([30, 0], 2);

var layers = {
    Dark: L.mapbox.tileLayer('mapbox.dark'),
    Satellite: L.mapbox.tileLayer('mapbox.satellite')
};

layers.Dark.addTo(map);

map.on('zoomend', zoom);
function zoom(e) {
	if (map._zoom > 10) {
		layers.Satellite.addTo(map);
	} else {
		map.removeLayer(layers.Satellite);
	}
}

L.control.fullscreen().addTo(map);

function showLine (route) {
	var startX = route.startlong;
	var startY = route.startlat; 
	var endX = route.endlong;
	var endY = route.endlat; 

	var start = { x: startX, y: startY}; 
	var end = { x: endX, y: endY };
	var generator = new arc.GreatCircle(start, end, { name: '' });
	var line = generator.Arc(100, { offset: 10 });
	L.geoJson(line.json()).addTo(map);
};


//this function is called in Place.all
function showMarker (places) {
	for (i=0; i<places.length; i++) {
		console.log(places[i].longitude);
		console.log(places[i].latitude);
		var x = places[i].longitude;
		var y = places[i].latitude;
		var title = places[i].name;
		var message = places[i].message;

		var pin = L.mapbox.featureLayer({
	    type: 'Feature',
	    geometry: {
	        type: 'Point',
	        coordinates: [
	          x,
	          y 
	        ]
	    },
	    properties: {
	        title: title,
	        description: message,
	        'marker-size': 'small',
	        'marker-color': '#FFFFFF',
	        'marker-symbol': 'cross'
	    }
		}).addTo(map);


		  pin.on('click', function(e) {
        console.log('pinClick')
  			$(".navbar-header").show(function() {
          $('.navbar-header').css('right', '0px')
          $('#show-button').hide();    
          });  
  			Place.show(e.latlng.lng, e.latlng.lat);
        // console.log(searchTwitter(e.latlng.lat,e.latlng.lng));
        twitterRoute.all(e.latlng.lng, e.latlng.lat);
        $('#tweetbox').show();
        $('#fillerdiv').hide();
        

              
		});
	}
};


// create marker
map.on('click', function(e) {
	Place.create(e.latlng.lng, e.latlng.lat);
	L.mapbox.featureLayer({
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [
        	e.latlng.lng,
          e.latlng.lat
        ]
	  },
	  properties: {
	      title: 'click to add info',
	      // description: 'placeholder map.js',
	      'marker-size': 'small',
	      'marker-color': '#FFFFFF',
	      'marker-symbol': 'cross'
	  }

	}).addTo(map)
		.openPopup();


});




// create custom marker on layeradd
map.on('layeradd', function(e){

	console.log("layeradd");

	var marker = e.layer,
      feature = marker.feature;

  var popupContent ='<form id="pin-form"><input class="popupInput" type="text" name="title" placeholder=" Title"><input class="popupInput" type="text" name="message" placeholder="Message"><button  class="popupInput" >Submit</button></form>';

  e.layer.bindPopup(popupContent,{
      closeButton: true
  });
  // debugger;

})



