let bebidas = ["inkacola","café","cerveza"]

console.log(bebidas)

let nuevabebida = prompt ("Ingrese nueva bebida")

// push agrega un elemento al final de un arreglo

bebidas.push(nuevabebida)

console.log(bebidas)

let frutas = ["manzana","fresas","naranja"]
//pop elimina el ultimo elemento de nuestro arreglo
frutas.pop()

console.log(frutas)

let animales = ["pollo","pato","conejo","perro","zorro"]
//forEach repite la funcion segun la cantidad de elementos del arreglo
animales.forEach(function(elemento, index){
    console.log(`${index} - ${elemento}`)
})
//map hace lo mismo que forEach pero no entrega un retorno
let alumnos = ["Diego","eugenio","valentina","sofia"]
let alumnossaludo = alumnos.map(function(elemento, index){
    return `${index} - Hola soy ${elemento}`
})

console.log(alumnossaludo)

let conductores = [
    {
        nombre: "Manuel",
        tienemascarilla: false
    },
    {
        nombre: "Diemo",
        tienemascarilla: true
    },
    {
        nombre: "Raul",
        tienemascarilla: false
    },
    {
        nombre:"Cristina",
        tienemascarilla: true
    }
]
//FILTER PUEDE FILTRAR LOS ELEMENTOS DE UN ARREGLO SEGUN LA CONDICION QUE LE PONGAMOS
let puedePasar = conductores.filter(function(elemento, index){
    // if(elemento.tienemascarilla === true){
    //     return elemento
    // }
    return elemento.tienemascarilla === true
})

console.log(puedePasar)

//FIND va a encontrar algo

let dnis = ["21421412","32142142","21342148","01234567"];

let encontrado = dnis.find(function(elemento, index){
  // if(elemento === "01234567"){
  //   return elemento
  // }
  return elemento === "01234567"
})

console.log(encontrado)

