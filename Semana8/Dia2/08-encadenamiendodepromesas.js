let hornearTorta = () => {
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

let prepararGlaseado = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Glaseado listo")
            // reject("Se quemo PTMR")
        }, 4000)
    })
}

let cubrirTorta = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Torta decorada")
            // reject("La Kgue :(")
        }, 3000)
    })
}
//comenzando el proceso de preparar nuestra torta
hornearTorta()
.then((tortaHorneada) =>{
    console.log(tortaHorneada)
    //tenemos exito horneando la torta
    //retornemos una funcion que retorne una nueva promesa
    return prepararGlaseado()
})
.then((glaseadoListo) =>{
    console.log(glaseadoListo)
    return cubrirTorta()
})
.then((tortaDecorada) =>{
    console.log(tortaDecorada)
})
.catch((tortaQuemada) =>{
    console.log(tortaQuemada)
})