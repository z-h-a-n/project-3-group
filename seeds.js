var REPL = require('repl');
var db = require('./models');

var repl = REPL.start('Routes >');

repl.context.db = db;

db.Route.collection.remove();
db.Place.collection.remove();

db.Route.create({
    start: 'LHR',
    end: 'PEK',
    lengthDist: 2000,
    lengthTime: '4'

}, function (err, route) {

    db.Place.create({
        name: 'Kyber Pass',
    latitude: 28.689214000000000000,
    longitude: 77.223989500000020000,
    comments: 'Beautiful view, big history its a pass from me!',
    imageurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/KhyberPassPakistan.jpg/800px-KhyberPassPakistan.jpg'

    }, function (err, place) {
        console.log(place);
        route.places.push(place);
        route.save();
    })

    db.Place.create({
        name: 'Kyber Cafe',
    latitude: 38.689214000000000000,
    longitude: 87.223989500000020000,
    comments: 'Great connection.',
    imageurl: 'https://s-media-cache-ak0.pinimg.com/736x/24/94/93/24949381b3d5f4b6119793929554ef20.jpg'
    }, function (err, place) {
        console.log(place);
        route.places.push(place);
        route.save();
    })

});