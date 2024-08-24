import './index.css'
import React from 'react';
import NavBar from './components/NavBar';
import Page1 from './Pages/Page1/Page1';


function App() {
  return (
    <>
      <div className='h-[91vh]'>
        <Page1 />
      </div>
      <div className='z-50'>
        <NavBar />
      </div>
    </>
  );
}

export default App;
