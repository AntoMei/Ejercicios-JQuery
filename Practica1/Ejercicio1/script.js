$(document).ready(function() {
    var colorDivs = $("div");
    var divs = $("div").length;
    alert("Hay " + divs + " elementos");

    cambiarColor(colorDivs);

    function cambiarColor(color){
        color.css("color", "green")
    }
})