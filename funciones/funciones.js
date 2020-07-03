// Las funciones pueden ser reutilizables 
// Podemos ultilizar muchas veces

//Son un conjunto de sentencias, que realizan una tarea.
function saludo() {
 console.log("Hola a todos")
}

//Funciones con parametros 
function miSuma(a,b) {
 let resultado = a + b;
 console.log(resultado);
}

//Funcion con return
function miMultiplicacion(a,b) {
  return a * b
}

//Funcion con nombre var 
var divicion = function(a,b) {
 return a / b
}

saludo()
miSuma(2,7)
//Imprimir con return 
console.log(miMultiplicacion(4,4));
//Imprimir funcion con nombre var \
console.log(divicion(4,2));