import {Link} from "react-router-dom" ;
import logo from "../resources/img/uma_logo.jpg";
import Swal from 'sweetalert2';
import {useHistory} from "react-router-dom";
import React, { useContext } from "react";
import { sideBarContext } from "../context/sideBarContext";
import { AuthContext } from "../context/AuthContext";




function SideBar(){

    
    const history = useHistory()
    let { sideBarActive } = useContext(sideBarContext);
    let { actualizarActiveLink } = useContext(sideBarContext);
    
    let { actualizarAuth } = useContext(AuthContext);
    let { actualizarAlumnoId } = useContext(AuthContext);


    const evaluateActiveLink = (actual) => {
        if(actual == sideBarActive){
            return true;
        }
        return false;
    } 

    const cerrarSession = async (e) => {
        

        e.preventDefault()
        try {          
            Swal.fire({
                title: '¿Deseas cerrar sesión?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: `Si`,
                denyButtonText: `No`,
                }).then((result) => {                
                if (result.isConfirmed) {
                    actualizarAuth(false)
                    actualizarAlumnoId("")                    
                    history.push('/')
                }
                })
        } catch (error) {
          console.log(error)
        }
      }   

    return (
      <div className="navbar-expand-sm sidebar bg-light">
        <div className="d-flex flex-column flex-shrink-0 p-3 " style={{width: "280px"}}>
            <div className="d-flex justify-content-center">
                <a className="navbar-brand" href="/">
                <img src={logo} alt="Logo" className="navbar-brand-img" style={{width:"150px",height:"150px",borderRadius:"50%"}}></img>
                </a>              
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <Link to="/intranetAlumno" className={`${evaluateActiveLink("intranetAlumno") ? 'nav-link link-dark active':'nav-link link-dark'}`} 
                onClick={()=> {actualizarActiveLink("intranetAlumno")}}
                >                
                Inicio
                </Link>
            </li>
            <li>
                <Link to="/mostrarAlumno" className={`${evaluateActiveLink("mostrarAlumno") ? 'nav-link link-dark active':'nav-link link-dark'}`} 
                onClick={()=> {actualizarActiveLink("mostrarAlumno")}}>                
                Mis datos
                </Link>
            </li>
            <li>
                <Link to="/calendario" className={`${evaluateActiveLink("calendario") ? 'nav-link link-dark active':'nav-link link-dark'}`} 
                onClick={()=> {actualizarActiveLink("calendario")}}>                
                Calendario clases
                </Link>
            </li>
            <li>
                <Link to="/tareas" className={`${evaluateActiveLink("tareas") ? 'nav-link link-dark active':'nav-link link-dark'}`} 
                onClick={()=> {actualizarActiveLink("tareas")}}>    
                
                Tareas
                </Link>
            </li>
            <li>
                <Link to="/asistencia" className={`${evaluateActiveLink("asistencia") ? 'nav-link link-dark active':'nav-link link-dark'}`} 
                onClick={()=> {actualizarActiveLink("asistencia")}}>  
                
                Asistencia
                </Link>
            </li>
            </ul>

            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link link-dark" onClick={cerrarSession}>                
                    Salir
                    </Link>
                </li>
            </ul> 
            <hr />           
        </div>

     </div>
     
    )



}

export default SideBar;