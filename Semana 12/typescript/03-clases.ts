interface iPlato {
    id:number,
    nombre:string,
    ingredientes:Array<string>,
    preparacion:string

    mostrarInfo():void
}

//clase, estas en ts ya pueden implementar una interface
class Platillo implements iPlato{
   public id:number
   public nombre:string
   public ingredientes:Array<string>
   public preparacion:string
   private ingrediente_secreto = "plancton"

   constructor(id:number,nombre:string){
       this.id = id
       this.nombre = nombre
       this.ingredientes = []
       this.preparacion=""
   }
    mostrarInfo(){
        console.log(`Este platillo es ${this.nombre} y su preparacion es ${this.preparacion}`)
    }
}

let Chifa:Platillo = new Platillo(10, "Aeropuerto")


console.log(Chifa.nombre)