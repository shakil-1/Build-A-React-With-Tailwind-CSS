import React from 'react';
import About from './components/About';
import Developer from './components/Developer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
     <Navbar></Navbar>
     <Hero></Hero>
     <About></About>
     <Developer></Developer>
      
    </div>
  );
};

export default App;