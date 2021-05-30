let frutas = ["mango","sandia","kiwi"]
//spread = esparcir
//Estamos creando un nuevo arreglo con el contenido de otro arreglo
let frutasTmp = [...frutas,"Marucuya","Naranja"]

console.log(frutasTmp)

//Objetos
let perrete = {
  nombre:"Backus",
  edad:13,
  color:"blanco"
};

let perreteActualizado = {
  ...perrete, 
  edad:14,
  color:"Blanquito como la nieve",
  raza:"Poodle"
}

console.log(perreteActualizado)