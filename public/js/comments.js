var View = View || {};
var Comment = Comment || {};

$(document).ready(function(){
  console.log("Document public/js/comments.js Ready")
  // Comment.all();
  View.initialize();
});

var Comment = {
  all: function(){
    $.get('/comments', function(comments){
      console.log(comments);
      $.each(comments, function(index, comment){
        View.render($('#comment-template'), comment, $('#list-comments'));
        showMarker(comment);
        showLine(comment);
      })
    })
  },
  show: function(commentParams){
    $.post('/comment', commentParams)
    .done(function(comment) {
      console.log(comment);
      showLine(comment);
    })
  }
}


View = {
  initialize: function(){
    $('#comment-form').on('submit', function(e){
      e.preventDefault();
      console.log($(this));
      // Comment.create($(this).serialize());
      Comment.show($(this).serialize());
    });
    // Event delegation - Need to talk to TA about this
    // $('#comment-ul').on('click', '.NAMETHIS', function(e) {
    //   comment.delete($(this).data('id'));
    // });
  },

  render: function(templateElement, object, parentElement){
    var template = templateElement.html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, object);
    parentElement.append(rendered);
  }
}