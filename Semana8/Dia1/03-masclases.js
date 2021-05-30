
class Animal{
    constructor(nombre, velocidad, tamanio){
        this._nombre = nombre;
        this._velocidad = velocidad;
        this._tamanio = tamanio;
    }

    correr(){
        console.log(`${this._nombre} corre a ${this._velocidad}m/s`);
    }

    detener(){
        console.log(`${this._nombre} se detuvo`)
    }
}

let Panda = new Animal("Panda", 1, 100);

//Heredando propiedades, extends solamente declara que utilizamos las propiedades de la clase de mayor jerarquia
class Conejo extends Animal {
    constructor(nombre, velocidad, tamanio, salto){
       //super me permite acceder al constructor de la clse con mayor jerarquia
        super(nombre, velocidad, tamanio)
        this._salto = salto;
    }
    //un metodo que es especifico de la clase conejo
    esconder(){
        console.log(`${this._nombre} corre a ${this._velocidad}m/s y da un salto de ${this._salto}m y se esconde`)
    }
}

let badBunny = new Conejo("Bad Bunny", 0.85, 1.75, 0.5);

console.log(badBunny);

badBunny.esconder();