class Pokemon {
    //Estas son las caracteristicas que van a tener mi objeto
    //No es obligatorio declarar las propiedades. No usamos LET VAR CONST dentro de una clase
    Nombre;
    Fuerza;
    Tipo;
    Agilidad;
    Resistencia;
    Nivel;
    //Toda clase va a tener un contructor y siempre este metodo se ejecutara al inicio de construir un objeto con la clase.
    constructor(Nombre,Fuerza,Tipo,Agilidad,Resistencia,Nivel){
        //y aca adentro contruiremos el objeto
        this.Nombre = Nombre;
        this.Fuerza = Fuerza;
        this.Tipo = Tipo;
        this.Agilidad = Agilidad;
        this.Resistencia = Resistencia;
        this.Nivel = Nivel;
        //1ro construye
        //2do ejecuta
        console.log("Construyendo");
        //Ejecutar un metodo de forma obligatoria cada vez que se instancie el objeto
        this.aparecer();
    }
    //un metodo va a ser una accion(función) que va a tener mi objeto
    aparecer(){
        console.log(`Un ${this.Nombre} salvaje apareció`)
    }

    atacar(veces){
        console.log(`${this.Nombre} ataca con una fuerza de ${this.Fuerza},${veces} veces` )
    }
}

let Pikachu = new Pokemon("Pikachu",20,"Electrico",70,15,100);
console.log(Pikachu)

let Meowth = new Pokemon("Meowth",30,"Normal",70,20,98)

console.log(Meowth);

//utilizando metodos 

Pikachu.aparecer();
