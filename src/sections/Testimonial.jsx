import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { userImg } from "../components/details";

const Testimonial = () => {
  return (
    <section className="mx-auto w-full max-w-[530px] flex flex-col gap-12 items-center text-center">
      <h2>Don't take our word for it</h2>
      <div>
        <p className="text-xl text-gray-900">
          “Using this charge card has revolutionized our company's spending
          habits. The dynamic spending limits, coupled with enticing rewards,
          have streamlined our financial processes and added significant value
          to our transactions.”
        </p>

        <img
          src={userImg}
          alt="user image"
          className="w-10 h-10 mx-auto mt-4 rounded-full"
        />
        <h5 className="text-sm text-gray-700">Tobi Ajayi</h5>
        <p className="text-gray-500">CEO,Design</p>
      </div>

      <div className="flex items-center justify-between w-7/12">
        <FaArrowLeft className="w-10 h-10 bg-blue-100 rounded-full p-3 cursor-pointer" />
        <FaArrowRight className="w-10 h-10 bg-blue-100 rounded-full p-3 cursor-pointer" />
      </div>
    </section>
  );
};

export default Testimonial;
