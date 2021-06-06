import {Route} from 'react-router-dom'
import ListarAlumnos from "./views/ListarAlumnos"
import LoggeoAlumno from "./views/LoggeoView"

function Routes() {
    return (
        <div>
            <Route path="/" exact component={ListarAlumnos} />
            <Route path="/usuario" exact component={LoggeoAlumno} />
        </div>
    )
}

export default Routes
