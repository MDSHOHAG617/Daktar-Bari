import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { Link } from "react-router-dom";
const DownloadApps = () => {
  return (
    <div>
      <p className="font-normal mx-auto lg:text-2xl mt-16 lg:mt-32">
        Download and register on our app for free and feel safe for all your
        family
      </p>
      {/* Google Play */}
      <div className="lg:flex  justify-center items-center mt-8 mb-20">
        <Link
          to=""
          className="flex justify-btween items-center bg-primary p-2 w-48 rounded-xl  mx-auto lg:mx-3 mb-2 lg:mb-0"
        >
          <span>
            <FaGooglePlay className="text-4xl mr-2 text-[#ffffff]" />
          </span>
          <div>
            <p className="text-sm font-normal text-white">Download on the </p>
            <h2 className="text-xl text-white">Google Play </h2>
          </div>
        </Link>
        {/* App store  */}
        <Link
          to=""
          className="flex justify-center items-center bg-primary p-2 w-48 rounded-xl mx-auto lg:mx-3 mb-2 lg:mb-0"
        >
          <span>
            <AiFillApple className="text-4xl mr-2 text-[#ffffff]" />
          </span>
          <div>
            <p className="text-sm font-normal text-white">Download on the </p>
            <h2 className="text-xl text-white">App Store </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DownloadApps;
