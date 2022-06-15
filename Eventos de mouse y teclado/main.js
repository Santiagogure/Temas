//EVENTOS DE MOUSE

const button = document.querySelector('.button')
const contenedor = document.querySelector('.contenedor')

button.addEventListener("dblclick", (e)=>{ //Si tengo que explicar esto soy un pelotudo, lo mismo que el click pero doble
    alert("di algo")
})

/* 
button.addEventListener("mouseover", (e)=>{ // Pasamos el mouse por encima y se ejecuta
    alert("di algo")
})
*/

button.addEventListener("mouseout", (e)=>{ // Es cuando salimos del elemento y sus elementos secundarios
    alert("di algo")
})

//contextmenu: Es con un click en el boton derecho
//mouseenter: ocurre cuando el puntero se mueve sobre un elemento
//mouseleave: ocurre cuando el puntero se mueve fuera de un elemento
//mouseup: ocurre cuando un usuario suelta un boton del mouse sobre un elemento
//mousemove: ocurre cuando el puntero se mueve mientras esta sobre un elemento


//EVENTOS DEL TECLADO

const contenedor2 = document.querySelector('.contenedor2')
const telcado = document.querySelector('.input-prueba')

telcado.addEventListener("keydown", (e)=>{
    console.log("Una tecla fue presionada")
})

telcado.addEventListener("keypress", (e)=>{
    console.log("un usuario presiono una tecla")
})

telcado.addEventListener("keyup", (e)=>{
    console.log("una tecla fue soltada")
})
