let a = 100
let b = 4

let suma = a + b 
console.log("suma", suma)

let resta = a - b
console.log("resta", resta)

let multiplicacion = a * b
console.log("multiplicación", multiplicacion)

let divi = a / b
console.log("division", divi)

let raiz = Math.sqrt(144)
console.log("raiz cuadrada", raiz)

let residuo = 105 % 4
console.log("residuo", residuo)

// CONCATENACION

let saludo = "hola soy "
let nombre = "diego"

console.log(saludo + nombre + ", que tal")

console.log(nombre + " " + 30 + " años")

let miEdad = 30

//cuando utilizamos `` puedo poner dentro ${variables_de_js} - es un template string
let texto = `Hola soy ${nombre} soy de Arequipa y tengo ${miEdad}`

console.log(texto)

//PROMPT
//Es la primera manera de capturar datos 

let cantidaddperretes = prompt("cuantas mascotas tienes?")

console.log(`Mascotas ${cantidaddperretes}`)

console.log(typeof cantidaddperretes); //todo lo ingresado en prompt es texto

//let mascotasconvertidas1 = parseInt(cantidaddPerretes)
let mascotasconvertidas1 = +cantidaddperretes

console.log(typeof mascotasconvertidas1)


