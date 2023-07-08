import React from "react";
import { toast } from "react-toastify";

const AddPrescription = () => {
  const handleAddItems = (event) => {
    event.preventDefault();
    const ptEmail = event.target.ptEmail.value;
    const ptName = event.target.ptName.value;
    const consultationFee = event.target.consultationFee.value;
    const ptAge = event.target.ptAge.value;
    const ptGender = event.target.ptGender.value;
    const ptAddress = event.target.ptAddress.value;
    const date = event.target.date.value;
    const drName = event.target.drName.value;
    const drSpecialty = event.target.drSpecialty.value;
    const medicineType = event.target.medicineType.value;
    const MedicineName = event.target.MedicineName.value;
    const medicineDesc = event.target.medicineDesc.value;
    const medicineRoutine = event.target.medicineRoutine.value;

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
      medicineType,
      MedicineName,
      medicineDesc,
      medicineRoutine,
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
      <div className="my-16">
        <form onSubmit={handleAddItems}>
          <div class="card flex-shrink-0 w-full max-w-sm lg:max-w-md  shadow-2xl  mx-auto">
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
                type="date"
                required
                name="date"
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
              <div className="flex justify-around gap-2  font-semibold">
                <div>
                  {" "}
                  <label className="text-xs ">Medicine type</label>
                  <input
                    className="text-xs   font-normal input input-sm input-bordered rounded"
                    type="text"
                    required
                    placeholder="tab/cap/syp"
                    name="medicineType"
                  />
                </div>
                <div>
                  {" "}
                  <label className="text-xs ">Medicine name</label>
                  <input
                    className="text-xs font-normal input input-sm input-bordered rounded"
                    type="text"
                    required
                    placeholder="Insert medicine name"
                    name="MedicineName"
                  />
                </div>
              </div>
              <div className="flex justify-around gap-2  font-semibold">
                <div>
                  <input
                    className="text-xs   font-normal input input-sm input-bordered rounded"
                    type="text"
                    required
                    placeholder="10mg / 500mg "
                    name="medicineDesc"
                  />
                </div>
                <div>
                  <input
                    className="text-xs font-normal input input-sm input-bordered rounded"
                    type="text"
                    required
                    placeholder="Routine: 1 + 0 + 1"
                    name="medicineRoutine"
                  />
                </div>
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
