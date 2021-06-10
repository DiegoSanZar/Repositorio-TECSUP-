import React from 'react'
import {Link} from "react-router-dom" 
import loggingAlumno from "../services/alumnoService"


function LoggeoAlumno() {


    return (
        <div className="container" style={{
            top:'calc(50% -50px)',
            left:'calc(50% -50px)',
            width:'600px',
            height:'400px'
        }}>
            <h1 className="text-center">Escuela de Música UMA <i className="fas fa-music"></i> </h1>
                <form>
                <div className="mb-3">
                    <label className="form-label">Usuario:</label>
                    <input
                        type="text"
                        className="form-control"
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña:</label>
                    <input
                        type="password"
                        className="form-control"
                        />
                </div>
                </form>
            <Link className="btn btn-primary" to="/inicioSesion">Ingresar</Link>

        </div>
    )
}

export default LoggeoAlumno
