import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
// import useAdmin from "../../hooks/useAdmin";
import { FaUsers } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { GiMedicines } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";

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
            <NavLink className="font-semibold" to="/dashboard/">
              <TiShoppingCart className="text-2xl  " />
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink className="font-semibold" to="/dashboard/myAppointments">
              <FaRegCalendarCheck className="text-2xl " />
              My Appointments
            </NavLink>
          </li>
          <li>
            {
              <>
                {admin && (
                  <NavLink className=" font-semibold" to="/dashboard/allUsers">
                    <p>
                      <FaUsers className="text-2xl font-normal" />
                    </p>
                    All Users
                  </NavLink>
                )}
                {admin && (
                  <NavLink
                    className="font-semibold"
                    to="/dashboard/addMedicine"
                  >
                    {" "}
                    <GiMedicines className="text-2xl font-normal" />
                    Add Medicine
                  </NavLink>
                )}
                {admin && (
                  <NavLink
                    className="font-semibold"
                    to="/dashboard/manageMedicine"
                  >
                    {" "}
                    <MdManageAccounts className="text-2xl lg:text-3xl " />
                    Manage product
                  </NavLink>
                )}
              </>
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
