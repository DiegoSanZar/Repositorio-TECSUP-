import axios from 'axios'

const URL = "https://609f2660c512c20017dccd5e.mockapi.io/usuario"


const obtenerUsuarios = async() => {
    try{
        let {data} = await axios.get(URL)
        return data
    }catch(error){
        throw error
    }
 
}

const loggingUsuario = async(nombreUsuario, contraseniaUsuario) => {
    try{
        const usuariosObtenido = obtenerUsuarios()
        usuariosObtenido.filter((usuario)=>{
            return usuario.nombreUsuario === nombreUsuario && usuario.contrasenia === contraseniaUsuario
        })
        return usuariosObtenido
    }catch(error){
        console.log(error)
    }
}



export {
    loggingUsuario
}