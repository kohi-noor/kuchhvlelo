import React from 'react'
import './Home.css';
import bgi from '.././assets/bg-img-kl.png'; 
import boy from '.././assets/del-boy.png';  

const Home = () => {
    
  return (
<div
  className="relative max-w-full h-screen overflow-x-hidden overflow-y-auto bg-cover bg-center box-border"
  style={{ backgroundImage: `url(${bgi})` }}
>
  {/* Content on top */}
  <div className="relative z-10 flex h-full text-white box-border" id= "home">
    {/* Left side: Text and Buttons */}
    <div className="flex flex-col justify-center items-center w-full md:items-start md:w-1/2 p-8 text-center md:text-left md:ml-12">
      <span className="text-xl font-bold mb-4 block">
        Kuchh v Lelo
      </span>
      <span className="text-4xl md:text-7xl font-bold block leading-tight">
        Get groceries and more delivered at your door step!
      </span>
      <div className="flex flex-col gap-4 mt-20 w-full max-w-xs md:flex-row md:justify-start">
        <a
            href="tel:9078269669"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3  hover:bg-gray-600 border active:bg-green-800 text-white rounded-lg shadow-md transition"
          >
            Call us
          </a>
        <a
            href="https://wa.me/9078269669"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3  hover:bg-gray-600 border active:bg-green-800 text-white rounded-lg shadow-md transition"
          >
            WhatsApp Us
          </a>
      </div>
    </div>

    {/* Right side: Image */}
    <div className="hidden lg:flex justify-center items-center w-1/2">
      <img
        src={boy}
        alt="delivery boy"
        className="h-full w-full object-cover"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  </div>
</div>

    



    
  )
}

export default Home;
