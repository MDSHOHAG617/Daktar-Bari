import React from "react";
import logo from "../../../images/GIFLogo.png";
import { MdAddCall } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";

import { AiFillApple } from "react-icons/ai";
import { FaLaptopMedical } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="">
      <hr />
      <footer className="footer p-16 py-12   text-base-content ">
        <div>
          <img className="w-64 mb-4" src={logo} />
          <p className="flex items-center font-semibold ">
            <MdAddCall className="text-2xl"></MdAddCall>
            <span className="ml-4 text-xl">+880 1629753681</span>
          </p>
          <p className="flex items-center font-semibold ">
            <TfiEmail className="text-2xl"></TfiEmail>
            <span className="ml-4 text-xl">support@daktarbari.com.bd</span>
          </p>
          <p className="flex items-center font-semibold text-3xl mt-4">
            <BsFacebook className="mr-4 "></BsFacebook>
            <BsTwitter className="mr-4"></BsTwitter>
            <BsYoutube className="mr-4"></BsYoutube>
            <BsInstagram className="mr-4"></BsInstagram>
          </p>
        </div>
        <div className="text-lg font-semibold">
          {/* <span className="footer-title">Services</span> */}
          <a className="link link-hover ">About us</a>
          <a className="link link-hover ">How it works</a>
          <a className="link link-hover ">For Doctors</a>
          <a className="link link-hover ">Blog</a>
        </div>
        <div className="text-lg font-semibold">
          {/* <span className="footer-title">Company</span> */}
          <a className="link link-hover">Contact us</a>
          <a className="link link-hover">Term & Conditions</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Data & Research </a>
          <a className="link link-hover">Help </a>
        </div>
        <div>
          <h1 className="text-2xl">Download Our app</h1>
          <div className="flex justify-btween items-center bg-primary py-1 w-48 rounded-xl lg:mx-3 mt-8 lg:mt-0 mx-auto">
            <span>
              <FaGooglePlay className="text-3xl ml-4 mr-3 text-[#ffffff] " />
            </span>
            <div>
              <p className="text-sm font-normal text-white">Download on the </p>
              <h2 className="text-xl text-white">Google Play </h2>
            </div>
          </div>
          <div className="flex justify-center items-center bg-primary py-1 w-48 rounded-xl lg:mx-3  lg:mt-0 mx-auto">
            <span>
              <AiFillApple className="text-4xl mr-2 text-[#ffffff] " />
            </span>
            <div>
              <p className="text-sm font-normal text-white">Download on the </p>
              <h2 className="text-xl text-white">App Store </h2>
            </div>
          </div>
          <div className="flex justify-center items-center bg-primary p-1 w-48 rounded-xl lg:mx-3   lg:mt-0 mx-auto">
            <span>
              <FaLaptopMedical className="text-4xl mr-2 text-[#ffffff]" />
            </span>
            <div>
              <p className="text-sm font-normal text-white">
                Available on the{" "}
              </p>
              <h2 className="text-xl text-white">Browser </h2>
            </div>
          </div>
        </div>
      </footer>
      <div className="">
        <hr></hr>
        <p className="pb-4 pt-8 font-normal  ">
          Copyright © {year}
          <span className="text-[#07C0BA]"> Daktar bari </span>
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
