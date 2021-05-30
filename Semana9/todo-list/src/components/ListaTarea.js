import React from 'react'

function ListaTarea({tareas}) {
    // renderizar listas 
    return (
        <div>
            {tareas.map((item, indice) => (
                //este key tiene que ser unico
                <p key={indice}>
                    {item}
                    <button>X</button>
                </p>
            ))}
        </div>
    )
}

export default ListaTarea
