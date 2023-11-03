import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import TravelLocations from './components/TravelLocations';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div>

<Navbar/>
    <Hero />
    <HeadlineCards />
    <hr className='pt-4'/>
    <TravelLocations />
    <ContactForm />


    </div>
   
  );
}

export default App;
