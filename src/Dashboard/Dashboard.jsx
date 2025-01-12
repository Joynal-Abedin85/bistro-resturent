import React from "react";
import { FaHamburger, FaHome, FaList, FaPhone, FaShoppingCart, FaStar } from "react-icons/fa";
import { FaCalendar, FaWallet } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="bg-amber-400 text-black font-bold w-60 min-h-full">
        <ul className="menu  p-4 space-y-3 ">
          <li>
            <NavLink to="/dashboard/home">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reserve">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
              <FaWallet></FaWallet>
              Payment history
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaStar></FaStar>
              Add review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <FaList></FaList>
              My Booking
            </NavLink>
          </li>

          <div className="divider divider-primary">or</div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/home">
              <FaList></FaList>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/home">
              <FaShoppingCart></FaShoppingCart>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/home">
              <FaPhone></FaPhone>
              Contect
            </NavLink>
          </li>
          
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
