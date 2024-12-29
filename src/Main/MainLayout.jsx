import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer'
import Navbar from '../Pages/Shared/Navbar/Navbar'

function MainLayout() {
  return (
    <div><div>
        <Navbar/>
    </div>
     <div>
     <Outlet/>
     </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default MainLayout
