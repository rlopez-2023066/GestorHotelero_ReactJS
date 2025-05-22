import React from 'react';
import { useRoutes } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import {routes} from './routes';

function App() {
  const elements = useRoutes(routes)
  return (
   <>
    {elements}
    <Toaster position='bottom-rigth' reverseOrder={false} />
   </>
  )
}

export default App;