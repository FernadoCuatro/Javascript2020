// Este es un for izi

// for(i=1; i<=10; i++){
//  if (i==1) {
//   console.log(`Hola ${i} una vez`);
//  } else {
//   console.log(`Hola ${i} veces`);
//  }
// }

//recorrienddo un Array
// var miArray = ["Hola Fernando", 2020, "Adios jaja"]

// for (let index = 0; index < miArray.length; index++) {
//  const element = miArray[index];
//  console.log(element);
 
// }

var persona1 = {
 nombre: "Fernanda",
 edad  : 2
}
var persona2 = {
 nombre: "Miguel",
 edad  : 21
}
var persona3 = {
 nombre: "Alejandro",
 edad  : 27
}

var personas = [persona1, persona2, persona3]

for (let index = 0; index < personas.length; index++) {
 if (personas[index].edad > 18) {
  break;  
 }
 const element = personas[index].nombre;
 console.log(element);
 
}

// aqui usamos el forEach 
personas.forEach( (element,i) => {
 console.log(i);
 console.log(element.edad);
  
});
