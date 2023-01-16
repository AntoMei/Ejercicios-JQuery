$(document).ready(function() {
    $("#boton").click(function() {
      $.ajax({
        url: "datos.txt",
      })
      .done(function(texto) {
        $("#contenedor").html(texto);
      }
    );
})});