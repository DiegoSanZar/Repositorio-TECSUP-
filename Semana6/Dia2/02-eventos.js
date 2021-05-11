let divContenido  = document.getElementById("contenido")

let miBoton = document.createElement("button")

miBoton.innerText = "Dame click"

divContenido.appendChild(miBoton)
//addEventListener("evento", function(){})
miBoton.addEventListener("click", function(){ alert("Haz dado click")})

let cancionesParaBailar = [
    "Lose yourself to dance",
    "La Macarena",
    "Get ypurself",
    "Dance monkey",
    "motor y motivo"
]

cancionesParaBailar.forEach(function(cancion){
    let nuevoParrafo = document.createElement("p")
    nuevoParrafo.innerText = cancion
    divContenido.appendChild(nuevoParrafo)
    //vamos a agregar tambien aqui su AddEvent Listener
    nuevoParrafo.addEventListener("click", function(){
        alert("Hiciste Click en una cancion")
    })
    nuevoParrafo.style.cursor = "pointer"
})

let input = document.createElement("input")
input.setAttribute("type", "password")
divContenido.appendChild(input)

let btnVer = document.createElement("button")
btnVer.innerText = "ver Password"
divContenido.appendChild(btnVer)

let esVisible = false

btnVer.addEventListener("click", function(){
    //cambiar el booleano
    esVisible = !esVisible
    if(esVisible === true){
        input.setAttribute("type","text")
    }else{
        input.setAttribute("type", "password")
    }
})
//keyup -> evento cuando la tecla se levante 
input.addEventListener("keyup",function(evento){
//Lo que reciba la funcion del addEventListener va a ser otro objeto, la tecla y demas info
//target = al elemento que estoy capturando
//target.value = el valor de mi input
console.log(evento.target.value)
})

let goToGoogle = document.createElement("a")

goToGoogle.setAttribute("href", "http://google.com")
goToGoogle.innerText = "Ir a Google"
divContenido.appendChild(goToGoogle)

//previene la acción por defecto de un elemento
//por ejemplo un hipervinculo
//o un form con un submit
goToGoogle.addEventListener("click", function(e){
    e.preventDefault()
})
