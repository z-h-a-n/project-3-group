
function welcomeDialog() {
  var height = window.innerHeight;
  var width = window.innerWidth;
  $("#welcomeToSoar").dialog({
    dialogClass: "no-close",
    height: height,
    width: width,
    modal: true,
    autoOpen: true
  });
}
 
$("#closeModal").on("click", function(e){
  $("#welcomeToSoar").dialog("close");
});

$(document).ready(function(){

  console.log("hello thus is modal");
  welcomeDialog();

});
