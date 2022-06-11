// ClassList, metodos de classlist.

/*
add() // Añade una clase
remove() // remueve una clase, opuesto a add()
item() // devuelve la clase del indice especificado
contains() // Verifica si ese elemento posee o no, la clase especificada.
replace() // Remplaza una clase por otra
.toggle()  // Agrega o elimina una clase dependiendo si la tenga o no.      
*/


//Ejemplo add:

const titulo = document.querySelector(".titulo")
titulo.classList.add('grande')


//Ejemplo item: Nos devuelve la clase mediante el indice. No modifica la clase
let valor = titulo.classList.item(0)
document.write(valor)

//Ejemplo contains:  Devuelve true si esa clase existe, y false de lo contrario.
let contenedor = titulo.classList.contains('grande');
console.log(contenedor)

//Ejemplo toggle: 
let bold = titulo.classList.toggle('grande', true) // El segundo parametro es opcional y sirve para forzar que se quede o la saque si ponemos false

//Ejemplo replace
let bola = titulo.classList.replace('grande', 'chico')


//Obtencion y modificacion de elementos.

/*
textContent: Devuelve el texto de cualquier nodo
innerText: Devuelve el texto visible de un node element  (No es muy usado)

innerHTML: devuelve el codigo html de un elemento
outerHTML: devuelve el codigo html completo del elemento
*/


// Creacion de elementos


