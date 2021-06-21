import React, {useState} from 'react'
import RegistroAlumno from "../components/RegistroAlumno"
import SideBar from "../components/SideBar"
import {useHistory} from "react-router-dom"
import { creaAlumno } from '../services/alumnoService'
import Swal from 'sweetalert2'
 
function RegistroView() {
    const [value, setValue] = useState({
        nombre:'',
        apellidoPaterno:'',
        apellidoMaterno:'',
        email:'',
        fechaRegistro:'',
        nombrePadre:'',
        nombreMadre:'',
        direccion:'',
        fechaNacimiento:'',
        usuario:'',
        contrasea:'',
        instrumento:''
    })

    const history = useHistory()

    const manejarSubmit = async (e) => {
        e.preventDefault()
        try {
            await creaAlumno({...value})
            await Swal.fire({
                icon:'success',
                title:'Alumno Registrado',
                showConfirmButton:false,
                timer:2000
            })
            history.push("/")
        }catch(error){
            console.log(error)
        }
    }

    const actualizarInput = (e) =>{
        setValue({...value,[e.target.name]: e.target.value
        })
    }

    return (
        <div className="d-flex flex-row">
            <SideBar></SideBar>   
            <RegistroAlumno value={value} actualizarInput={actualizarInput} setValue={setValue} manejarSubmit={manejarSubmit}></RegistroAlumno>
        </div>
    )
}

export default RegistroView
