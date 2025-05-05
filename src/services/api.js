import axios from "axios";

//Configuración básica (General o genérica)
const apiClient = axios.create(
    {
        baseURL: 'http://localhost:2002/v1/auth',
        timeout: 2000
    }
)

//Ruta para registrar
export const registerRequest = async(user)=> {
    try{
        return await apiClient.post('/register', user, {
            type: 'multipart/form-data'
        })
    }catch(error){
        return {
            error: true,
            error
        }
    }
}

export const loginRequest = async(user)=>{
    try{
        return await apiClient.post('/login', user,{
            type: 'multipart/form-data'
        })
    }catch(error){
        return {
            error: true,
            error
        }
    }
}