import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { AiOutlineMenu } from 'react-icons/ai';

function App() {
  return (
    // Navbar Section
    <div>
      <div className='Navbar'>
      <div>
      <AiOutlineMenu />
      </div>
    <h1>
      io<span>Topia</span>
    </h1>
    <div>
      <p>Home</p> <p>Affiliate</p>
    </div>

      </div>
      
    </div>
  );
}

export default App;
