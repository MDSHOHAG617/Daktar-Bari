import React from "react";
import { Link } from "react-router-dom";
import forDoctors from "../../images/forDoctors.png";

const ForDoctors = () => {
  return (
    <div>
      {" "}
      <div className="my-32 px-16 lg:flex justify-around items-center  gap-32">
        <div className="banner-left">
          {" "}
          <h1 className="font-bold text-2xl lg:text-5xl lg:text-left">
            <p> Are You</p> <p className="mt-2">A Qualified Doctor?</p>
          </h1>
          <h2 className="font-bold text-lg  lg:text-2xl lg:text-left mt-8 mb-8">
            Join the forefront of digital healthcare
          </h2>
          <div className="lg:text-left ">
            <p className="font-normal text-lg font-semibold lg:text-left lg:w-[470px]">
              Join Daktar-bari network and create your virtual chamber provide
              medical consultancy via video call and expand the reach of your
              service.{" "}
            </p>
            <p className="mt-8 font-normal text-lg font-semibold lg:text-left">
              Enroll yourself just in minutes!
            </p>
            <Link
              to="/doctorsRegistration"
              className="btn rounded-full bg-[#07C0BA] border-none  text-white px-8 btn-md my-8 "
            >
              Sign up Now
            </Link>
          </div>
        </div>
        <div className="banner-right">
          <img className="hidden lg:block" src={forDoctors} alt="Signup" />
        </div>
      </div>
      <div>
        {/* benefits of joining   */}
        {/* <div className="flex px-16 items-center mb-20">
          <div className="left-joining text-left font-normal text-lg font-semibold lg:text-left text-justify pr-8">
            <p>
              Doctors can join the platform using our simple on boarding
              process. We verify every doctor to make sure only BMDC authorised
              doctors are providing consultation using our latest technology.
            </p>
            <p className="my-8">
              You will be at the forefront of digital healthcare innovations
              providing accessible patient care for all.{" "}
            </p>

            <p>
              You will be working independently, making autonomous medical
              decisions, and supported by our Daktar-bari technical team who are
              here to assist both patient and yourself when you’re on session or
              outside sessions.
            </p>
          </div>
          <div className="right-joining">
            <div className="carousel rounded-box">
              <div className="carousel-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2175/2175193.png"
                  alt="Burger"
                  className="w-20 h-10"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxjIL03VE0L9Fs4oCWJg-E9A9vXm05R307qdW8gjAMdu09Uxr8FD2AYT6BWmpp30aee_8&usqp=CAU"
                  alt="Burger"
                  className="w-50 h-20"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-facebook-social-media-icons-icon-clipart-png-image_4294250.jpg"
                  alt="Burger"
                  className="w-50 h-20"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg"
                  alt="Burger"
                  className="w-50 h-20"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                  alt="Burger"
                  className="w-50 h-20"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://jssors8.azureedge.net/demos/image-slider/img/px-fun-man-person-2361598-image.jpg"
                  alt="Burger"
                  className="w-50 h-20"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg"
                  alt="Burger"
                  className="w-50 h-20"
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ForDoctors;
