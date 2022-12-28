import React from "react";
import { RiStarFill } from "react-icons/ri";
import { RiStarHalfFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Ratings = () => {
  return (
    <div>
      {/* headings */}
      <h1 className=" text-2xl lg:text-5xl  mx-10 lg:mx-24 lg:mx-96 mt-12 lg:mt-32 mb-12 lg:mb-32">
        More than <span className="text-primary">90%</span> of users give us a 5
        stars rating
      </h1>

      <div className="ratings lg:flex justify-evenly items-center ">
        <div className="left-ratings ">
          <span className="text-primary text-2xl lg:text-5xl ">4.5</span>
          <p className="text-2xl lg:text-3xl my-6">Out of 5 rating *</p>
          <div className="rating  lg:rating-lg  rating-half bg-[#F5F5F5] p-4 rounded-full">
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
                className="progress progress-primary w-64 lg:w-96  h-3"
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
                className="progress progress-primary w-64 lg:w-96 h-3"
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
                className="progress progress-primary w-64 lg:w-96 h-3"
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
                className="progress progress-primary w-64 lg:w-96 h-3"
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
                className="progress progress-primary w-64 lg:w-96 h-3"
                value="3"
                max="100"
              ></progress>
            </div>
          </div>
          <p className="font-normal my-4 lg:mt-4  ">
            *Source: Google Play ratings collected during March 2021
          </p>
        </div>
        {/* <Link
          to=""
          className="w-96 cursor-pointer mt-8 lg:mt-0 lg:w-5/12 mx-auto lg:mx-0 "
        >
          <img src="https://Daktar bari.com.bd/landing/home/video__thumbnail__image.webp" />
        </Link> */}

        <div>
          <iframe
            className="rounded-xl mx-auto w-10/12 h-[200px] lg:w-[550px] lg:h-[300px] "
            src="https://www.youtube.com/embed/0grJjVjy5-0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
