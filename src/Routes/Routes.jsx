import { createBrowserRouter } from "react-router-dom"
import Home from "../Home/Home"
import MainLayout from "../Main/MainLayout"
import Menu from "../Pages/Menu/Menu"
import Oder from "../Pages/OrderFood/Oder"
// import Signup from "../Firebase/register"
import Login from "../Firebase/Login"
import PrivateRoute from "../Firebase/PrivateRoute"
import SignupTwo from "../Firebase/SignupTwo"

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
                element :<PrivateRoute><Oder/></PrivateRoute>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "signuptwo",
                element : <SignupTwo/>
            },
        ]
    },
    {
        
    }
])

export default routes
