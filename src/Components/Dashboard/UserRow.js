import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user }) => {
  // console.log(user);
  const { _id, email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Successfully made an admin");
        }
      });
  };
  //   console.log(user);
  return (
    <tr>
      <td>{_id}</td>
      <td>{email}</td>
      <td>
        {role == "admin" ? (
          <button class="">Admin-user</button>
        ) : (
          <p className="text-error">Normal user </p>
        )}
      </td>
      <td>
        {/* {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-sm text-white btn-success">
            Make admin
          </button>
        )} */}
        {role !== "admin" ? (
          <button onClick={makeAdmin} class="btn btn-xs text-white btn-primary">
            Make admin
          </button>
        ) : (
          <p className="text-primary">Already Admin </p>
        )}
      </td>

      {/* <td>
        <button className="btn btn-xs btn-error">Remove User</button>
      </td> */}
    </tr>
  );
};

export default UserRow;
