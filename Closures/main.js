// Objects Clausuras:
   //Un closure es una funcion que mantiene un estado, y un estado es un valor de informacion que puede cambiar o no.
   //Sirven para tener una funcion que pueda acceder a los elementos externos de otra funcion y hacer algo con ellos

function counter(n) {
    let i = 0; 
    let name = n;

    return function() {
        return name + " " + i++;
    }
}

let c = counter("c1")
let c2 = counter("c2")
console.log(c())
console.log(c())
console.log(c())
console.log(c2())
console.log(c2())
console.log(c2())  //Esto es para comprobar en la consola que cada uno lleva su propio ritmo en el contador

//Retornar objetos:

function repositoryBeers(n){
    let beers = []
    
    return {
        name: n,
        add: function(name) {
            if (name !== "") 
                beers.push(name)
            
        },
        show: function() {
            beers.forEach(e=> console.log(e)); //Esto es para despues abajo poder añadirle 
        }
    }
}
 
let cervezas = repositoryBeers("Mis cervezas")
cervezas.add("Corona")
cervezas.add("Delirium")
cervezas.show()

// Ejercicio final  (Explicacion en el canal de Hola mundo)
 
const crudder = dominio => recurso => {
    const url = `${dominio}/${recurso}`

    return({
        create: (x) => fetch(url, {
            method: "POST",
            body: JSON.stringify(x),
        }).then(x => x.json()),
        get: () => fetch(url).then(x => x.json())
    })
}

const base = crudder('https://jsonplaceholder.typicode.com/todos/1')
const Todos = Base('/todos')

Todos.get().then(console.log)