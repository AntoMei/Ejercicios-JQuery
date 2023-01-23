$(document).ready(function() {
$("#hide").click(function(){
    $("#imagen").hide();
});

$("#fade").click(function(){
    $("#imagen").fadeOut();
});

$("#slide").click(function(){
    $("#imagen").slideUp();
});

$("#animate").click(function(){
    $("#imagen").animate({height : "100px"});
})});