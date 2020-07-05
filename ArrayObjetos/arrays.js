var permitido = "Usuario permitido"
//Funciones 
var miFuncion = acceso => acceso
//Objetos 
var persona = {
 nombre: "Miguel",
 edad  : 20,
 automovil : [
  pintura = {
   marca : "Marca",
   precio: 20000,
   color : "verde"
  },
  vendedor = {
   nombre : "Luis",
   edad : 20,
   ayudante : {
    nombre : "Jorge"
   }
  }
 ]
}

miArray = ["Fernando", 2020, 34.90, true, ["Dell", "Latitude", 6510], miFuncion(permitido), persona]

console.log(miArray[0]);
console.log(miArray[4][0]);
console.log(miArray[5]);
console.log(miArray[6].nombre);
console.log(miArray[6].automovil[0].color);
console.log(miArray[6].automovil[1].ayudante.nombre);