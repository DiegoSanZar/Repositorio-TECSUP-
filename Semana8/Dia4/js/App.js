//App.js es el script principal
// 1. Tener Mockapi Listo ✔
// 2.Obtener los datos (GET)✔
// 3. Convertir esos datos a elementos de HTML✔
// 4. Crear desde el navegador, POST (PUT,DELETE)
// 4.1 Detectar el evento click de un boton, para crear✔
// 4.2 vamos a invocar a un modal ✔
// 4.3 tener un metodo para enviar los datos
// 5. obtener los datos de los input del form 

import {comunicaciones} from "./comunicacion.mjs"
import {Interface} from "./interfaz.mjs"

let comunicacion = new comunicaciones()
let interfaz = new Interface()

let btnCrear = document.getElementById("btn-crear")
let modalCrear = new bootstrap.Modal(document.getElementById("modal-crear"))
let btnGuardar = document.getElementById("btn-guardar")

let getProductos = () =>{
    comunicacion.obtenerProductos()
    .then(productos =>{
        // console.table(productos)
        interfaz.imprimirProductos(productos)
    })
    .catch(error => console.log(error))
}

getProductos()

btnCrear.addEventListener("click", () =>{
    modalCrear.show()
})

btnGuardar.addEventListener("click",() =>{
    let formulario = document.getElementById("form-crear")
    let nuevoProducto = {
        //cuando creamos un nuevo recurso, no indicamos el id 
        nombre: formulario["nombre"].value ,
        descripcion: formulario["descripcion"].value,
        precio: formulario["precio"].value,
    }
    //console.table(nuevoProducto)
    comunicacion.crearProducto(nuevoProducto)
    .then(productoCreado =>{
        //ya creamos exitosamente nuestro producto
        // console.log(productoCreado)
        formulario.reset()
        modalCrear.hide()
        getProductos() //Obtengo nuevamente los productos y se vuelven a imprimir (actualizar)
    })
    .catch(error => console.log(error))
})