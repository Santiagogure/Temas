

//"El contexto es el objeto que esta ejecutando una funcion en un momento especifico"

// This
let electro = {
    nombre: "Pou",
    raza: "labrador",
    edad: 5,
    info: function(){
        return console.log("Se llama " + this.nombre + " Es un " + this.raza + " y tiene " + this.edad + " años.")
    }

}

electro.info()


/* Errores comunes en This
 Const info = electro.info
 info() 
 This no se puede invocar de esta forma. 
 Tampoco con un addEventListener("click", electro.info)*/ // 



//This Binding, todos los tipos:


//Default Binding(invocacion directa) 
//This cuando se encuentra suelto representa window.  Menos cuando usamos el modo estricto que ahi es undefined


//Implicit binding(invocacion de metodo)

const sacha = {
    nombre: "Sacha",
    saludar: function() {
       console.log(`Hola, me llamo ${this.nombre}`) 
    }, 
    hermano: {
        nombre: "Eric",
        saludar: function() {
            console.log(`Yo soy el hermano, me llamo ${this.nombre}`)
        },
    },
};
sacha.saludar()
sacha.hermano.saludar()

/*Combinando el default y implicit


const pedro = {                   //Esto esta mal, no conviene escribir funciones dentro de funciones con This
    nombre: "Pedro",
    twitter: "Pedrolo",
    hello: function() {
       function SeguimeEnTwitter() {
         console.log(`Seguime en Twitter: ${this.twitter})
       }
    },
    seguimeEnTwitter: function () {
        console.log(`Hola, me llamo ${this.nombre}`)     
    }
};

*/


const pedro = { //Esto esta bien
    nombre: "Pedro",
    twitter: "Pedrolo",
    hello: function() {
        console.log(`Hola, me llamo ${this.nombre}`)
        this.seguimeEnTwitter();
    },
    seguimeEnTwitter: function () {
        console.log(`Seguime en Twitter: ${this.twitter}`)     
    }
};


/* Explicit Binding (Invocacion indirecta)
 Nos permite cambiar el contexto de manera explicita, invocarla en el contexto que queremos
*/

const augusto = {
    nombre: "Augusto",
    ola: function(gritando, conDespedida) {
        const saludoNormal = (`Hola me llamo ${this.nombre}`)
        const despedidaNormal = "Chau!"

        const saludo = gritando ? 
        saludoNormal.toUpperCase() : saludoNormal;
        const despedida = gritando ? 
        despedidaNormal.toUpperCase() : despedidaNormal

        console.log(saludo)

        if (conDespedida) {
            console.log(despedida)
        }
    }
};

const pepe = {nombre: "Pepe"}
pepe.saludar = sacha.saludar;

//Aca es donde entra el metodo Call, un metodo que nos permite invocar a una funcion cambiandole el contexto

sacha.saludar.call(pepe, true, true) /*El primer parametro es el nuevo objeto que va a ser this, mientras que los otros
dos, son en este caso, gritando y conDespedida.
Si ponemos esto ultimo en la consola mostrara "HOLA ME LLAMO PEPE"
*/

// Tambien existe el metodo APPLY, que es muy parecido pero con una diferencia
sacha.saludar.call(pepe, [true, true]) // Le pasamos los otros parametros como un array


// Metodo Bind: Nos devuelve una nueva funcion con el valor de This que nosotros le digamos

const boton = document.getElementById('boton')
 boton.addEventListener("click", sacha.saludar.bind(sacha))   // Con call y apply esto no funcionaria



 // New Binding (Instanciar objetos) 
 //Este metodo no se puede mezclar con call, bind o apply

 function persona(nombre) {
    this.nombre = nombre;
 }

 const Lucas = new persona("Lucas")

 
 //Lexical Binding (arrow functions)

 const juan = {
    nombre: "juan",
    twitter: "palito",
    say: function() {
        const seguime = () => {
            console.log(`Hola, me llamo ${this.twitter}`)
        }
        console.log(`Hola me llamo ${this.nombre}`)
        seguime()
    }
 }


