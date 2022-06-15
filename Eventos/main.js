//Eventos

const button = document.querySelector('.button')
const contenedor = document.querySelector('.contenedor')

/*
button.addEventListener("click", saludar);

function saludar() {
    alert("Hola")
}
*/

/* Podemos hacer que funcione una sola vez tambien removiendo el evento

const button = document.querySelector('.button')
button.addEventListener("click", saludar);

function saludar() {
    alert("Hola")
    button.removeEventListener("Click", saludar)
}

*/


/*Para obtener el objeto donde se ejecuto el elemento, tenemos que usar el objeto event

button.addEventListener("click", (event)=> {
    console.log(event)
})
*/

// Flujo de eventos es el orden en el que se ejecutaran los elementos. Hay dos tipos de orden, el event Bubbling o el Event Capturing
/* contenedor.addEventListener("click", (e)=>{
    alert("Di click en el contenedor")
  }, true) //Al poner el "True" le damos prioridad a lo que se ejecutara primero
   
  button.addEventListener("click", (e)=>{
      alert("Di click en el boton")
  }) 
  */

// Event.stopPropagation()
contenedor.addEventListener("click", (e)=>{
    alert("Di click en el contenedor")
  },) 
   
  button.addEventListener("click", (e)=>{
      alert("Di click en el boton")
      e.stopPropagation() //Evitamos la propagacion, hacemos que no se ejecute ninguno mas
  }) 

 