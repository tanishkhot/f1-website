import React from 'react';
import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          {/* Logo here */}
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <button 
                className={`nav-button ${activeTab === 'races' ? 'active' : ''}`}
                onClick={() => setActiveTab('races')}
              >
                Races
              </button>
            </li>
            <li>
              <button 
                className={`nav-button ${activeTab === 'drivers' ? 'active' : ''}`}
                onClick={() => setActiveTab('drivers')}
              >
                Drivers
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;