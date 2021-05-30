import axios from "axios"

const URL =`${process.env.REACT_APP_URL_API}/categoria`

const crearCategoria = async (nuevaCategoria) => {
    try{
        let headers = {"Content-Type":"application/json"}
        let {data} = await axios.post(URL, nuevaCategoria, {headers})
    return data
    }catch(error){
    throw error
}
}

const obtenerCategorias = async () => {
    try {
      let { data } = await axios.get(URL)
      return data
    } catch (error) {
      throw error
    }
  }

export {
    crearCategoria,
    obtenerCategorias
}
