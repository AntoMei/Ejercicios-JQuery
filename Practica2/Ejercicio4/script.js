$(document).ready(function() {
  $("#btn-enviar").click(function() {
    var parametro1 = $("#parametro1").val();
    var parametro2 = $("#parametro2").val();
    $.post("procesar.php", { parametro1: parametro1, parametro2: parametro2 }, function(data) {
      $("#resultado").html(data);
    });
  });
});