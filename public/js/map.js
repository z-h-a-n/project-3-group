

	L.mapbox.accessToken = 'pk.eyJ1IjoiemhhbnciLCJhIjoiYzcwMjAwYzQ4MWYxZGQyMjkxMTFkYWQ0M2YxMjcwN2YifQ.q_Daj_EF2x_eGq6dl_jORw';

	var map = L.mapbox.map('map', 'mapbox.satellite').setView([40, -74.50], 2);

	function createLine (route) {
		var startX = route.startlong;
		var startY = route.startlat; 
		var endX = route.endlong;
		var endY = route.endlat; 

		var start = { x: startX, y: startY}; 
		var end = { x: endX, y: endY };
		var generator = new arc.GreatCircle(start, end, { name: '' });
		var line = generator.Arc(100, { offset: 10 });
		L.geoJson(line.json()).addTo(map);
	}

	function createMarker (route) {
		for (i=0; i<route.places.length; i++) {
		console.log(route.places[i].longitude);
		console.log(route.places[i].latitude);
		var x = route.places[i].longitude;
		var y = route.places[i].latitude;
		
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
		        title: 'Peregrine Espresso',
		        description: '1718 14th St NW, Washington, DC',

            // Note - We need to make equivilant fields in our models to hold
            // descriptions and titles for our markers. - Alex

		        // one can customize markers by adding simplestyle properties
		        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
		        'marker-size': 'large',
		        'marker-color': '#BE9A6B',
		        'marker-symbol': 'cafe'
		    }
		}).addTo(map);
		}
	};
