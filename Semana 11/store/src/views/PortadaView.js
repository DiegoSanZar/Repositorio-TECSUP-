import {useState, useEffect} from 'react' 
import {obtenerProductos} from "../services/productoService"
import GroupProducts from "../components/GroupProducts"

function PortadaView() {
    const[productos, setProductos] = useState([])

    const getProductos = async () => {
        let productosObtenidos = await obtenerProductos()
        setProductos(productosObtenidos)
    }

    useEffect(() => {
        getProductos()
    },[])

    return (
        <div>
            <GroupProducts productos={productos} categoria="Categorico" id_categoria="85"/>
            <GroupProducts productos={productos} categoria="Radiomar" id_categoria="34"/>
        </div>
    )
}

export default PortadaView
