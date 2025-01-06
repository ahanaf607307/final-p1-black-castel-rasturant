import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../../../Firebase/useAuth'
import useAdmin from './useAdmin'

function AdminRoute() {
    const {user , loading} = useAuth()
    const location = useLocation()
    const [isAdmin , isAdminLoading] = useAdmin()

    if(user && isAdmin) {
        return children
    }

    if(loading || isAdminLoading) {
        return <h1 className='text-7xl text-center font-bold my-20'>Loading ...</h1>
    }
  return <Navigate state={location.pathname} to='/login'></Navigate>
}

export default AdminRoute
