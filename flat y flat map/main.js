 // Metodos 

 //Flat: aplana el array

 const array = [1, 2, [3, 4], 5, [[6]], [[7]]]
 
 const flatten = array.flat(2)  // Con el numero indicamos cuantas veces vamos a desenvolver el elemento
 //Tambien podemos poner un array.flat(infinty) que lo hara la maxima cantidad de veces que pueda
 
 console.log(flatten)
 //Quedaria [1, 2, 3, 4, 5, 6, 7]


 //Flatmap, sirve como para filtrar y mapear a la vez
 
 /*
 const pelotudo = [1, 2, 3, 4, 5, 6]
 const flay = pelotudo.flatMap(n => n * 2)
 console.log(flay)
 */

 const pelotudo = [1, 2, 3, 4, 5, 6]
 const flay = pelotudo.flatMap(n => n % 2 == 0 ?[] :[n * 2])   // ? funciona como if, el : como else
 console.log(flay)
//En este caso multiplicamos los impares
