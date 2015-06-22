console.log('hello');

$(document).ready(function(){
	L.mapbox.accessToken = 'pk.eyJ1IjoiemhhbnciLCJhIjoiYzcwMjAwYzQ4MWYxZGQyMjkxMTFkYWQ0M2YxMjcwN2YifQ.q_Daj_EF2x_eGq6dl_jORw';

	var map = L.mapbox.map('map', 'mapbox.satellite').setView([40, -74.50], 2);

	var start = { x: -0.1275, y: 51.507222}; 
	var end = { x: 174.74, y: -36.840556 };
	var generator = new arc.GreatCircle(start, end, { name: 'lon to auk' });
	var line = generator.Arc(100, { offset: 10 });
	L.geoJson(line.json()).addTo(map);
	
})//$(document).ready