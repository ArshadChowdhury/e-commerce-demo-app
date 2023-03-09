export {default as Footer} from "./Footer";
export {default as CartItems} from "./CartItems";
export {default as Newsletter} from "./Newsletter";
export {default as Herobanner} from "./Herobanner";
export {default as Collections} from "./Collections";
export {default as Navbar} from "./Navbar";


export const addToCart = (product: any) => {
    const productExists = cartItems.find((item:any) => item.id === product.id);
    if (productExists) {
      setCartItems(
        cartItems.map((item:any) =>
          item.id === product.id
            ? { ...productExists, qty: productExists.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

 export const removeFromCart = (product: any) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

 export const deleteFromCart = (product: any) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExists, qty: productExists.qty - 1 }
            : item
        )
      );
    }
  };

 export const checkOut = (cartItems: any) => {
    if (cartItems.length <= 0) {
      alert("Add something to the cart first to checkout");
    } else {
      // but if it has items in it thn it alerts saying thanks for shopping with us
      for (let i = 0; i < cartItems.length; i++) {
        cartItems.splice(0, cartItems.length);
      }
      setCartItems(cartItems.map((item:any) => item));
      alert("Thanks for shopping with us, come back soon again");
    }
  };
