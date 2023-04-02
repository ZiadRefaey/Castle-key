import { useState } from "react";
// import { BsChevronDown } from "react-icons/bs";
function Hero() {
  return (
    <div>
      <div className="z-10 index-hero bg-cover bg-no-repeat bg-center h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-6xl text-white font-bold max-w-[600px] text-center mb-5">
          Castle Key Real Estate Listings
        </h1>
        <h4 className="text-l text-white">
          Your Key to Finding the Perfect Property
        </h4>
        <div className="grid lg:grid-cols-4 grid-cols-1 p-5 bg-white lg:rounded-full mt-5 rounded">
          <div className="flex flex-row lg:border-r border-gray-900 min-w-[200px] justify-around ">
            <p className="py-2">Type</p>
            {/* <BsChevronDown className="my-auto" /> */}
          </div>
          <div className="flex flex-row lg:border-r border-gray-900 justify-around  ">
            <p className="py-2">Type</p>
            {/* <BsChevronDown className="my-auto" /> */}
          </div>
          <div className="flex flex-row  justify-around ">
            <p className="py-2">Type</p>
            {/* <BsChevronDown className="my-auto" /> */}
          </div>
          <button className="btn-primary cursor-pointer text-black">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
