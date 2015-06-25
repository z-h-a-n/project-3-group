
// You will probably need to pass the 
module.exports = function(twitter, tweetLatitude, tweetLongitude){

function searchTwitter (tweetLatitude, tweetLongitude){
var query = ' ';
var radius = '100mi';
var gofind = twitter.get('search/tweets', { q: query, geocode: tweetLatitude +',' + tweetLongitude + ',' + radius, }, function(err, data, response) {
console.log(data);
var tweets = data;
})
};

searchTwitter(tweetLatitude,tweetLongitude);

// var latitude = '37.781157'
// var longitude = '-122.398720'
// searchTwitter(latitude,longitude);

// Module import close 
};