// src/components/ScooterInfo.tsx
import React from 'react';
import './ScooterInfo.css';

interface ScooterInfoProps {
  scooter: {
    number: string;
    model: string;
    status: string;
    battery: number;
    dailySpeed: number;
    dailyDistance: number;
    totalDistance: number;
    avgSpeed: number;
    breakdowns: number;
    location: [number, number];
  } | null;
}

const ScooterInfo: React.FC<ScooterInfoProps> = ({ scooter }) => {
  if (!scooter) {
    return <div className="scooter-info">Введите номер самоката для поиска.</div>;
  }

  return (
    <div className="scooter-info">
      <div className="scooter-details">
        <div className="scooter-image">
          <img src="/path/to/scooter-image.png" alt={scooter.model} />
        </div>
        <div className="scooter-stats">
          <h2>Самокат {scooter.model}</h2>
          <p>Номер: {scooter.number}</p>
          <p className={`status ${scooter.status.toLowerCase()}`}>{scooter.status}</p>
          <h3>Статистика за день</h3>
          <p>Заряд батареи: {scooter.battery}%</p>
          <p>Средняя скорость: {scooter.dailySpeed} км/ч</p>
          <p>Пробег: {scooter.dailyDistance} км</p>
          <h3>Статистика за все время</h3>
          <p>Общий пробег: {scooter.totalDistance} км</p>
          <p>Средняя скорость: {scooter.avgSpeed} км/ч</p>
          <p>Количество поломок: {scooter.breakdowns}</p>
        </div>
      </div>
      <div className="scooter-location">
        <h3>Местоположение</h3>
        <div className="empty-map"></div>
      </div>
    </div>
  );
};

export default ScooterInfo;
