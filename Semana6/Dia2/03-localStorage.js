let nombre = prompt("Ingrese tu nombre")

//localStorage.setItem("clave de lo guardado", valor de lo que se quiere guardar)
localStorage.setItem("miNombre", nombre)

//setTimeout(function(){}, y el tiempo a ejecutar esa funcion en ms)
setTimeout(function(){
    //getItem("clave") obtiene algo del localStorage
    let obtenido = localStorage.getItem("miNombre")
    alert(obtenido)
}, 4000)

setTimeout(function(){
    //Elimina algo del LocalStorage por su nombre
    localStorage.removeItem("miNombre")
}, 10000)

//TODO LO QUE GUARDEMOS EN EL LOCALSTORAGE ES STRING
localStorage.setItem("saludo", 8)

let obj ={
    fruta:"manzana",
    colores: ["verde", "rojo","mixta"],
    tamanio:10,
    sabor: "dulce"
}

//JSON.stringify convierte JS a texto
let objAJSON = JSON.stringify(obj)
console.log(objAJSON)

//y recien lo guardamos en el LocalStorage
localStorage.getItem("JSON", objAJSON)

setTimeout(function(){
    let JSONobtenido = localStorage.getItem("JSON")
    let JSONdeVuelta = JSON.parse(JSONobtenido)
    //JSON.parse(texto) hace lo contrario, convierte el texto a JS
    console.log(JSONdeVuelta)
}, 2000)