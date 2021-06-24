import {React,useState,useEffect} from 'react'
import {obtenerTareaPorAlumno} from "../services/tareaService"

function TareasAlumno() {

    const [tarea, setTarea] = useState([{}]);

    const getTareasPorAlumno = async(alumnoId) =>{
        try {
            let tareaObtenida = await obtenerTareaPorAlumno(alumnoId);
            setTarea({ ...tareaObtenida });
            console.log(tarea);
          } catch (error) {
            console.log(error);
          }
    }
    useEffect(()=>{
      getTareasPorAlumno(5)
    },[])

    return (

      <div className="container">
        {/* {
          tarea.map((prod,i) => (
            <h1>Hola</h1>
          ))
        } */}
        <div className="col-12 t-3 mt-3">
        <div className="card card-row shadow-light-lg mb-6 lift lift-lg " >
        <div className="row gx-0 mt-3">
          <div className="col-12 col-md-6 order-md-2 bg-cover card-img-end p-3">
            <form>              
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">URL https://ejemplo.com/video/</span>
                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Comentarios</span>
                <textarea className="form-control" aria-label="With textarea">                  
                </textarea>
              </div>
              <button type="submit" className="btn btn-primary mb-3">Enviar</button>
            </form>
          </div>
          <div className="card-body col-12 col-md-6 order-md-1" >
            <h5 className="card-title">Tarea Session 2 </h5>
            <p className="card-text">
              Hola francisco, hoy debes de avanzar lo siguiente en tu evaluacion. 

              Primero tocar toda la pieza de piano de motzar. Luego practicar la lecturas de notas.
            </p>
            <div className=" container">
          

            </div>
          </div>          
          </div>
        </div>
        </div>

        <div className="col-12 t-3 mt-3">
        <div className="card card-row shadow-light-lg mb-6 lift lift-lg" >
        <div className="row gx-0 mt-3 p-3">
          <div className="col-12 col-md-6 order-md-2 bg-cover card-img-end">
          <div className="d-flex flex-row">
              <div className="embed-responsive embed-responsive-1by1 p-1">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/B0D1G5wvux4"></iframe>
              </div>
              <div className="input-group p-1">
                    <span className="input-group-text">
                        <span>Comentarios</span>                         
                    </span>
                    <textarea className="form-control" aria-label="With textarea" 
>
                    </textarea>
              </div>
          </div>

          </div>
          <div className="card-body col-12 col-md-6 order-md-1" >
            <h5 className="card-title">Tarea Session 1 </h5>
            <p className="card-text">
              Hola francisco, hoy debes de avanzar lo siguiente en tu evaluacion. 

              Primero tocar toda la pieza de piano de motzar. Luego practicar la lecturas de notas.



            </p>
            <div className=" container">
            
            </div>
          </div>          
          </div>
        </div>
        </div>
      </div>


    )



}

export default TareasAlumno
