import React, { useEffect, useState } from 'react';
import './Constructors.css';

const API_BASE_URL = 'http://localhost:3001/api';

const Constructors = ({ selectedYear }) => {
  const [constructorsData, setConstructorsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConstructors = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/constructors/${selectedYear}`);
        const data = await response.json();
        setConstructorsData(data);
      } catch (error) {
        console.error('Error fetching constructors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchConstructors();
  }, [selectedYear]);

  if (loading) return <div className="loading">Loading constructors...</div>;

  return (
    <div className="constructors-container">
      <h1 className="season-heading">Formula 1 Constructors {selectedYear}</h1>
      <div className="constructors-table">
        <div className="table-header">
          <div className="header-cell">POSITION</div>
          <div className="header-cell">TEAM</div>
          <div className="header-cell">NATIONALITY</div>
          <div className="header-cell">DRIVERS</div>
          <div className="header-cell">POINTS</div>
        </div>
        {constructorsData.map((constructor, index) => (
          <div 
            key={constructor.id || index}
            className={`table-row ${index % 2 === 0 ? 'even' : 'odd'}`}
          >
            <div className="cell">{constructor.position}</div>
            <div className="cell">{constructor.team}</div>
            <div className="cell">{constructor.nationality}</div>
            <div className="cell">{constructor.drivers.join(', ')}</div>
            <div className="cell">{constructor.points}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Constructors;