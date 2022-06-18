//Promesas

/* Una promesa es un objeto que representa un valor que puede que esté disponible «ahora»,
en un «futuro» o que «nunca» lo esté . Con el constructor promise y
pasándole una función con dos parámetros, podremos crear una promesa. Los parámetros son RESOLVE Y REJECT,
que nos deja decirle si ha sido resuelta o rechazada.
*/

//Representan la terminacion de una operacion asincrona o el fracaso de la misma.
/*
let nombre = "Santiago"


const promesa = new Promise((resolve, reject) =>{
  if (nombre !== "Santiago") {
    reject("El nombre no es el mismo")
    
  } else resolve(nombre)
})

// console.log(promesa) No podemos acceder facilmente a las propiedades de las promesas, estan todas encapsuladas. Debemos usar el metodo Then

promesa.then((resultado) => { //Then es un metodo que tienen las promesas que nos accede al valor de Resolve o Reject. Y tambien recibe un callback
    console.log(resultado)
}).catch((e)=> {              //Recordar: Catch es un metodo que nos ayuda a manejar los errores
    console.log(e)
}) 

*/

// Ahora usaremos el codigo que tengo en el respositorio sobre callbacks, pero aplicando promesas

class persona {
  constructor(nombre, instagram){
      this.nombre = nombre;
      this.instagram = instagram;
  }
}

data = [
  ["Santiago gurevich", "santiagogure"],
  ["Nicove", "Nicova"],
  ["Pedroluis", "pedroxi"],
  ["Fulanito"],
  ["Mondongo", "Fedepardo"],
];

const personas = [];

for (let i = 0; i < data.length; i++) {
  personas[i] = new persona(data[i][0], data[i][1]); 
}




const obtenerPersona = (id) => {
  return new Promise((resolve, reject) => {
    if (persona[id] == undefined) resolve("No se ha encontrado la persona")
    else {resolve(persona[id])}
  })
}

const obtenerInstagram = (id) => {
  return new Promise((resolve, reject)=> {
    if (persona[id].instagram == undefined) resolve("No se ha encontrado el instagram")
    else {resolve(persona[id].instagram)}
  })
}

/* obtenerPersona(2).then((persona)=>{ //Como ahora trabajamos con promesas le metemos el metodo then
  console.log(persona.nombre)
  obtenerInstagram(1).then((instagram)=> {
    console.log(instagram) 
  })
})
*/

obtenerPersona(2).then((persona)=> {
  console.log(persona.nombre)
  return obtenerInstagram(1)
}).then((instagram) => {
  console.log(instagram)
}).catch((e)=> {
  console.log(e)
})
  
//Ahora podemos manejar todos los errores con un catch





