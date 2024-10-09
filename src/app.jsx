import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Global Components
import Loader from './component/loader';
import HamburgerMenu from './component/hamburgerMenu';
// Individual Sections
import Home from './section/Home';
import About from './section/About';
import Blogs from './section/Blogs';
import Projects from './section/Projects';
import Contact from './section/Contact';

export default function App() {
  // Loader loads for a minimum of 3 seconds before the page opens up 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 
    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-background min-h-screen"> {/* Apply bg-background to the entire app */}
      <Router>
        <HamburgerMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown paths */}
        </Routes>
      </Router>
    </div>
  );
}
