// src/App.tsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Scooters from './components/Scooters';
import Map from './components/Map';
import './App.css';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('scooters');

  const renderContent = () => {
    switch (currentTab) {
      case 'scooters':
        return <Scooters />;
      case 'service':
        return <div>Сервис</div>;
      case 'map':
        return <Map />;
      case 'info':
        return <div>Информация</div>;
      default:
        return <Scooters />;
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar setCurrentTab={setCurrentTab} />
        <div className="content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
