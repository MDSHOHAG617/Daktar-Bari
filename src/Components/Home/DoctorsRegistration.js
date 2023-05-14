import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import Loading from "../Loading/Loading";
const DoctorsRegistration = () => {
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
    return <Loading></Loading>;
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
    await updateProfile({ displayName: data.name });
    console.log("update done");
  };
  return (
    <div className=" my-48  px-16">
      <div className="flex h-screen justify-center items-center">
        <div className="card w-full shadow-xl">
          <div className="card-body w-full">
            {/* <h2 className="text-center text-2xl font-bold">Sign Up</h2> */}
            <h2 className="text-center text-2xl font-bold mb-6">
              {" "}
              Doctor Registration
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/*title start*/}
              {/* <div className="form-control w-full ">
                <input
                  type="text"
                  placeholder="Enter your title"
                  className="input input-bordered w-full font-normal text-xs"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "Title is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.title?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.title.message}
                    </span>
                  )}
                </label>
              </div> */}
              {/*  title end*/}
              {/* name start */}
              {/* <div className="flex mt-2 "> */} {/* first name */}
              {/* <div className="form-control w-full mr-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="input input-bordered w-full font-normal text-xs"
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
                </div> */}
              {/* Last name */}
              {/* <div className="form-control w-full ">
                  <input
                    type="text"
                    placeholder="Last name"
                    className="input input-bordered w-full font-normal text-xs"
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
              </div> */}
              {/* name end */}
              {/* name  start*/}
              <div className="form-control w-full ">
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
              {/* name end */}
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

export default DoctorsRegistration;
