import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar  px-4 lg:px-20 mt-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/consultation">Consultation</NavLink>
              </li>
              <li>
                <NavLink to="/healthPlans">Health Plans</NavLink>
              </li>
              <li>
                <NavLink to="/orderMadicine">Order Medicine</NavLink>
              </li>
              <li>
                <NavLink to="/diagnostics">Home Diagnostics</NavLink>
              </li>
              <li>
                <NavLink to="/enterprise">Enterprise</NavLink>
              </li>
              <li>
                <NavLink to="/forDoctors">For Doctors</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="">
            <img className="w-32 lg:w-40" src={logo}></img>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 mt-2">
            <li>
              <NavLink className="rounded " to="/consultation">
                Consultation
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded " to="/healthPlans">
                Health Plans
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded " to="/orderMadicine">
                Order Medicine
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded " to="/diagnostics">
                Home Diagnostics
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded " to="/enterprise">
                Enterprise
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded " to="/forDoctors">
                For Doctors
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="rounded-full bg-[#2D3571] p-2">
            <span className="px-4 text-white "> Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
