import React from 'react';
import chicken from '.././assets/chicken.jpg';  
import drinks from '.././assets/drinks.jpg';  
import groceries from '.././assets/groceries.jpg';  
import shampoo from '.././assets/shampoo.jpg';  
import './About.css';



const About = () => {
  return (
<section className="px-6 py-12 max-w-screen-xl mx-auto text-center text-gray-300" >
  {/* Why Choose Section */}
  <h2 className="text-2xl font-bold mb-8 scroll-smooth" id = "aboutus">Why Choose Kuchh v Lelo?</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
    <div className="flex flex-col items-center p-4   rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <p className='text-4xl'>⏰</p>
      <p className="font-semibold">Fast Local Delivery </p>
      {/* <p className="text-sm">within 1 hour</p> */}
    </div>
    <div className="flex flex-col items-center p-4   rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <p className="text-4xl">🍖</p>
      <p className="font-semibold">Fresh & Clean</p>
    </div>
    <div className="flex flex-col items-center p-4  rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <p className="text-4xl">🏡</p>
      <p className="font-medium text-center">Get it delivered at your doorstep</p>
    </div>
    <div className="flex flex-col items-center p-4  rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <p className="text-4xl">🏍️</p>
      <p className="font-semibold">Safe delivery</p>
    </div>
  </div>

  {/* What We Deliver Section */}
  <h2 className="text-2xl font-bold mb-8">What We Deliver</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
    <div className="flex flex-col items-center p-4  rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img src={groceries} alt="Grocery Essentials" className="w-24 h-24 object-contain mb-2" />
      <p className="font-medium">Grocery Essentials</p>
    </div>
    <div className="flex flex-col items-center p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img src={chicken} alt="Fresh Chicken & Mutton" className="w-24 h-24 object-contain mb-2" />
      <p className="font-medium">Fresh Chicken & Mutton</p>
    </div>
    <div className="flex flex-col items-center p-4   rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img src={drinks} alt="Ready-to-Eat Food" className="w-24 h-24 object-contain mb-2" />
      <p className="font-medium">Drinks and Bevereges</p>
    </div>
    <div className="flex flex-col items-center p-4   rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img src={shampoo} alt="Household & Daily Needs" className="w-24 h-24 object-contain mb-2" />
      <p className="font-medium text-center">Household & Daily Needs</p>
    </div>
  </div>

  {/* How to Order Section */}
  <h2 className="text-2xl font-bold mb-8">How to Order</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="flex flex-col items-center p-4  rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <p className="text-4xl">📋</p>
      <p className="font-medium">Choose from our daily list</p>
    </div>
    <div className="flex flex-col items-center p-4  rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <p className="text-4xl">📞</p>
      <p className="font-medium text-center">Place order via WhatsApp or Call</p>
    </div>
    <div className="flex flex-col items-center p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <p className="text-4xl">💸</p>
      <p className="font-medium">Pay by Cash or UPI</p>
    </div>
    <div className="flex flex-col items-center p-4  rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <p className="text-4xl">🏡</p>
      <p className="font-medium text-center">Get it delivered at your doorstep</p>
    </div>
    
  </div>
</section>


  )
}

export default About