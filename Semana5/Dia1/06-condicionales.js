let edad = +prompt("¿cual es tu edad?")

//esta habilitado para votar 
//if(condicion)
if(edad >= 18){
    console.log("Puedes votar")
}else if(edad < 18 && edad>= 0){
    console.log("Tienes dni amarillo, no puedes votar")
}
else{
    console.log("No puedes votar")
}

let numero = +prompt("ingrese numero")

// operador OR 
if(numero > 120 || numero < 0){
    console.log("es falso")
}else{
    console.log("estas mintiendo")
}
let chanchito = +prompt("Ingresa el monto de tus ahorros")

//vamos a comprar unos audifonos con el chancho 

if(chanchito > 3000){
    console.log("Puedes comprar unos Bose A20")
}
else if(chanchito <= 3000 && chanchito >= 1000){
    console.log("Puedes comprar unos bose Quiefconfort")
}
else if(chanchito < 1000 && chanchito >=150){
    console.log("Puedes comprar unos logitech")
}else{
    console.log("puedes comprar unios baratitos nomas")
}

let vaca = "1000"

//doble igual solo evalua el valor 
//triple igual evalua el tipo de dato y valor 
if(vaca === 1000){
    console.log("Es verdura")
}
else{
    console.log("naa te tas hueviando")
}

//OPERADORES TERNARIOS 
let edad = 19

//condicional ? Si es verdadero : Si es falso 
edad >= 18 ? console.log("si es mayor") : console.log("es menor de edad")

