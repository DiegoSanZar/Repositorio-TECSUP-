// function saludar(nombre){
//     return `Hola soy ${nombre}`
// }

// let saludar = (nombre) => {
//     return `Hola soy ${nombre}`
// }

//Puedo obviar los aprentesis si solo tengo 01 parametro.

// let saludar = nombre => {
//     return `Hola soy ${nombre}`
// }

//En caso valla a retornar directamente algo, puedo remover el return y agregarlo en una sola linea 
// let saludar = (nombre) => `Hola soy ${nombre}`

let saludar = (nombre = "Batman") => `Hola soy ${nombre}`

let saludando = saludar("Omar")

console.log(saludando);

//Diferencia entre un Function y un Arrow Function

let Mouse = {
    nombre: "Mikey",

    presentarse: function(){
        console.log(`Hola yo me llamo ${this.nombre}`)

        },
        // dentro de un objeto no se puede usar la funcion flecha 
        // presentarse: () => {console.log(`Hola yo me llamo ${this.nombre}`)}
    }

