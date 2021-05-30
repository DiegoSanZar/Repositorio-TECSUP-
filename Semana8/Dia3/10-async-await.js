// let traerData = () => {
//     return new Promise((resolve, reject)=>{
//         resolve("Datos Obtenidos")
//         //reject("error al obtener data")
//     })
// }

let traerData = async () => {
   // return "Datos Obtenidos" //resolve
    throw "Error al obtener Data" //reject
}

// traerData()
// .then(rpt => console.log(rpt))
// .catch(error => console.log(error))

let usarData = async () => {
    try { //Intenta hacer esto sin errores
        let respuesta = await traerData()
        console.log(respuesta)
    } catch (error) { //ok si hay errores,captura el error
        console.log(error)
    }
}

usarData()
