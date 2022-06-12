// Obtencion y modificacion de childs. Parents

const contenedor = document.querySelector('.contenedor')

const primerHijo = contenedor.firstChild;
const ultimoHijo = contenedor.lastChild;
console.log(ultimoHijo) // Nos da p, si hubiera un espacio en el html daria un elemento.
console.log(primerHijo) // Nos da h2, si hubiera un espacio en el html daria un elemento.

const hijos = contenedor.children; // El children nos devuelve unicamente las etiquetas html
console.log(hijos)

for(hijo in hijos){         
    console.log(hijo)           // In nos devuelve el indice
}

for(hijo of hijos){         
    console.log(hijo)           // Of nos devuelve los nombres, el valor.
}


//chilNodes devuelve todos los nodos hijos   

const daugther = contenedor.childNodes;
console.log(hijos)  //Nos devuelve toda la lista de nodos, pero NO es un array, es un nodelist

// Tipo si hiciera hijos.push("hola") Esto me daria un error, porque no es un array

//Pero a pesar de que no es un array, podemos recorrerlo con foreach

hijos.forEach(hijo => {
    console.log(hijo)
});

/* Replace child:
const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2")
h2_nuevo.innerHTML = "Titulo";

h2_antiguo = document.querySelector(".h2");                            // De esta forma podemos remplazar, el h2 antiguo del html que decia "un h2 comun", por el nuevo h2 que dice titulo

contenedor.replaceChild(h2_nuevo, h2_antiguo)                          //Primero va el nuevo, y despues el que se quiere remplazar
*/ 

// Remove child

const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2")
h2_nuevo.innerHTML = "Titulo";

h2_antiguo = document.getElementsByClassName(".h2");                  // De esta forma podemos eliminar un hijo de un elemento padre        
contenedor.removeChild(h2_antiguo);

//hasChildrenNodes

let respuesta = contenedor.hasChildNodes();  //Verificamos si tiene elementos hijos o no

if (respuesta) {
    document.write("El elemento tiene hijos")
} else {
    document.write("El elemento no tiene hijos")
}

//Recordar que por ejemplo, contenedor siempre tendra hijos por el codigo html que escribimos. Pero si preguntamos por el h2 por decir alguno, y le sacamos el texto en el codigo nos dira que no tiene hijos, porque no tiene contenido



/*Propiedades de parents (padres)


-ParenElement: Selecciona el padre elemento de un elemento
-Paren node: Selecciona el padre de un elemento
Son casi lo mismo. Mejor usar parentElement
*/

console.log(contenedor.parentElement) // nos dira que es el body, porque el body lo contiene
console.log(contenedor.h2_antiguo) // Nos dira que contenedor, porque el contenedor lo contiene
