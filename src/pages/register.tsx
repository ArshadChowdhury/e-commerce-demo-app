import React from "react";
import { Navbar, Footer } from "@/components";
import Link from "next/link";

const register = () => {
  return (
    <>
      <div className="container mx-auto p-5 h-screen">
        <Navbar />
        <div className="mt-10 lg:m-0 flex justify-center items-center h-3/4 rounded-xl sm:bg-slate-200">
          <div className="lg:inline-block bg-slate-50 p-10 rounded-xl shadow-md shadow-slate-300 flex items-center justify-center">
            <form action="">
              <h2 className="text-blue-700 text-3xl font-semibold my-4">
                Sign Up
              </h2>
              <div className="flex flex-col">
                <div className="w-1/2 flex flex-col">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="border-2 border-gray-200 my-2 px-2 py-1 rounded-lg focus:outline-none w-80"
                  />
                </div>
                <div className="w-1/2 flex flex-col">
                  <label>Password</label>
                  <input
                    type="text"
                    className="border-2 border-gray-200 my-2 px-2 py-1 rounded-lg focus:outline-none w-80"
                  />
                </div>
                <div className="w-1/2 flex flex-col">
                  <label>Confirm Password</label>
                  <input
                    type="text"
                    className="border-2 border-gray-200 my-2 px-2 py-1 rounded-lg focus:outline-none w-80"
                  />
                </div>
                <p className="text-sm">By registering you agree to our terms and services</p>
                <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:text-gray-900 rounded-lg py-2 px-7 text-gray-50 uppercase text-xl md:self-start my-4">Register</button>
                <p>Already a registered member? <Link href="/login" className="text-blue-700">Login Here</Link> </p>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default register;
