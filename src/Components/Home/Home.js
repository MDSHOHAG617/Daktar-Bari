import React from "react";
import AvailableSpecialties from "./AvailableSpecialties";
import CareAndProtectionPlant from "./CareAndProtectionPlant";
import CompareAllPackages from "./CompareAllPackages";
import CompleteHealthSolutions from "./CompleteHealthSolutions";
import DownloadAndRegister from "./DownloadAndRegister";
import DownloadApps from "./DownloadApps";
import EasySteps from "./EasySteps";
import GetInTouch from "./GetInTouch";
import GetMedicalHelp from "./GetMedicalHelp";
import HaveAnyQuestions from "./HaveAnyQuestions";
import HealthCare from "./HealthCare";
import MainServices from "./MainServices";
import Ratings from "./Ratings";
import Services from "./Services";
import WhenTouseDaktarBari from "./WhenTouseDaktarBari";
import WhyUseDaktarBari from "./WhyUseDaktarBari";
import HealthPlans from "../HealthPlans/HealthPlans";

const Home = () => {
  return (
    <div>
      <CompleteHealthSolutions />
      <DownloadApps />
      <WhyUseDaktarBari />
      <GetMedicalHelp />
      <WhenTouseDaktarBari />
      <EasySteps />
      {/* <HealthCare /> */}
      {/* <CareAndProtectionPlant /> */}
      <HealthPlans />
      <CompareAllPackages />
      <MainServices />
      <Services />
      <AvailableSpecialties />
      <Ratings />
      <DownloadAndRegister />
      <HaveAnyQuestions />
      <GetInTouch />
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
