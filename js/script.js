
function validaContrasenia() {
	
	var pass="cocoando";
	do {
		var contrasenia = prompt("Ingresa tu Password", "Password");
	}while(contrasenia != pass);
	document.getElementById("coco").innerHTML =
        	"ok tu contraseña es: " + contrasenia;
}