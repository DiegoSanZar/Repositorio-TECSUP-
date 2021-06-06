import {Route} from 'react-router-dom'
import ListarAlumnos from "./views/ListarAlumnos"

function Routes() {
    return (
        <div>
            <Route path="/" exact component={ListarAlumnos} />
        </div>
    )
}

export default Routes
