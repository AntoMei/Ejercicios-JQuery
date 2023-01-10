$(document).ready(function() {
  $("#boton").click(function() {
    $.get("archivo.xml", function(data) {
        var contenido = "";
        $(data).find("descripcion").each(function() {
            contenido += $(this).text() + "<br>";
        });
        $("#contenedor").html(contenido);
    });
  });
});