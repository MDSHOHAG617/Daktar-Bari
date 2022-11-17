import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
const DownloadApps = () => {
  return (
    <div>
      <p className="font-normal mx-auto text-2xl mt-20">
        Download and register on our app for free and feel safe for all your
        family
      </p>
      {/* Google Play */}
      <div className="flex justify-center items-center mt-8 mb-20">
        <div className="flex justify-btween items-center bg-[#2D3571] p-2 w-48 rounded mx-3">
          <span>
            <FaGooglePlay className="text-4xl mr-2 text-[#ffffff]" />
          </span>
          <div>
            <p className="text-sm font-normal text-white">Download on the </p>
            <h2 className="text-xl text-white">Google Play </h2>
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#2D3571] p-2 w-48 rounded mx-3">
          <span>
            <AiFillApple className="text-4xl mr-2 text-[#ffffff]" />
          </span>
          <div>
            <p className="text-sm font-normal text-white">Download on the </p>
            <h2 className="text-xl text-white">App Store </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApps;
