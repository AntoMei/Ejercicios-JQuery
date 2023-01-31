$(document).ready(function() {
  $("#boton").on("click", function() {
    $("h1").deslizar()
  })
  $.fn.deslizar = function () {
    $(this).slideUp()
  }
});