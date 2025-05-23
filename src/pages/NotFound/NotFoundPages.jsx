import React from 'react'
import imgNotFound from './../../img/NotFound.svg'
import { useNavigate } from 'react-router-dom';


export const NotFoundPages = () => {

    const navigate = useNavigate();
    
    const handleLogout = () => {
    localStorage.removeItem('token'); 
    localStorage.removeItem('user');
    navigate('/auth'); 
    };

    
  return (
        <section className="bg-gradient-to-r from-stone-500 to-stone-700 ">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12 ">
            <div className="wf-ull lg:w-1/2 rounded-xl bg-red-50 p-11 ">
                <p className="text-sm font-medium text-stone-950 ">404 error</p>
                <h1 className="mt-3 text-2xl font-semibold text-stone-950 md:text-3xl">Page not found</h1>
                <p className="mt-4 text-stone-950 ">Te perdiste 🤔, Regresar al inicio no viene mal. ✌</p>

                <div className="flex items-center mt-6 gap-x-3">
                    <button onClick={handleLogout}  className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                        Inicio
                    </button>
                </div>
            </div>

            <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                <img className="w-full max-w-lg lg:mx-auto" src={imgNotFound} alt=""/>
            </div>
        </div>
    </section>
  )
}

export default NotFoundPages;
