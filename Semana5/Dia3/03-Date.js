let hoy = new Date()

console.log(hoy) //hoy

//Año
console.log(hoy.getFullYear())

//Mes, comienzan desde 0 - Enero, 1 - Febrero
console.log(hoy.getMonth())

//Dia
console.log(hoy.getDate())

let navidad = new Date(2021, 11, 25)

console.log(navidad)

let cuantoFaltaParaNavidad = navidad - hoy
//cuando restamos 2 fechas nos aparecerá en milisegundos,

console.log(cuantoFaltaParaNavidad)
//dividido entre milisegundos/segundos/minutos/horas

let diasParaNavidad = cuantoFaltaParaNavidad/1000/60/60/24

console.log(diasParaNavidad)