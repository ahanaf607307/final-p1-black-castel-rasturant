import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer'
import Navbar from '../Pages/Shared/Navbar/Navbar'

function MainLayout() {
  const location = useLocation()
  const isLoginSignup = location.pathname.includes('login' ) || location.pathname.includes('signup' )  
  return (
    <div><div >
        {isLoginSignup ||<Navbar/>}
    </div>
     <div >
     <Outlet/>
     </div>
      <div>
        {isLoginSignup || <Footer/>} 
      </div>
    </div>
  )
}

export default MainLayout
