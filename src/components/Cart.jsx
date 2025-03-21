import React from "react";
import BannerSection from "./BannerSection";
import ProductImage from "../assets/products/single product/Asgaard sofa 3.png";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  return (
    <>
      <BannerSection name="cart" />

      <div className="section-container flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full md:w-3/4">
          {/* Cart Items */}
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-singleP">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium ">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium ">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium ">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium ">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium ">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="border-b-1">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={ProductImage}
                    alt="Product"
                    className="w-12 h-12 object-cover rounded-md"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Asgard Sofa</td>
                <td className="px-6 py-4 whitespace-nowrap">Rs. 250,000.00</td>
                <td className="px-6 py-4 whitespace-nowrap">1</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-black/50">
                    <MdDelete className="h-5 w-5" />
                  </button>
                </td>
              </tr>
              {/* Additional rows can be added here */}
            </tbody>
          </table>
        </div>

        {/* Cart details */}
        <div className="w-full md:w-1/4 bg-singleP flex flex-col items-center py-4  gap-3">
          <h1 className="font-bold text-center">Cart Details</h1>
          <div className="flex gap-4 text-sm">
            <p>Total</p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className="pb-4">
            <button className="capitalize border cursor-pointer transition-colors font-base text-sm px-6 py-2 rounded-sm">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
