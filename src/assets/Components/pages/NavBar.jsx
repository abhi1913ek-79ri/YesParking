import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleLinkClick = () => {
    setOpenMenu(false);
  };

  return (
    <nav className='navbar'>
      <Link id="brand" to="/">YesParking</Link>

      <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? (
          <span className="menu-icon">&times;</span>  // Cross icon
        ) : (
          <span className="menu-icon">&#9776;</span>  // Hamburger icon
        )}
      </div>

      <ul className={openMenu ? "open" : ""}>
        <li><NavLink to="/" onClick={handleLinkClick}>Home</NavLink></li>
        <li><NavLink to="/findParking" onClick={handleLinkClick}>Find Parking</NavLink></li>
        <li><NavLink to="/listSpot" onClick={handleLinkClick}>List Your Spot</NavLink></li>
        <li><NavLink to="/about" onClick={handleLinkClick}>About</NavLink></li>
        <li><NavLink to="/contact" onClick={handleLinkClick}>Contact Us</NavLink></li>
        <li><NavLink to="/login" onClick={handleLinkClick} id='login'>Login/Register</NavLink></li>
      </ul>
    </nav>
  );
}
