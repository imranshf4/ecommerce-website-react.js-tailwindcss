import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-secondary-bg text-black dark:text-white">
      <div className="max-w-screen-2xl container py-12 px-8 md:px-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between gap-8">
        <div className="">
          <Link to={'/'}><h1 className="text-xl font-semibold mb-4">Furniro.</h1></Link>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            omnis!
          </p>
        </div>

        <div className="md:pl-35">
          <h2 className="text-xl font-semibold mb-4">Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="md:pl-10">
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">NewsLetter</h2>
          <div className="flex flex-col">
            <input
              type="text"
              className="focus:outline-none border-b-1 mb-2"
              placeholder="Enter your email"
            />
            <button className="bg-primary hover:bg-primary/90 cursor-pointer transition-colors duration-300 text-white rounded px-4 py-2 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>

       {/* Bottom Footer */}
       <div className="max-w-screen-2xl container py-4 px-8 md:px-15 flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black  border-t border-gray-300">
               <p> &copy; {new Date().getFullYear()} furniro. All rights reserved.</p>
               <p className='flex gap-4'>
                
                <Link  to="/">Terms & Conditions</Link>
                <Link to="/">Privacy Policy</Link>
               </p>
            </div>
    </footer>
  );
};

export default Footer;
