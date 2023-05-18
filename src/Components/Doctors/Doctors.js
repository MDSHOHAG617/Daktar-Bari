import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Doctor from "./Doctor";

const Doctors = () => {
  const { id } = useParams();
  console.log(id);
  const [doctors, setDoctors] = useState([]);
  console.log(doctors);

  useEffect(() => {
    fetch(`http://localhost:5000/doctor/title/DermatologyGeneral Physician`)
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, [id]);
  console.log(doctors[0]?.title);
  return (
    <div className="mt-32">
      doctors: {doctors.length}
      {doctors.map((doctor) => (
        <div>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Doctor: {doctor.firstName}</h2>
              <img className="w-32" src={doctor.image} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Doctors;
