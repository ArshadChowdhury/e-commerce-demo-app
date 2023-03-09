import React from "react";
import { Navbar, Footer, CartItems } from "@/components";

const Cart = () => {

  // const [cartItems, setCartItems] = useState([]);
  // const totalPrice = cartItems.reduce(
  //   (price, item) => price + item.qty * item.price,
  //   0
  // );

//   const addToCart = (product: any) => {
//     const productExists = cartItems.find((item:any) => item.id === product.id);
//     if (productExists) {
//       setCartItems(
//         cartItems.map((item:any) =>
//           item.id === product.id
//             ? { ...productExists, qty: productExists.qty + 1 }
//             : item
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...product, qty: 1 }]);
//     }
//   };

// const removeFromCart = (product: any) => {
//     setCartItems(cartItems.filter((item) => item.id !== product.id));
//   };

// const deleteFromCart = (product: any) => {
//     const productExists = cartItems.find((item) => item.id === product.id);
//     if (productExists.qty === 1) {
//       setCartItems(cartItems.filter((item) => item.id !== product.id));
//     } else {
//       setCartItems(
//         cartItems.map((item) =>
//           item.id === product.id
//             ? { ...productExists, qty: productExists.qty - 1 }
//             : item
//         )
//       );
//     }
//   };

// const checkOut = (cartItems: any) => {
//     if (cartItems.length <= 0) {
//       alert("Add something to the cart first to checkout");
//     } else {
//       // but if it has items in it thn it alerts saying thanks for shopping with us
//       for (let i = 0; i < cartItems.length; i++) {
//         cartItems.splice(0, cartItems.length);
//       }
//       setCartItems(cartItems.map((item:any) => item));
//       alert("Thanks for shopping with us, come back soon again");
//     }
//   };


  return (
    <>
      <div className="container mx-auto p-5 h-screen">
        <Navbar />
        <CartItems />
      </div>
    </>
  );
};

export default Cart;
