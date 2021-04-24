// for(contador; condicional; actualización_contador){ Codigo a ejecutar}

for(let i = 0; i <=10; i = i + 1){
    console.log(`El contador es ${i}`)
}

console.log("estoy al final")

//Escoger un Menu

let carta = ["Ceviche", "cuy chactado", "costillar", "chicharron", "arroz con mariscos", "caldo de Gallina"]

let eleccion = +prompt("1. Ceviche, 2.cuy, 3.costillar, 4.chicharron, 5.arroz con mariscos")

for(let i = 0; i< carta.length; i++){
    if(eleccion === carta[i]){
        console.log(`Ud ha elegido ${carta[i]}`)
    }
}

let nombres = ["Jorge", "Adriana", "Erick", "jhan", "Violeta"]

for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i])
    if(nombres[i] === "Erick"){
        console.log(`encontre a ${nombres[i]}`)
        //break va a serir para detener las iteraciones que puedan quedar
        break
    }
}
let numeros = [1,0,1,0,0,1,1,0]
let contadordecero = 0

for(let i = 0; i < numeros.length; i++){
    if(numero[i] === 1){
        continue
    }
    console.log(`hay ${contadordecero} numero de ceros`)
}
