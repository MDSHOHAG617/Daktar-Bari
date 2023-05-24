import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
// import useAdmin from "../../hooks/useAdmin";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile my-24">
      <input id="dashBoard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {/* <h2 className="text-2xl font-bold  p-3 text-purple-400 bg-slate-200">
          Welcome to DashBoard
        </h2> */}
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="dashBoard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 shadow-xl text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard/">My Orders</Link>
          </li>
          <li>
            {
              <>
                {admin && <Link to="/dashboard/allUsers">All Customers</Link>}
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
