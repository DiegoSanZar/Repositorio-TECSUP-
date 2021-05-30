

let Moneda1 = () => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(Math.random() >= 0.5){
                resolve("Primer Premio")
            }else{
                reject("Perdiste 1")
            }
        }, 2000)
    })
}

let Moneda2 = () => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(Math.random() >= 0.5){
                resolve("Segundo Premio")
            }else{
                reject("Perdiste 2")
            }
        }, 3000)
    })
}

let Moneda3 = () => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(Math.random() >= 0.5){
                resolve("Tercer Premio")
            }else{
                reject("Perdiste 3")
            }
        }, 4000)
    })
}

let Moneda4 = () => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(Math.random() >= 0.5){
                resolve("Cuarto Premio")
            }else{
                reject("Perdiste 4")
            }
        }, 5000)
    })
}

Moneda1()
.then((victoria1)=>{
    console.log(victoria1)
    return Moneda2()
})
.then((victoria2)=>{
    console.log(victoria2)
    return Moneda3()
})
.then((victoria3)=>{
    console.log(victoria3)
    return Moneda4()
})
.then((victoria4)=>{
    console.log(victoria4)
})
.catch((perdiste)=>{
    console.log(perdiste)
})