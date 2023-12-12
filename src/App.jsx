import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/global/Navbar';
import Footer from './components/global/Footer';
import Hero from './components/home';
import Menu from './components/pages/Menu';
import Gallery from './components/pages/Gallery';
import ContactUs from './components/pages/ContactUs';


window.react_app_url = "http://localhost:3000/";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/properties-details/:id" element={<PropertieDetails />} />
        <Route path="/contact-us" element={<ContactUs />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
