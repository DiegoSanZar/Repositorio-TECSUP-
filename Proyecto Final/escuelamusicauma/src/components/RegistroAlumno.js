import React from 'react'

function RegistroAlumno() {
    return (
        <div className="container">
             <h1 className="text-center">Formulario de Registro<i className="fas fa-music"></i> </h1>
            <div className="container d-flex justify-content-between">
                <form>
                <div className="mb-3">
                    <label className="form-label fw-bold">Nombres:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ej. Diego Eugenio"
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Apellido Paterno:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ej. Sotomayor"
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Apellido Materno:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ej. Reyes"
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">email:</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Ej. dsotomayor@gmail.com"
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Fecha Nacimiento:</label>
                    <input
                        type="date"
                        className="form-control"
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Padre o Apoderado:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ej. fernando Francisco Sotomayor Garcia"
                        />
                </div>
                </form> 
                <form>
                <div className="mb-3">
                    <label className="form-label fw-bold">Usuario:</label>
                    <input
                        type="text"
                        className="form-control"
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Contraseña:</label>
                    <input
                        type="password"
                        className="form-control"
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Confirmar contraseña:</label>
                    <input
                        type="password"
                        className="form-control"
                        />
                </div>
                </form>
        </div>
        </div>
    )
}

export default RegistroAlumno
