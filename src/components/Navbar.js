import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          {/* Logo will go here */}
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#drivers">Drivers</a></li>
            <li><a href="#teams">Teams</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#standings">Standings</a></li>
          </ul>
        </div>
        <div className="navbar-right">
          {/* Additional elements like search or user profile can go here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;