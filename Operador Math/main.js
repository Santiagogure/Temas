console.log(Math.ceil(7.2)) // Redondea a 8, siempre al numero posterior 
console.log(Math.floor(7.8)) // Redondea a 7, al menor
console.log(Math.abs(-7,8)) // Lo hace positivo
console.log(Math.round(7.6)) // Redondea al que se deba segun su cercania
console.log(Math.sqrt(81)) // Da 9, es la raiz cuadrada
console.log(Math.cbrt(27)) // Da 3, es la raiz cubica
console.log(Math.pow(2,5)) // El primer numero es la base, y el segundo el exponente. Da 32
console.log(Math.random()) // Da un numero aleatorio entre 0 y 1.
console.log(Math.random() * 1000) //Ahora daria un numero aleatorio entre 0 y 1000, y asi podemos modificar el rango.
console.log(Math.round(Math.random() * 1000)) // Ahora, redonderia ese numero y no tendriamos uno con decimales. 

numero = Math.max(12,45,18,28,38,218,39) // Devuelve el numero mas grande
console.log(numero)

numero = Math.min(12,45,18,28,38,218,39) // Devuelve el numero mas chico
console.log(numero)

//Ejemplo para hacer un ciclo entre 0-100(1-99)
for(var i = 0; i < 100000; i++){
  let numero = Math.random() * 99;
  numero = Math.floor(numero+1);

  document.write(numero + "<br>")
}