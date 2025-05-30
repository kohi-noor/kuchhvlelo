import React, { useEffect } from 'react';
import { useState } from 'react';
import './Navbar.css'; // We'll create this to hold the internal styles
import logo from '.././assets/kuchhvlelo.jpg'; // adjust the path as needed

const Navbar = () => {
  // Enable toggle functionality for the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggler = document.querySelector('.nav-toggler');
    const navMenu = document.getElementById('navigation');

    const toggleNav = () => {
      navMenu.classList.toggle('hidden');
    };

    toggler.addEventListener('click', toggleNav);

    return () => {
      toggler.removeEventListener('click', toggleNav);
    };
  }, []);

  return (
    <>
      {/* Material Icons and Fonts */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css"
        integrity="sha256-x8PYmLKD83R9T/sYmJn1j3is/chhJdySyhet/JuHnfY="
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap"
        rel="stylesheet"
      />

      <nav className="navbar fixed top-0 left-0 z-50 w-full bg-black p-3 flex items-center flex-wrap overflow-x-hidden">
        <a href="#" className="p-2 mr-4 inline-flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-50 mr-2 object-contain" />
        </a>

        <button
          className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
          data-target="#navigation"
        >
          <i className="material-icons">menu</i>
        </button>

        <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <a
              href="#home"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Home</span>
            </a>
            <a
              href="#aboutus"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>About Us</span>
            </a>
            <a
              href="https://www.instagram.com/kuchhvlelo?igsh=MmJha3prY2Qwc28x"
              target="_blank"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Instagram</span>
            </a>
            <a
              href="#contactus"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
