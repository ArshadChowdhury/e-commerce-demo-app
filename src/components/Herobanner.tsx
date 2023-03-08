import React from "react";
import Image from "next/image";
import Link from "next/link";

const Herobanner = () => {
  return (
    <>
        <div className="md:flex md:flex-row sm:mt-20 my-10">
          <div className="flex flex-col justify-start md:w-2/5 mt-16 text-center md:text-left">
            <h2 className="font-serif text-5xl text-gray-600 mb-4 md:self-start md:text-left">Some Catchy Title Here</h2>
            <p className="text-gray-600 uppercase tracking-widest mb-1 md:self-start md:text-left">Our Brand Tagline Goes Here</p>
            <p className="text-gray-600 uppercase tracking-widest md:self-start md:text-left">Our Brand Motto Goes Here</p>
            <Link href="/shop" className="bg-gradient-to-r from-red-600 to-pink-600 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-4">Shop Now</Link>
          </div>
          <div className="md:w-3/5 md:m-0 mt-5">
            <Image
              src="/hero-img.svg"
              height="300"
              width="300"
              alt="hero-image"
              className="w-full"
              />
          </div>
        </div>
    </>
  );
};

export default Herobanner;
