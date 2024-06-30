// src/components/ScooterDetail.tsx
import React from 'react';
import './ScooterDetail.css';

interface ScooterDetailProps {
  scooter: {
    id: string;
    model: string;
    status: string;
    battery: number;
    speed: number;
    distance: number;
    totalDistance: number;
    totalBreakdowns: number;
  };
  onBack: () => void;
}

const ScooterDetail: React.FC<ScooterDetailProps> = ({ scooter, onBack }) => {
  return (
    <div className="scooter-detail">
      <button onClick={onBack} className="back-button">Назад</button>
      <div className="scooter-detail-content">
        <div className="scooter-info">
          <div className="scooter-title">
            <h2>Самокат {scooter.model}</h2>
            <span className={`scooter-detail-status ${scooter.status === 'В РАБОТЕ' ? 'active' : 'inactive'}`}>
              {scooter.status}
            </span>
          </div>
          <p>Номер: {scooter.id}</p>
          <img src="/e-scooter.png" alt="Самокат" className="scooter-image" />
        </div>
        <div className="scooter-stats">
          <div className="daily-stats">
            <h3>Статистика за день</h3>
            <p>Заряд батареи: {scooter.battery}%</p>
            <p>Средняя скорость: {scooter.speed} км/ч</p>
            <p>Пробег: {scooter.distance} км</p>
          </div>
          <div className="all-time-stats">
            <h3>Статистика за все время</h3>
            <p>Общий пробег: {scooter.totalDistance} км</p>
            <p>Средняя скорость: {scooter.speed} км/ч</p>
            <p>Количество поломок: {scooter.totalBreakdowns}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScooterDetail;
