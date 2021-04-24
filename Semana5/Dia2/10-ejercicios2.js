//bisiesto
//Descomposición
//1. Objetivo
//encontrar si un año es bisiesto, por el año 
//1.1 Reglas que hacen de un año bisiesto - descomposisción
// tiene que ser divisible entre 4 - que no de residuo
// los que son divisibles entre 100 no son bisiestos
// Los que son divisibles entre 400 tambien son bisiesto a pesar que son divisibles entre 100

// 2. Listar que pasos y datos necesito
// DATOS -> el año
// pasos -> 1. obtengo el año 2. pregunto segun las condiciones

let anio = +prompt("Ingresa el año")

if(anio % 400 == 0){
    console.log("si es bisiesto")
}
// pregunto si es que es divisible entre 4 pero no entre 100
else if(anio % 4 === 0 && anio % 100 !== 0){
    console.log("Si es bisiesto")
}else{
    console.log("No es bisiesto")
}

//Inventarios
/**
 * Una bodeha quiere hacer un inventario, actualmente tiene 03 tipos de productos, papitas, jabones y chocolate
 * queremos saber cuantos productos tiene en existencia
 */
/**
 * Descomposición
 * Reglas: Manejamos 3 productos
 * Cada Producto tendrá su cantidad al final
 * Tendremos que preguntar producto por producto
 * -Que datos o variables deberiamos tener?
 * 1. variables para c/producto
 * 2. cantidad de productos en general
 */

//Patrones
//Que tarea va a ser repetitiva?
//Contar los productos

//Diseño del Algoritmo
//1.Cuantos productos se van a contar, pedir al usuario
//2. Que producto estamos contando
//3. Si un producto pertenece a un tipo, aumentar su cantidad
let cantProductos = +prompt("Cuantos productos contaras?")

let papitas = 0
let jabones = 0
let chocolates = 0

for(i = 0; i < cantProductos; i++){
    let producto = +prompt("Ingrese 1. Papitas, 2. Jabones, 3.chocolates")

    switch(producto){
        case 1:
            papitas++
            break
        case 2: 
            jabones++
            break
        case 3:
            chocolates++
            break
        default:
            alert("numero erroneo, ingrese de nuevo")
            i-- //reduzco en uno para que el contador no aumente
    }
}

console.log(`En total hay:\n
            Papitas ${papitas}\n
            jabones ${jabones} \n
            chocolates ${chocolates}`)
