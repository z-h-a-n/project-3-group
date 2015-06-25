function hideRetrievalButton(){
 $('#show-button').hide();
};

function showRetrievalButton(){
 $('#show-button').show();
};


function hideSidebar() {
 $("#hide-button").on("click", function(){
   console.log("clicked!");
   $.when($(".navbar-header").toggle(function() {
     $('.navbar-header').css('right', '0px')   
   })).done(function(){
     showRetrievalButton()
   });  
 });
};


function showSidebar() {
 $("#show-button").on("click", function(){
   console.log("clickedshow!");
   $.when($(".navbar-header").toggle(function() {
     $('.navbar-header').css('right', '0px')   
   })).done(function(){
     hideRetrievalButton()
    });  
 });
}

function showSidebarOnPin() {
 $(".leaflet-marker-icon").on("click", function(){
   console.log("clickedpin");
   $.when($(".navbar-header").toggle(function() {
     $('.navbar-header').css('right', '0px')   
   })).done(function(){
     hideRetrievalButton()
    });  
 });
}



$(document).ready(function(){

console.log("hello");
showSidebarOnPin();
hideRetrievalButton();
hideSidebar();
showSidebar();
$('#tweetbox').show();



});