import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Global Components
import HamburgerMenu from './component/hamburgerMenu';
// Individual Sections
import Home from './section/Home';
import About from './section/About';
import Blogs from './section/Blogs';
import Projects from './section/Projects';
import Contact from './section/Contact';

export default function App() {
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
