import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<><Hero /><About /><Services /><Contact /></>} />
              <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <Footer />
      </Router>
  );
}

export default App;