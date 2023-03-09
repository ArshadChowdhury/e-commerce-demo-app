import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="md:flex md:flex-row md:justify-between items-start text-center ">
          <div>
            <Link href="/" className="flex justify-center mb-10 cursor-pointer">
            <div className="bg-gradient-to-r from-purple-400 to-red-600 w-8 h-8 rounded-lg"></div>
            <h1 className="text-2xl text-gray-600 ml-2">Shop</h1>
            </Link>
          </div>
          <div>
            <Link href="/" className="text-gray-600 hover:text-purple-600 p-4">
              Home
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
              href="/login"
              className="text-gray-600 hover:text-purple-600 p-4"
            >
              Login
            </Link>
            <Link
              href="/cart"
              className="bg-purple-600 text-gray-50 rounded-lg hover:bg-purple-900 p-3 px-5 absolute top-4 right-1 sm:static"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
