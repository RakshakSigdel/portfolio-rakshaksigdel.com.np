// src/components/Banner.js
import React from 'react';
import background from '../assets/background.webp';
import person from '../assets/person.png'; 

const Banner = () => {
  return (
    <div className="relative w-full  bg-cover bg-center h-full " style={{ backgroundImage: `url(${background})`}}>
      <div className="absolute inset-0 flex items-center justify-start ml-8">
        <div className="text-left">
          <div className="text-white text-xl font-bold">
            <span className="bg-red-500 text-white px-2 py-1 rounded">ACTIVE</span>
            <span className="bg-blue-500 text-white px-2 py-1 rounded ml-2">LEARNER</span>
          </div>
          <h1 className="text-white text-4xl font-bold mt-4">RAKSHAK SIGDEL</h1>
          <p className="text-white text-lg mt-2">Software Engineer & UI/UX Developer</p>
        </div>
      </div>
      <img src={person} alt="Person" className="absolute bottom-0 right-0 h-4/5 object-contain" />
    </div>
  );
}

export default Banner;
// relative w-full  bg-cover bg-center h-full 
