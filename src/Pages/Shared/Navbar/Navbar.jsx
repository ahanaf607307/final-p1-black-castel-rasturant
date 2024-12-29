import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    
  return (
    <>
      <div className="navbar bg-black/40 text-white fixed z-50 max-w-7xl mx-auto">
  <div className="navbar-start">
  
    <a className="btn btn-ghost text-xl">Black Castel</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='./'>Home</NavLink></li>
      <li><NavLink to='/menu'>Menu</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">

    {/* responsive menu bar  */}
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow absolute right-0">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Menu</NavLink></li>
      </ul>
    </div>
  </div>
</div>
    </>
  )
}

export default Navbar
