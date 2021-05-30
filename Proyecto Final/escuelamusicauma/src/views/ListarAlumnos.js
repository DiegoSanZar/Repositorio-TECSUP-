import React, {useState, useEffect} from 'react'
import {obtenerAlumnos} from '../services/alumnoService'

function ListarAlumnos() {

    const getAlumnos = async() =>{
        try{
            let alumnosObtenidos = await obtenerAlumnos()
            console.log(alumnosObtenidos)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getAlumnos()
    }, [])

    return (
        <div>
            <h1>Lista de Alumnos</h1>
        </div>
    )
}

export default ListarAlumnos
