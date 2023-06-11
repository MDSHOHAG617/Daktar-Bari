import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { ImFire } from "react-icons/im";
import care from "../../images/care.png";
import HealthPlan from "../HealthPlans/HealthPlan";
const CareAndProtectionPlant = () => {
  //trial n error

  const [plans, setPlans] = useState([]);

  useEffect(() => {
    // fetch("HealthCareAndProtection.json")
    fetch("http://localhost:5000/healthPlans")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  return (
    <div>
      <div className="plans grid gap-6 grid-cols-1 lg:grid-cols-3 mx-16 mb-10 ">
        {/* try */}
        {plans.map((plan) => (
          <HealthPlan key={plan.id} plan={plan}></HealthPlan>
        ))}
      </div>
    </div>
  );
};

export default CareAndProtectionPlant;
