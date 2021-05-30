import React, {useState, useEffect} from 'react'
import FormProducto from "../components/FormProducto"
import {editarProducto, obtenerProductoPorId} from "../services/productoService"
import {useParams} from "react-router-dom"
import {obtenerCategorias} from "../services/categoriaService"

function EditarProductoView() {

    let {id} = useParams()
    const[value, setValue] = useState({
        nombre:'',
        descripcion:'',
        precio:0,
        stock:0,
        fotos:[],
        colores:[],
        id_categoria:1
    })

    const [categorias, setCategorias] = useState([])

    const actualizarInput = (e) => {
        e.preventDefault()
        setValue({
            ...value, [e.target.name]:e.target.value
        })
    }

    const manejarSubmit = async (e) => {
        e.preventDefault()
        await editarProducto(value, id)
    }

    const getProducto = async (e) => {
        try{
           let productoObtenido = await obtenerProductoPorId(id)
           console.log({productoObtenido})
           setValue({...productoObtenido})
        }catch(error){
            console.log(error)
        }
    }

    const getCategorias = async() => {
        try{
            let categoriasObtenidas = await obtenerCategorias()
            setCategorias([...categoriasObtenidas])
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getProducto()
        getCategorias()
    }, [])
    return (
        <div>
            <h1>Editar Producto</h1>
            <FormProducto 
            value={value}
            setValue={setValue}
            actualizarInput={actualizarInput}
            manejarSubmit={manejarSubmit}
            categorias={categorias} />

        </div>
    )
}

export default EditarProductoView
