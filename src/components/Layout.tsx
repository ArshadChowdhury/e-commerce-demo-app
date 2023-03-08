import React from "react";
import Link from "next/link";
import Image from "next/image";



const Layout = () => {

  const products:any = [
    { source: "/product1.jpg", name: "Men's T-Shirt" },
    { source: "/product2.jpg", name: "Men's Pant" },
    { source: "/product3.jpg", name: "Men's Shoes" },
    { source: "/product4.jpg", name: "Men's Watch" }
  ];



  return (
    <>
      <div>
        <div className="flex flex-row justify-between mt-20 mb-5 items-center">
          <h2 className="text-3xl">Collection for Men</h2>
          <Link href="" className="text-xl flex flex-row items-center">
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-7 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {products.map((product:any,key:number) => {
        return (
          <div key={key}>
        <div className="shadow-lg rounded-lg bg-gray-600">
        <Link href="#">
        <Image src={product.source} height="500" width="500" alt="product-image" className="rounded-tl-lg rounded-tr-lg" />
        </Link>
        <div className="p-5">
          <h3><Link href="#" className="font-semibold text-gray-200">{product.name}</Link></h3>
          <div className="flex my-2">
            <div className="bg-black h-5 w-5 rounded-full shadow-md mr-3 cursor-pointer"></div>
            <div className="bg-blue-800 h-5 w-5 rounded-full shadow-md mr-3 cursor-pointer"></div>
            <div className="bg-white h-5 w-5 rounded-full shadow-md mr-3 cursor-pointer"></div>
            <div className="bg-red-800 h-5 w-5 rounded-full shadow-md mr-3 cursor-pointer"></div>
            <div className="bg-green-700 h-5 w-5 rounded-full shadow-md mr-3 cursor-pointer"></div>
          </div>
          <div className="flex my-2">
            <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 cursor-pointer hover:bg-black">S</div>
            <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 cursor-pointer hover:bg-black">M</div>
            <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 cursor-pointer hover:bg-black">L</div>
            <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 cursor-pointer hover:bg-black">XL</div>
            <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 cursor-pointer hover:bg-black">XXL</div>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
            <Link href="#" className="bg-gradient-to-r from-red-600 to-pink-600 justify-center my-2 lg:m-0 py-1 px-3 rounded-xl hover:from-pink-700 hover:to-pink-700"> <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>Add To Cart</Link>
              <Link href="#" className="bg-purple-600 py-1 px-3 rounded-xl hover:bg-purple-800"> <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-1 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>View Details</Link>
          </div>
        </div>
      </div>
      </div>
        )})} 
      </div>
    </>
  );
};

export default Layout;