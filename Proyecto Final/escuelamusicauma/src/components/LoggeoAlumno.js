import React from 'react'
import loggingAlumno from "../services/alumnoService"


function LoggeoAlumno({manejarSubmit}) {


    return (
        <div className="container" style={{
            top:'calc(50% -50px)',
            left:'calc(50% -50px)',
            width:'600px',
            height:'400px'
        }}>
            <h1 className="text-center">Escuela de Música UMA <i className="fas fa-music"></i> </h1>
                <form
                onSubmit={(e) => {manejarSubmit(e)}}
                >
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
                <button className="btn btn-primary" type="submit">Ingresar</button>
                </form>
            
            <hr/>
            <span style={{color:'blue'}}>Olvide mi contraseña</span>
        </div>
    )
}

export default LoggeoAlumno
