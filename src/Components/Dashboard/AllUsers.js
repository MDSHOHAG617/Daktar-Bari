import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const AllUsers = () => {
  const [user, loading] = useAuthState(auth);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json().then((data) => setUsers(data)));
  }, [users]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="mt-4">
      Users :<span className="text-primary "> {users.length}</span>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>id</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody className="font-normal">
            {users.map((user) => (
              <UserRow key={user._id} user={user}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
