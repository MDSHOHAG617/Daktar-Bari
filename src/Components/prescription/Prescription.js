import React, { useEffect, useState } from "react";
import logo from "../../images/GIFLogo.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import { signOut } from "firebase/auth";
import { Navigate, useParams } from "react-router-dom";
import { FaFilePrescription } from "react-icons/fa";
import { FaPrescription } from "react-icons/fa";
import { FaDiagnoses } from "react-icons/fa";

const Prescription = () => {
  const { id } = useParams();
  // console.log(id);
  const [user, loading] = useAuthState(auth);
  const [loader, setLoader] = useState(false);
  const [prescription, setPrescription] = useState({});
  console.log(prescription);
  useEffect(() => {
    fetch(`http://localhost:5000/prescription/${id}`)
      .then((res) => res.json())
      .then((data) => setPrescription(data));
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  const downloadPDF = () => {
    const capture = document.querySelector(".actual-receipt");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save(
        `Prescription on ${prescription.drSpecialtyOn} - ${prescription.date}.pdf`
      );
    });
  };
  return (
    <div className="wrapper my-32 px-4 lg:px-16 ">
      <div className="receipt-box lg:my-12 ">
        {/* actual Prescription */}
        <div className="actual-receipt my-12 border-[1px] rounded-md p-16  ">
          {/* organization logo */}
          <div className="receipt-organization-logo ">
            <img className="w-6/12 lg:w-1/3 mx-auto" alt="logo" src={logo} />
          </div>
          {/* organization name */}
          <h5 className="lg:text-2xl mt-4">Complete Health Solution </h5>
          <p className="font-normal"></p>
          <p className="font-normal lg:px-52 hidden lg:block">
            Consulting a healthcare professional, buying medicine, ordering lab
            tests and improving your health and wellbeing, all can be done 24/7
            with Daktar bari!
          </p>
          <hr className="h-px my-4 bg-secondary border-[1px] dark:bg-gray"></hr>
          <div className="flex justify-between">
            <div className="text-left">
              <p className="font-semibold lg:text-lg">
                Patient Name:{" "}
                <span className="  font-normal">{prescription?.ptName}</span>
              </p>
              <p className="font-semibold lg:text-lg mt-2">
                Age: {""}
                <span className=" font-normal">{prescription?.ptAge}</span>
              </p>
              <p className="font-semibold lg:text-lg mt-2">
                Gender: {""}
                <span className=" font-normal">{prescription?.ptGender}</span>
              </p>
              <p className="font-semibold lg:text-lg mt-2">
                Address: {""}
                <span className=" font-normal">{prescription?.ptAddress}</span>
              </p>
              <p className="font-semibold lg:text-lg mt-2">
                Consultation Fee: {""}
                <span className=" font-normal">
                  {prescription?.consultationFee} /- tk
                </span>
              </p>
              {/* <p className="font-semibold text-lg mt-2">
                Date: {""}
                <span className=" font-normal">{prescription?.date}</span>
              </p> */}
            </div>
            <div className="text-right">
              <h2 className="lg:text-lg">
                {prescription?.drName}
                <span className="font-normal text-xs ">
                  {" "}
                  ({prescription?.drSpecialty})
                </span>
              </h2>
              <p className="font-normal lg:text-lg">
                Specialist in. {prescription.drSpecialtyOn}
              </p>
              <p className="font-normal lg:text-lg">Date:{prescription.date}</p>
            </div>
          </div>
          {/* trying */}
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-24">
            <div>
              {" "}
              <div className="text-left mt-20 flex items-center">
                <span className="font-bold  lg:text-xl">Diagnosis</span>
                <FaDiagnoses className="ml-2 text-3xl" />
              </div>
              <div className="text-left mt-4 ml-16">
                <div>
                  <h1>
                    <h1 className="font-normal">{prescription?.diagnosis}</h1>{" "}
                    <h1 className="font-normal">{prescription?.diagnosis1}</h1>{" "}
                    <h1 className="font-normal">{prescription?.diagnosis2} </h1>{" "}
                    <h1 className="font-normal">{prescription?.diagnosis3} </h1>{" "}
                    <h1 className="font-normal">{prescription?.diagnosis4} </h1>{" "}
                  </h1>
                </div>
              </div>
            </div>
            <span className="w-[1px] h-[500px] bg-primary hidden lg:block"></span>
            <div>
              {" "}
              <div className="text-left mt-20">
                <FaPrescription className="text-4xl" />
              </div>
              <div className="text-left mt-4 ml-16">
                <div>
                  <h1>
                    {prescription?.medicineType}{" "}
                    <span className="font-normal">
                      {prescription?.MedicineName}
                    </span>{" "}
                    <span className="font-normal">
                      {prescription?.medicineDesc}
                    </span>{" "}
                    <span className="font-normal ml-4">
                      {prescription?.medicineRoutine}
                    </span>
                  </h1>
                  <h1>
                    {prescription?.medicineType1}{" "}
                    <span className="font-normal">
                      {prescription?.MedicineName1}
                    </span>{" "}
                    <span className="font-normal">
                      {prescription?.medicineDesc1}
                    </span>{" "}
                    <span className="font-normal ml-4">
                      {prescription?.medicineRoutine1}
                    </span>
                  </h1>
                  <h1>
                    {prescription?.medicineType2}{" "}
                    <span className="font-normal">
                      {prescription?.MedicineName2}
                    </span>{" "}
                    <span className="font-normal">
                      {prescription?.medicineDesc2}
                    </span>{" "}
                    <span className="font-normal ml-4">
                      {prescription?.medicineRoutine2}
                    </span>
                  </h1>
                  <h1>
                    {prescription?.medicineType3}{" "}
                    <span className="font-normal">
                      {prescription?.MedicineName3}
                    </span>{" "}
                    <span className="font-normal">
                      {prescription?.medicineDesc3}
                    </span>{" "}
                    <span className="font-normal ml-4">
                      {prescription?.medicineRoutine3}
                    </span>
                  </h1>
                  <h1>
                    {prescription?.medicineType4}{" "}
                    <span className="font-normal">
                      {prescription?.MedicineName4}
                    </span>{" "}
                    <span className="font-normal">
                      {prescription?.medicineDesc4}
                    </span>{" "}
                    <span className="font-normal ml-4">
                      {prescription?.medicineRoutine4}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[500px] lg:mt-[400px]">
            <p className="font-semibold">
              Doctor's Signature:{" "}
              <span className=" font-normal">{prescription?.drName}</span>{" "}
            </p>
          </div>
        </div>
        <div className="receipt-actions-div">
          <div className="actions-right">
            <button
              className="receipt-modal-download-button"
              onClick={downloadPDF}
              disabled={!(loader === false)}
            >
              {loader ? (
                <Loading />
              ) : (
                <div className="btn btn-primary text-white ">
                  <span>Download Prescription </span>{" "}
                  <FaFilePrescription className="ml-2 text-2xl" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
