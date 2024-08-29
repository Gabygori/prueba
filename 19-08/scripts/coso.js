8//prompt("Hola mundo");

function sumar(a,b) {
    return a+b;
}

let resultado = sumar(2,5);
console.log(resultado);

//expresado

let suma = function sumar2(a,b){
    console.log(a+b);
}

suma(7, 8);

//Funciones Anonimas

let resta = function(a,b){
    console.log(a-b);
};

resta(8,8)

//Arrow function

let multiplicar = (a,b) =>{
    console.log(a*b);
};

multiplicar(10,10)

function dividir(a,b) {
    if (b>0) {
        return a/b;
    }
    else{
        alert("Chango media pila");
    }
}
let sumaras = (a,b) => a+b;
let restaras = (a,b) => a-b;
let multiplicaras = (a,b) => a*b;


let numeroUno = parseInt(prompt("decime un numero"));
let numeroDos = parseInt(prompt("decime otro numero"));
let operacion = prompt("Eliga una operacion (1:suma, 2:resta, 3:Multiplicacion, 4:Divicion")

switch (operacion) {
    case 1:
        break;

    default:
        break;
}