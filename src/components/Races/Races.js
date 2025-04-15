import React, { useEffect, useState } from 'react';
import './Races.css';

const API_BASE_URL = 'http://localhost:3001/api';

const Races = ({ selectedYear }) => {
  const [racesData, setRacesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRaces = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/races/${selectedYear}`);
        const data = await response.json();
        setRacesData(data);
      } catch (error) {
        console.error('Error fetching races:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRaces();
  }, [selectedYear]);

  if (loading) return <div className="loading">Loading races...</div>;

  return (
    <div className="races-container">
      <h1 className="season-heading">Formula 1 Season {selectedYear}</h1>
      <div className="races-table">
        <div className="table-header">
          <div className="header-cell">ROUND</div>
          <div className="header-cell">GRAND PRIX</div>
          <div className="header-cell">QUALIFYING</div>
          <div className="header-cell">RACE</div>
          <div className="header-cell">CIRCUIT</div>
        </div>
        {racesData.map((race, index) => (
          <div 
            key={index} 
            className={`table-row ${index % 2 === 0 ? 'even' : 'odd'}`}
            onClick={() => console.log(`Selected race: ${race.grandPrix}`)}
          >
            <div className="cell">{race.round}</div>
            <div className="cell">{race.grandPrix}</div>
            <div className="cell">{new Date(race.qualifying).toLocaleString()}</div>
            <div className="cell">{new Date(race.race).toLocaleString()}</div>
            <div className="cell">{race.circuit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Races;