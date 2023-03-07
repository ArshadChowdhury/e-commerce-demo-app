import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

const Herobanner = () => {
  return (
    <>
      <Navbar />
      <div className="container h-10 mx-auto p-5">
        <div className="flex mt-32">
          <div className="flex flex-col justify-start w-2/5 mt-24">
            <h2 className="font-serif text-5xl text-gray-600 mb-4">Some Catchy Title Here</h2>
            <p className="text-gray-600 uppercase tracking-widest mb-1">Our Brand Tagline Goes Here</p>
            <p className="text-gray-600 uppercase tracking-widest">Our Brand Motto Goes Here</p>
            <button className="bg-gradient-to-r from-red-600 to-pink-600 rounded-full py-4 px-8 text-gray-50 uppercase text-xl self-start my-4">Shop Now</button>
          </div>
          <div className="w-3/5">
            <Image
              src="/hero-img.svg"
              height="300"
              width="300"
              alt="Arshad"
              className="w-full"
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default Herobanner;
