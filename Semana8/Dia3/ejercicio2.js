
let encontrarUsuario = () =>{
    return new Promise((resolve, reject)=>{
        
    })
}

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

encontrarUsuario()
.then((encontrado)=>{
    console.log(encontrado)
})