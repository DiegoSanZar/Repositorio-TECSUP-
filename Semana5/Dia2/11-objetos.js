let perrete = {
    nombre: "jagger",
    edad: 12,
    color: "caramelo",
    esterilizado: false,
    ladra: true,
    hobbies: ["jugar", "persigue gatos", "comer higadito"],

    comer: function() {
        console.log("come")
    }
}

// console.log(perrete)

console.log(perrete.nombre)
console.log(perrete.color)

perrete.edad = 13
