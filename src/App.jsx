import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/global/Navbar';
import Footer from './components/global/Footer';
import Hero from './components/home';
import Menu from './components/pages/Menu';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';


window.react_app_url = "http://localhost:3000/";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
