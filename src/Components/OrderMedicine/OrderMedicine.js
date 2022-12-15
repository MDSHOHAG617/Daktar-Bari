import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import QrCode from "../../images/QRCode.png";

const OrderMedicine = () => {
  return (
    <div className=" mx-16 my-32 text-left  lg:flex items-center ">
      <div>
        {" "}
        <h1 className="text-black text-2xl  lg:text-4xl mb-4 lg:mb-10">
          Please download DocTime app to order medicine online
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
          className="w-8/12 float-right"
          src="https://doctime.com.bd/images/medicine_online.webp"
        />
      </div>
    </div>
  );
};

export default OrderMedicine;
