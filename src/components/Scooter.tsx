// src/components/Scooter.tsx
import React from 'react';
import './Scooter.css';

interface ScooterProps {
  id: string;
  model: string;
  status: string;
  battery: number;
  speed: number;
  distance: number;
  totalDistance: number;
  totalBreakdowns: number;
}

const Scooter: React.FC<ScooterProps> = ({ id, model, status, battery, speed, distance, totalDistance, totalBreakdowns }) => {
  return (
    <div className="scooter">
      <div className="scooter-info">
        <h3>{model}</h3>
        <p>Номер: {id}</p>
        <p className={`status ${status === 'В РАБОТЕ' ? 'active' : ''}`}>{status}</p>
      </div>
      <div className="scooter-stats">
        <div className="day-stats">
          <h4>Статистика за день</h4>
          <p>Заряд батареи: {battery}%</p>
          <p>Средняя скорость: {speed} км/ч</p>
          <p>Пробег: {distance} км</p>
        </div>
        <div className="all-time-stats">
          <h4>Статистика за все время</h4>
          <p>Общий пробег: {totalDistance} км</p>
          <p>Средняя скорость: {speed} км/ч</p>
          <p>Количество поломок: {totalBreakdowns}</p>
        </div>
      </div>
    </div>
  );
};

export default Scooter;
