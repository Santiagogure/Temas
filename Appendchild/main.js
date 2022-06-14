//Append child, es un metodo que se aplica al PADRE pero toma como parametro al hijo

const contenedor = document.querySelector('.contenedor')

const item = document.createElement('LI');

const textDelItem = document.createTextNode('Este es un elemento de la lista')

item.appendChild(textDelItem);
contenedor.appendChild(item) //De esta forma lo veremos escrito en la panatalla

console.log(item)


// Otro ejemplo sin usar el contenedor ni el LI
var pa = document.createTextNode("pa");
document.body.appendChild(pa);

console.log(pa)


// Recordar que si quiero repasar mas esto, tengo el ejercicio de cerrajero, donde para trabajar el html y no el div, uso el appendchild junto al documentFragment para ahorrar recursos