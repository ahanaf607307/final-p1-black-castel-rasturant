import React from 'react'
import { IoCartSharp } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import useAuth from '../../../Firebase/useAuth'
import useAdmin from '../Custom/useAdmin'
import useCart from '../Custom/useCart'

function Navbar() {
   const {logOutUser , user} = useAuth()
   const [isAdmin]= useAdmin()
const [cart] = useCart()
   const handleLogout = () => {
    logOutUser()
    .then(() => {
      console.log('log out user')
    })
    .catch(err => {
      console.log(err)
    })
   }
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
      <li><NavLink to='/order/salad'>Order</NavLink></li>
      <li>
        <NavLink to='/dashboard/cart'>
        <div className="indicator">
  <span className="indicator-item badge badge-primary">+{cart?.length ? cart?.length : '0'}</span>
  <IoCartSharp className='text-2xl '/>
</div>
        </NavLink>
      </li>
      {
        user && isAdmin && <li>
          <NavLink to='/dashboard/adminHome'>Admin Home</NavLink>
        </li>
      }
      {
        user && <li>
          <NavLink to='/dashboard/userHome'>User Home</NavLink>
        </li>
      }
    </ul>
  </div>
  <div className="navbar-end">

    {/* responsive menu bar  */}
    <div className="dropdown">
      <div className='flex gap-x-3 items-center'>
      <div className='hidden lg:flex'>
      {
        user ? <button className='btn' onClick={handleLogout}>Logout</button> : <div className='flex gap-x-3 items-center'>
          <NavLink to='/login' className='btn '>Login</NavLink>
          <NavLink to='/signuptwo' className='btn '>Signup</NavLink>
        </div>
      }
      </div>
      <div className="dropdown dropdown-end">
        <div className="tooltip tooltip-left" data-tip={user?.displayName}>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 border-2 rounded-full">
              {user ? (
                <img
                  alt="Profile Picture"
                  src={user?.photoURL}
                  className="rounded-full"
                />
              ) : (
                <p>.</p> 
              )}
            </div>
          </div>
         </div>
      </div>
      </div>
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
        className="menu menu-sm dropdown-content bg-orange-500 rounded-box z-[1] mt-3 w-52 p-2 shadow absolute right-0">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Menu</NavLink></li>
        <li><NavLink to='/order/salad'>Order</NavLink> </li>
        <li className='flex lg:hidden'>
      {
        user ? <button className='btn' onClick={handleLogout}>Logout</button> : <div className='flex gap-x-3 items-center'>
          <NavLink to='/login' className='btn '>Login</NavLink>
          <NavLink to='/signuptwo' className='btn '>Signup</NavLink>
        </div>
      }
      </li>
      </ul>
    </div>
  </div>
</div>
    </>
  )
}

export default Navbar
