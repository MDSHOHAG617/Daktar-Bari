import React from "react";
import { toast } from "react-toastify";

const AddPrescription = () => {
  // date
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}/${month}/${year}`;
  const handleAddItems = (event) => {
    event.preventDefault();
    const ptEmail = event.target.ptEmail.value;
    const ptName = event.target.ptName.value;
    const consultationFee = event.target.consultationFee.value;
    const ptAge = event.target.ptAge.value;
    const ptGender = event.target.ptGender.value;
    const ptAddress = event.target.ptAddress.value;
    const date = currentDate;
    const drName = event.target.drName.value;
    const drSpecialty = event.target.drSpecialty.value;
    const drSpecialtyOn = event.target.drSpecialtyOn.value;
    // medicine
    const medicineType = event.target.medicineType.value;
    const MedicineName = event.target.MedicineName.value;
    const medicineDesc = event.target.medicineDesc.value;
    const medicineRoutine = event.target.medicineRoutine.value;
    const medicineType1 = event.target.medicineType1.value;
    const MedicineName1 = event.target.MedicineName1.value;
    const medicineDesc1 = event.target.medicineDesc1.value;
    const medicineRoutine1 = event.target.medicineRoutine1.value;
    const medicineType2 = event.target.medicineType2.value;
    const MedicineName2 = event.target.MedicineName2.value;
    const medicineDesc2 = event.target.medicineDesc2.value;
    const medicineRoutine2 = event.target.medicineRoutine2.value;
    const medicineType3 = event.target.medicineType3.value;
    const MedicineName3 = event.target.MedicineName3.value;
    const medicineDesc3 = event.target.medicineDesc3.value;
    const medicineRoutine3 = event.target.medicineRoutine3.value;
    // diagnosis
    const diagnosis = event.target.diagnosis.value;
    const diagnosis1 = event.target.diagnosis1.value;

    const prescription = {
      ptEmail,
      ptName,
      consultationFee,
      ptAge,
      ptGender,
      ptAddress,
      date,
      drName,
      drSpecialty,
      drSpecialtyOn,
      medicineType,
      MedicineName,
      medicineDesc,
      medicineRoutine,
      medicineType1,
      MedicineName1,
      medicineDesc1,
      medicineRoutine1,
      medicineType2,
      MedicineName2,
      medicineDesc2,
      medicineRoutine2,
      medicineType3,
      MedicineName3,
      medicineDesc3,
      medicineRoutine3,
      diagnosis,
      diagnosis1,
    };

    fetch("http://localhost:5000/prescription", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(prescription),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Prescription added successfully");
      });
  };
  return (
    <div>
      {" "}
      <div className="">
        <form onSubmit={handleAddItems}>
          <div class="card px-8 lg:px-40    mx-auto">
            <div class="card-body">
              <h2 className=" text-xl mb-4">Add Prescription</h2>
              <input
                className="text-xs w-50 font-normal input input-sm input-bordered rounded"
                required
                type="email"
                placeholder="Insert patient email"
                name="ptEmail"
              />
              <input
                className="text-xs w-50 font-normal input input-sm input-bordered rounded"
                type="name"
                required
                placeholder="Insert patient name"
                name="ptName"
              />
              <input
                className="text-xs w-50 font-normal input input-sm input-bordered rounded"
                type="number"
                required
                placeholder="Insert consultation fee "
                name="consultationFee"
              />
              <input
                className="text-xs w-50 font-normal input input-sm input-bordered rounded"
                type="number"
                required
                placeholder="Insert patient age"
                name="ptAge"
              />
              <input
                className="text-xs w-50 font-normal input input-sm input-bordered rounded"
                type="text"
                required
                placeholder="Insert patient gender"
                name="ptGender"
              />
              <input
                className="text-xs w-50 font-normal input input-sm input-bordered rounded"
                type="address"
                required
                placeholder="Insert patient address"
                name="ptAddress"
              />
              <input
                className="text-xs w-50 font-normal input input-sm input-bordered rounded"
                required
                disabled
                name="date"
                value={currentDate}
              />
              <input
                className="text-xs w-50 font-normal input input-sm input-bordered rounded"
                type="name"
                required
                placeholder="Insert Dr. name"
                name="drName"
              />
              <input
                className="text-xs w-50 font-normal input input-sm input-bordered rounded"
                type="text"
                required
                placeholder="Insert Dr. specialty"
                name="drSpecialty"
              />
              <input
                className="text-xs w-50 font-normal input input-sm input-bordered rounded"
                type="text"
                required
                placeholder="Dr. Specialty on : Skin/ Dermatology"
                name="drSpecialtyOn"
              />{" "}
              <p className="text-xs text-left ">Medicine </p>
              <div className="lg:flex justify-around gap-2  font-semibold">
                <input
                  className="text-xs   font-normal input input-sm input-bordered rounded"
                  type="text"
                  required
                  placeholder="tab/cap/syp"
                  name="medicineType"
                />
                <input
                  className="text-xs font-normal input input-sm input-bordered rounded"
                  type="text"
                  required
                  placeholder="Insert medicine name"
                  name="MedicineName"
                />

                <input
                  className="text-xs   font-normal input input-sm input-bordered rounded"
                  type="text"
                  required
                  placeholder="10mg / 500mg "
                  name="medicineDesc"
                />
                <input
                  className="text-xs font-normal input input-sm input-bordered rounded"
                  type="text"
                  required
                  placeholder="Routine: 1 + 0 + 1"
                  name="medicineRoutine"
                />
              </div>
              <div className="lg:flex justify-around gap-2  font-semibold">
                <input
                  className="text-xs   font-normal input input-sm input-bordered rounded"
                  type="text"
                  required
                  placeholder="tab/cap/syp"
                  name="medicineType1"
                />
                <input
                  className="text-xs font-normal input input-sm input-bordered rounded"
                  type="text"
                  required
                  placeholder="Insert medicine name"
                  name="MedicineName1"
                />

                <input
                  className="text-xs   font-normal input input-sm input-bordered rounded"
                  type="text"
                  required
                  placeholder="10mg / 500mg "
                  name="medicineDesc1"
                />
                <input
                  className="text-xs font-normal input input-sm input-bordered rounded"
                  type="text"
                  required
                  placeholder="Routine: 1 + 0 + 1"
                  name="medicineRoutine1"
                />
              </div>
              <div className="lg:flex justify-around gap-2  font-semibold">
                <input
                  className="text-xs   font-normal input input-sm input-bordered rounded"
                  type="text"
                  required
                  placeholder="tab/cap/syp"
                  name="medicineType2"
                />
                <input
                  className="text-xs font-normal input input-sm input-bordered rounded"
                  type="text"
                  required
                  placeholder="Insert medicine name"
                  name="MedicineName2"
                />

                <input
                  className="text-xs   font-normal input input-sm input-bordered rounded"
                  type="text"
                  required
                  placeholder="10mg / 500mg "
                  name="medicineDesc2"
                />
                <input
                  className="text-xs font-normal input input-sm input-bordered rounded"
                  type="text"
                  required
                  placeholder="Routine: 1 + 0 + 1"
                  name="medicineRoutine2"
                />
              </div>
              <div className="lg:flex justify-around gap-2  font-semibold">
                <input
                  className="text-xs   font-normal input input-sm input-bordered rounded"
                  type="text"
                  required
                  placeholder="tab/cap/syp"
                  name="medicineType3"
                />
                <input
                  className="text-xs font-normal input input-sm input-bordered rounded"
                  type="text"
                  required
                  placeholder="Insert medicine name"
                  name="MedicineName3"
                />

                <input
                  className="text-xs   font-normal input input-sm input-bordered rounded"
                  type="text"
                  required
                  placeholder="10mg / 500mg "
                  name="medicineDesc3"
                />
                <input
                  className="text-xs font-normal input input-sm input-bordered rounded"
                  type="text"
                  required
                  placeholder="Routine: 1 + 0 + 1"
                  name="medicineRoutine3"
                />
              </div>
              {/* diagnosis */}
              <p className="text-xs text-left ">Diagnosis </p>
              <div className="flex justify-around gap-2  font-semibold">
                <input
                  className="text-xs  w-1/2 font-normal input input-sm input-bordered rounded"
                  type="text"
                  required
                  placeholder="Insert test 1"
                  name="diagnosis"
                />

                <input
                  className="text-xs w-1/2  font-normal input input-sm input-bordered rounded"
                  type="text"
                  required
                  placeholder="Insert test 2"
                  name="diagnosis1"
                />
              </div>
              <input
                className="btn btn-primary text-white border-none mt-3"
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPrescription;
