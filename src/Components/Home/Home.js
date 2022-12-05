import React from "react";
import CompleteHealthSolutions from "./CompleteHealthSolutions";
import DownloadApps from "./DownloadApps";
import EasySteps from "./EasySteps";
import GetMedicalHelp from "./GetMedicalHelp";
import HealthCare from "./HealthCare";
import WhenTouseDaktarBari from "./WhenTouseDaktarBari";
import WhyUseDaktarBari from "./WhyUseDaktarBari";

const Home = () => {
  return (
    <div>
      <CompleteHealthSolutions />
      <DownloadApps />
      <WhyUseDaktarBari></WhyUseDaktarBari>
      <GetMedicalHelp></GetMedicalHelp>
      <WhenTouseDaktarBari></WhenTouseDaktarBari>
      <EasySteps></EasySteps>
      <HealthCare></HealthCare>
    </div>
  );
};

export default Home;
