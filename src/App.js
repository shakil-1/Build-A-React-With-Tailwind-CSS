import React from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
     <Navbar></Navbar>
     <Hero></Hero>
     <About></About>
      
    </div>
  );
};

export default App;