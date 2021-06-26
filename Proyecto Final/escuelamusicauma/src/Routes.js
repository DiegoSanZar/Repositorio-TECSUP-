import React from 'react'
import {Route} from 'react-router-dom'

import LandingPage from "./views/LandingView"
import LandingClases from "./views/LandingClases"
import LandingContactenos from "./views/LandingContactenos"
import LandingNosotros from "./views/LandingNosotros"
import LandingEventos from "./views/LandingEventos"

import ListarAlumnos from "./views/ListarAlumnos"
import LoggeoView from "./views/LoggeoView"
import RegistroView from "./views/RegistroView"
import CalendarioAlumno from "./views/CalendarioAlumnoView"
import IntranetAlumno from './views/LoggeoMenuView'
import IntranetAdmin from './views/IntranetAdminView'
import TareasMenu from './views/TareasAlumnoView'
import AsistenciaAlumno from './views/AsistenciaAlumnoView'
import MostrarAlumnoView from './views/MostrarAlumnoView'


function Routes() {
    return (
        <div>
            <Route path="/" exact component={LandingPage} />
            <Route path="/listarAlumnos" exact component={ListarAlumnos} />
            <Route path="/usuario" exact component={LoggeoView} />
            <Route path="/registro" exact component={RegistroView} />
            <Route path="/calendario" exact component={CalendarioAlumno} />
            <Route path="/intranetAlumno" exact component={IntranetAlumno} />
            <Route path="/intranetAdmin" exact component={IntranetAdmin} />
            <Route path="/tareas" exact component={TareasMenu} />
            <Route path="/asistencia" exact component={AsistenciaAlumno} />
            <Route path="/mostrarAlumno" exact component={MostrarAlumnoView} />

            <Route path="/clases" exact component={LandingClases} />
            <Route path="/contactenos" exact component={LandingContactenos} />
            <Route path="/nosotros" exact component={LandingNosotros} />
            <Route path="/eventos" exact component={LandingEventos} />
        </div>
    )
}

export default Routes
