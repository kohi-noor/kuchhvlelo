import React from 'react'

const contact = () => {
  
  return (
    
    <footer className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 px-6 py-12 overflow-hidden">
  {/* Abstract Flower SVG Art as background */}
  <svg
    className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-20"
    viewBox="0 0 800 400"
    preserveAspectRatio="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M150 200 Q100 100, 150 0 Q200 100, 150 200 Z" fill="#000" />
    <path d="M650 200 Q700 100, 650 0 Q600 100, 650 200 Z" fill="#000" />
    <path d="M400 200 Q350 100, 400 0 Q450 100, 400 200 Z" fill="#000" />
    <path d="M200 300 Q150 200, 200 100 Q250 200, 200 300 Z" fill="#000" />
    <path d="M600 300 Q550 200, 600 100 Q650 200, 600 300 Z" fill="#000" />
  </svg>

  <div className="relative max-w-screen-md mx-auto flex flex-col items-center space-y-8">
    <h2 className="text-3xl font-extrabold tracking-wide" id ="contactus" >Contact Us</h2>
    
    {/* Stack links on smaller screens */}
    <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-6 lg:space-y-0">
      <a
        href="https://wa.me/9078269669"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 text-center  bg-transparent hover:bg-green-700 active:bg-green-800 text-white rounded-lg shadow-md transition"
      >
        WhatsApp Us
      </a>
      <a
        href="tel:9078269669"
        className="px-6 py-3 bg-transparent   border-gray-200   hover:bg-green-700 text-center hover:text-white active:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg shadow-md transition"
      >
        Call Us
      </a>
      <a
        href="https://www.instagram.com/kuchhvlelo?igsh=MmJha3prY2Qwc28x"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3  text-center  hover:bg-green-700 active:bg-green-800 text-white rounded-lg shadow-md transition"
      >
        Instagram
      </a>
    </div>

    <p className="text-sm italic opacity-75 text-center max-w-xs">
      📍Services are available only in Muniguda
    </p>

    <p className="text-sm italic opacity-75 text-center max-w-xs">
      Made with ❤️ by Kohinoor for @kuchhvlelo
    </p>
  </div>
</footer>

  );
};




export default contact
