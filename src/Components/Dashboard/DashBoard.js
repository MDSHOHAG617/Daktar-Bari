import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
// import useAdmin from "../../hooks/useAdmin";
import { FaUsers } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile my-20 ">
      <input id="dashBoard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {/* <h2 className="text-2xl font-bold  p-3 text-purple-400 bg-slate-200">
          Welcome to DashBoard
        </h2> */}
        <Outlet />
      </div>
      <div class="drawer-side ">
        <label for="dashBoard-sidebar" class="drawer-overlay "></label>
        <ul class="menu p-4 overflow-y-auto w-60 shadow-xl text-base-content  backdrop-blur-md">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard/">
              <TiShoppingCart className="text-2xl lg:text-3xl " />
              My Orders
            </NavLink>
          </li>
          <li>
            {
              <>
                {admin && (
                  <NavLink className="" to="/dashboard/allUsers">
                    <p>
                      <FaUsers className="text-2xl lg:text-3xl " />
                    </p>
                    All Users
                  </NavLink>
                )}
                {admin && <Link to="/dashboard/addMedicine">Add Medicine</Link>}
              </>
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
