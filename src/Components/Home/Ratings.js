import React from "react";
import { RiStarFill } from "react-icons/ri";
import { RiStarHalfFill } from "react-icons/ri";
import youtubVideeo from "../../images/youtubeVideo.png";

const Ratings = () => {
  return (
    <div>
      {/* headings */}
      <h1 className="text-black  text-2xl lg:text-5xl  mb-16 mx-24 lg:mx-96 mt-32 mb-32">
        More than <span className="text-primary">90%</span> of users give us a 5
        stars rating
      </h1>

      <div className="ratings flex justify-evenly items-center ">
        <div className="left-ratings ">
          <span className="text-primary text-2xl lg:text-5xl ">4.5</span>
          <p className="text-2xl lg:text-3xl my-6">Out of 5 rating *</p>
          <div className="rating rating-lg  rating-half bg-[#F5F5F5] p-4 rounded-full">
            <input type="radio" name="rating-2" className="rating-hidden" />
            <input
              type="radio"
              name="rating-2"
              className="bg-[#FFB83A] p- mask mask-star-2 mask-half-1 "
            />
            <input
              type="radio"
              name="rating-2"
              className="bg-[#FFB83A] mask mask-star-2 mask-half-2 mr-2 "
            />
            <input
              type="radio"
              name="rating-2"
              className="bg-[#FFB83A] mask mask-star-2 mask-half-1 "
            />
            <input
              type="radio"
              name="rating-2"
              className="bg-[#FFB83A] mask mask-star-2 mask-half-2 mr-2"
            />
            <input
              type="radio"
              name="rating-2"
              className="bg-[#FFB83A] mask mask-star-2 mask-half-1"
            />
            <input
              type="radio"
              name="rating-2"
              className="bg-[#FFB83A] mask mask-star-2 mask-half-2 mr-2"
            />
            <input
              type="radio"
              name="rating-2"
              className="bg-[#FFB83A] mask mask-star-2 mask-half-1"
            />
            <input
              type="radio"
              name="rating-2"
              className="bg-[#FFB83A] mask mask-star-2 mask-half-2 mr-2"
            />
            <input
              type="radio"
              name="rating-2"
              className="bg-[#FFB83A] mask mask-star-2 mask-half-1"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="bg-[#FFB83A] mask mask-star-2 mask-half-2 mr-2"
            />
          </div>
          <div>
            <div className="rating flex items-center justify-center mt-4">
              <p>5</p>
              <div className="rating rating-xs  rating-half  ">
                <input type="radio" name="rating-2" className="rating-hidden" />
                <input
                  type="radio"
                  name="rating-2"
                  className="bg-[#FFB83A] p- mask mask-star-2 mask-half-1 "
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="bg-[#FFB83A] mask mask-star-2 mask-half-2 mr-2 "
                />
              </div>
              <progress
                className="progress progress-primary w-96 h-3"
                value="95"
                max="100"
              ></progress>
            </div>
            <div className="rating flex items-center justify-center mt-4">
              <p>4</p>
              <div className="rating rating-xs  rating-half  ">
                <input type="radio" name="rating-2" className="rating-hidden" />
                <input
                  type="radio"
                  name="rating-2"
                  className="bg-[#FFB83A] p- mask mask-star-2 mask-half-1 "
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="bg-[#FFB83A] mask mask-star-2 mask-half-2 mr-2 "
                />
              </div>
              <progress
                className="progress progress-primary w-96 h-3"
                value="15"
                max="100"
              ></progress>
            </div>
            <div className="rating flex items-center justify-center mt-4">
              <p>3</p>
              <div className="rating rating-xs  rating-half  ">
                <input type="radio" name="rating-2" className="rating-hidden" />
                <input
                  type="radio"
                  name="rating-2"
                  className="bg-[#FFB83A] p- mask mask-star-2 mask-half-1 "
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="bg-[#FFB83A] mask mask-star-2 mask-half-2 mr-2 "
                />
              </div>
              <progress
                className="progress progress-primary w-96 h-3"
                value="10"
                max="100"
              ></progress>
            </div>
            <div className="rating flex items-center justify-center mt-4">
              <p>2</p>
              <div className="rating rating-xs  rating-half  ">
                <input type="radio" name="rating-2" className="rating-hidden" />
                <input
                  type="radio"
                  name="rating-2"
                  className="bg-[#FFB83A] p- mask mask-star-2 mask-half-1 "
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="bg-[#FFB83A] mask mask-star-2 mask-half-2 mr-2 "
                />
              </div>
              <progress
                className="progress progress-primary w-96 h-3"
                value="5"
                max="100"
              ></progress>
            </div>
            <div className="rating flex items-center justify-center mt-4">
              <p>1</p>
              <div className="rating rating-xs  rating-half  ">
                <input type="radio" name="rating-2" className="rating-hidden" />
                <input
                  type="radio"
                  name="rating-2"
                  className="bg-[#FFB83A] p- mask mask-star-2 mask-half-1 "
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="bg-[#FFB83A] mask mask-star-2 mask-half-2 mr-2 "
                />
              </div>
              <progress
                className="progress progress-primary w-96 h-3"
                value="3"
                max="100"
              ></progress>
            </div>
          </div>
          <p className="font-normal mt-4">
            *Source: Google Play ratings collected during March 2021
          </p>
        </div>
        <img
          className="w-5/12  "
          src="https://doctime.com.bd/landing/home/video__thumbnail__image.webp"
        />
      </div>
    </div>
  );
};

export default Ratings;
