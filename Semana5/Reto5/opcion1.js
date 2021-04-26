let produLitros = +prompt("Ingrese la Producción en Litros")
let produGal = produLitros/3.785
let PrecioGal = +prompt("Ingrese precio del galon")
let ganancia = produGal * PrecioGal

console.log(`La ganancia del dia es ${ganancia}`)