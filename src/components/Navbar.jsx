import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import { FaBars, FaShoppingBag, FaTimes } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import compare from "../assets/home/vector.png";
//index.css
import "../index.css";
import { useCart } from "../context/CartContext";
import { useAddToCartContext } from "../context/AddToCartContext";

// Define an array of nav items
const navItems = [
  { path: "/", label: "Home" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

// Iterate over the navItems array and create a link for each item
const NavLinks = ({toggleMenu }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center justify-center gap-8">
      {navItems.map((item, index) => (
        <li key={index} onClick={toggleMenu }>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "font-bold text-primary" : "hover:text-primary"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const CartIcon = ({handleCartToggle,cart}) => {
  return (
    <>
      <FiUser className="w-5 h-5" />
      <IoSearch className="w-5 h-5" />
      <img src={compare} alt="compare" className="w-5 h-5" />
      <div onClick={handleCartToggle}>
        <FaShoppingBag className="text-xl" />
        <sup className="absolute top-0 -right-3 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cart.length}
        </sup>
      </div>
    </>
  );
};



const Navbar = () => {
  const { cartToggle, handleCartToggle } = useCart();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  //add to cart useContext
  const { cart } = useAddToCartContext();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Correctly toggle menu state
  };

  return (
    <>
    <header
      className={`sticky top-0 z-50 bg-white w-full transition duration-300 ease-in-out px-8 md:px-15`}
    >
      <nav className="max-w-screen-2xl font-medium container mx-auto py-4 flex justify-between items-center">
        <NavLink to="/" className="font-bold flex gap-2">
          <img src={logo} alt="navbar" className="w-9 h-6 md:w-12 md:h-8" />
          <h1 className="text-xl md:text-2xl">Furniro</h1>
        </NavLink>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden text-xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? null : <FaBars />}
        </div>

        {/* desktop menu */}
        <div className="hidden md:flex">
          <NavLinks />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center text-white transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div
            className="absolute top-6 right-6 text-xl cursor-pointer"
            onClick={toggleMenu}
          >
            <FaTimes />
          </div>
          <NavLinks toggleMenu={toggleMenu} />
        </div>

        {/* Cart Icon */}
        <div className="hidden  md:flex gap-8 font-medium relative cursor-pointer">
          <CartIcon handleCartToggle={handleCartToggle} cart={cart}/>
        </div>
     
      </nav>
    </header>

    
    </>


  );
};

export default Navbar;
