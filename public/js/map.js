
L.mapbox.accessToken = 'pk.eyJ1IjoiemhhbnciLCJhIjoiYzcwMjAwYzQ4MWYxZGQyMjkxMTFkYWQ0M2YxMjcwN2YifQ.q_Daj_EF2x_eGq6dl_jORw';

var map = L.mapbox.map('map', 'mapbox.dark').setView([40, -74.50], 2);

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
    },
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



