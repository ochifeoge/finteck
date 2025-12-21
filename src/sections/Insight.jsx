import React from "react";
import FeatureBtn from "../components/FeatureBtn";
import { heroImg2, others } from "../components/details";

const Insight = () => {
  return (
    <section className="mx-auto w-full px-8 max-w-[950px]">
      <div className="flex flex-col items-center text-center gap-4">
        <FeatureBtn label={"Insights"} />
        <h2>You are in control</h2>
        <p className="text-lg">
          With a charge card, you're in control. Set limits, get real-time
          insights, and enjoy a personalized financial experience.
        </p>
      </div>
      <div
        className="h-[55dvh] md:h-[475px] w-full bg-cover bg-no-repeat bg-center rounded-2xl mt-10"
        style={{
          backgroundImage: `url(${heroImg2})`,
        }}></div>

      <div className="mt-20 flex item-center justify-center gap-4 lg:justify-between flex-wrap">
        {others.map(({ heading, text }, index) => (
          <div
            key={index}
            className="text-center basis-full flex flex-col gap-2 sm:basis-1/3 lg:basis-1/4 ">
            <h4>{heading}</h4>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insight;
