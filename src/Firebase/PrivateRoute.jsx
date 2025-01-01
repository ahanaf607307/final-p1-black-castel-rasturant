import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from './useAuth'

function PrivateRoute({children}) {

    const {user , loading} = useAuth()
    const location = useLocation()

    if(user) {
        return children
    }

    if(loading) {
        return <h1 className='text-7xl text-center font-bold my-20'>Loading ...</h1>
    }
  return <Navigate state={location.pathname} to='/login'></Navigate>
}

export default PrivateRoute
