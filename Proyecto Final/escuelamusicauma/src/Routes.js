import React from 'react'
import {Route} from 'react-router-dom'

import LandingPage from "./views/LandingView"
import LandingClases from "./views/LandingClases"
import LandingContactenos from "./views/LandingContactenos"
import LandingNosotros from "./views/LandingNosotros"
import ListarAlumnos from "./views/ListarAlumnos"
import LoggeoView from "./views/LoggeoView"
import RegistroView from "./views/RegistroView"
import CalendarioAlumno from "./views/CalendarioAlumnoView"
import IntranetAlumno from './views/LoggeoMenuView'
import TareasMenu from './views/TareasAlumnoView'
import AsistenciaAlumno from './views/AsistenciaAlumnoView'


function Routes() {
    return (
        <div>
            <Route path="/" exact component={LandingPage} />
            <Route path="/listarAlumnos" exact component={ListarAlumnos} />
            <Route path="/usuario" exact component={LoggeoView} />
            <Route path="/registro" exact component={RegistroView} />
            <Route path="/calendario" exact component={CalendarioAlumno} />
            <Route path="/intranet" exact component={IntranetAlumno} />
            <Route path="/tareas" exact component={TareasMenu} />
            <Route path="/asistencia" exact component={AsistenciaAlumno} />

            <Route path="/clases" exact component={LandingClases} />
            <Route path="/contactenos" exact component={LandingContactenos} />
            <Route path="/nosotros" exact component={LandingNosotros} />
        </div>
    )
}

export default Routes
