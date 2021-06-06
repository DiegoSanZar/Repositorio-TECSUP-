import {useContext} from 'react'
import {CarritoContext} from "../context/carritoContext"

function CarritoView() {
    let {carrito} = useContext(CarritoContext)
    return (
        <div className="container"> 
        <div className="my-4 text-center">
            <h1 className="fw-bold">
                <i className="fas fa-shopping-bag me-3"></i>
                Carrito de Compras
            </h1>
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio unitario</th>
                    <th>Precio Total</th>
                </tr>
            </thead>
            <tbody>
            {carrito.map((prod, i)=>(
                <tr key={i}>
                    <td>{prod.nombre}</td>
                    <td>{prod.cantidad}</td>
                    <td>{prod.precio}</td>
                    <td>{prod.precio * prod.cantidad}</td>
                    </tr>
            ))}
            </tbody>
        </table>    
        </div>
    )
}

export default CarritoView
