// import React, { useEffect, useState } from "react";
// import {
//   useAuthState,
//   useCreateUserWithEmailAndPassword,
//   useSignInWithGoogle,
// } from "react-firebase-hooks/auth";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import auth from "../../firebase.init";
// import useToken from "../../hooks/useToken";
// import Loading from "../Loading/Loading";

// const Doctors = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [createUserWithEmailAndPassword, user, loading, error] =
//     useCreateUserWithEmailAndPassword(auth);

//   const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

//   const [token] = useToken(user || gUser);

//   const navigate = useNavigate();

//   let signInError;

//   if (loading || gLoading) {
//     return <Loading />;
//   }

//   if (error || gError) {
//     signInError = (
//       <p className="text-red-500">
//         <small>{error?.message || gError?.message}</small>
//       </p>
//     );
//   }
//   if (user) {
//     navigate("/");
//   }

//   if (token) {
//     navigate("/");
//   }
//   const handleSignup = () => {
//     createUserWithEmailAndPassword(email, password);
//     console.log(email, password);
//   };
//   const handleDoctors = (event) => {
//     event.preventDefault();
//     const title = event.target.title.value;
//     const firstName = event.target.firstName.value;
//     const lastName = event.target.lastName.value;
//     const dateOfBirth = event.target.dateOfBirth.value;
//     const gender = event.target.gender.value;
//     const about = event.target.about.value;
//     const availability = event.target.availability.value;
//     const specialty = event.target.specialty.value;
//     const experience = event.target.experience.value;
//     const consultationFee = event.target.consultationFee.value;
//     const workingIn = event.target.workingIn.value;
//     const phone = event.target.phone.value;
//     const image = event.target.image.value;
//     const email = event.target.email.value;
//     const password = event.target.password.value;

//     const doctor = {
//       // customerName: user.displayName,
//       // customerEmail: user.email,
//       // userAddress,
//       title,
//       firstName,
//       lastName,
//       dateOfBirth,
//       gender,
//       about,
//       availability,
//       specialty,
//       experience,
//       consultationFee,
//       workingIn,
//       phone,
//       image,
//       email,
//       password,
//     };

//     console.log(doctor);

//     fetch("http://localhost:5000/doctor", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(doctor),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         toast.success("Order Succeed");
//         console.log("post success", data);
//       });
//   };

//   // useEffect(() => {
//   //   fetch(`http://localhost:5000/medicine/${id}`)
//   //     .then((res) => res.json())
//   //     .then((data) => setMedicine(data));
//   // }, [id]);

//   if (user) {
//     return (
//       <div>
//         <p>Registered User: {user.user.email}</p>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <div class="lg:flex my-20 ">
//         {/* dr. reg img */}
//         <div>
//           <img
//             className="hidden lg:block"
//             src="https://www.thoughtwire.com/wp-content/uploads/2019/07/ThoughtWire-Smart-Hospital-02-1536x1024.jpg"
//           />
//         </div>
//         <div class="">
//           <h2 className="mt-8 text-2xl">Doctor Registration</h2>
//           <form onSubmit={handleDoctors}>
//             <div class="p-4 lg:mr-40 flex-shrink-0 w-full  mx-auto  ">
//               <div class=" ">
//                 {/* title */}
//                 <div class="form-control mb-3">
//                   <input
//                     placeholder="Title"
//                     name="title"
//                     type="text"
//                     required
//                     class="input font-normal input-sm input-bordered w-full text-xs"
//                   />
//                 </div>
//                 {/* name */}
//                 <div className="Name flex gap-x-4">
//                   <div class="form-control mb-3 w-full">
//                     <input
//                       placeholder="First name"
//                       name="firstName"
//                       type="text"
//                       // value={user.displayName || ""}
//                       // disabled
//                       required
//                       class="input font-normal input-sm input-bordered text-xs"
//                     />
//                   </div>
//                   <div class="form-control mb-3 w-full">
//                     <input
//                       placeholder="Last name"
//                       name="lastName"
//                       type="text"
//                       // value={user.displayName || ""}

//                       required
//                       class="input font-normal input-sm input-bordered  text-xs"
//                     />
//                   </div>
//                 </div>
//                 {/* Date of birth */}
//                 <div class="form-control mb-3 w-full">
//                   <input
//                     name="dateOfBirth"
//                     type="date"
//                     // value={user.displayName || ""}
//                     // disabled
//                     required
//                     class="input font-normal input-sm input-bordered  text-xs"
//                   />
//                 </div>
//                 {/* gender */}
//                 <div class="form-control mb-3 w-full">
//                   <input
//                     type="text"
//                     placeholder="Gender"
//                     name="gender"
//                     // value={user.displayName || ""}
//                     // disabled
//                     required
//                     class="input font-normal input-sm input-bordered  text-xs"
//                   />
//                 </div>

//                 {/* about  */}
//                 <div class="form-control mb-3">
//                   <textarea
//                     required
//                     type="text"
//                     name="about"
//                     class="textarea font-normal text-xs textarea-bordered "
//                     placeholder="Write detail about your degree and experience "
//                   ></textarea>
//                 </div>
//                 {/* Availability */}
//                 <div class="form-control mb-3">
//                   <input
//                     required
//                     name="availability"
//                     type="text"
//                     placeholder="Availability: Sat-Fri (11:55 AM - 11:55 PM) "
//                     class="input font-normal text-xs input-sm input-bordered"
//                   />
//                 </div>
//                 {/* specialty and experience */}
//                 <div className="Name flex gap-x-4">
//                   <div class="form-control mb-3 w-full">
//                     <input
//                       placeholder="Specialty : MBBS/ FCPS "
//                       name="specialty"
//                       type="text"
//                       // value={user.displayName || ""}
//                       // disabled
//                       required
//                       class="input font-normal input-sm input-bordered text-xs"
//                     />
//                   </div>
//                   <div class="form-control mb-3 w-full">
//                     <input
//                       placeholder="Experience: 4 Yr"
//                       name="experience"
//                       type="number"
//                       // value={user.displayName || ""}

