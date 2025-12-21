import React from "react";
import { appStore, heroImg, trustLogos } from "../components/details";

const Hero = () => {
  return (
    <section className="container">
      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="">
          Charge card made to keep <br className="hidden lg:block" />
          up with you.
        </h1>
        <p className="text-lg">
          Enjoy an exclusive range of benefits and privileges designed{" "}
          <br className="hidden lg:block" /> to let you get the most out of life
        </p>

        <img src={appStore} alt="downlod from playstore" />
      </div>
      <div
        className="h-[55dvh] md:h-[675px] w-full bg-cover bg-no-repeat bg-center rounded-2xl mt-10"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}></div>

      {/* brand trust part */}

      <div className="mt-16">
        <p className="text-sm text-center text-gray-700 mb-12">
          used by the word's most innovative companies
        </p>

        <div className="flex items-center justify-center gap-4 lg:justify-between flex-wrap ">
          {trustLogos.map((logos, index) => (
            <img
              src={logos}
              alt={"companies we've worked with" + index + 1}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
