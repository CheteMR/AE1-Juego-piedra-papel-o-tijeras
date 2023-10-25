
let puntosUsuario= 0;
let puntosSheldon = 0;

window.addEventListener("load", ()=>{ //Utilizamos la función 

let instrucciones = document.getElementById("instructions");
let contenedorPuntosUsuario = document.getElementById("puntos-usuario");
let contenedorPuntosSheldon = document.getElementById("puntos-sheldon");
let mensaje = document.getElementById("mensaje");
let contenedorGanaPunto = document.getElementById("gana-punto");
let queEliges = document.getElementById("instrumentos");
let contenedorEleccionUsuario = document.getElementById("eleccion-usuario");
let contenedorEleccionSheldon = document.getElementById("eleccion-sheldon");
let formulario = document.getElementById("formulario");
let caja = document.getElementById("caja");
let botonComenzar = document.getElementById("button");
let mainElement = document.querySelector(".main");
let botonReiniciar = document.getElementById("reiniciar");








let recursos = document.querySelectorAll(".recurso"); //Con querySelectorAll obtenemos un array 
//vamos a entrar con . que es la class de cada recurso
recursos.forEach(boton => {
	boton.addEventListener("click", iniciarTurno);
});

  //name.classList.remove("disabled");
  //name.addEventListener("click",activar);
  //button.classList.remove("disabled");
  //button.addEventListener("click",comenzarJuego);

caja.addEventListener("input",function(){
	if(caja.value !== ""){
		// Habilitamos el boton si la caja tiene texto
		botonComenzar.disabled=false;


	}else{
		// Deshabilitamos el boton si la caja no tiene texto
		botonComenzar.disabled = true;
	}

});

// Ponemos en escucha al boton para que cuando se le de click se active el main 
// previamente en el HTML se le ha puesto la clase class="main disabled" para ocultarlo
// con .remove lo habilitamos
botonComenzar.addEventListener("click", function (){
	mainElement.classList.remove("disabled");

	
	

});

// Cuando le demos al boton de reiniciar el main se vuelve a ocultar
botonReiniciar.addEventListener("click",function(){
	mainElement.classList.add("disabled");
	caja.value = ""; // De esta forma dejamos en blanco la caja
	botonComenzar.disabled = true; // el botón de comenzar a jugar queda otra vez oculto hasta
	//ponerle un nombre
	
	

});


function iniciarTurno(e){
	let eleccionSheldon = Math.floor(Math.random() *5);
	let eleccionUsuario = e.currentTarget.id;
	
	//Hacemos que sheldon (ordenador) elija entre los 4 elementos que hemos definido como Nº aleatorios
	// sabemos que: 
	// Piedra es 0
	//Papel es 1
	//Tijera es 2
	//Lagarto es 3
	//Spock es 4

	if(eleccionSheldon === 0){
		eleccionSheldon = "piedra🪨";
	}else if (eleccionSheldon === 1){
		eleccionSheldon = "papel🧻";
	}else if (eleccionSheldon === 2){
		eleccionSheldon = "tijera✂️";
	}else if (eleccionSheldon === 3){
		eleccionSheldon = "lagarto🦎";
	}else {
		eleccionSheldon = "spock🖖"

	}

	//Dejamos comentada la comprobación que nos da la consola cuando nosotros elegimos 
	//y el ordenador lo hace aleatoriamente con la funcion y el método Math.floor(para redondear) y el Math.random
	//console.log("Yo:" +eleccionUsuario);
	//console.log("Sheldon:" +eleccionSheldon);

	if(
		(eleccionUsuario === "piedra🪨" && eleccionSheldon === "tijera✂️") ||
		(eleccionUsuario ==="tijera✂️" && eleccionSheldon === "papel🧻") ||
		(eleccionUsuario === "papel🧻"&& eleccionSheldon === "piedra🪨") ||
		(eleccionUsuario === "piedra🪨" && eleccionSheldon ==="lagarto🦎") ||
		(eleccionUsuario ==="lagarto🦎" && eleccionSheldon ==="spock🖖") ||
		(eleccionUsuario === "spock🖖" && eleccionSheldon ==="tijera✂️") ||
		(eleccionUsuario === "lagarto🦎" && eleccionSheldon ==="papel🧻") ||
		(eleccionUsuario === "tijera✂️" && eleccionSheldon === "lagarto🦎") ||
		(eleccionUsuario === "papel🧻" && eleccionSheldon === "spock🖖") ||
		(eleccionUsuario === "spock🖖" && eleccionSheldon === "piedra🪨")||
		(eleccionUsuario=== "lagarto🦎" && eleccionSheldon==="spock🖖")
	){	
		ganaUsuario();
    }else if (
    	(eleccionSheldon === "piedra🪨" && eleccionUsuario === "tijera✂️") ||
		(eleccionSheldon ==="tijera✂️" && eleccionUsuario === "papel🧻") ||
		(eleccionSheldon === "papel🧻"&& eleccionUsuario === "piedra🪨") ||
		(eleccionSheldon === "piedra🪨" && eleccionUsuario ==="lagarto🦎") ||
		(eleccionSheldon ==="lagarto🦎" && eleccionUsuario ==="spock🖖") ||
		(eleccionSheldon === "spock🖖" && eleccionUsuario ==="tijera✂️") ||
		(eleccionSheldon === "lagarto🦎" && eleccionUsuario ==="papel🧻") ||
		(eleccionSheldon === "tijera✂️" && eleccionUsuario === "lagarto🦎") ||
		(eleccionSheldon === "papel🧻" && eleccionUsuario === "spock🖖") ||
		(eleccionSheldon === "spock🖖" && eleccionUsuario === "piedra🪨")

    ){
    	ganaSheldon();
    }else{
    	empate();
    }

    mensaje.classList.remove("disabled");
   
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionSheldon.innerText = eleccionSheldon;

    if(puntosUsuario===10 || puntosSheldon===10){

    	if(puntosUsuario ===10){
    		instrucciones.innerText="Has ganado el juego";
    	}

    	if(puntosSheldon===10){
    		instrucciones.innerText="Sheldon ha ganado el juego";
    	}

    	instrumentos.classList.add("disabled");
    	reiniciar.classList.remove("disabled");
    	reiniciar.addEventListener("click",reiniciarJuego);
    }

    
}




// Queremos que a la variable que definimos arriba de puntosUsuario se vaya incrementando cada vez que gane
//el usuario
function ganaUsuario(){
	puntosUsuario++
	contenedorPuntosUsuario.innerText = puntosUsuario;
	contenedorGanaPunto.innerText = "Has ganado un punto";

}

function ganaSheldon(){
	puntosSheldon++
	contenedorPuntosSheldon.innerText = puntosSheldon;
	contenedorGanaPunto.innerText = "Sheldon ha ganado un punto";

}

function empate() {
	contenedorGanaPunto.innerText = "Empate"
}

function reiniciarJuego(){
	reiniciar.classList.add("disabled");
	instrumentos.classList.remove("disabled");
	mensaje.classList.add("disabled");

	puntosUsuario = 0;
	puntosSheldon = 0;

	contenedorPuntosUsuario.innerText = puntosUsuario;
	contenedorPuntosSheldon.innerText = puntosSheldon;

	instrucciones.innerText = "El primero en llegar a 10 puntos gana.";
}


});