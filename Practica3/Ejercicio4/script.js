$("#form").submit(function(event) {
    event.preventDefault(); // prevenir el comportamiento por defecto del formulario
    var formData = $(this).serialize(); // obtener los datos del formulario en una cadena
    $.get("archivo.php", formData, function(data) {
      if (data == "usuario correcto") {
        alert("Usuario correcto");
      } else {
        alert("Usuario incorrecto");
      }
    });
  });