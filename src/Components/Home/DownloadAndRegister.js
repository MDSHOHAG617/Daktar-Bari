import React from "react";
import Qrcode from "../../images/QRCode.png";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { FaLaptopMedical } from "react-icons/fa";

const DownloadAndRegister = () => {
  return (
    <div className="mt-32  bg-slate-100 p-10 lg:p-20 ">
      <div className="main-div lg:flex items-center justify-between">
        <div className="left-div lg:w-7/12">
          <h1 className=" text-xl lg:text-3xl text-left">
            Download and register on our App for free and feel safe for all your
            family
          </h1>
          <p className="text-sm lg:text-lg text-left mt-4 lg:mt-12">
            To download the app on your mobile, go the Play Store or open your
            camera and point it towards the QR code
          </p>
        </div>
        <div className="right-div lg:flex items-center mt-8 lg:mt-0">
          <img className="lg:mr-3 h-32 mx-auto lg:mx-0 lg:h-40" src={Qrcode} />
          <div className="links ">
            <div className="flex justify-btween items-center bg-primary p-1 w-48 rounded-xl lg:mx-3 mb-2 mt-8 lg:mt-0 mx-auto">
              <span>
                <FaGooglePlay className="text-4xl mr-2 text-[#ffffff] w-12" />
              </span>
              <div>
                <p className="text-sm font-normal text-white">
                  Download on the{" "}
                </p>
                <h2 className="text-xl text-white">Google Play </h2>
              </div>
            </div>
            <div className="flex justify-center items-center bg-primary p-1 w-48 rounded-xl lg:mx-3 mb-2  lg:mt-0 mx-auto">
              <span>
                <AiFillApple className="text-4xl mr-2 text-[#ffffff] " />
              </span>
              <div>
                <p className="text-sm font-normal text-white">
                  Download on the{" "}
                </p>
                <h2 className="text-xl text-white">App Store </h2>
              </div>
            </div>
            <div className="flex justify-center items-center bg-primary p-1 w-48 rounded-xl lg:mx-3 mb-2  lg:mt-0 mx-auto">
              <span>
                <FaLaptopMedical className="text-4xl mr-2 text-[#ffffff]" />
              </span>
              <div>
                <p className="text-sm font-normal text-white">
                  Available on the{" "}
                </p>
                <h2 className="text-xl text-white">Browser </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAndRegister;