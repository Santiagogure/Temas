//error - ocurre cuando sucede un error durante la carga de archivos multimedia
//load - ocurre cuando un objeto se cargo
//beforeunload - ocurre antes de que el documento este a punto de descargarse
//unload - ocurre una vez se ha descargado una pagina
//resize - ocurre cuando se cambia el tamaño de la vista del documento
//scroll - ocurre cuando se desplaza la barra del desplazamiento de un elemento
//select - ocurre despues de que el usuario selecciona algun texto de <input>



//Timers:
 
const temporizador = setTimeout(()=>{
 document.write("hola")
}, 2000)  //Se escribe, dos segundos despues
clearTimeout(temporizador)  // De esta forma, no se ejecutaria

//Tambien tenemos, SetInterval, que nos ejecutara una funcion constantemente
const intervalo = setInterval(()=>{
    document.write("hola")
},2000)
clearInterval(intervalo) //Tambien tiene su forma de cortar 