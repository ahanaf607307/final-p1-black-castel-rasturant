import { createBrowserRouter } from "react-router-dom"
import Home from "../Home/Home"
import MainLayout from "../Main/MainLayout"
import Menu from "../Pages/Menu/Menu"

const routes = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/menu",
                element : <Menu/>
            }
        ]
    },
    {
        
    }
])

export default routes
