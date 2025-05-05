import React, { useState } from 'react'
import { Register } from '../../components/Register/Register'
import { Login } from '../../components/Login/Login'
import './AuthPage.css'

//Exportación de tipo Named
export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const handleAuthPage = ()=>{
    setIsLogin((prev)=> !prev)
  }
  return (
    <div className='auth-container'>
      {
        isLogin ? (
          <Login switchAuthHandler={handleAuthPage}/>
        ) : (
          <Register switchAuthAndler={handleAuthPage}/>
        )
      }
    </div>
  )
}