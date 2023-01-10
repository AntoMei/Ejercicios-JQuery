$(document).ready(function() {
    $("#boton").click(function() {
      $.ajax({
        url: "datos.txt",
        success: function(texto) {
          $("#contenedor").html(texto);
        }
      });
    });
});