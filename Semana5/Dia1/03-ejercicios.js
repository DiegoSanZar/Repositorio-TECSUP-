// 1. Pedir al usuario su nombre y apellido y mostrarlos en un saludo 
let nombre = prompt("¿Cual es su nombre y apellido?") 
let saludo = "Hola, mi nombre es "

console.log(saludo + nombre)


//2. calcular el area de un triangulo, preguntando al usuario la base y altura de ese triangulo, 
// Se asume que el triangulo es de tipo isosceles
// formula base * altura / 2 
let base = prompt("Diametro de la base")
let altura = prompt("diametro de la altura")
let area = (base * altura) / 2

console.log("el area del triangu es:" + area)



// 3. Preguntar al usuario por dos numeros y mostrar su residuo 

let numero1 = prompt("primer numero")
let numero2 = prompt("segundo numero")

console.log(`el residuo es :${ numero1 % numero2}`)