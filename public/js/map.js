console.log('hello');




$(document).ready(function(){
	L.mapbox.accessToken = 'pk.eyJ1IjoiemhhbnciLCJhIjoiYzcwMjAwYzQ4MWYxZGQyMjkxMTFkYWQ0M2YxMjcwN2YifQ.q_Daj_EF2x_eGq6dl_jORw';


var map = L.mapbox.map('map', 'mapbox.streets').setView([40, -74.50], 9);
})
