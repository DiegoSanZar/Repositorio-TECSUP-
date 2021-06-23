function decorador(texto:string){
    return function(target){ //

    }
}

class Persona{
    public nombre:string

    constructor(nombre:string){
        this.nombre = nombre
    }

    saludar(texto):void{
        console.log(`Hola que tal, soy ${this.nombre} ${texto}`)
    }
}

let Jhonny:Persona = new Persona("Jhonny")

Jhonny.saludar("cuando un Dota")