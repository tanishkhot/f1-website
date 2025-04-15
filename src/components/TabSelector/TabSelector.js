import React from 'react';
import './TabSelector.css';

const TabSelector = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-selector">
      <div className="f1-logo">F1</div>
      <div className="tab-buttons">
        <button 
          className={`tab-button ${activeTab === 'races' ? 'active' : ''}`}
          onClick={() => setActiveTab('races')}
        >
          Races
        </button>
        <button 
          className={`tab-button ${activeTab === 'drivers' ? 'active' : ''}`}
          onClick={() => setActiveTab('drivers')}
        >
          Drivers
        </button>
        <button 
          className={`tab-button ${activeTab === 'constructors' ? 'active' : ''}`}
          onClick={() => setActiveTab('constructors')}
        >
          Constructors
        </button>
      </div>
      <div className="right-spacer"></div>
    </div>
  );
};

export default TabSelector;