import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      {/* Logo */}
      <img src={logo} alt="logo" className="logo" />

      {/* Hamburger Menu */}
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? 'open' : ''}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/career">Career</Link></li>
      </ul>

      {/* Book a Service Button */}
      <button className="btn">Book a Service</button>
    </nav>
  );
};

export default Navbar;
