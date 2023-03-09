import React, {useState} from "react";
import { Navbar, Footer, CartItems, addToCart } from "@/components";

const Cart = () => {

  const [cartItems, setCartItems] = useState([]);
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  const { allProductsData } = productsData;

  return (
    <>
      <div className="container mx-auto p-5 h-screen">
        <Navbar />
        <CartItems />
        <Footer />
      </div>
    </>
  );
};

export default Cart;
