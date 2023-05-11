import React, { useEffect, useState } from "react";
import Consultation from "./Consultation";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Consultations = () => {
  const [user, loading] = useAuthState(auth);
  const [specialties, setSpecialties] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/specialty")
      // fetch("Specialty.json")
      .then((res) => res.json())
      .then((data) => setSpecialties(data));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="m-16">
      <h1 className=" mt-32 text-2xl lg:text-4xl lg:text-left mb-10">
        Please select a specialty
      </h1>
      {/* heading end */}
      <div className="specialties grid lg:grid-cols-2 gap-7">
        {specialties.map((specialty) => (
          <Consultation key={specialty.id} specialty={specialty}></Consultation>
        ))}
      </div>
    </div>
  );
};

export default Consultations;
