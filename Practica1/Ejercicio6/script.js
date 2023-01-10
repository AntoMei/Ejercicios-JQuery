$(document).ready(function() {
    $("#boton").click(function() {
      $("#imagen").fadeOut(2000, function() {
        $("#imagen").slideDown(3000);
        $("#imagen").slideUp(3000);
      });
    });
});