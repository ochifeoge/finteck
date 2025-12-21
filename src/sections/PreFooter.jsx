import React from "react";
import { appStore, prefooterImg } from "../components/details";
import FeatureBtn from "../components/FeatureBtn";

const PreFooter = () => {
  return (
    <section className="container  border-b-[0.3px] border-gray-300 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4  justify-center">
        <div className="flex flex-col items-center md:items-start gap-6 ">
          <FeatureBtn label={"get card"} />

          <h2 className="">
            Get your charge card <br className="hidden md:block" /> now for free
          </h2>

          <p>
            Seize financial freedom effortlessly. Secure your charge card{" "}
            <br className="hidden md:block" /> now – it's free, it's fast, and
            it's the key to unlocking a smarter{" "}
            <br className="hidden md:block" /> way to manage your money.
          </p>

          <img src={appStore} alt="download from app and playstore" />
        </div>
        <div className="h-[55dvh] md:h-[550px] rounded-md overflow-hidden">
          <img
            src={prefooterImg}
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
