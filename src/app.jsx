//APP

import React, { useState, useEffect,Suspense,lazy } from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Global Components
import Loader from './component/loader';
import HamburgerMenu from './component/hamburgerMenu';
// Individual Sections
import Home from './section/Home';
import About from './section/About';
import Skills from './section/Skills'
import Blogs from './section/Blogs';
import Projects from './section/Projects';
const ContactPage = lazy(() => import('./section/Contact'));

export default function App() {
  return (
    <div className="bg-background min-h-screen"> {/* Apply bg-background to the entire app */}
      <Router>
        <Suspense>
          <HamburgerMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown paths */}
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}
