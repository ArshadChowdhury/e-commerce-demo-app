import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="border-t-2 border-gray-300 flex flex-col md:flex-row md:justify-between text-center py-5 text-sm lg:text-lg">
        <div className="my-4">
          <Link href="/" className="mx-2.5">Home</Link>
          <Link href="/blog" className="mx-2.5">Blog</Link>
          <Link href="/products" className="mx-2.5">Products</Link>
          <Link href="/contacts" className="mx-2.5">Contact</Link>
          <Link href="/login" className="mx-2.5">Login</Link>
        </div>
        <p className="my-4">&copy; Copyright reserved by Arshad 2023</p>
      </div>
    </>
  );
};

export default Footer;
