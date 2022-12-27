import React from "react";
import { FaBalanceScale } from "react-icons/fa";

const CompareAllPackages = () => {
  return (
    <div className="grid lg:flex  items-center justify-center bg-base-300 mx-16 rounded-xl py-3 ">
      <p className="text-md font-normal">
        Confused about what package to pick?
      </p>
      <div className="flex  items-center bg-base-100 px-5 py-2 rounded-md mx-2">
        <FaBalanceScale className="mr-2 text-xl" />
        <p className="text-sm font-semiformal">Compare all packages</p>
      </div>
    </div>
  );
};

export default CompareAllPackages;
