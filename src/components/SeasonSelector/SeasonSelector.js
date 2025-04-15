import React, { useState } from 'react';
import './SeasonSelector.css';

const SeasonSelector = ({ selectedYear, setSelectedYear }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const seasons = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className={`season-selector ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="season-header">
        <h2 className="season-title">Season</h2>
        <button 
          className="collapse-button"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>
      <div className="season-list">
        {seasons.map(year => (
          <button 
            key={year} 
            className={`season-button ${year === selectedYear ? 'active' : ''}`}
            onClick={() => handleYearClick(year)}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SeasonSelector;