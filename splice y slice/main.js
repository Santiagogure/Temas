//Splice

const nombres = ['Ana', 'Javier', 'Maru', 'Luis']

//nombres.splice(index, cantidad)  //index es la posicion donde queremos agregar, o eliminar. El segundo es la cantidad de elementos que queremos agregar o eliminar


nombres.splice(2, 1)
console.log(nombres) // Retorna ['Ana', 'Javier', 'Luis']

nombres.splice(2, 0, 'Jose')   // Retorna ['Ana', 'Javier', 'Jose' 'Maru', 'Luis']
nombres.splice(2, 1, 'Jose')   // Con esto, "Maru" seria eliminado

console.log('nombres')


//Slice
slice(comienza, termina)  //Estos son sus dos argumentos

const nombres2 = nombres.slice(0, 2)  //Teoricamente, el 2 deberia terminar en "Maru", pero el segundo argumento no cuenta, asi que conn esto queda ["Ana", "Javier"]
const nombres3 = nombres.slice(2, 4)  // Con esto obtenemos a maru y luis

//Diferencias: Slice no modifica el arreglo original
