import { createBrowserRouter } from "react-router-dom"
import Home from "../Home/Home"
import MainLayout from "../Main/MainLayout"
import Menu from "../Pages/Menu/Menu"
import Oder from "../Pages/OrderFood/Oder"
// import Signup from "../Firebase/register"
import AddItem from "../Dashboard/AddItem/AddItem"
import AllUsers from "../Dashboard/AllUsers/AllUsers"
import Cart from "../Dashboard/Cart/Cart"
import Dashboard from "../Dashboard/Dashboard"
import AdminHome from "../Dashboard/DashboardHome/AdminHome"
import UserHome from "../Dashboard/DashboardHome/UserHome"
import ManageItem from "../Dashboard/ManageItem/ManageItem"
import UpdateItem from "../Dashboard/ManageItem/UpdateItem"
import Payment from "../Dashboard/Payment/Payment"
import PaymentHistory from "../Dashboard/Payment/PaymentHistory"
import Login from "../Firebase/Login"
import PrivateRoute from "../Firebase/PrivateRoute"
import SignupTwo from "../Firebase/SignupTwo"
import AdminRoute from "../Pages/Shared/Custom/AdminRoute"

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

        // normal users
        {
            path : 'userHome' , 
            element : <UserHome/>
        },
        {
            path : 'cart',
            element : <Cart/>
        },
        {
            path : 'payment',
            element : <Payment/>
        },
        {
            path : 'paymentHistory',
            element : <PaymentHistory/>
        },

        // Admin only
        {
            path : 'adminHome',
            element : <AdminRoute><AdminHome/></AdminRoute>
        },
        {
            path : 'allUsers',
            element : <AdminRoute><AllUsers/></AdminRoute>
        },
        {
            path : 'addItem',
            element : <AdminRoute><AddItem/></AdminRoute>
        },
        {
            path : 'manageItem',
            element : <AdminRoute><ManageItem/></AdminRoute>
        },
        {
            path : 'updateItem/:id',
            element : <AdminRoute><UpdateItem/></AdminRoute>,
            loader : ({params}) => fetch(`${import.meta.env.VITE_URL}/updateItem/${params.id}`)
        },
      ]  
    }
])

export default routes
