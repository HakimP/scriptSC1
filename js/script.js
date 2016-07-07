
function validaContrasenia() {
	
	var pass="cocoando";
	do {
		var contrasenia = prompt("Ingresa tu Password", "Password");
	}while(contrasenia != pass);
	document.getElementById("coco").innerHTML =
        	"ok tu contraseña es: " + contrasenia;
}

function validaEntero() {
	var pass="1234";
	do {
		var contrasenia = prompt("Valida que Sea un Número", "Número");
	}while(isNaN(contrasenia));
	document.getElementById("coco2").innerHTML =
        	"ok si eres un número: " + contrasenia;
}

function validaEntero3() {
	var pass="1234";
	while(isNaN(contrasenia)) {
		var contrasenia = prompt("Valida que Sea un Número", "Número");
	};
	document.getElementById("coco3").innerHTML =
        	"ok tu contraseña es: " + contrasenia;
}

function sumaNumeros() {
	var numero = prompt("Valida que Sea un Número", "Número");
	var sumatoria = 0;

	if(!isNaN(numero)) {
		for(var i = 0 ; i<=numero ; i ++) {
			sumatoria +=i;
			console.log(sumatoria);
		}
	} else {
		console.log("No es un Número");
	}
}

function sumaNumeros2() {
	var numero = prompt("Valida que Sea un Número", "Número");
	var numero1 = 0;
	var contador = 0;
	while(contador <= numero) {
		console.log("el contador va en " +contador);
		numero1 = numero1 + contador;
		console.log("variable de sumatoria va en:: " + numero1);
		contador = contador + 1;
	}
}

function serieFibonachi() {
	var numero = prompt("Valida que Sea un Número", "Número");
    var var1 = 0;
    var var2 = 1;
    var var3;
    console.log(var1);
    console.log(var2);
    for(var i=3; i <= numero;i++){
        var3 = var1 + var2;
        var1 = var2;
        var2 = var3;
        console.log(var3);
    }
}

function sumarIva(cantidad) {
	if(!isNaN(cantidad)){
		var resultado2 = cantidad * 1.16;
		return resultado2;
	} else {
		return "No es un Número";
	}
}