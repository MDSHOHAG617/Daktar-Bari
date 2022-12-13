import React from "react";
import Footer from "../Shared/Navbar/Footer";
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
      <CareAndProtectionPlant></CareAndProtectionPlant>
      <CompareAllPackages></CompareAllPackages>
      <MainServices></MainServices>
      <Services></Services>
      <AvailableSpecialties></AvailableSpecialties>
      <Ratings></Ratings>
      <DownloadAndRegister></DownloadAndRegister>
      <HaveAnyQuestions></HaveAnyQuestions>
      <GetInTouch></GetInTouch>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
