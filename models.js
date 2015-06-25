var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airtraveldb');

var CommentSchema = new mongoose.Schema({
    username: String,
    body: String,
    createdtime: Date
});

var PlaceSchema = new mongoose.Schema({
    name: String,
    latitude: Number,
    longitude: Number,
    comments: [CommentSchema],
    imageurl: String,
    message: String
});

var RouteSchema = new mongoose.Schema({
    start: String,
    end: String,
    startlat: Number, 
    startlong: Number,
    endlat: Number,
    endlong: Number,
    lengthDist: Number,
    lengthTime: String,
    places: [PlaceSchema]
});


var Route = mongoose.model('Route', RouteSchema);
var Place = mongoose.model('Place', PlaceSchema);
var Comment = mongoose.model('Comment', CommentSchema);


// exporting blog and comment models so we can acess them in server.js 
module.exports.Route = Route;
module.exports.Place = Place;
module.exports.Comment = Comment;
