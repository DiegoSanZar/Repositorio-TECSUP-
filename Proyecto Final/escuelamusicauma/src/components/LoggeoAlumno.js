import React from 'react'
import "../LoggeoAlumno.css";


function LoggeoAlumno({value,actualizarCredenciales,manejarSubmit}) {


    return (
        <div className="text-center">
            <main className="form-signin">
                <h1 className="text-center">Escuela de Música UMA - <i>Intranet</i></h1>
                    <form
                    onSubmit={(e) => {manejarSubmit(e)}}
                    >
                        <div className="form-floating">
                            <input
                                type="text"
                                placeholder="Usuario"
                                value={value.contrasenia}
                                onChange={(e)=>{actualizarCredenciales(e)}}                                
                                className="form-control"
                                />
                        </div>
                        <div className="form-floating">                            
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={value.nombreUsuario}
                                onChange={(e)=>{actualizarCredenciales(e)}}
                                className="form-control"
                                />
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Iniciar sesión</button>
                    </form>
                <hr/>
                <span style={{color:'blue'}}>Olvide mi contraseña</span>
                <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </main>
        </div>
    )
}

export default LoggeoAlumno
