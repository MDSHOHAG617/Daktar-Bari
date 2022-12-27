import React from "react";
import getintouch from "../../images/getintouch.svg";

const GetInTouch = () => {
  return (
    <div className="mb-20 ">
      <h1 className=" mt-32 text-2xl lg:text-5xl ">Get in touch with us</h1>
      <p className="py-6 text-lg font-semibold w-8/12 mx-auto">
        We're here to help. Send your query or question below and provide us
        with as much details as possible. We will answer your query as soon as
        possible. We aim to reply to your query within 24 hours.
      </p>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row lg:mx-20">
          <div className="text-center lg:text-left lg:w-6/12 lg:mr-20">
            {/* <h1 className="text-5xl font-bold">Get in touch with us</h1> */}

            {/* gettouch img */}

            <img className=" mx-auto" src={getintouch} />
          </div>

          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Please enter your full name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  required
                  type="text"
                  name="email"
                  placeholder="Please enter your email"
                  className="input input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Your concern</span>
                </label>
                <select className="select select-bordered w-full max-w-md">
                  <option className="p-2 text-xl " required disabled selected>
                    What is your concern ?
                  </option>
                  <option>Video Consultation</option>
                  <option>Healthcare and protection plans</option>
                  <option>Diagnostic order</option>
                  <option>Medicine order</option>
                  <option>Technical issues</option>
                  <option>Report a bug</option>
                  <option>General questions</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Query</span>
                </label>
                <textarea
                  rows="4"
                  required
                  className="textarea textarea-bordered "
                  placeholder="Write your Query "
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
