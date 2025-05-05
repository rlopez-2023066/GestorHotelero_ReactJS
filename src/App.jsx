import { useRoutes } from "react-router-dom"
import { AuthPage } from "./pages/Auth/AuthPage"
import { routes } from "./routes"
import { Toaster } from "react-hot-toast"


//Exportación por default
function App() {
  const elements = useRoutes(routes)

  return (
    <>
      { elements }
      <Toaster position='bottom-right' reverseOrder={false}/>
    </>
  )
}

export default App
