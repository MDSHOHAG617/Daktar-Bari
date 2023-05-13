import React, { useEffect, useState } from "react";
// import { FaGooglePlay } from "react-icons/fa";
// import QrCode from "../../images/QRCode.png";
// import underConstruction from "../../images/underConstruction.png";
// import underConstructionSvg from "../../images/under_construction.svg";
import Loading from "../Loading/Loading";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Medicines from "./Medicines";

const Medicine = () => {
  const [user, loading] = useAuthState(auth);

  const [medicines, setMedicine] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/medicine")
      .then((res) => res.json())
      .then((data) => setMedicine(data));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className=" my-32  ">
      {/* <div className="absolute left-0 right-0 top-20  bottom-0  z-10 ">
        <div className="mx-16 bg-[#EEEfff]  lg:mx-96 p-8  rounded-xl lg:shadow-xl">
          {" "}
          <img
            className="mx-auto w-72   block lg:hidden"
            src={underConstruction}
          />
          <img
            className="mx-auto  lg:w-96  hidden lg:block"
            src={underConstructionSvg}
          />
          <h1 className="lg:text-3xl text-[#000000] lg:mt-4">
            Our App is under Construction!
          </h1>
        </div>
      </div> */}
      {/* <div className=" mx-16 my-32 text-left  lg:flex items-center opacity-30   ">
        <div>
          {" "}
          <h1 className=" text-2xl  lg:text-4xl mb-4 lg:mb-10">
            Please download Daktar bari app to order medicine online
          </h1>
          <p className="text-xl font-semibold">
            We are launching order medicine online on the DocTime website very
            soon.
          </p>
          <div className="flex  items-center bg-primary p-2 w-48 rounded-xl mb-2 mt-8 lg:my-10 ">
            <span>
              <FaGooglePlay className="text-3xl mr-2 text-[#ffffff] w-12" />
            </span>
            <div>
              <p className="text-sm font-normal text-white">Download on the </p>
              <h2 className="text-xl text-white">Google Play </h2>
            </div>
          </div>
          <img src={QrCode} />
        </div>
        <div>
          <img
            className="w-8/12 float-right hidden lg:block"
            src="https://doctime.com.bd/images/medicine_online.webp"
          />
        </div>
      </div> */}

      <div className="grid lg:grid-cols-4 gap-3 mx-auto lg:gap-y-8 px-16">
        {medicines.map((medicine) => (
          <Medicines key={medicine.id} medicine={medicine}></Medicines>
        ))}
      </div>
    </div>
  );
};

export default Medicine;
