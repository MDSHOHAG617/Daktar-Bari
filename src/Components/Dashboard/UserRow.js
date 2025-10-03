import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user }) => {
  // console.log(user);
  const { _id, email, role } = user;
  // making admin
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
          alert("Are you sure? ");
          toast.success("Successfully made an admin");
        }
      });
  };

  // // making doctor
  // const makeDoctor = () => {
  //   fetch(`http://localhost:5000/user/doctor/${email}`, {
  //     method: "PUT",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  //     .then((res) => {
  //       if (res.status === 403) {
  //         toast.error("Failed to make an doctor");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       // console.log(data);
  //       if (data.modifiedCount > 0) {
  //         alert("Are you sure? ");
  //         toast.success("Successfully made an doctor");
  //       }
  //     });
  // };
  //   console.log(user);
  return (
    <tr>
      <td>{_id}</td>
      <td>{email}</td>

      <td>
        {role !== "admin" ? (
          <button onClick={makeAdmin} class="btn btn-xs text-white btn-primary">
            Make admin
          </button>
        ) : (
          <p className="text-primary">Already Admin </p>
        )}
      </td>
      {/* <td>
        {doctorRole !== "doctor" ? (
          <button
            onClick={makeDoctor}
            class="btn btn-xs text-white btn-primary"
          >
            Make Doctor
          </button>
        ) : (
          <p className="text-primary">Already Doctor </p>
        )}
      </td> */}
    </tr>
  );
};

export default UserRow;
