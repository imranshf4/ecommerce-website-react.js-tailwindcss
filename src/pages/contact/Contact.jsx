import React from "react";
import BannerSection from "../../components/BannerSection";
import HeadingSection from "../../components/HeadingSection";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <BannerSection name="Contact" />

      <div className="section-container">
        <HeadingSection
          heading="Get in touch with us"
          description="For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!"
        />

        {/* Contact form */}
        <div className="flex flex-col justify-between px-8 sm:flex-row gap-8 sm:px-20 lg:px-48">
          {/* address sections */}
          <div className="space-y-6 sm:w-2/4">
            <div className="flex flex-row gap-4">
            <FaLocationDot />
              <div className="-mt-1 sm:-mt-0 space-y-1">
                <h1 className="font-medium">Address</h1>
                <p className="text-sm md:w-2/4">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <FaPhoneAlt />
              <div className="-mt-1 space-y-1">
                <h1 className="font-medium">Phone</h1>
                <p className="text-sm">Mobile: +(84) 546-6789 </p>
                <p className="text-sm">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <MdAccessTimeFilled />
              <div className="-mt-1 space-y-1">
                <h1 className="font-medium">Working Time</h1>
                <p className="text-sm">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-sm">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* form sections */}
          <div className="sm:w-2/4">
            <form action="">
              <div className="space-y-4">
                <h3 className="font-base">Your Name</h3>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="border px-4 py-3 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-300"
                  required
                />
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
                <h3 className="font-base">Subject</h3>
                <input
                  type="text"
                  placeholder="Enter Your Subject"
                  className="border px-4 py-3 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-300"
                  required
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-base">Message</h3>
                <textarea
                  name=""
                  id=""
                  placeholder="Hi! i'd like to ask about"
                  className="border px-4 py-3 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-300"
                ></textarea>
              </div>

              <div className="pt-4">
                <button className="uppercase text-white bg-primary hover:bg-primary/90 cursor-pointer transition-colors  font-medium text-sm px-16 py-3 rounded-sm">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
