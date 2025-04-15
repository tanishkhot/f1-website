import React, { useState } from 'react';
import './App.css';
import TabSelector from './components/TabSelector/TabSelector';
import SeasonSelector from './components/SeasonSelector/SeasonSelector';
import Races from './components/Races/Races';
import Drivers from './components/Drivers/Drivers';
import Constructors from './components/Constructors/Constructors';

function App() {
  const [activeTab, setActiveTab] = useState('races');
  const [selectedYear, setSelectedYear] = useState(2025);

  const renderContent = () => {
    switch(activeTab) {
      case 'drivers':
        return <Drivers selectedYear={selectedYear} />;
      case 'constructors':
        return <Constructors selectedYear={selectedYear} />;
      case 'races':
      default:
        return <Races selectedYear={selectedYear} />;
    }
  };

  return (
    <div className="App">
      <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content">
        <SeasonSelector selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
        <div className="content-area">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
