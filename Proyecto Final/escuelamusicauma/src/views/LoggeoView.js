import React from 'react'
import LoggeoAlumno from "../components/LoggeoAlumno"
import {useHistory} from "react-router-dom"
import {loggingUsuario} from "../services/usuarioService"

function LoggeoView() {
    
    const history = useHistory()

    const manejarSubmit = async (e) => {
      e.preventDefault()

      try {
         let alumnoObtenido = await loggingUsuario("admin","admin") 
         
         if(alumnoObtenido != null) {
          console.log(alumnoObtenido);
            if(alumnoObtenido[0].tipo == 0){
                history.push('/intranetAdmin')
             }else{
                history.push('/intranetAlumno')
             }
         }        
      }catch(error){
        console.error(error);
      }
      
    }

    return (
        <div>
            <LoggeoAlumno manejarSubmit={manejarSubmit} />
        </div>
    )
}

export default LoggeoView
