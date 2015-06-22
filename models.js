var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airtraveldb');

var PlaceSchema = new mongoose.Schema({
    name: String,
    latitude: Number,
    longitude: Number,
    comments: String,
    imageurl: String

});

var RouteSchema = new mongoose.Schema({
    start: String,
    end: String,
    lengthDist: Number,
    lengthTime: String,
    places: [PlaceSchema]
});

var Route = mongoose.model('Route', RouteSchema);
var Place = mongoose.model('Place', PlaceSchema);

// exporting blog and comment models so we can acess them in server.js 
module.exports.Route = Route;
module.exports.Place = Place;
