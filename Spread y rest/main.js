/* Operador rest:
     No hay que definir la cantidad, se componen de “…” y funcionan únicamente en FUNCIONES.
*/

function suma(...numeros){
    const resultado = numeros.reduce((prevValue, nextValue) => prevValue + nextValue, 0)
    console.log(resultado)
   }
   
   suma(1,2,3,54,321,82,81)


/* Operador spread
   El Spread Operator corresponde a un operador el cuál distribuye los elementos de un arreglo u objeto, 
   para asignarlos a alguna variable/constante/función.
*/

const personaje = {
    nombre: "Santiago",
    apellido: "Gurevich",
    alergias: {
        trigo: true,
        lactosa: false
    },
   };
   const direccion = {
       calle: "Calle falsa, 123",
       localidad: "Paris",
       pais: "Francia",
   };
   const persona = {
     ...personaje,
     ...direccion
   }
   console.log(persona)
   
   
