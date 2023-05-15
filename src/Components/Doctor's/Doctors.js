import React, { useEffect, useState } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Doctors = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [user, loading, error] = useAuthState(auth);
  // const { id } = useParams();
  // const [medicine, setMedicine] = useState({});
  // const {
  //   name,
  //   img,
  //   desc,
  //   min_order_quantity,
  //   available_quantity,
  //   price,
  //   _id,
  // } = medicine;
  // console.log(medicine);

  const handleOrder = (event) => {
    event.preventDefault();
    const phone = event.target.phone.value;
    const userAddress = event.target.address.value;
    console.log(phone, userAddress);
    const doctor = {
      customerName: user.displayName,
      customerEmail: user.email,
      userAddress,
      phone,
    };

    fetch("http://localhost:5000/doctor", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(doctor),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Order Succeed");
        console.log("post success", data);
      });
  };

  // useEffect(() => {
  //   fetch(`http://localhost:5000/medicine/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setMedicine(data));
  // }, [id]);
  return (
    <div>
      <div class="lg:flex my-20 ">
        {/* dr. reg img */}
        <div>
          <img
            className="hidden lg:block"
            src="https://www.thoughtwire.com/wp-content/uploads/2019/07/ThoughtWire-Smart-Hospital-02-1536x1024.jpg"
          />
        </div>
        <div class="">
          <h2 className="mt-8 text-2xl">Doctor Registration</h2>
          <form onSubmit={handleOrder}>
            <div class="p-4 lg:mr-40 flex-shrink-0 w-full  mx-auto  ">
              <div class=" ">
                {/* title */}
                <div class="form-control mb-3">
                  <input
                    placeholder="Title"
                    name="title"
                    type="text"
                    required
                    class="input font-normal input-sm input-bordered w-full text-xs"
                  />
                </div>
                {/* name */}
                <div className="Name flex gap-x-4">
                  <div class="form-control mb-3 w-full">
                    <input
                      placeholder="First name"
                      name="FirstName"
                      type="text"
                      // value={user.displayName || ""}
                      // disabled
                      required
                      class="input font-normal input-sm input-bordered text-xs"
                    />
                  </div>
                  <div class="form-control mb-3 w-full">
                    <input
                      placeholder="Last name"
                      name="lastName"
                      type="text"
                      // value={user.displayName || ""}

                      required
                      class="input font-normal input-sm input-bordered  text-xs"
                    />
                  </div>
                </div>
                {/* Date of birth */}
                <div class="form-control mb-3 w-full">
                  <input
                    name="dateOfBirth"
                    type="date"
                    // value={user.displayName || ""}
                    // disabled
                    required
                    class="input font-normal input-sm input-bordered  text-xs"
                  />
                </div>
                {/* gender */}
                <div class="form-control mb-3 w-full">
                  <input
                    type="text"
                    placeholder="Gender"
                    name="gender"
                    // value={user.displayName || ""}
                    // disabled
                    required
                    class="input font-normal input-sm input-bordered  text-xs"
                  />
                </div>

                {/* about  */}
                <div class="form-control mb-3">
                  <textarea
                    required
                    type="text"
                    name="about"
                    class="textarea font-normal text-xs textarea-bordered "
                    placeholder="Write detail about your degree and experience "
                  ></textarea>
                </div>
                {/* Availability */}
                <div class="form-control mb-3">
                  <input
                    required
                    name="availability"
                    type="text"
                    placeholder="Availability: Sat-Fri (11:55 AM - 11:55 PM) "
                    class="input font-normal text-xs input-sm input-bordered"
                  />
                </div>
                {/* specialty and experience */}
                <div className="Name flex gap-x-4">
                  <div class="form-control mb-3 w-full">
                    <input
                      placeholder="Specialty : MBBS/ FCPS "
                      name="specialty"
                      type="text"
                      // value={user.displayName || ""}
                      // disabled
                      required
                      class="input font-normal input-sm input-bordered text-xs"
                    />
                  </div>
                  <div class="form-control mb-3 w-full">
                    <input
                      placeholder="Experience: 4 Yr"
                      name="lastName"
                      type="number"
                      // value={user.displayName || ""}

                      required
                      class="input font-normal input-sm input-bordered  text-xs"
                    />
                  </div>
                </div>
                {/* working in  */}
                <div class="form-control mb-3">
                  <input
                    required
                    name="workingIn"
                    type="text"
                    placeholder="Working in: Upazila Health Complex,Faridganj,Chandpur "
                    class="input font-normal text-xs input-sm input-bordered"
                  />
                </div>
                {/* Consultation fee  */}
                <div class="form-control mb-3">
                  <input
                    type="number"
                    name="consultationFee"
                    placeholder="Consultation fee"
                    required
                    // value={user.email || ""}
                    // disabled
                    class="input font-normal input-sm input-bordered text-xs"
                  />
                </div>
                {/* email */}
                <div class="form-control mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    // value={user.email || ""}
                    // disabled
                    class="input font-normal input-sm input-bordered text-xs"
                  />
                </div>
                {/* password */}
                <div class="form-control mb-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                    // value={user.email || ""}
                    // disabled
                    class="input font-normal input-sm input-bordered text-xs"
                  />
                </div>
                {/* terms and conditions */}
                <h2 className="text-center lg:text-left mt-4 mb-3">
                  Accepting Terms & conditions
                </h2>
                <div className="flex font-normal">
                  <input type="checkbox" required></input>
                  <p className="ml-4">
                    I accept and agree{" "}
                    <span className="text-[#07C0BA]">Terms conditions</span> and{" "}
                    <span className="text-[#07C0BA]">Privacy Policy</span>
                  </p>
                </div>
                <div class=" font-semibold mt-6 lg:flex justify-center  justify-evenly   items-center">
                  <div className="form-control ">
                    <button class="btn w-52 mx-auto lg:mx-0 text-white ">
                      SignUp{" "}
                    </button>
                  </div>
                  <div>Already have an account?</div>
                  <div>
                    {" "}
                    <Link className="text-blue-500" to="/login">
                      Please login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="divider px-4 lg:px-0">OR</div>
          <div className="px-4 lg:px-0">
            <button
              onClick={() => signInWithGoogle()}
              className="btn w-full  btn-outline"
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
