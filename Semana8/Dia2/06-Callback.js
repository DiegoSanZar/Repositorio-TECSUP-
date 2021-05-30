let Alumnos = ["jhan","Diego","Erick","Maximo","violeta","veronica","Agustin"]

let buscarAlumno = (nombre, callback) => {
    //esta funcion va a devolver mediante un booleano si existe o no
    setTimeout(() =>{
        //Utilizamos setTimeout para que esto demore 3segundos
        for(let i=0; i < Alumnos.length; i++){
            if(Alumnos[i] == nombre){
                callback(true)
                return;//cuando hacemos un return, se corta la ejecución
            }
        }
        callback(false)//Si NO se encuentra
    }, 3000)
}

buscarAlumno("Bryan", (existe) => {
    if(existe === true){
        console.log("El alumno existe")
    }else{
        console.log("No existe")
    }
})