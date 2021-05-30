let hornearTorta = () => {
    //como el horneado demora o no se como va a salir 
    //resolve => va bien reject => va mal
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true){
                resolve("La torta esta lista")
            }else{
                reject("Pos se quemó")
            }
        }, 5000)
    })
}

hornearTorta()
//va a ejecutarse si las cosas fueron bien -> Resolve
.then((tortaHorneada) =>{
    console.log(tortaHorneada)
})
//va a ejecutar si las cosas salen mal -> Reject
.catch((tortaQuemada) =>{
    console.log(tortaQuemada)
})