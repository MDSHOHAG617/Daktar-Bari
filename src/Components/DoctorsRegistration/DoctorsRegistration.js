import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Loading/Loading";
import drReg from "../../images/drReg.jpg";
import { toast } from "react-toastify";
const Doctors = () => {
  // specialties
  const [specialties, setSpecialties] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/specialty")
      .then((res) => res.json())
      .then((data) => setSpecialties(data));
  }, []);
  // google signIn
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

  if (token || user || gUser) {
    navigate("/");
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    // console.log(data.email, data.password);
    await updateProfile({ displayName: data.name });
    // console.log("update done");

    const title = data.title;
    const firstName = data.firstName;
    const lastName = data.lastName;
    const dateOfBirth = data.dateOfBirth;
    const gender = data.gender;
    const about = data.about;
    const availability = data.availability;
    const specialty = data.specialty;
    const experience = data.experience;
    const category = data.category;
    const workAt = data.workAt;
    const consultationFee = data.consultationFee;
    const imageUrl = data.imageUrl;
    const phone = data.phone;
    const password = data.password;
    const email = data.email;
    // console.log(email, password, title);
    const doctor = {
      title,
      firstName,
      lastName,
      dateOfBirth,
      gender,
      about,
      availability,
      specialty,
      experience,
      category,
      workAt,
      consultationFee,
      imageUrl,
      phone,
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
        toast.success("Doctor Registered success");
        console.log("post success", data);
      });
  };
  return (
    <div className=" my-20">
      <div className=" lg:flex  ">
        <div className="hidden lg:block w-7/12">
          <img src={drReg} className=" " />
        </div>

        <div className="lg:w-5/12 px-4 lg:px-6 mt-8  ">
          <h2 className="text-center text-2xl font-bold mb-6">
            Doctor Registration
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* title */}
            <p className="text-xs font-normal text-left m-1">select title</p>
            <div className="form-control ">
              <select
                {...register("title")}
                className="select select-sm mb-4 select-bordered w-full "
              >
                {specialties.map((specialty) => (
                  <option>{specialty.heading}</option>
                ))}
              </select>
            </div>
            {/* Name (First & Last Name ) */}
            <div className="flex gap-x-4">
              <div className="form-control w-1/2">
                <input
                  type="name"
                  placeholder="firstName"
                  className="input text-xs font-normal input-sm input-bordered  "
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "First name is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.firstName?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.firstName.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-1/2">
                <input
                  type="name"
                  placeholder="Last name"
                  className="input text-xs font-normal input-sm input-bordered "
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "Last name is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.lastName?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.lastName.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            {/* Date of birth  */}
            <div className="form-control ">
              <input
                type="date"
                placeholder=""
                className="input input-sm text-xs font-normal input-bordered w-full "
                {...register("dateOfBirth", {
                  required: {
                    value: true,
                    message: "Date of birth is required",
                  },
                })}
              />
              <label className="label">
                {errors.dateOfBirth?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.dateOfBirth.message}
                  </span>
                )}
              </label>
            </div>
            {/* Gender  */}
            <div className="form-control ">
              <input
                type="text"
                placeholder="Gender"
                className="input input-sm text-xs font-normal input-bordered w-full "
                {...register("gender", {
                  required: {
                    value: true,
                    message: "Gender is required",
                  },
                })}
              />
              <label className="label">
                {errors.gender?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.gender.message}
                  </span>
                )}
              </label>
            </div>
            {/* About  */}
            <div className="form-control ">
              <input
                type="text"
                placeholder="Write detail about your degree and experience "
                className="input input-sm text-xs font-normal input-bordered w-full "
                {...register("about", {
                  required: {
                    value: true,
                    message: "About is required",
                  },
                })}
              />
              <label className="label">
                {errors.about?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.about.message}
                  </span>
                )}
              </label>
            </div>
            {/* Availability  */}
            <div className="form-control ">
              <input
                type="text"
                placeholder="Availability: Sat-Fri (11:55 AM - 11:55 PM) "
                className="input input-sm text-xs font-normal input-bordered w-full "
                {...register("availability", {
                  required: {
                    value: true,
                    message: "Availability is required",
                  },
                })}
              />
              <label className="label">
                {errors.availability?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.availability.message}
                  </span>
                )}
              </label>
            </div>
            {/* Specialty & Experience */}
            <div className="flex gap-x-4">
              <div className="form-control w-1/2">
                <input
                  type="text"
                  placeholder="Specialty : MBBS/ FCPS / ... "
                  className="input text-xs font-normal input-sm input-bordered  "
                  {...register("specialty", {
                    required: {
                      value: true,
                      message: "Specialty is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.specialty?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.specialty.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-1/2">
                <input
                  type="number"
                  placeholder="Experience: 4 Yr"
                  className="input text-xs font-normal input-sm input-bordered "
                  {...register("experience", {
                    required: {
                      value: true,
                      message: "Experience is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.experience?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.experience.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            {/* Category specialty wise */}
            <p className="text-xs font-normal text-left m-1">select category</p>
            <div className="form-control ">
              <select
                {...register("category")}
                className="select select-sm mb-4 select-bordered w-full "
              >
                {specialties.map((specialty) => (
                  <option>{specialty.Specialty}</option>
                ))}
              </select>
            </div>
            {/* Work at */}
            <div className="form-control ">
              <input
                type="text"
                placeholder="Working at: Upazila Health Complex,Faridganj,Chandpur "
                className="input input-sm text-xs font-normal input-bordered w-full "
                {...register("workAt", {
                  required: {
                    value: true,
                    message: "Work at is required",
                  },
                })}
              />
              <label className="label">
                {errors.workAt?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.workAt.message}
                  </span>
                )}
              </label>
            </div>
            {/* Consultation fee */}
            <div className="form-control ">
              <input
                type="number"
                placeholder="Consultation fee : 210 /- "
                className="input input-sm text-xs font-normal input-bordered w-full "
                {...register("consultationFee", {
                  required: {
                    value: true,
                    message: "Consultation fee is required",
                  },
                })}
              />
              <label className="label">
                {errors.consultationFee?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.consultationFee.message}
                  </span>
                )}
              </label>
            </div>
            {/* Image Url */}
            <div className="form-control ">
              <input
                type="url"
                placeholder="Enter your Image url "
                className="input input-sm text-xs font-normal input-bordered w-full "
                {...register("imageUrl", {
                  required: {
                    value: true,
                    message: "Image url  is required",
                  },
                })}
              />
              <label className="label">
                {errors.imageUrl?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.imageUrl.message}
                  </span>
                )}
              </label>
            </div>
            {/* phone */}
            <div className="form-control ">
              <input
                type="phone"
                placeholder="Phone"
                className="input input-sm text-xs font-normal input-bordered w-full "
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone  is required",
                  },
                })}
              />
              <label className="label">
                {errors.phone?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>
            {/* email */}
            <div className="form-control w-full ">
              <input
                type="email"
                placeholder="Email"
                className="input input-sm text-xs font-normal input-bordered w-full "
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
            <div className="form-control">
              <input
                type="password"
                placeholder="Password"
                className="input input-sm text-xs font-normal input-bordered w-full"
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

            {/* Terms & conditions */}
            <div className="my-">
              <h2 className="lg:text-left">Accepting Terms & conditions</h2>
              <div className="flex items-center font-normal">
                <input
                  type="checkbox"
                  {...register("checkbox", {
                    required: {
                      value: true,
                      message: "Checkbox  is required",
                    },
                  })}
                />{" "}
                <p className="ml-2">
                  I accept and agree
                  <span className="text-[#07C0BA]">
                    Terms conditions
                  </span> and{" "}
                  <span className="text-[#07C0BA]">Privacy Policy</span>
                </p>
              </div>
              <label className="label">
                {errors.checkbox?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.checkbox.message}
                  </span>
                )}
              </label>
            </div>
            {/* signup part */}
            {signInError}
            <div>
              {" "}
              <input
                className="btn btn-primary w-full max-w-xs text-white"
                type="submit"
                value="Sign Up"
              />
              <p>
                <small>
                  Already have an account?{" "}
                  <Link className="text-blue-500" to="/login">
                    Please login
                  </Link>
                </small>
              </p>
            </div>
          </form>

          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline hover:bg-primary mb-8"
          >
            Continue with
            <FcGoogle className="text-2xl ml-2 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
