import React from "react";
import Image from "next/image"
import { productsData } from "@/components/productsData";

const CartItems = () => {
  return (
    <>
      <div className="container mx-auto p-5 h-screen">
        {productsData.map((product: any, key: number) => {
            return (
              <React.Fragment key={key}>
                <div className="bg-gray-400 w-4/5 lg:h-2/5 grid grid-cols-1 md:grid-cols-2 md:gap-2 gap-10 rounded-lg my-5">
                  <div className="md:ml-32 md:mt-20 m-0">
                    <Image
                      src={product.source}
                      className="rounded-lg md:w-40 md:h-52 w-80"
                      height="500"
                      width="500"
                      alt="product-image"
                    />
                  </div>
                  <div className="font-bold text-3xl lg:mt-36 px-4">
                    {product.name} - {product.price}$
                    <div className="text-2xl">Quantity : </div>
                    <div>
                      <div className="my-10">
                        <button className="bg-gradient-to-r from-red-600 to-pink-600 justify-center items-center p-2 rounded-md hover:from-pink-700 hover:to-pink-700">
                         +
                        </button>
                        <button className="bg-gradient-to-r from-red-600 to-pink-600 justify-center items-center p-2 px-3 rounded-md hover:from-pink-700 hover:to-pink-700 mx-10">
                         -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
        })}
        </div>
    </>
  );
};

export default CartItems;
