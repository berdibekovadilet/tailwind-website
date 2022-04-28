import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className=" uppercase font-bold p-2 text-[#00df9a]">
          Growing with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold py-6">
          Grow with data
        </h1>
        <div className="flex justify-center">
          <p className="md:text-3xl font-bold text-xl">
            Fast, flexible, financing for
          </p>

          <Typed
            className="md:text-3xl font-bold text-xl pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-xl font-bold text-gray-500 py-4">
          Monitor your data analytics to increase revenue for BTB, BTC and SASS
          platforms
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
