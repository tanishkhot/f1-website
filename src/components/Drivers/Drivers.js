import React, { useEffect, useState } from 'react';
import './Drivers.css';

const API_BASE_URL = 'http://localhost:3001/api';

const Drivers = ({ selectedYear }) => {
  const [driversData, setDriversData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/drivers/${selectedYear}`);
        const data = await response.json();
        setDriversData(data);
      } catch (error) {
        console.error('Error fetching drivers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDrivers();
  }, [selectedYear]);

  if (loading) return <div className="loading">Loading drivers...</div>;

  return (
    <div className="drivers-container">
      <h1 className="season-heading">Formula 1 Drivers {selectedYear}</h1>
      <div className="drivers-table">
        <div className="table-header">
          <div className="header-cell">POSITION</div>
          <div className="header-cell">DRIVER</div>
          <div className="header-cell">NUMBER</div>
          <div className="header-cell">NATIONALITY</div>
          <div className="header-cell">TEAM</div>
          <div className="header-cell">POINTS</div>
        </div>
        {driversData.map((driver, index) => (
          <div 
            key={driver.id || index}
            className={`table-row ${index % 2 === 0 ? 'even' : 'odd'}`}
          >
            <div className="cell">{driver.position}</div>
            <div className="cell">{driver.name}</div>
            <div className="cell">{driver.number}</div>
            <div className="cell">{driver.nationality}</div>
            <div className="cell">{driver.team}</div>
            <div className="cell">{driver.points}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drivers;