import './index.css'
// src/App.jsx
import React from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="relative h-screen flex flex-col">
      <div className="flex-grow" >
        <Banner />
      </div>
      <div className="flex-grow-0" >
        <Navbar />
      </div>
    </div>
  );
}

export default App;
