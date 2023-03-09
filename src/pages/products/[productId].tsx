import React from "react";
import { useRouter } from "next/router";
import { productsData, womenProductsData } from "@/components/productsData";
import { Navbar, Footer } from "@/components";
import Image from "next/image";
import Link from "next/link";

const Product_details = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <>
      <div className="container mx-auto p-5">
        <Navbar />
        {productsData.map((product: any, key: number) => {
          if (productId === product.id) {
            return (
              <React.Fragment key={key}>
                <div className="bg-gray-200 w-full lg:h-screen grid grid-cols-1 md:grid-cols-2 md:gap-2 gap-10 rounded-lg lg:mt-4 m-0">
                  <div className="md:ml-32 md:mt-32 m-0">
                    <Image
                      src={product.source}
                      className="rounded-lg md:h-auto md:w-96 h-80 w-80 mx-auto mt-4"
                      height="500"
                      width="500"
                      alt="product-image"
                    />
                  </div>
                  <div className="font-bold text-3xl lg:mt-36 px-4">
                    {product.name} - {product.price}$
                    <div>
                      <div className="flex my-5">
                        <div className="bg-black h-5 w-5 rounded-full shadow-md mr-3 cursor-pointer"></div>
                        <div className="bg-blue-800 h-5 w-5 rounded-full shadow-md mr-3 cursor-pointer"></div>
                        <div className="bg-white h-5 w-5 rounded-full shadow-md mr-3 cursor-pointer"></div>
                        <div className="bg-red-800 h-5 w-5 rounded-full shadow-md mr-3 cursor-pointer"></div>
                        <div className="bg-green-700 h-5 w-5 rounded-full shadow-md mr-3 cursor-pointer"></div>
                      </div>
                      <div className="flex my-5">
                        <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 cursor-pointer hover:bg-black">
                          S
                        </div>
                        <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 cursor-pointer hover:bg-black">
                          M
                        </div>
                        <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 cursor-pointer hover:bg-black">
                          L
                        </div>
                        <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 cursor-pointer hover:bg-black">
                          XL
                        </div>
                        <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 cursor-pointer hover:bg-black">
                          XXL
                        </div>
                      </div>
                      <div className="text-lg font-normal pr-10">
                        <h3 className="font-semibold">Description</h3>
                        {product.desc}
                      </div>
                      <div className="my-10">
                        <Link
                          href="#"
                          className="bg-gradient-to-r from-red-600 to-pink-600 justify-center my-2 lg:m-0 py-1 px-3 rounded-xl hover:from-pink-700 hover:to-pink-700"
                        >
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8 mr-2 mb-2 inline-block"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                          </svg>
                          Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer />
              </React.Fragment>
            );
          }
        })}
        {womenProductsData.map((product: any, key: number) => {
          if (productId === product.id) {
            return (
              <React.Fragment key={key}>
                <div className="bg-gray-200 w-full lg:h-screen grid grid-cols-1 md:grid-cols-2 md:gap-2 gap-10 rounded-lg lg:mt-4 m-0">
                  <div className="md:ml-32 md:mt-32 m-0">
                    <Image
                      src={product.source}
                      className="rounded-lg md:h-auto md:w-96 h-80 w-80 mx-auto mt-4"
                      height="500"
                      width="500"
                      alt="product-image"
                    />
                  </div>
                  <div className="font-bold text-3xl lg:mt-36 px-4">
                    {product.name} - {product.price}$
                    <div>
                      <div className="flex my-5">
                        <div className="bg-black h-5 w-5 rounded-full shadow-md mr-3 cursor-pointer"></div>
                        <div className="bg-blue-800 h-5 w-5 rounded-full shadow-md mr-3 cursor-pointer"></div>
                        <div className="bg-white h-5 w-5 rounded-full shadow-md mr-3 cursor-pointer"></div>
                        <div className="bg-red-800 h-5 w-5 rounded-full shadow-md mr-3 cursor-pointer"></div>
                        <div className="bg-green-700 h-5 w-5 rounded-full shadow-md mr-3 cursor-pointer"></div>
                      </div>
                      <div className="flex my-5">
                        <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 cursor-pointer hover:bg-black">
                          S
                        </div>
                        <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 cursor-pointer hover:bg-black">
                          M
                        </div>
                        <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 cursor-pointer hover:bg-black">
                          L
                        </div>
                        <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 cursor-pointer hover:bg-black">
                          XL
                        </div>
                        <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2 cursor-pointer hover:bg-black">
                          XXL
                        </div>
                      </div>
                      <div className="text-lg font-normal pr-10">
                        <h3 className="font-semibold">Description</h3>
                        {product.desc}
                      </div>
                      <div className="my-10">
                        <Link
                          href="#"
                          className="bg-gradient-to-r from-red-600 to-pink-600 justify-center my-2 lg:m-0 py-1 px-3 rounded-xl hover:from-pink-700 hover:to-pink-700"
                        >
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8 mr-2 mb-2 inline-block"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                          </svg>
                          Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer />
              </React.Fragment>
            );
          }
        })}
      </div>
    </>
  );
};

export default Product_details;
