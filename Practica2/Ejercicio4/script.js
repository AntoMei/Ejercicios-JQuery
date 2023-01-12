$(document).ready(function() {
  $("#formulario").submit(function() {
    var entrada1 = $('#entrada1').val();
    var entrada2 = $('#entrada2').val();
    $.post('archivo.php', {entrada1: entrada1, entrada2: entrada2}, function(data) {
    });
  })
});