import React, {useState, useEffect} from 'react'
import { obtenerAlumnoPorId } from '../services/alumnoService'

function MostrarAlumnoView() {

    const[alumnoId, setAlumnoId] = useState([])

    const getAlumnoId = async() =>{
        try{
            let alumnoObtenidoId = await obtenerAlumnoPorId()
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
                    {alumnoId.map((alumnd, d) =>(
                        <tr key={d}>
                            <td>{alumnd.nombre}</td>
                            <td>{alumnd.apellidoPaterno}</td>
                            <td>{alumnd.apellidoMaterno}</td>
                            <td>{alumnd.email}</td>
                            <td>{alumnd.fechaRegistro}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MostrarAlumnoView
