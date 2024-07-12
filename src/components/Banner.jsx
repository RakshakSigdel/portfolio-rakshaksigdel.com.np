import React from 'react';
import background from '../assets/background.webp';
import person from '../assets/person.png'; 

const Banner = () => {
  return (
    <div className="sm:relative w-full bg-cover bg-center h-full" style={{ backgroundImage: `url(${background})`}}>
      <div className="absolute inset-0 sm:flex items-center sm:justify-start sm:ml-8">
        <div className=" text-center mt-3 sm:text-left sm:m-0">
          <div className="mt-12 sm:mt-0 text-white text-xl font-bold">
            <span className="bg-red-500 text-white px-2 py-1 rounded shadow hover:shadow-lg">Portfolio</span>
            <span className="bg-blue-500 text-white px-2 py-1 rounded ml-2">Of</span>
          </div>
          <h1 className="text-white text-4xl font-bold mt-4">RAKSHAK SIGDEL</h1>
          <p className="text-white text-lg mt-2">Software Engineer & UI/UX Developer</p>
        </div>
      </div>
      <img src={person} alt="Person" className="absolute bottom-0 right-0 h-5/5 sm:h-5/6 object-contain" />
    </div>
  );
}

export default Banner;
