// Funciones de flecha o Arrow Functions
// Es una nueva forma de escribir las variables en Js
var acceso = true 

// Forma cotidiana de hacerlo
// var accesoU = function(a) {
//  return a
// }

// Asi se hace con arrowFunctions 
//var accesoU = a => a  //retorna un valor 

// Cuando no le pasamos parametros 
//var accesoU = () => false  //no tenenemos porametros y retornamos un valor 

// Usamos este ejemplo en todos los casos, menos en la funcion arrowFunctions en la que tenemos mas de un parametro.
// accesoU(acceso) == true 
// ? console.log("Usuario permitido")
// : console.log("Usuario denegado")

// Cuando pasamos mas de un parametro
//var accesoU = (a,n) => console.log(`Usuario ${n}, acceso ${a}`); //Cuando retornamos mas de un valor. 
//accesoU(acceso,"Miguel")

// Cuando trabajes mas de una liena de codigo en un arrowFunctions, deben de ir las { }
var accesoU = (a,n) => {
 console.log(`Usuario ${n}, en ejecución`)
 return a
}

accesoU(acceso,"Fernando") == true ? console.log("Usuario permitido") : console.log("Usuario denegado")