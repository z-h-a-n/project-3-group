
L.mapbox.accessToken = 'pk.eyJ1IjoiemhhbnciLCJhIjoiYzcwMjAwYzQ4MWYxZGQyMjkxMTFkYWQ0M2YxMjcwN2YifQ.q_Daj_EF2x_eGq6dl_jORw';

// var map = L.mapbox.map('map', 'mapbox.dark').setView([30, 0], 2);

var map = L.mapbox.map('map', null, {
      maxZoom: 18
  }).setView([30, 0], 2);

map.panBy([-100, 0]); 


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
	var pairs = [start, end];
	var halfway = (Math.round(((startX + endX) /2)));
	

	function obj(ll) { return { y: ll[start], x: ll[end] }; }

		for (var i = 0; i < pairs.length; i++) 
			var generator = new arc.GreatCircle(start, end);
			var line = generator.Arc(100, { offset: 10 });
			var newLine = L.polyline(line.geometries[0].coords.map(function(c) {
        return c.reverse();
    }), {
        color: '#fff',
        weight: 1,
        opacity: 0.5
    })
    .addTo(map);

    var totalLength = newLine._path.getTotalLength();
    console.log('totalLength: ' + totalLength)
    console.log('newLine._path: ' + newLine._path)
    newLine._path.classList.add('path-start');
    newLine._path.style.strokeDashoffset = totalLength;
    newLine._path.style.strokeDasharray = totalLength;

    setTimeout((function(path) {
      return function() {
          path.style.strokeDashoffset = 0;
      };
    })(newLine._path), i * 100);

 
	
	map.panBy([halfway, 0]); 

};



function showMarker (places) {
	for (i=0; i<places.length; i++) {
	console.log(places[i].longitude);
	console.log(places[i].latitude);
	var x = places[i].longitude;
	var y = places[i].latitude;
	var title = places[i].name;

		L.mapbox.featureLayer({
	    // this feature is in the GeoJSON format: see geojson.org
	    // for the full specification
	    type: 'Feature',
	    geometry: {
	        type: 'Point',
	        // coordinates here are in longitude, latitude order because
	        // x, y is the standard for GeoJSON and many formats
	        coordinates: [
	          x,
	          y 
	        ]
	    },
	    properties: {
	        title: title,
	        description: '',
	        // one can customize markers by adding simplestyle properties
	        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
	        'marker-size': 'small',
	        'marker-color': '#FFFFFF',
	        'marker-symbol': 'cross'
	    }
		}).bindPopup('<button class="trigger">delete</button>')
			.addTo(map);
	}
};

map.on('click', function(e) {
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
	      title: 'placeholder',
	      description: 'placeholder map.js',
	      'marker-size': 'small',
	      'marker-color': '#FFFFFF',
	      'marker-symbol': 'cross'
	  }
	}).addTo(map);
	Place.create(e.latlng.lng, e.latlng.lat);
});