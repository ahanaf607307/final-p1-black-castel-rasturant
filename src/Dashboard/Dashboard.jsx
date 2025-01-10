import React from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { FaHome, FaUsers, FaUtensils } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdBookmarkAdd, MdContacts, MdHome, MdMenu, MdOutlineLibraryAddCheck, MdPayments, MdRateReview } from "react-icons/md";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Pages/Shared/Custom/useAdmin";


function Dashboard() {

  const [isAdmin] = useAdmin()
  // const isAdmin = true

  return (
    <div className="">
      
      <div className="flex  gap-x-5 ">
        <div className="w-64 flex min-h-screen bg-orange-600">
          <ul className="menu py-5 px-2 text-white/80">
            
            {
              isAdmin ? <>
              <li>
              <NavLink className="flex items-center gap-x-2 text-xl" to="/dashboard/adminHome">
                <MdHome /> Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-x-2 text-xl" to="/dashboard/addItem">
              <FaUtensils /> Add Items
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-x-2 text-xl" to="/dashboard/manageItem">
              <MdMenu /> Manage Items
              </NavLink>
            </li>

            <li>
              <NavLink
                className="flex items-center gap-x-2 text-xl"
                to="/dashboard/manageBooking"
              >
                <MdBookmarkAdd /> Manage Bookings
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-x-2 text-xl"
                to="/dashboard/allUsers"
              >
               <FaUsers />All Users
              </NavLink>
            </li>
            
              </> : <>
              
              <li>
              <NavLink className="flex items-center gap-x-2 text-xl" to="/dashboard/userHome">
                <MdHome /> User Home
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-x-2 text-xl" to="/dashboard/reservation">
                <MdOutlineLibraryAddCheck /> Reservation
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-x-2 text-xl" to="/dashboard/paymentHistory">
              <MdPayments /> Payment Histroy
              </NavLink>
            </li>

            <li>
              <NavLink
                className="flex items-center gap-x-2 text-xl"
                to="/dashboard/cart"
              >
                <BsCartCheckFill /> Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-x-2 text-xl"
                to="/dashboard/addReview"
              >
               <MdRateReview />Add Review
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-x-2 text-xl"
                to="/dashboard/myBooking"
              >
                <SlCalender /> My Booking
              </NavLink>
            </li>
              </>
            }
            <div className="divider"></div>
            <li>
              <NavLink className="flex items-center gap-x-2 text-xl" to="/">
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-x-2 text-xl" to="/order/salad">
              <GiHamburgerMenu /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-x-2 text-xl" to="/">
              <RiShoppingBag4Fill /> Shop
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-x-2 text-xl" to="/order/contact">
              <MdContacts /> Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1">
        <h1 className="text-center text-orange-500 text-5xl font-bold my-8">
        Welcome to Dashboard !
      </h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
