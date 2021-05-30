import React, {Component} from "react";

class App extends Component {
  //1. Solamente puedo retornar un elemento en el return 
  //2. Si o si vamos a tener un state, los "estados" estaran guardados como propiedades de state
  //3. podemos incluir JS en el JSX con {}
  //4. el state es inmutable 
  //5. si queremos modificar el state debemos usar la propiedad setState
  //6. todas mis etiquetas deben estar cerradas 
  state = {
    nombre:"Diego",
    contador:0
  }

  incrementar(){
    this.setState({
      contador: this.state.contador +1
    })
  }

  render(){
    return (
      <main>
        <div>
          <h1>Hola React!!</h1>
        </div>
        <p>{this.state.nombre}</p>
        <p>{100 + 540}</p>
        <p>{this.state.contador}</p>
        <button onClick={() =>{this.incrementar()}} >Incrementar contador</button>
      </main>
    )
  }
}

export default App;

