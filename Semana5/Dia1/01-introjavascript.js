// Console log sirve para mostrar en la consola lo que desemos 
console.log("Hola codigo!!!")

// VARIABLES
var nombre = "Osmar"
var edad = 30

console.log(nombre)
console.log(edad)

nombre = "Jorge"
console.log(nombre)

let nombrePerro = "Backus"
console.log(nombrePerro)

// TIPOS DE DATOS
//En las variables no ´puede ir ñ, tilde o caracteres raros y nu puede empezar con numero.
let anio = 2021 // si es un numero es number

anio = "2022"// si tiene comillas es texto, string.

console.log(anio)
//typeof me dice que tipo de valor tiene una variable
console.log(typeof anio)

let edadBackus = 12
console.log(typeof edadBackus)

//booleano, tiene 2 valores, true o false
let esdenoche = true

let eltequiere = false
console.log(eltequiere)

//VALORES DE TIPO RARO EN Javascript

let nota = 0 //undefined, no tiene asignado nada
Console.log(nota)

let nulo = null //no hay valor
console.log(nulo)

//NaN = not a number 
let rareza = 1000/"nota"
console.log(rareza)