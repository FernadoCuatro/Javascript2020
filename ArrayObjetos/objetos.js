var user = "Fernando"
var persona = {
 nombre: "Miguel",
 telefono: "samsung"
} 

var miObjeto = {
 //clave : valor
 nombre : "Fernando",
 edad   : 20,
 importante : true,
 texto : `Usuario ${user}`,
 miFuncion : (a,b) => a + b,
 otroObjeto : persona,
 fecha : new Date()
}
console.log(miObjeto.fecha);

// Desustrucracion de objetos
var {nombre} = miObjeto
console.log(nombre)

// Desglosamiento de objetos 
var otraFuncion = ({texto}) => texto
console.log(otraFuncion(miObjeto));

