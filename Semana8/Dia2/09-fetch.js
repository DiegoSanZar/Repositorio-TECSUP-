//fetch(url)
//GET- Obtenemos datos/recursos/Documentos
fetch("https://reqres.in/api/users?page=2")
.then((respuesta) =>{
    console.log(respuesta)
    return respuesta.json() // va a parsear/convertir la respuesta
})
.then((datos) =>{
    console.log(datos)
})

//POST - Enviando Datos, Crear un Recurso

//nuevoUsuario a mandar
let nuevoUsuario = {
    name:"Lezly",
    job:"Tutora"
}

//cabeceras - Guia de remisión 
let cabecera = {
    //metodo HTTP, tipo_contenido, body = datos = nuevoUsuario
    method:'POST', //PUT, DELETE
    headers:{
        'Content-Type' : 'application/json' //api sepa como procesarlo
    },
    body: JSON.stringify(nuevoUsuario) //se convierte en un JSON de texto plano 
}
//fetch(url, cabecera_con_body)
fetch("https://reqres.in/api/users", cabecera)
.then((respuesta) => {
    console.log("POST", respuesta)
    return respuesta.json()
})
.then((datosCreados) =>{
    console.log(datosCreados)
})

//MockAPI GET 
fetch("https://609f10615f32be00171cd347.mockapi.io/alumnos")
.then((respuesta)=>{
    return respuesta.json() //status:code, headers no hay datos 
})
.then((alumnos)=>{
    console.log(alumnos) //ya tengo los datos 
})
.catch((error)=>{
    console.log(error)
})

//PUT 
let alumnoEditado = {
    nombres: "Diego",
    apellidos: "Sánchez"
}

let configuracion = {
    method: "PUT",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(alumnoEditado)
}
//endpoint -> url/api/v1/usuario/:id, los : representan un parametro que hay que indicarle 
fetch("https://609f10615f32be00171cd347.mockapi.io/alumnos/2", configuracion)
.then((respuesta)=>{
    return respuesta.json()
})
.then((alumnoModificado)=>{
    console.log(alumnoModificado)
})
.catch((error)=>{
    console.log(error)
})