$(document).ready(function() {
  var cube = $("#cube");
  var squarePath = [{left: 0, top: 0}, {left: 200, top: 0}, {left: 200, top: 200}, {left: 0, top: 200}, {left: 0, top: 0}];
  var i = 0;
  var animationInterval;

  // Iniciar efecto
  $("#start-effect").on("click", function() {
    animationInterval = setInterval(function() {
      cube.animate({left: squarePath[i].left, top: squarePath[i].top}, 1000);
      i = (i + 1) % squarePath.length;
    }, 1000);
  });

  // Parar efecto
  $("#stop-effect").on("click", function() {
    clearInterval(animationInterval);
  });
});



