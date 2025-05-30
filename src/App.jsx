import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from  './components/Contact';
import { useState } from 'react'
import './index.css';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact/>
      
    </>

  )
}

export default App;
