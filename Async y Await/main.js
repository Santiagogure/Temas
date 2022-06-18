const objeto = {
  propiedad1: "valor1",
  propiedad2: "valor2",
  propiedad3: "valor3"
}

/* 
const obtenerInformacion = () => {
  //  setTimeout(() => {return objeto}, 1000);       // De esta forma me retornaria undefined porque el objeto estara un segundo despues
  return new Promise((resolve, reject) => {          // Para solucionar esto, hay que trabajar con promesas
      setTimeout(() => {resolve(objeto)}, 1000);
  })
}

// console.log(obtenerInformacion())

obtenerInformacion().then(resultado => console.log(resultado))
*/ // Esto ya es asincrono, aun sin usar el async y el await

/* Pero hay otra forma de hacer esto y es con esto ultimo.

const obtenerInformacion = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {resolve(objeto)}, 1000);
   })
}

const mostrarResultado = async () => {
  resultado = await obtenerInformacion()
  console.log(resultado)
}

mostrarResultado() //Aunque en este caso es innecesario, con promesas es mucho mas corto.

*/

//Ahora hay un mejor uso

const obtenerInformacion = (text) => {
  return new Promise((resolve, reject) => {
     setTimeout(() => {resolve(text)}, Math.random()* 200);
  })
}

/*
obtenerInformacion("Hola").then(resultado => console.log(resultado))
obtenerInformacion("Ala").then(resultado => console.log(resultado))
obtenerInformacion("Sei").then(resultado => console.log(resultado)) 

 Si hacemos esto, se mostraran de forma aleatoria, no hay orden */ 

const mostrarData = async () => {
  data1 = await obtenerInformacion("Hola"),
  data2 = await obtenerInformacion("as"),
  data3 = await obtenerInformacion("lo"),
   
  console.log(data1)
  console.log(data2)
  console.log(data3)
}

mostrarData()

// De esta forma, la consola lo mostraria de forma asincrona