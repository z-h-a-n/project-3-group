
function welcomeDialog() {
 $( "#welcomeToSoar" ).dialog({
  dialogClass: "no-close",
  buttons: [
    {
      text: "OK",
      click: function() {
        $( this ).dialog( "close" );
      }
    }
  ]
});
  $("#welcomeToSoar").dialog({
    height: 1000,
    width: 300
  });
  $("#welcomeToSoar").dialog({
  buttons: [
    {
      text: "Let's do it!",
      "class": 'againButtonClass',
      click: function() {
        $( this ).dialog( "close");
    }
  }
  ]
});
   $( "#welcomeToSoar" ).dialog({
    modal: true
    });
    $( "#welcomeToSoar" ).dialog({
  close: function(event, ui) {
      window.location.reload();
    }
  });
    $("#welcomeToSoar").dialog({
      autoOpen: true
    });

}



$(document).ready(function(){

  welcomeDialog();

});
