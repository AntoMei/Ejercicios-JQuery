$(document).ready(function(){
    $("#saludo").click(function(){
      $("#mensaje").fadeTo("slow", 1);
    });
    $("#despedida").click(function(){
      $("#mensaje").fadeTo("slow", 0);
    });
});