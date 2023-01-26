$(document).ready(function() {
  // Iniciar efecto
  $("#start-effect").on("click", function() {
    $("#cube").animate({
      left: "+=300px"
    }, 1000)
    $("#cube").animate({
      top:"+=300px"
    }, 1000)
    $("#cube").animate({
      left:"-=300px"
    }, 1000)
    $("#cube").animate({
      top:"-=300px"
    }, 1000)
  });

  // Parar efecto
  $("#stop-effect").on("click", function() {
    $("#cube").stop(true)
    $("#cube").css("top","11px");
    $("#cube").css("left","11px");
  });
});



