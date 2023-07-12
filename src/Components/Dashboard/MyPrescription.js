import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { FaFilePrescription } from "react-icons/fa";
import Loading from "../Loading/Loading";
const MyPrescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [user, loading] = useAuthState(auth);
  // console.log(prescriptions);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/prescription?customerEmail=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setPrescriptions(data));
    }
  }, [user]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="mt-4">
      <div class="overflow-x-auto ">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>prescription on</th>
              <th>date</th>
              <th>Prescription</th>
            </tr>
          </thead>
          <tbody className="font-normal">
            {prescriptions.map((prescription, index) => (
              <tr key={prescription._id}>
                <th>{index + 1}</th>
                <td>{prescription.ptName}</td>
                <td>{prescription.ptEmail}</td>
                <td>{prescription.drSpecialtyOn}</td>
                <td>{prescription.date}</td>
                <td>
                  <Link to={`/prescription/${prescription._id}`}>
                    <FaFilePrescription className="text-2xl" />
                  </Link>
                  {/* {prescription.price && !prescription.paid && (
                    <Link
                      to={`/dashboard/prescriptionsPayments/${prescription._id}`}
                    >
                      <button className="btn btn-xs btn-primary text-white">
                        Pay
                      </button>
                    </Link>
                  )}
                  {prescription.price && prescription.paid && (
                    <div>
                      <Link to="/prescription" className="">
                        <FaFilePrescription className="text-2xl" />
                      </Link>
                      <a
                        href="https://meet.google.com/ouj-vjtb-gjx"
                        className=" flex items-center gap-1 bg-primary rounded-full px-2 py-[3px] mt-1  text-white w-32"
                      >
                        <HiOutlineVideoCamera className="text-  " />
                        <p className="text-xs font-normal ">See Doctor Now</p>
                      </a>
                    </div>
                  )} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPrescription;
