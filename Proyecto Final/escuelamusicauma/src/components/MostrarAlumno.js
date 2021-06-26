import React, {useState, useEffect} from 'react'
import { obtenerAlumnoPorId } from '../services/alumnoService'


function MostrarAlumno() {

    const[alumnoId, setAlumnoId] = useState([])

    const getAlumnoId = async() =>{
        try{
            let alumnoObtenidoId = await obtenerAlumnoPorId(1)
            console.log(alumnoObtenidoId)
            setAlumnoId(alumnoObtenidoId)
            console.log(alumnoId)
         }catch(error){
             throw error
         }
    }

    useEffect(() =>{
        getAlumnoId()
    }, [])

    return (
        <div>
             <h1>Datos Alumno </h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre del Alumno</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Email</th>
                        <th>Fecha de Registro</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {alumnoId.map((alumnId) =>(
                        <tr>
                            <td>{alumnId.nombre}</td>
                            <td>{alumnId.apellidoPaterno}</td>
                            <td>{alumnId.apellidoMaterno}</td>
                            <td>{alumnId.email}</td>
                            <td>{alumnId.fechaRegistro}</td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    )
}

export default MostrarAlumno
