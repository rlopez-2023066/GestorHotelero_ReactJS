import React, { useState } from 'react'
import { registerRequest } from './../../services/api'
import toast from 'react-hot-toast'

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const register = async(name,surname, email, username, password, phone)=>{
        setIsLoading(true)
        const user = {
            name,
            surname,
            email,
            username,
            password,
            phone
        }
        const response = await registerRequest(user)
        setIsLoading(false)

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
                'Error general al intentar registrar el usuario. Intente de nuevo.'
            )
        }
        setError(false)
        return toast.success('Usuario creado satisfactoriamente, Inicie Sesión. 🙌')
    }
  return {
    register,
    isLoading,
    error,
    setError
  }
}