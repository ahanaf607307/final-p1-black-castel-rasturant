import { createBrowserRouter } from "react-router-dom"
import Home from "../Home/Home"
import MainLayout from "../Main/MainLayout"

const routes = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout/>,
        children : [
            {
                path : "/",
                element : <Home/>
            }
        ]
    },
    {
        
    }
])

export default routes
