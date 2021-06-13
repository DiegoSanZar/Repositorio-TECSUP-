let saludo = "hola mundo"

console.log(saludo)

//types o tipado
let texto:string ="conferencia"

let cantidad:number = 100

let LosQuiere:boolean = true

let misNumeros:Array<number> = [1, 2, 3, 4, 5, 6]

let random:any = {nombre:"Floki"} //acepta cualquiercosa 

let random2:unknown = {nombre:"Marshal"} //acepta cualquier cosa menos null y undefined

//funciones

let sumar = (num1:number, num2:number):number => {
    return num1 + num2
}

sumar(10, 20)

