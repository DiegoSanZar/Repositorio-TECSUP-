import React, {useState} from 'react'
import {Link} from "react-router-dom" 
import logo from "../resources/img/uma_logo.jpg"

function Footer() {

    return (

        <footer className="container-fluid py-5 bg-dark">
            <div className="row">
                <div className="col-12 col-md text-center">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" className="navbar-brand-img" style={{width:"150px",height:"150px", borderRadius: "100px"}}></img>
                </a>  
                </div>
                <div className="col-6 col-md">
                    
                <h5 className="text-primary fw-bolder">Sede principal</h5>
                <p className="text-light">
                    Sede Principal              <br />
                    Jirón Carabaya 421,         <br />
                    Lima 1 - Perú.              <br />
                    Teléfono: (511) 426 9677    
                </p>
                </div>
                <div className="col-6 col-md">
                <h5 className="text-primary fw-bolder">Nosotros:</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="link-light" href="#">Team</a></li>
                    <li><a className="link-light" href="#">Locations</a></li>
                    <li><a className="link-light" href="#">Privacy</a></li>
                    <li><a className="link-light" href="#">Terms</a></li>
                </ul>
                </div>
            </div>
        </footer>        

    )
}

export default Footer
