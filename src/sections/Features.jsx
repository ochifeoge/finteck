import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { gridImg1, gridImg2 } from "../components/details";
import FeatureBtn from "../components/FeatureBtn";

const Features = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 justify-center">
        <div className="flex flex-col items-center md:items-start gap-4">
          <FeatureBtn label={"feature"} />

          <h2 className="">No preset spending Limit</h2>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaCheck className="w-5 h-5 p-1 rounded-full bg-blue-300 text-gray-600" />
              <p className="text-gray-600 text-sm">Dynamic Spending Capicity</p>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <FaCheck className="w-5 h-5 p-1 rounded-full bg-blue-300 text-gray-600" />
              <p className="text-gray-600 text-sm">Financial Freedom</p>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <FaCheck className="w-5 h-5 p-1 rounded-full bg-blue-300 text-gray-600" />
              <p className="text-gray-600 text-sm">Credit Responsibility</p>
            </div>
          </div>
          <div>
            <button className="`px-4 py-2 capitalize text-gray-600 flex items-center cursor-pointer gap-2">
              Learn More
              <FaArrowTrendUp />
            </button>
          </div>
        </div>
        <div className="h-[55dvh] md:h-[450px] rounded-md overflow-hidden">
          <img
            src={gridImg1}
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* second grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 justify-center mt-12 md:mt-24">
        <div className="h-[55dvh] md:h-[450px] rounded-md overflow-hidden">
          <img
            src={gridImg2}
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center md:items-start md:ml-12 gap-4">
          <FeatureBtn label={"feature"} />

          <h2 className="">No preset spending Limit</h2>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaCheck className="w-5 h-5 p-1 rounded-full bg-blue-300 text-gray-600" />
              <p className="text-gray-600 text-sm">Dynamic Spending Capicity</p>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <FaCheck className="w-5 h-5 p-1 rounded-full bg-blue-300 text-gray-600" />
              <p className="text-gray-600 text-sm">Financial Freedom</p>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <FaCheck className="w-5 h-5 p-1 rounded-full bg-blue-300 text-gray-600" />
              <p className="text-gray-600 text-sm">Credit Responsibility</p>
            </div>
          </div>
          <div>
            <button className="`px-4 py-2 capitalize text-gray-600 flex items-center cursor-pointer gap-2">
              Learn More
              <FaArrowTrendUp />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
