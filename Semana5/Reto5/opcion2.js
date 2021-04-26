let hamburguesa = +prompt("Elija su Hambburguesa: 1. Simple 2.Doble 3.Triple")
let cantidad = +prompt("Cuantas hamburguesas desea")
let pago = +prompt("Paga con tarjeta: 1.SI 2.NO")
let Preciosimple = 20
let Preciodoble = 25
let PrecioTriple = 28

if( pago === 1 ){

switch(hamburguesa){
    case 1: 
        console.log("El precio total es:" + ((Preciosimple * cantidad)+(Preciosimple*cantidad*0.05)))
        break
    case 2: 
        console.log("El precio total es:" + ((Preciodoble * cantidad)+(Preciodoble*cantidad*0.05)))
        break
    case 3:
        console.log("El precio total es:" + ((PrecioTriple * cantidad)+(PrecioTriple*cantidad*0.05)))
        break
}
}else{
    switch(hamburguesa){
        case 1: 
            console.log("El precio total es:" + Preciosimple * cantidad)
            break
        case 2: 
            console.log("El precio total es:" + Preciodoble * cantidad)
            break
        case 3:
            console.log("El precio total es:" + PrecioTriple * cantidad)
            break
    }

}



