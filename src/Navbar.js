import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';  // Import Font Awesome icons

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className="nav-bar">
      <div className="name-bar">SWIFT BAR</div>
      
      {/* Menu links, which are shown/hidden based on isMenuOpen state */}
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`} role="navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <NavLink to="https://hotel-ashy.vercel.app/?table=1">ORDER NOW!</NavLink>
      </div>

      {/* Menu icon with conditional rendering */}
      <div 
        className="menu-icon" 
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {/* Use Font Awesome icons for hamburger and close icons */}
        {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
}

export default Navbar;
