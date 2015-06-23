
function welcomeDialog() {
  $("#welcomeToSoar").dialog({
    dialogClass: "no-close",
    buttons: [
      {
        text: "OK",
        click: function() {
          $( this ).dialog("close");
        }
      }
    ],
    height: 600,
    width: 1000,
    buttons: [
      {
        text: "Let's do it!",
        "class": 'againButtonClass',
        click: function() {
          $( this ).dialog( "close");
        }
      }
    ],
    modal: true,
    close: function(event, ui) {
      window.location.reload();
    },
    autoOpen: true
  });
}
 

$(document).ready(function(){

  console.log("hello thus is modal");
  welcomeDialog();

});
