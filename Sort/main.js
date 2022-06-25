// Sort, ordenamos los elementos. Hay que tener en cuenta que no es estable, especialmente con numeros.
//Sort usa el valor unicode para ordenar los elementos.

//Para comparar los parametros, Sort espera dos parametros. 

const numbers = [2, 4, 6, 8]
numbers.sort(() => Math.random()- 0.5) // De esta forma lo retornamos de mayor a menor


const empleados = [
   {nombre: "Alejandra", edad: 25, ventas: 50},
   {nombre: "Zario", edad: 26, ventas: 20},
   {nombre: "Federico", edad: 32, ventas: 40},
   {nombre: "Xavi", edad: 45, ventas: 70},
   {nombre: "Dian", edad: 12, ventas: 80},
   {nombre: "Carlos", edad: 93, ventas: 95},
]

const empleados_organizado = empleados.sort((em1, em2) => {
   return em1.ventas - em2.ventas  
   //  return em2.ventas - em1.ventas. De esta forma lo devolvemos de mayor a menor 
})

console.log(empleados_organizado)

//Pero de esa forma solo podemos organizar numeros, si quisieramos hacerlo con string no veriamos ningun efecto.

const empleados_nombres = empleados.sort((em1, em2) => {
   return (em1.nombre < em2.nombre) ? - 1 : 1;
})

console.log(empleados_nombres) //De esta forma los ordenamos alfabeticamente


//Otro ejemplo diferente
var arr = [ 40, 1, 5, 200 ];
function comparar ( a, b ){ return a - b; }
arr.sort( comparar );  // Nos mostrara [ 1, 5, 40, 200 ]