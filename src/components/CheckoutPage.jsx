import React from "react";
import BannerSection from "./BannerSection";

const CheckoutPage = () => {
  return (
    <>
      <BannerSection name="Checkout" />

      <div className="section-container flex flex-col sm:flex-row justify-between  gap-8">
        {/* form sections */}
        <div className="sm:w-2/4 space-y-4">
          <h1 className="font-bold text-2xl text-center">Billing Information</h1>
          <div className="flex flex-row gap-4">
            <div className="w-1/2">
              <h3 className="font-base">First Name</h3>
              <input
                type="text"
                placeholder="Enter First Name"
                className="border px-4 py-3 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-300"
                required
              />
            </div>
            <div className="w-1/2">
              <h3 className="font-base">Last Name</h3>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="border px-4 py-3 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-300"
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-base">Your Email</h3>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border px-4 py-3 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-300"
              required
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-base">Your Phone</h3>
            <input
              type="text"
              placeholder="Enter Your Phone"
              className="border px-4 py-3 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-300"
              required
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-base">Country / Region</h3>
            <input
              type="text"
              placeholder="Enter Your Country / Region"
              className="border px-4 py-3 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-300"
              required
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-base">Address</h3>
            <input
              type="text"
              placeholder="Enter Your Address"
              className="border px-4 py-3 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-300"
              required
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-base">Zip Code</h3>
            <input
              type="text"
              placeholder="Enter Your Zip Code"
              className="border px-4 py-3 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-300"
              required
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-base">Message</h3>
            <textarea
              name=""
              id=""
              placeholder="Additional Information"
              className="border px-4 py-3 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-300"
            ></textarea>
          </div>

          <div className="pt-4">
            <button className="uppercase text-white bg-primary hover:bg-primary/90 cursor-pointer transition-colors  font-medium text-sm px-16 py-3 rounded-sm">
              Submit
            </button>
          </div>
        </div>

        {/* order summary */}
        <div className="w-full sm:w-2/4 space-y-4">
          <div className="space-y-4 flex flex-row justify-between gap-8">
            <div className="space-y-4 flex flex-col">
              <h2 className="font-medium text-2xl">Product</h2>
              <div className="flex flex-row gap-4 text-gray-400">
                <h3>Asgard Sofa</h3>
                <span>x</span>
                <p>1</p>
              </div>
              <h3 className="text-left">Subtotal</h3>
              <h3 className="text-left">Total</h3>
            </div>

            <div className="space-y-4 flex flex-col text-left">
              <h2 className="font-medium text-2xl">Subtotal</h2>
              <h3 className="text-gray-400">Rs. 250,000.00</h3>
              <h3 className="text-gray-400">Rs. 250,000.00</h3>
              <h3 className="text-primary font-bold text-2xl">
                Rs. 250,000.00
              </h3>
            </div>
          </div>

          <hr className="border-t border-gray-300 w-full h-2" />

          <div>
            <div className="flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  id="bank"
                  name="paymentMethod"
                  value="bank"
                  checked
                />
                <label
                  htmlFor="bank"
                  className="flex items-center cursor-pointer text-gray-700 peer-checked:text-black"
                >
                  Direct Bank Transfer
                </label>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  id="cash"
                  name="paymentMethod"
                  value="cash"
                  checked
                />
                <label
                  htmlFor="cash"
                  className="flex items-center cursor-pointer text-gray-700 peer-checked:text-black"
                >
                  Cash On Delivery
                </label>
              </div>
            </div>
          </div>

          <div>
           <button className="uppercase text-white bg-primary hover:bg-primary/90 cursor-pointer transition-colors  font-medium text-sm px-16 py-3 rounded-sm">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
