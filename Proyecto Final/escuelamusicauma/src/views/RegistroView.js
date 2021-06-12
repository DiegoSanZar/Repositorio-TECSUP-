import React from 'react'
import RegistroAlumno from "../components/RegistroAlumno"
import SideBar from "../components/SideBar"

function RegistroView() {
    return (
        <div className="d-flex flex-row">
            <SideBar></SideBar>   
            <RegistroAlumno></RegistroAlumno>
        </div>
    )
}

export default RegistroView
