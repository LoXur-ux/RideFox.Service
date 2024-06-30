// src/components/Sidebar.tsx
import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  setCurrentTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setCurrentTab }) => {
  return (
    <nav className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <button className="sidebar-link" onClick={() => setCurrentTab('scooters')}>
            <span className="icon" role="img" aria-label="scooter">🛴</span>
            <span className="link-text">Самокаты</span>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-link" onClick={() => setCurrentTab('service')}>
            <span className="icon" role="img" aria-label="tools">🔧</span>
            <span className="link-text">Сервис</span>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-link" onClick={() => setCurrentTab('map')}>
            <span className="icon" role="img" aria-label="map">🗺️</span>
            <span className="link-text">Карта</span>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-link" onClick={() => setCurrentTab('info')}>
            <span className="icon" role="img" aria-label="info">ℹ️</span>
            <span className="link-text">Информация</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
