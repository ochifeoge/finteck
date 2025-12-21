import React from "react";
import { about } from "../components/details";
import FeatureBtn from "../components/FeatureBtn";

const About = () => {
  return (
    <section className="container">
      <div className="text-center mb-20">
        <h2>Cutting Edge Technology</h2>
        <p>
          Discover convenience and rewards in the digital era with adaptive
          spending limits and dynamic rewards.
        </p>
      </div>

      <div className=" flex flex-wrap items-center">
        {about.map(({ label, heading, text }, index) => (
          <div
            className="border-[0.1px] border-gray-200 p-4 basis-full sm:basis-[48%] md:basis-[32%] min-h-46 flex flex-col gap-4 items-start"
            key={index}>
            <FeatureBtn label={label} />
            <h4>{heading}</h4>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
