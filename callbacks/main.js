/* callbacks

function prueba(callback) {
    callback("Pedro")
}

function decirNombre(nombre) {
    console.log(nombre)
}

prueba(decirNombre)

// De esta forma la consola mostrara pedro. Los callbacks son funciones que llaman a otras funciones

prueba((nombre)=>{     //Esta es una forma mucho mas corta de escribirla
    console.log(nombre)
})

prueba((nombre) => console.log(nombre)) //Aun mas corta en una sola linea de codigo
*/

////////////////////

class persona {
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram
    }
}

// console.log(persona = new Persona("Santiago Gurevich", "@santiagogure"))


//Como hariamos si quisieramos crear muchas personas?

data = [
    ["Santiago gurevich", "santiagogure"],
    ["Nicove", "Nicova"],
    ["Pedroluis", "pedroxi"],
    ["Fulanito"],
    ["Mondongo", "Fedepardo"],
];

const personas = [];

for (let i = 0; i < data.length; i++) {
    personas[i] = new persona(data[i][0], data[i][1]); // El [i] es porque recorremos cada objeto y sus indices.
}




const obtenerPersona = (id, cb) => {
  if (personas[id] == undefined) {
     cb("No se ha encontrado la persona") // Retornamos el callback y nos devuelve esto.
  } else {
    cb(null, personas[id], id) //En el otro caso nos devuelve el nombre de la persona
  }
}

const obtenerInstagram = (id, cb) => {
    if (personas[id] == undefined) {
        cb("No se ha encontrado el instagram") //Ahora hacemos que en caso de que el instagram sea undefined, nos devuelva este mensaje
     } else {
       cb(null, personas[id].instagram) 
     }
}

obtenerPersona(3, (err, persona, id)=> { //Pasamos el id uno, el primer parametro sera error y la segunda la persona
    if (err) {
        console.log(err) //Si hay un error usaremos el parametro para devolver un error
    } else {
        console.log(persona.nombre)
        obtenerInstagram(id, (err, instagram)=> {
           if (err) {
             console.log(err)
           } else {
            console.log(instagram)
           }
        })// Como Fulanito no tiene instagram usaremos un callback a una funcion
    }
})


