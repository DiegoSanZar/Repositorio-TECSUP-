import axios from 'axios'

const URL = "https://609f2660c512c20017dccd5e.mockapi.io/tarea"

const obtenerTareaPorAlumno = async(alumnoId) => {
    try{
        let {data} = await axios.get(URL)
        console.log(data);
        return data.filter((tarea)=>{
            return tarea.alumnoId === alumnoId
        });        
    }catch(error){
        console.log(error)
    }
 
}


export {
    obtenerTareaPorAlumno
}