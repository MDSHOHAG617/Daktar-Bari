import React, { useState } from "react";
import logo from "../../images/GIFLogo.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Prescription = () => {
  const [loader, setLoader] = useState(false);

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
      doc.save("receipt.pdf");
    });
  };
  return (
    <div className="wrapper my-32 px-4 lg:px-16">
      <div className="receipt-box my-12">
        {/* actual receipt */}
        <div className="actual-receipt my-12 border-[1px] rounded-md p-16">
          {/* organization logo */}
          <div className="receipt-organization-logo ">
            <img className="w-1/3 mx-auto" alt="logo" src={logo} />
          </div>
          {/* organization name */}
          <h5 className="text-2xl mt-4">Daktar Bari </h5>
          <p className="font-normal">Health care any time any where</p>
          <hr className="h-px my-4 bg-[#07C0BA] border-0 dark:bg-gray-700"></hr>
          <div className="flex justify-between">
            <div className="text-left">
              <p className="font-semibold text-lg">
                Patient Name:{" "}
                <span className="  font-normal">Fatema Tuj Zohra</span>
              </p>
              <p className="font-semibold text-lg mt-2">
                Age: {""}
                <span className=" font-normal">24</span>
              </p>
              <p className="font-semibold text-lg mt-2">
                Gender: {""}
                <span className=" font-normal">Female</span>
              </p>
              <p className="font-semibold text-lg mt-2">
                Address: {""}
                <span className=" font-normal">Modhumita, tongi- Gazipur</span>
              </p>
              <p className="font-semibold text-lg mt-2">
                Date: {""}
                <span className=" font-normal">30th May 2023</span>
              </p>
            </div>
            <div className="text-right">
              <h2 className="text-lg">
                Dr. John Smith{" "}
                <span className="font-normal text-xs ">MBBS</span>
              </h2>
              <p className="font-normal text-lg">
                Specialist in. Gynecologist{" "}
              </p>
              <p className="font-normal text-lg">Date: 31/05/2023</p>
            </div>
          </div>

          <div className="text-left mt-20">
            <p>
              <span className="text-4xl font-semibold">R</span>
              <span className="font-semibold">x</span>
            </p>
          </div>
          <div className="text-left mt-4 ml-16">
            <div>
              <h1>
                Tab. <span className="font-normal">Napa 500 mg</span>{" "}
                <span className="font-normal ml-4"> 1 + 1 + 1</span>
              </h1>
            </div>
            <div>
              <h1>
                Tab. <span className="font-normal">Max-pro 20 mg</span>{" "}
                <span className="font-normal ml-4"> 1 + 1 + 1</span>
              </h1>
            </div>
            <div>
              <h1>
                Tab. <span className="font-normal">Fexo 120 mg</span>{" "}
                <span className="font-normal ml-4"> 1 + 1 + 1</span>
              </h1>
            </div>
          </div>
          <div className="mt-[700px]">
            <p className="font-semibold">
              Doctor's Signature:{" "}
              <span className=" font-normal">John Smith</span>{" "}
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
                <span>Downloading</span>
              ) : (
                <span className="btn ">Download</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
