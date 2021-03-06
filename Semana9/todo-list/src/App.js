import React, {useState} from 'react'
import InputTarea from "./components/ImputTarea"
import ListaTareas from "./components/ListaTarea"

function App() {
  const [tareas, setTareas] = useState([])

  const [tarea, setTarea] = useState("Hola")

  const anadirTarea = () => {
    setTareas([...tareas, tarea])//?
  }

  const manejarTarea = (tarea) => {
    setTarea(tarea)
  }

  return (
    <div>
      <h1>Todo - List</h1>
      <InputTarea 
        tarea={tarea} 
        manejarTarea={manejarTarea}
        anadirTarea={anadirTarea}
      />
      <ListaTareas tareas={tareas}/>
    </div>
  )
}

export default App

