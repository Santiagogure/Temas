/* Creacion de elementos
-createElements()
-createTextNode()
-createDocumentFragments()

*/ 
const contenedor = document.querySelector('.contenedor')           
const item = document.createElement("LI")
const textodelItem = document.createTextNode("Este es un item de la lista")   // De esta forma es un objeto
item.appendChild(textodelItem)
contenedor.appendChild(item)
console.log(item)

/*
const contenedor = document.querySelector('.contenedor')           
const item = document.createElement("LI")
item.innerHTML = "Este es un elemento de la lista"       // Esta es otra forma de crear un elemento, pero la diferencia con el anterior es que esto no es un objeto.
contenedor.appendChild(item) 
console.log(item)
*/ 

/* const pedo = document.querySelector('.contenedor')
const flavio = document.createElement("LI")
flavio.innerHTML = "Este es un item de la lista"

for(i = 0; i < 20; i++){                             // Esto NO funcionaria porque un elemento es unico, y al estar afuera del bucle hace que no podamos ponerlo dos veces
    pedo.appendChild(flavio) 
}

console.log(flavio)
*/ 

/*
const pedo = document.querySelector('.contenedor')


for(i = 0; i < 20; i++){ 
    const flavio = document.createElement("LI")
    flavio.innerHTML = "Este es un item de la lista"      // De esta forma si funcionaria , y lo tendriamos 20 veces. PERO consume muchos recursos del navegador
    pedo.appendChild(flavio) 
}

console.log(flavio)
*/ 

const pedo = document.querySelector('.contenedor')

const fragmento = document.createDocumentFragment();

for(i = 0; i < 20; i++){ 
    const flavio = document.createElement("LI")
    flavio.innerHTML = "Este es un item de la lista"      // Esta seria la forma correcta, con fragment. Todo queda dentro del document fragment y ahorramos recursos del navegador.
    fragmento.appendChild(flavio) 
}

pedo.appendChild(fragmento)