//                       required
//                       class="input font-normal input-sm input-bordered  text-xs"
//                     />
//                   </div>
//                 </div>
//                 {/* working in  */}
//                 <div class="form-control mb-3">
//                   <input
//                     required
//                     name="workingIn"
//                     type="text"
//                     placeholder="Working in: Upazila Health Complex,Faridganj,Chandpur "
//                     class="input font-normal text-xs input-sm input-bordered"
//                   />
//                 </div>
//                 {/* Consultation fee  */}
//                 <div class="form-control mb-3">
//                   <input
//                     type="number"
//                     name="consultationFee"
//                     placeholder="Consultation fee"
//                     required
//                     // value={user.email || ""}
//                     // disabled
//                     class="input font-normal input-sm input-bordered text-xs"
//                   />
//                 </div>
//                 {/* image */}
//                 <div class="form-control mb-3">
//                   <input
//                     type="url"
//                     name="image"
//                     required
//                     placeholder="Enter your image url"
//                     // value={user.email || ""}
//                     // disabled
//                     class="input font-normal input-sm input-bordered text-xs"
//                   />
//                 </div>
//                 {/* Mobile Number */}
//                 <div class="form-control mb-3">
//                   <input
//                     type="phone"
//                     name="phone"
//                     placeholder="Phone"
//                     required
//                     // value={user.email || ""}
//                     // disabled
//                     class="input font-normal input-sm input-bordered text-xs"
//                   />
//                 </div>

//                 {/* email */}
//                 <div class="form-control mb-3">
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     required
//                     // onChange={(e) => setEmail(e.target.value)}
//                     // value={user.email || ""}
//                     // disabled
//                     class="input font-normal input-sm input-bordered text-xs"
//                   />
//                 </div>
//                 {/* password */}
//                 <div class="form-control mb-3">
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="password"
//                     required
//                     // onChange={(e) => setPassword(e.target.value)}
//                     // value={user.email || ""}
//                     // disabled
//                     class="input font-normal input-sm input-bordered text-xs"
//                   />
//                 </div>
//                 {/* terms and conditions */}
//                 <h2 className="text-center lg:text-left mt-4 mb-3">
//                   Accepting Terms & conditions
//                 </h2>
//                 <div className="flex items-center font-normal">
//                   <input type="checkbox" required></input>
//                   <p className="ml-2">
//                     I accept and agree{" "}
//                     <span className="text-[#07C0BA]">Terms conditions</span> and{" "}
//                     <span className="text-[#07C0BA]">Privacy Policy</span>
//                   </p>
//                 </div>
//                 <div class=" font-semibold mt-6 lg:flex justify-center  justify-evenly   items-center">
//                   <div className="form-control ">
//                     <button
//                       // onClick={handleSignup}
//                       class="btn w-52 mx-auto lg:mx-0 text-white "
//                     >
//                       SignUp{" "}
//                     </button>
//                   </div>
//                   <div>Already have an account?</div>
//                   <div>
//                     {" "}
//                     <Link className="text-blue-500" to="/login">
//                       Please login
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </form>
//           <div className="divider px-4 lg:px-0">OR</div>
//           <div className="px-4 lg:px-0">
//             <button
//               onClick={() => signInWithGoogle()}
//               className="btn w-full  btn-outline"
//             >
//               Continue with Google
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* try */}
//       <div className="App">
//         <input
//           name="email"
//           placeholder="email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="input input-bordered"
//         />
//         <input
//           placeholder="password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="input input-bordered"
//         />
//         <button className="btn w-full" onClick={handleSignup}>
//           Register
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Doctors;

// /////////////////////////////////

import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
// import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
// import useToken from "../../hooks/useToken";
// import mobilelogin from "../../../images/mobilelogin.svg";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Loading/Loading";
const Doctors = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user || gUser);

  const navigate = useNavigate();

  let signInError;

  if (loading || gLoading || updating) {
    return <Loading />;
  }

  if (error || gError || updateError) {
    signInError = (
      <p className="text-red-500">
        <small>
          {error?.message || gError?.message || updateError?.message}
        </small>
      </p>
    );
  }

  if (token) {
    navigate("/");
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    // console.log(data.email, data.password);
    await updateProfile({ displayName: data.name });
    // console.log("update done");

    const email = data.email;
    const password = data.password;
    console.log(email, password);
    const doctor = {
      email,
      password,
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
        // toast.success("Order Succeed");
        console.log("post success", data);
      });
  };
  return (
    <div className="hero min-h-screen my-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="">
          <img
            src="https://www.thoughtwire.com/wp-content/uploads/2019/07/ThoughtWire-Smart-Hospital-02-1536x1024.jpg"
            className="w-10/12 "
          />
        </div>

        <div className="card w-96  shadow- ">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {/* try */}
              {/* <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div> */}

              {signInError}
              <input
                className="btn w-full max-w-xs text-white"
                type="submit"
                value="Sign Up"
              />
            </form>
            <p>
              <small>
                Already have an account?{" "}
                <Link className="text-blue-500" to="/login">
                  Please login
                </Link>
              </small>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline"
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
