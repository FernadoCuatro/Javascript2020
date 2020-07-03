var Minumero = 50 //Numeros enteros
console.log(Minumero);

const Pi = 3.14  //decimal
console.log(Pi);

var verdadero = true //Booleano verdadero
var falso = false //Booleano falso 
console.log(verdadero);
console.log(falso);

var nulo = null //null
console.log(nulo);

var indefinido = undefined //Undefined
console.log(indefinido);

console.log(typeof Pi);

var logaritmo = Math.LOG10E
console.log(logaritmo);

var nombre = 'Fernando' //String
var edad = 20 //Number

//Concatenamos textos con variables
console.log(`Hola ${nombre}, tu edad es: ${edad}`);

//Metodos String
console.log(nombre.toUpperCase()); //Todo el texto en mayusculas
console.log(nombre.toLowerCase()); //Todo el texto en minusculas
console.log(nombre.length);

//definimos variables con metodos
var contNombre = nombre.length;
console.log(contNombre);

//Operadores
// +, -, *, /, %, **                 Operadores aritméticos
// =, +=, -=, *=, /=, %=, **=      Operadores de asignación
// ==, !=, ===, !==, >, >=, <, <=  Operadores de comparacion
// && < and < y
// || < and < o
// !v distinto de 

// Operdador terniario
// Condicion ? true : false
var edad = 19
var res = edad >= 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad");
console.log(res);
