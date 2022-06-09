//Filter: sirve para filtrar en una lista elementos, nos regresa una lista, puede ser vacio, varios elementos, o uno.
let misCervezas = [
    {nombre: "Edinger", capacidad: 500},
    {nombre: "Delirium", capacidad: 300},
    {nombre: "Diosa blanca", capacidad: 700},
    {nombre: "Caguama", capacidad: 1500},
    {nombre: "Fuller", capacidad: 500}
]

let misCervezasGrandes = misCervezas.filter(e => e.capacidad > 500)   

console.log(misCervezasGrandes)

// Map sirve para realizar una operacion a todos los elementos uno a uno, y nos regresa una lista con los mismos elementos del inicio pero con los valores afectados.

/* let misCervezasBebidas = misCervezas.map(e => e.capacidad -= 100)   // Uso de map, obtenemos el valor de capacidad disminuido 100
console.log(misCervezasBebidas)       */

let misCervezasBebidas = misCervezas.map(e => {     //Otro uso del map, donde nos retorna el arreglo con el valor disminuido 100
    e.capacidad - 100;
    return e;
})
console.log(misCervezasBebidas)

//Reduce: Hace un recorrido por todo el array, y hace un acumulado de informacion sobre una variable. Esta variable puede ser un nuevo array

let mililitrosQueQuedan = 
misCervezas.reduce((acumulado, sig) =>    // El primer valor es el acumulador, es el elemento
acumulado + sig.capacidad, 
0 )   // Aca seteamos para que el acumulado comience en 0
console.log(mililitrosQueQuedan);




