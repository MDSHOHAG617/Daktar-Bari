import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const GeneralPhysician = () => {
  const [generalDoctors, setGeneralDoctors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/doctor");
  }, []);

  return <div className="mt-32"></div>;
};

export default GeneralPhysician;
