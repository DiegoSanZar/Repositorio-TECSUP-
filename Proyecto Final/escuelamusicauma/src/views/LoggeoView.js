import React,{useState} from 'react'
import LoggeoAlumno from "../components/LoggeoAlumno"
import {useHistory} from "react-router-dom"
import {loggingUsuario} from "../services/usuarioService"
import Swal from 'sweetalert2'

function LoggeoView() {
    
    const history = useHistory()

    const [credenciales, setCredenciales] = useState({
      nombreUsuario:'',
      contrasenia:''
    })

   const actualizarCredenciales = (e) => {
      setCredenciales({
          ...credenciales,
          [e.target.name]: e.target.value
      })
   }




    const manejarSubmit = async (e) => {
      e.preventDefault()

      try {
         let alumnoObtenido = await loggingUsuario(credenciales.nombreUsuario,
          credenciales.contrasenia) 
         
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
            <LoggeoAlumno value={credenciales} actualizarCredenciales={actualizarCredenciales} manejarSubmit={manejarSubmit} />
        </div>
    )
}

export default LoggeoView
