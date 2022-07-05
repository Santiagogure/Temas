
//Fill:

const array = [1, 1, 1, 1, 1, 1, 1, 1]

array.fill(0) //Esto llenara el array de 0, o del valor

array.fill(0, 2) //De esta manera, todos seran 0, menos los primeros dos valores que se mantendran como 1

array.fill(0, 2, 5) //El ultimo parametro sirve para establecer hasta donde se va a llenar

//Algun tipo de uso podria ser

const myArray = new Array(20).fill(0);   //Ahora tendremos 20 elementos con el valor de 0
//Si queremos inicializar un array con una cantidad determinada de elementos. Sirve mucho el Fill


// Some:
   //Nos permite verificar si un elemento del array cumple con las condiciones que le solicitamos

   const anotherArray = [1, 2, 3, -10, 5, 6]

  const valorMenorACero = anotherArray.some((valor)  => valor < 0)

  console.log(valorMenorACero) // De esta forma nos devolvera true, porque existe el -10
 
  //Ahora lo vemose en un uso mas trabajado
  
  const users = [
    {nombre: "Fabian", edad: 23},
    {nombre: "Edu", edad: 19},
    {nombre: "Pancracio", edad: 13},
    {nombre: "Idiot", edad: 11},
    {nombre: "Walter", edad: 12}
  ]

  const anyAdult = users.some(user => user.edad > 18)
  console.log(anyAdult) //Nos devuelve true porque Fabian y Edu tienen mas de 18

//Every:
  //Su funcion es parecida a some pero con todos los elementos de un array. Nos permite verificar bajo una condicion

  const array1 = [1, 2 ,3 ,4]
  const array2 = [2, 2, 4, 4]

  // array1.every(function(valor, indice, array){})  El segundo parametro es el sitio donde se encuentra cada uno, y el tercero es el array en su totalidad
 const sonPares = array1.every(function(valor){
    return valor % 2 ===  0; //Verificamos los numeros pares
  })  

  console.log(sonPares); // Nos retornara false porque no todos son pares

  //Pero aca tenemos un forma para usar la funcion de forma reutilizable y actuar sobre ambos arrays

  function esNumeroPar(valor){
    return valor % 2 ===  0; //Verificamos los numeros pares
  }

  const sonPares1 = array1.every(esNumeroPar)
  const sonPares2 = array2.every(esNumeroPar)
  console.log(sonPares1) //Este devuelve false
  console.log(sonPares2) //Este devuelve true

    
// Assing:
   //  copia todas las propiedades 
   // enumerables de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino. 

var Santiago = {name: "Santiago"}
var last_name = {last_name: "Gurevich"};
var age = {age: 21}

const miNombre = Object.assign(Santiago, last_name, age, {teacher: "Mrs Waters"});
console.log(miNombre)


//
