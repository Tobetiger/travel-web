import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import TravelLocations from './components/TravelLocations';


function App() {
  return (
    <div>
       <Navbar />
    <Hero />
    <HeadlineCards />
    <TravelLocations />

    </div>
   
  );
}

export default App;
