import React from 'react'
import {Route} from 'react-router-dom'

import LandingPage from "./views/LandingView"
import ListarAlumnos from "./views/ListarAlumnos"
import LoggeoAlumno from "./views/LoggeoView"
import LoggeoMenu from './views/LoggeoMenuView'

function Routes() {
    return (
        <div>
            <Route path="/" exact component={LandingPage} />
            <Route path="/listarAlumnos" exact component={ListarAlumnos} />
            <Route path="/usuario" exact component={LoggeoAlumno} />
            <Route path="/inicioSesion" exact component={LoggeoMenu} />
        </div>
    )
}

export default Routes
