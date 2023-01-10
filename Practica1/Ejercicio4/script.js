$(document).ready(function() {
    $("#resultado").click(function(){
    if ($("#resultado").prop("checked")) {
    var input = '<input type="text" id="campo">';
    $("#contenedor").append(input); 
        var numero1 = parseInt($("#numero1").val());
        var numero2 = parseInt($("#numero2").val());
        var suma = numero1 + numero2;
        $("#campo").val(suma);
    } else {
            $("#campo").remove();
        }
    })
})