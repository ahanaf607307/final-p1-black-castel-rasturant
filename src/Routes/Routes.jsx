import { createBrowserRouter } from "react-router-dom"
import Home from "../Home/Home"
import MainLayout from "../Main/MainLayout"
import Menu from "../Pages/Menu/Menu"
import Oder from "../Pages/OrderFood/Oder"
// import Signup from "../Firebase/register"
import AllUsers from "../Dashboard/AllUsers/AllUsers"
import Cart from "../Dashboard/Cart/Cart"
import Dashboard from "../Dashboard/Dashboard"
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
                element :<Oder/>
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
      path : 'dashboard',
      element : <PrivateRoute><Dashboard/></PrivateRoute>,
      children : [
        {
            path : 'cart',
            element : <Cart/>
        },
        {
            path : 'allUsers',
            element : <AllUsers/>
        },
      ]  
    }
])

export default routes
