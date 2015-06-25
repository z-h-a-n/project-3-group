function hideSidebar() {
  $("#hide-button").on("click", function(){
    console.log("clicked!");
    $(".navbar-header").toggle(function() {
      $('.navbar-header').css('left', '0')
      .done
    });  
  });
};


function showSidebar() {
  $('#show-button').on("click", function(){
    console.log("clicked!");
    $(".navbar-header").toggle(function() {
      $('.navbar-header').css('left', '200px')
    });  
  })
}

$(document).ready(function(){

console.log("hello");
hideSidebar();
showSidebar();

});