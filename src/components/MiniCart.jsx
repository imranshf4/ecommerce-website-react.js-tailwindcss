import { useState } from "react";
import productImage from "../assets/products/product1.png";
import { RiDeleteBinLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";

export const MiniCart = () => {
  const [quantity, setQuantity] = useState(0);
  const { cartToggle, handleCartToggle } = useCart();

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <div
      className={`fixed top-0 w-90 bg-white shadow-lg p-8 z-50 overflow-auto transition-transform duration-500 ease-in-out transform cart active:translate-x-0 ${
        cartToggle ? "right-[0%]" : "right-[-100%]"
      }`}
    >
      <h2 className="text-center text-lg font-semibold">Your Cart</h2>
      <div className="mt-5 max-h-[70vh] overflow-y-auto">
        <div className="flex items-center mb-5">
          <img
            src={productImage}
            alt=""
            className="w-24 h-24 rounded-lg object-cover mr-5"
          />
          <div className="flex flex-col justify-between flex-grow">
            <h2 className="text-base">
              {/* Your product title */}Casual Black Polo
            </h2>
            <span className="font-medium text-lg">$100</span>
            <div className="flex border border-gray-400 rounded-md w-28">
              <button
                onClick={decrement}
                className="bg-transparent w-10 h-6 border-none text-2xl cursor-pointer flex items-center justify-center"
              >-
              </button>
              <span className="flex justify-center items-center w-12  border-x border-gray-400">
                {quantity}
              </span>
              <button
                onClick={increment}
                className="bg-transparent w-10 border-none text-2xl cursor-pointer"
              >+
              </button>
            </div>
          </div>
          <RiDeleteBinLine className="h-5 w-5" />
        </div>
        <div className="flex items-center mb-5">
          <img
            src={productImage}
            alt=""
            className="w-24 h-24 rounded-lg object-cover mr-5"
          />
          <div className="flex flex-col justify-between flex-grow">
            <h2 className="text-base">
              {/* Your product title */}Casual Black Polo
            </h2>
            <span className="font-medium text-lg">$100</span>
            <div className="flex border border-gray-400 rounded-md w-28">
              <button
                onClick={decrement}
                className="bg-transparent w-10 border-none text-2xl cursor-pointer"
              >
                -
              </button>
              <span className="flex justify-center items-center w-12 border-x border-gray-400">
                {quantity}
              </span>
              <button
                onClick={increment}
                className="bg-transparent w-10 border-none text-2xl cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
          <RiDeleteBinLine className="h-5 w-5" />
        </div>
        <div className="flex items-center mb-5">
          <img
            src={productImage}
            alt=""
            className="w-24 h-24 rounded-lg object-cover mr-5"
          />
          <div className="flex flex-col justify-between flex-grow">
            <h2 className="text-base">
              {/* Your product title */}Casual Black Polo
            </h2>
            <span className="font-medium text-lg">$100</span>
            <div className="flex border border-gray-400 rounded-md w-28">
              <button
                onClick={decrement}
                className="bg-transparent w-10 border-none text-2xl cursor-pointer"
              >
                -
              </button>
              <span className="flex justify-center items-center w-12 border-x border-gray-400">
                {quantity}
              </span>
              <button
                onClick={increment}
                className="bg-transparent w-10 border-none text-2xl cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
          <RiDeleteBinLine className="h-5 w-5" />
        </div>
        <div className="flex items-center mb-5">
          <img
            src={productImage}
            alt=""
            className="w-24 h-24 rounded-lg object-cover mr-5"
          />
          <div className="flex flex-col justify-between flex-grow">
            <h2 className="text-base">
              {/* Your product title */}Casual Black Polo
            </h2>
            <span className="font-medium text-lg">$100</span>
            <div className="flex border border-gray-400 rounded-md w-28">
              <button
                onClick={decrement}
                className="bg-transparent w-10 border-none text-2xl cursor-pointer"
              >
                -
              </button>
              <span className="flex justify-center items-center w-12 border-x border-gray-400">
                {quantity}
              </span>
              <button
                onClick={increment}
                className="bg-transparent w-10 border-none text-2xl cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
          <RiDeleteBinLine className="h-5 w-5" />
        </div>
        <div className="flex items-center mb-5">
          <img
            src={productImage}
            alt=""
            className="w-24 h-24 rounded-lg object-cover mr-5"
          />
          <div className="flex flex-col justify-between flex-grow">
            <h2 className="text-base">
              {/* Your product title */}Casual Black Polo
            </h2>
            <span className="font-medium text-lg">$100</span>
            <div className="flex border border-gray-400 rounded-md w-28">
              <button
                onClick={decrement}
                className="bg-transparent w-10 border-none text-2xl cursor-pointer"
              >
                -
              </button>
              <span className="flex justify-center items-center w-12 border-x border-gray-400">
                {quantity}
              </span>
              <button
                onClick={increment}
                className="bg-transparent w-10 border-none text-2xl cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
          <RiDeleteBinLine className="h-5 w-5" />
        </div>
        <div className="flex items-center mb-5">
          <img
            src={productImage}
            alt=""
            className="w-24 h-24 rounded-lg object-cover mr-5"
          />
          <div className="flex flex-col justify-between flex-grow">
            <h2 className="text-base">
              {/* Your product title */}Casual Black Polo
            </h2>
            <span className="font-medium text-lg">$100</span>
            <div className="flex border border-gray-400 rounded-md w-28">
              <button
                onClick={decrement}
                className="bg-transparent w-10 border-none text-2xl cursor-pointer"
              >
                -
              </button>
              <span className="flex justify-center items-center w-12 border-x border-gray-400">
                {quantity}
              </span>
              <button
                onClick={increment}
                className="bg-transparent w-10 border-none text-2xl cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
          <RiDeleteBinLine className="h-5 w-5" />
        </div>
        <div className="flex items-center mb-5">
          <img
            src={productImage}
            alt=""
            className="w-24 h-24 rounded-lg object-cover mr-5"
          />
          <div className="flex flex-col justify-between flex-grow">
            <h2 className="text-base">
              {/* Your product title */}Casual Black Polo
            </h2>
            <span className="font-medium text-lg">$100</span>
            <div className="flex border border-gray-400 rounded-md w-28">
              <button
                onClick={decrement}
                className="bg-transparent w-10 border-none text-2xl cursor-pointer"
              >
                -
              </button>
              <span className="flex justify-center items-center w-12 border-x border-gray-400">
                {quantity}
              </span>
              <button
                onClick={increment}
                className="bg-transparent w-10 border-none text-2xl cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
          <RiDeleteBinLine className="h-5 w-5" />
        </div>
        <div className="flex items-center mb-5">
          <img
            src={productImage}
            alt=""
            className="w-24 h-24 rounded-lg object-cover mr-5"
          />
          <div className="flex flex-col justify-between flex-grow">
            <h2 className="text-base">
              {/* Your product title */}Casual Black Polo
            </h2>
            <span className="font-medium text-lg">$100</span>
            <div className="flex border border-gray-400 rounded-md w-28">
              <button
                onClick={decrement}
                className="bg-transparent w-10 border-none text-2xl cursor-pointer"
              >
                -
              </button>
              <span className="flex justify-center items-center w-12 border-x border-gray-400">
                {quantity}
              </span>
              <button
                onClick={increment}
                className="bg-transparent w-10 border-none text-2xl cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
          <RiDeleteBinLine className="h-5 w-5" />
        </div>
      </div>

      {/* //total */}
      <div>
        
        <div className="flex gap-4 pt-2">
          <div>Subtotal:</div>
          <div>$0</div>
        </div>
      </div>
      <RxCross2
        onClick={handleCartToggle}
        className="absolute top-9 right-13 cursor-pointer font-bold h-5 w-5"
      />


      {/* // cart,checkout,comparison */}
      <div className="flex gap-4 items-center justify-center py-2">
        <p className="text-sm font-base border border-primary mb-2 px-4 rounded-full capitalize">
          <Link to={'/cart'}>cart</Link>
        </p>
        <p className="text-sm font-base border border-primary mb-2 px-4 rounded-full capitalize">
           <Link to={'/checkout'}>checkout</Link>
        </p>
        <p className="text-sm font-base border border-primary mb-2 px-4 rounded-full capitalize">comparison</p>
      </div>
      <hr className="py-4" />
    </div>


  
    

  );
};
