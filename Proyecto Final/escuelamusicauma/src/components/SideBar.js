import {Link} from "react-router-dom" ;
import logo from "../resources/img/uma_logo.jpg";
import Swal from 'sweetalert2';
import {useHistory} from "react-router-dom";
import React, { useContext } from "react";
import { sideBarContext } from "../context/sideBarContext";




function SideBar(){

    
    const history = useHistory()
    let { sideBarActive } = useContext(sideBarContext);
    let { actualizarActiveLink } = useContext(sideBarContext);


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
                    history.push('/')
                }
                })
        } catch (error) {
          console.log(error)
        }
<<<<<<< HEAD
      }   
=======
    }
>>>>>>> 7ceb6edf85b9fc9a0ffaa39f980e81a0f510edfd

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
<<<<<<< HEAD
                <Link to="/intranet" className={`${evaluateActiveLink("intranet") ? 'nav-link link-dark active':'nav-link link-dark'}`} 
                onClick={()=> {actualizarActiveLink("intranet")}}
                >                
=======
                <Link to="/intranet" id="menu-intranet" className="nav-link active" aria-current="page">                
>>>>>>> 7ceb6edf85b9fc9a0ffaa39f980e81a0f510edfd
                Inicio
                </Link>
            </li>
            <li>
<<<<<<< HEAD
                <Link to="/registro" className={`${evaluateActiveLink("registro") ? 'nav-link link-dark active':'nav-link link-dark'}`} 
                onClick={()=> {actualizarActiveLink("registro")}}>                
=======
                <Link to="/registro" id="menu-registro" className="nav-link link-dark">                
>>>>>>> 7ceb6edf85b9fc9a0ffaa39f980e81a0f510edfd
                Mis datos
                </Link>
            </li>
            <li>
<<<<<<< HEAD
                <Link to="/calendario" className={`${evaluateActiveLink("calendario") ? 'nav-link link-dark active':'nav-link link-dark'}`} 
                onClick={()=> {actualizarActiveLink("calendario")}}>                
=======
                <Link to="/calendario" id="menu-calendario" className="nav-link link-dark">                
>>>>>>> 7ceb6edf85b9fc9a0ffaa39f980e81a0f510edfd
                Calendario clases
                </Link>
            </li>
            <li>
<<<<<<< HEAD
                <Link to="/tareas" className={`${evaluateActiveLink("tareas") ? 'nav-link link-dark active':'nav-link link-dark'}`} 
                onClick={()=> {actualizarActiveLink("tareas")}}>    
=======
                <Link to="/tareas" id="menu-tareas" className="nav-link link-dark">
>>>>>>> 7ceb6edf85b9fc9a0ffaa39f980e81a0f510edfd
                
                Tareas
                </Link>
            </li>
            <li>
<<<<<<< HEAD
                <Link to="/asistencia" className={`${evaluateActiveLink("asistencia") ? 'nav-link link-dark active':'nav-link link-dark'}`} 
                onClick={()=> {actualizarActiveLink("asistencia")}}>  
=======
                <Link to="/asistencia" id="menu-asistencia" className="nav-link link-dark">
>>>>>>> 7ceb6edf85b9fc9a0ffaa39f980e81a0f510edfd
                
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