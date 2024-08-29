let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let nombreJugador = prompt("¡Bienvenido! ¿Cuál es tu nombre?");
let intentos = 0;
let conjetura;

while (true) {
    intentos++;
    
    conjetura = parseInt(prompt("Adivina el número (entre 1 y 100):"), 10);
    if (conjetura < numeroSecreto) {
        alert("Demasiado bajo. ¡Intenta de nuevo!");
    } else if (conjetura > numeroSecreto) {
        alert("Demasiado alto. ¡Intenta de nuevo!");
    } else{
        alert("Felicidadeeees "+nombreJugador+" Haz acertado");
        break; 
    }
}

let datosJugador = {
    nombre: nombreJugador,
    intentos: intentos
};
alert("Datos del jugador:", datosJugador);
