const URL = "https://609f10615f32be00171cd347.mockapi.io/Productos"

class comunicaciones {
    //
    obtenerProductos(){
        //que me devuelva directamente los datos
        return new Promise((resolve, reject) => {
            fetch (URL)
            .then(respuesta => {
                return respuesta.json() //tengo la respuesta con el status
            })
            .then(productos => {
                resolve(productos) //tengo los datos ya en JS
            })
            .catch(error => reject(error)) //en caso de error
        })
    }

    crearProducto(objProducto){
        return new Promise((resolve, reject) => {
            //PUT, POST necesitamos los datos y las cabeceras 
            let configuracion = {
                method: 'POST',
                body:JSON.stringify(objProducto), //Lo transformamos a texto
                headers: {'Content-Type':'application/json'}
            }

            fetch(URL, configuracion)
            .then(respuesta => respuesta.json())
            .then(productoCreado => resolve(productoCreado))
            .catch(error => reject(error))
        })
    }
    //aqui pueden ir mas metodos 
}

export {
    comunicaciones
}