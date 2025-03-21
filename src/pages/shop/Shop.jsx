import React from "react";
import Products from "../home/Products";

import filterIcon from "../../assets/shop/icon/filter.png";
import filterIcon2 from "../../assets/shop/icon/filter2.png";
import filterIcon3 from "../../assets/shop/icon/filter3.png";
import BannerSection from "../../components/BannerSection";
const Shop = () => {
  return (
    <>
      {/* banner section */}
      <BannerSection name="shop" />

      {/* filter and sort section */}
      <div className="max-w-screen-2xl container mx-auto py-6 px-8 md:px-15 bg-secondary flex flex-col md:flex-row justify-between">
        <div className="flex flex-row gap-4 items-center justify-center">
          <img src={filterIcon} alt="filterIcon" />
          <img src={filterIcon2} alt="filterIcon2" />
          <h4>filter</h4>
          <img src={filterIcon3} alt="filterIcon3" />
          <span className="border-l-2 border-gray-800 h-7"></span>
          <p>Showing 1-16 of 32 results</p>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center">
          <h4>Show</h4>
          <p className="bg-white px-2 py-1 ">16</p>
          <p>Sort by</p>
          <select
            name=""
            id=""
            className="bg-white px-2 py-1 focus:outline-none"
          >
            <option>Default</option>
            <option value="" data-value="12">
              12
            </option>
            <option value="" data-value="16">
              16
            </option>
            <option value="" data-value="20">
              20
            </option>
          </select>
        </div>
      </div>
      <Products />
    </>
  );
};

export default Shop;
