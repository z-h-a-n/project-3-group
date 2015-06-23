$(document).ready(function(){

  welcomeDialog();

});

  function welcomeDialog() {
    $("#welcomeToSoar").dialog({
      dialogClass: "no-close",
      buttons: [
        {
          text: "Let's do it!"
          click: function () {
            $(this).dialog("close");
          }
        }]
      height: 250;
      modal: true;
      close: function(event, ui) {
      window.location.reload();
      } 
    })
  }