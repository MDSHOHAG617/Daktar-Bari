import React, { useEffect, useState } from "react";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa";
// import nilima from "../../images/nilima.png";s

const EasySteps = () => {
  return (
    <div className="lg:mt-32 ">
      {/* heading */}
      <div className="lg:mb-32">
        <h1 className=" text-2xl lg:text-5xl text-center mt-8 lg:mt-0">
          Easy Steps To Feel Better Rapidly
        </h1>
        <p className="font-normal lg:text-xl my-4 lg:my-12 mx-4 lg:mx-64  text-center">
          You do not have to wait in line for hours or go to the hospital to
          take healthcare services. Easily consult a doctor in just 10 minutes
          on your device at home or office.
        </p>
      </div>
      {/* main section */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 lg:mr-32 items-center ">
        {/* mobile  */}
        <div className="mockup-phone p-1 ">
          <div className="camera "></div>
          <div className="display ">
            <div className="artboard artboard-demo phone-1 ">
              <img
                className="w-72 lg:w-full"
                src="https://getconciergepad.com/wp-content/uploads/2020/03/Female-Doctor-Transparent-Background-PNG.png"
              />
            </div>
          </div>
        </div>
        {/* text sec */}
        <div className="hidden lg:block ">
          <ul className="  steps lg:steps-vertical mt-6">
            <li className="step step-primary ">
              <div className="items-center flex items-center ">
                <span className="text-2xl lg:text-4xl ml-8 mr-6 bg-base-200 rounded p-3 lg:p-4 hover:bg-primary mt-4 lg:mt-0">
                  {" "}
                  <MdOutlineScreenSearchDesktop />
                </span>

                <div className="hidden lg:block">
                  {" "}
                  <h1 className="text-left font-semibold text-xl ">
                    Search your Doctor and Consult live on Video Call
                  </h1>
                  <p className="text-left text-md font-normal mt-2 text-justify">
                    Search your doctor by specialty or doctor profile, rating &
                    experience name, or depending on your symptoms. Once you pay
                    the required doctor fee or if you have a subscription, you
                    will be joining the short queue. Doctor will start a secured
                    video call to do the consultation.
                  </p>
                </div>
              </div>
            </li>
            <li className="step step-primary ">
              <div className="items-center flex items-center ">
                <span className="text-2xl lg:text-4xl ml-8 mr-6 bg-base-200 rounded p-3 lg:p-4 hover:bg-primary mt-4 lg:mt-0">
                  {" "}
                  <MdOutlineVideoCameraFront />
                </span>
                <div className="hidden lg:block">
                  {" "}
                  <h1 className="text-left font-semibold text-xl ">
                    Instant Prescription
                  </h1>
                  <p className="text-left text-mds font-normal mt-2 text-justify">
                    Once the video consultation is complete, the doctor will
                    upload the prescription. You can download and use the
                    prescription immediately or later.
                  </p>
                </div>
              </div>
            </li>
            <li className="step step-primary ">
              <div className="items-center flex items-center ">
                <span className="text-2xl lg:text-4xl ml-8 mr-6 bg-base-200 rounded p-3 lg:p-4 hover:bg-primary mt-4 lg:mt-0">
                  {" "}
                  <FaHandHoldingMedical />
                </span>
                <div className="hidden lg:block">
                  {" "}
                  <h1 className="text-left font-semibold text-xl ">
                    Order medicine online and order diagnostic tests
                  </h1>
                  <p className="text-left text-md font-normal mt-2 text-justify">
                    Medicine will be delivered quickly to your home within 2/3
                    hours of placing any order. You can also get tested in a few
                    hours at home & get report in the App.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EasySteps;
