var TwitterView = View || {};
var Place = Place || {};

$(document).ready(function(){
  // console.log("inside public/js/places.js")
  // View.initialize();
});

TwitterView = {
  render: function(templateElement, object, parentElement){
    //Compile the template
    var template = templateElement.html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, object);
    parentElement.append(rendered);
  }
};

var twitterRoute = { 
  all: function(lng, lat){
    // console.log('all')
    $.post('/tweets', {lat: lat, lng: lng})
    .done(function(data){
      // console.log(data)
      $("#tweetbox").empty();
      $.each(data.statuses, function(index, tweet) {
        // console.log(tweet)

        TwitterView.render($('#tweet-template'), tweet, $('#tweetbox'));
        console.log('tweets');
      });
    })
  }
};