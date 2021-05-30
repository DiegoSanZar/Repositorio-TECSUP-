import {useState} from 'react';
import Parrafo from './components/Parrafo'

const App = () => {
    //useState
    //const[miestado, funcEstado] = useState(estado_inicial)
    const [estado, setEstado] = useState(0)

    const incrementar = () =>{
        setEstado(estado + 1)
    }

    let miTexto = "Instant Crush"

return(
    <div>
        <h1>Hola React</h1>
        <p>Contador:{estado}</p>
        <button onClick={incrementar}>
            Incrementar numero
        </button>
        <Parrafo texto="Something in a wey"></Parrafo>
        <Parrafo texto={miTexto} banda="Daft Punck"/>
    </div>
)
}

export default App;