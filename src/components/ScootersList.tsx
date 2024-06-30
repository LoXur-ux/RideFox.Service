// src/components/ScootersList.tsx
import React from 'react';
import './ScootersList.css';

interface Scooter {
  id: string;
  model: string;
  status: string;
  battery: number;
  speed: number;
  distance: number;
  totalDistance: number;
  totalBreakdowns: number;
}

interface ScootersListProps {
  scooters: Scooter[];
  onSelectScooter: (scooter: Scooter) => void;
}

const ScootersList: React.FC<ScootersListProps> = ({ scooters, onSelectScooter }) => {
  return (
    <div className="scooters-list">
      {scooters.map(scooter => (
        <div key={scooter.id} className="scooter-item" onClick={() => onSelectScooter(scooter)}>
          <span className="scooter-model">{scooter.model}</span>
          <span className="scooter-id">{scooter.id}</span>
          <span className={`scooter-status ${scooter.status === 'В РАБОТЕ' ? 'active' : 'inactive'}`}>
            {scooter.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ScootersList;
