import React, { useEffect, useState } from "react";
import CareAndProtectionPlant from "../Home/CareAndProtectionPlant";
import HealthCare from "../Home/HealthCare";
import HealthPlansSub from "./HealthPlansSub.js";
import Loading from "../Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const HealthPlans = () => {
  const [user, loading, error] = useAuthState(auth);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    // fetch("HealthCareAndProtection.json")
    fetch("http://localhost:5000/healthPlans")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="my-28">
      {/* <h1 className=" text-2xl  lg:text-5xl text-center ">
        Daktar bari Health Care & Protection Plans
      </h1> */}

      <HealthCare />
      <div className="plans grid gap-6 grid-cols-1 lg:grid-cols-3 mx-16 mb-10 ">
        {/* try */}
        {plans.map((plan) => (
          <HealthPlansSub key={plan.id} plan={plan}></HealthPlansSub>
        ))}
      </div>
    </div>
  );
};

export default HealthPlans;
