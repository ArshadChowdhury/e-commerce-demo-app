import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="container h-10 mx-auto p-5">
        <div className="flex justify-between">
          <div className="flex cursor-pointer">
            <div className="bg-gradient-to-r from-purple-400 to-red-600 w-10 h-10 rounded-lg"></div>
            <h1 className="text-3xl text-gray-600 ml-2">Logo</h1>
          </div>
          <div>
            <Link href="/" className="text-gray-600 hover:text-purple-600 p-4">
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-600 hover:text-purple-600 p-4"
            >
              Shop
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-purple-600 p-4"
            >
              Blog
            </Link>
            <Link
              href="/products"
              className="text-gray-600 hover:text-purple-600 p-4"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-purple-600 p-4"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-purple-600 text-gray-50 rounded-lg hover:bg-purple-900 p-3 px-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              Cart (0)
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
