import React from "react";
import { Link, NavLink } from "react-router-dom";
import giflogo from "../../../images/GIFLogo.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-base-100 z-50 ">
      <div className="navbar  px-4 lg:px-16 lg:py-4 ">
        <div className="navbar-start items-center">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-font-semiboldbox w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="consultation">Consultation</NavLink>
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
          <a className=" normal-case text-xl">
            <Link to="/" className="">
              <img className="w-48 lg:w-64 " src={giflogo}></img>
            </Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 mt-2">
            <li>
              <NavLink className="rounded font-semibold " to="/consultation">
                Consultation
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded font-semibold" to="/healthPlans">
                Health Plans
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded font-semibold" to="/orderMadicine">
                Order Medicine
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded font-semibold" to="/diagnostics">
                Home Diagnostics
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded font-semibold" to="/enterprise">
                Enterprise
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded font-semibold" to="/forDoctors">
                For Doctors
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="rounded-full bg-primary p-1 lg:p-2">
            <span className=" px-2 lg:px-4 text-white "> Login</span>
          </Link>
        </div>
      </div>
      <hr className="h-[.5px] bg-[#333333] "></hr>
    </div>
  );
};

export default Navbar;
