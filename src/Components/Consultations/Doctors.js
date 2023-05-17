import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Doctors = () => {
  const { id } = useParams();
  console.log(id);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/doctor/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [id]);
  return <div className="mt-32">doctors: {doctors.name}</div>;
};

export default Doctors;
