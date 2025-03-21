import React from "react";
import { FiChevronRight } from "react-icons/fi";
import bannerImg from "../assets/shop/bannerImg.png";
import icon from "../assets/logo.png";
const BannerSection = ({name}) => {
  return (
    <div>
      <section
        className={`max-w-screen-2xl container mx-auto px-8 md:px-15 relative h-60 bg-cover bg-center flex items-center justify-center bg-secondary`}
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={icon} alt="icon" className="w-8 h-5 text-center" />
          <h1 className="capitalize text-3xl font-bold">{name}</h1>
          <div className="flex flex-row gap-2 items-center justify-center">
            <h3>Home</h3>
            <FiChevronRight />
            <p>{name}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerSection;
