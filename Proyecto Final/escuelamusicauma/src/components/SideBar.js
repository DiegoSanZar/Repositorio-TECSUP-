import {Link} from "react-router-dom" 
import logo from "../resources/img/uma_logo.jpg"


function SideBar(){

    return (
        <div className="sidebar-sticky">
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "280px"}}>
            <div className="d-flex justify-content-center">
                <a className="navbar-brand" href="/">
                <img src={logo} alt="Logo" className="navbar-brand-img" style={{width:"160px",height:"160px",borderRadius:"50%"}}></img>
                </a>              
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <Link to="/intranet" className="nav-link active" aria-current="page">                
                Inicio
                </Link>
            </li>
            <li>
                <Link to="/registro" className="nav-link link-dark">                
                Mis datos
                </Link>
            </li>
            <li>
                <Link to="/calendario" className="nav-link link-dark">                
                Calendario clases
                </Link>
            </li>
            <li>
                <Link to="/tareas" className="nav-link link-dark">
                
                Tareas
                </Link>
            </li>
            <li>
                <Link to="/asistencia" className="nav-link link-dark">
                
                Asistencia
                </Link>
            </li>
            </ul>
            <hr />
        </div>
        </div>
    )



}

export default SideBar;