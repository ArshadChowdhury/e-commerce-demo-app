import React from "react";
import Image from "next/image";
import { addToCart } from ".";

const CartItems = () => {
  return (
    <>
      <div className="container mx-auto p-5 h-screen bg-red-500">
        <div className="flex justify-start h-auto w-auto bg-gray-200 rounded-lg relative">
          <div>
            <Image
              src="/product1.jpg"
              height="200"
              width="200"
              alt="product-image"
              className="h-32 w-32 mx-40 my-10 rounded-lg"
            />
          </div>
          <div className="my-10">
            <p className="text-2xl">Mens Pant</p>
            <p className="my-2">Price : </p>
            <p>Quantity : </p>
          </div>
          <div className="absolute right-40 top-5 ">
          <button className="text-3xl mx-4" onClick={addToCart}>+</button>
            <button className="text-2xl">X</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
