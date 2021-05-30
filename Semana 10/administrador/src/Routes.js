import React from 'react'
import {Route} from "react-router-dom"
import CrearProductoView from "./views/CrearProductoView"
import ListaProductosView from "./views/ListaProductosView"
import EditarProductoView from "./views/EditarProductoView"
import CrearCategoriaView from "./views/CrearCategoriaView"
import ListaCategoriaView from "./views/ListaCategoriaView"

function Routes() {
    return (
        <div>
            <Route exact path="/" component={ListaProductosView}></Route>
            <Route exact path="/crearproducto" component={CrearProductoView}></Route>
            {/* al darle en en path :algo indico que voy a pasar un parametro llamado "algo" */}
            <Route exact path="/editarproducto/:id" component={EditarProductoView}></Route>
            <Route exact path="/crearcategoria" component={CrearCategoriaView}></Route>
            <Route exact path="/listacategoria" component={ListaCategoriaView}></Route>
        </div>
    )
}

export default Routes
