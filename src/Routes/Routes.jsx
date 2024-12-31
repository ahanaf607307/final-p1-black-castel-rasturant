import { createBrowserRouter } from "react-router-dom"
import Home from "../Home/Home"
import MainLayout from "../Main/MainLayout"
import Menu from "../Pages/Menu/Menu"
import Oder from "../Pages/OrderFood/Oder"
import Signup from "../Firebase/Signup"
import Login from "../Firebase/Login"

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
            },
            {
                path : "/order/:category",
                element : <Oder/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "signup",
                element : <Signup/>
            },
        ]
    },
    {
        
    }
])

export default routes
