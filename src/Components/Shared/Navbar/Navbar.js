import React from "react";
import logo from "../../../images/logo.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 px-4 lg:px-20 mt-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                <a>Consultation</a>
              </li>
              <li>
                <a>Health Plans</a>
              </li>
              <li>
                <a>Order Medicine</a>
              </li>
              <li>
                <a>Home Diagnostics</a>
              </li>
              <li>
                <a>Enterprise</a>
              </li>
              <li>
                <a>For Doctors</a>
              </li>
            </ul>
          </div>
          <a className="">
            <img className="w-32 lg:w-40" src={logo}></img>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 mt-2">
            <li>
              <a>Consultation</a>
            </li>
            <li>
              <a>Health Plans</a>
            </li>
            <li>
              <a>Order Medicine</a>
            </li>
            <li>
              <a>Home Diagnostics</a>
            </li>
            <li>
              <a>Enterprise</a>
            </li>
            <li>
              <a>For Doctors</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
