$(document).ready(function(){
	$("#parrafo").mouseenter(function(){
    	$("#parrafo").addClass("cambiarTamanyo");
    });
 
	$("#parrafo").mouseout(function(){
    	$("#parrafo").removeClass("cambiarTamanyo")
 	});
});