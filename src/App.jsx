import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Home/Hero';
import Services from './Components/Home/Services'; // Ensure capitalization is correct
import Services_ext from './Components/Home/Services_ext';
import Divinee from './Components/Home/Divinee';
import Team from './Components/Home/Team';
import Customer from './Components/Home/Customer';
import Footer from './Components/Home/Footer';
import About from './Components/About/About';
import Career from './Components/Career/Career';

const App = () => {
  return (
    <div className='homepage-wrapper'>
      <Navbar />
      <Routes>
        <Route path='/' element={  // Changed to lowercase to match your other routes
          <>
            <Hero />
            <Services />
            <Services_ext />
            <Divinee />
            <Team />
            <Customer />
          </>
        } />
        <Route path='/about' element={<About />} /> {/* Ensure path is lowercase */}
        <Route path='/career' element={<Career />} /> {/* Ensure path is lowercase */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
