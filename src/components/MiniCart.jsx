import { useEffect, useState } from "react";
import productImage from "../assets/products/product1.png";
import { RiDeleteBinLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";
import { useAddToCartContext } from "../context/AddToCartContext";
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart } from "../utils/databaseManager";
import { products } from "../utils/product";

export const MiniCart = () => {
  const { cartToggle, handleCartToggle } = useCart();

  //Add product to cart context
  const { cart, setCart } = useAddToCartContext();

  const totalPrice = cart.reduce((total, prd) => total + prd.price*prd.quantity, 0);

  const increment = (index,id) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    const sameProduct = cart.find((pd) => pd.id === id);
    setCart(updatedCart);
    addToDatabaseCart(sameProduct.id, updatedCart[index].quantity);
  };

  const decrement = (index,id) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 0) {
      updatedCart[index].quantity -= 1;
    }
    const sameProduct = cart.find((pd) => pd.id === id);
    setCart(updatedCart);
    addToDatabaseCart(sameProduct.id, updatedCart[index].quantity);
  };

  const handleRemoveProduct = (productID) => {
    console.log("remove " + productID);

    const newCart = cart.filter((pd) => pd.id !== productID);
    setCart(newCart);
    removeFromDatabaseCart(productID);
  };

  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);
    const cartProducts = productKeys.map((id) => {
      const productId = Number(id);
      const product = products.find((pd) => pd.id === productId);
      product.quantity = saveCart[id];
      // console.log(product);
      return product;
    });

    setCart(cartProducts);
  }, []);

  return (
    <div
      className={`fixed top-0 w-90 bg-white shadow-lg p-8 z-50 overflow-auto transition-transform duration-500 ease-in-out transform cart active:translate-x-0 ${
        cartToggle ? "right-[0%]" : "right-[-100%]"
      }`}
    >
      <h2 className="text-center text-lg font-semibold">Your Cart</h2>
      <div className="mt-5 max-h-[70vh] overflow-y-auto">
        {/* cart product start */}
        {cart.map((item, index) => (
          <div className="flex items-center mb-5" key={index}>
            <img
              src={productImage}
              alt=""
              className="w-24 h-24 rounded-lg object-cover mr-5"
            />
            <div className="flex flex-col justify-between flex-grow">
              <h2 className="text-base">{item.name}</h2>
              <div className="flex flex-row gap-2 items-center">
                <p className="font-medium text-sm">{item.quantity}</p>
                <span className="text-sm">x</span>
                <span className="font-medium text-sm">
                  Rs. {item.price * item.quantity}{" "}
                </span>
              </div>
              <div className="flex border border-gray-400 rounded-md w-28">
                <button
                  onClick={() => decrement(index,item.id)}
                  className="bg-transparent w-10 h-6 border-none text-2xl cursor-pointer flex items-center justify-center"
                >
                  -
                </button>
                <span className="flex justify-center items-center w-12  border-x border-gray-400">
                  {item.quantity}
                </span>
                <button
                  onClick={() => increment(index,item.id)}
                  className="bg-transparent w-10 border-none text-2xl cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
            <RiDeleteBinLine
              className="h-5 w-5 cursor-pointer"
              onClick={() => handleRemoveProduct(item.id)}
            />
          </div>
        ))}
      </div>

      {/* //total */}
      <div>
        <div className="flex gap-4 pt-2">
          <div>Subtotal:</div>
          <div>Rs. {totalPrice}</div>
        </div>
      </div>
      <RxCross2
        onClick={handleCartToggle}
        className="absolute top-9 right-13 cursor-pointer font-bold h-5 w-5"
      />

      {/* // cart,checkout,comparison */}
      <div className="flex gap-4 items-center justify-center py-2">
        <p className="text-sm font-base border border-primary mb-2 px-4 rounded-full capitalize">
          <Link to={"/cart"}>cart</Link>
        </p>
        <p className="text-sm font-base border border-primary mb-2 px-4 rounded-full capitalize">
          <Link to={"/checkout"}>checkout</Link>
        </p>
        <p className="text-sm font-base border border-primary mb-2 px-4 rounded-full capitalize">
          comparison
        </p>
      </div>
      <hr className="py-4" />
    </div>
  );
};
