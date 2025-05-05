//Manejar la lógica de la respuesta del API
import React, { useState } from 'react'
import { registerRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useRegister = () => {
    //Ver si aún está cargando la respuesta el API
    const [isLoading, setIsLoading] = useState(false)
    //Saber si la consulta al API trae errores
    const [error, setError] = useState(false)

    //Función que consulta
    const register = async(name,surname, email, username, password, phone,role)=>{
        setIsLoading(true)
        const user = {
            name,
            surname,
            email,
            username,
            password,
            phone,
            role
        }
        //Consulto al api mediante la función del api.js
        const response = await registerRequest(user)
        setIsLoading(false)

        //Logica de lo que respondió el back
        if(response.error){
            setError(true)
            if(response?.error?.response?.data?.errors){
                let arrayErrors = [response?.error?.response?.data?.errors]
                for (const error of arrayErrors) {
                    return toast.error(JSON.stringify(error))
                }
            }
            return toast.error(
                response?.error?.response?.data?.message ||
                response?.error?.data?.message ||
                'Error general al intentar registrar el usuario. Intente de nuevo, todo mal...'
            )
        }
        setError(false)
        return toast.success('TODO GOOD')
    }
  return {
    register,
    isLoading,
    error,
    setError
  }
}
