var numero    = 50.5
var convertir = "40" 
var decimal   = 56.3483934

//Nos va a decir si nuestro numero es entero o no
var res = Number.isInteger(numero)

// Convierte un argumento de tipo String y retorna un entero 
var convertido = Number.parseInt(convertir)

//Recortar los decimales de un numero
var recortado = Number.parseFloat(decimal).toFixed(2)

console.log(res);
console.log(convertido);
console.log(recortado);
