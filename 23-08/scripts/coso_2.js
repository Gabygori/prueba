function RandomNumero(x) {
    let numero = Math.random();
    numero = numero*x;
    return Math.floor(numero);
} 

let numero = RandomNumero(10);
console.log(numero)

//objetos
//son tipos de datos

let alumno = { 
    nombre:"mati",
    edad:"18",
    deporte:"golf",
};

console.log(alumno.nombre)

//Asignacion - Notaciond de punto

alumno.nombre = "perez";

console.log(alumno.nombre)

//desestructuracion de objetos

let {nombre, edad, deporte} = alumno;
console.log(nombre, edad, deporte);


//json - javascrippt objet notation

let objetJson= {"nombre" : "juan", "edad" : "17", "deporte" : "futbol"};
