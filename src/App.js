import React, { useCallback, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './component/layout/header';
import Footer from './component/layout/footer';
import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/scss/style.css';
//import './assets/js/custom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import Home from './component/pages/home';
import AboutUs from './component/pages/aboutUs';
import Properties from './component/pages/properties';
import Team from './component/pages/team';
import Partners from './component/pages/partners';
import PropertyDetail from './component/pages/PropertyDetail';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

function App() {
  // Scroll event
  const handleScroll = useCallback(() => {
    var sticky = document.querySelector('.sticky');
    var scroll = window.scrollY; 

    if (scroll >= 400) sticky.classList.add('fixed');
    else sticky.classList.remove('fixed');
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/team" element={<Team />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/property-details" element={<PropertyDetail />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
