import React from 'react'
import {Route} from 'react-router-dom'

import LandingPage from "./views/LandingView"
import ListarAlumnos from "./views/ListarAlumnos"
import LoggeoView from "./views/LoggeoView"
import RegistroView from "./views/RegistroView"

function Routes() {
    return (
        <div>
            <Route path="/" exact component={LandingPage} />
            <Route path="/listarAlumnos" exact component={ListarAlumnos} />
            <Route path="/usuario" exact component={LoggeoView} />
            <Route exact path="/registro" component={RegistroView} />

        </div>
    )
}

export default Routes
