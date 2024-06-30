// src/components/Scooters.tsx
import React, { useState } from 'react';
import ScootersList from './ScootersList';
import ScooterDetail from './ScooterDetail';
import './Scooters.css';

const scootersData = [
  {
    id: '888-131-932',
    model: 'Самокат Xiaomi',
    status: 'В РАБОТЕ',
    battery: 88,
    speed: 13,
    distance: 10,
    totalDistance: 192,
    totalBreakdowns: 0,
  },
  {
    id: '888-666-932',
    model: 'Самокат Yamato',
    status: 'В РАБОТЕ',
    battery: 100,
    speed: 25,
    distance: 13,
    totalDistance: 2002,
    totalBreakdowns: 15,
  },{
    id: '888-131-535',
    model: 'Самокат MidWay',
    status: 'В РАБОТЕ',
    battery: 14,
    speed: 16,
    distance: 14,
    totalDistance: 208,
    totalBreakdowns: 2,
  },
  {
    id: '888-666-301',
    model: 'Самокат NextDrive',
    status: 'СЛОМАН',
    battery: 29,
    speed: 15,
    distance: 25,
    totalDistance: 345,
    totalBreakdowns: 4,
  },
  // Добавьте другие самокаты здесь
];

const Scooters: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredScooters, setFilteredScooters] = useState(scootersData);
  const [selectedScooter, setSelectedScooter] = useState<typeof scootersData[0] | null>(null);
  const [filter, setFilter] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const filtered = scootersData.filter(scooter =>
      scooter.id.includes(searchTerm)
    );
    setFilteredScooters(filtered);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);

    let filtered = scootersData;
    if (selectedFilter === 'in_work') {
      filtered = scootersData.filter(scooter => scooter.status === 'В РАБОТЕ');
    } else if (selectedFilter === 'low_battery') {
      filtered = scootersData.filter(scooter => scooter.battery < 20);
    }
    // Добавьте другие фильтры здесь

    setFilteredScooters(filtered);
  };

  const handleSelectScooter = (scooter: typeof scootersData[0]) => {
    setSelectedScooter(scooter);
  };

  const handleBack = () => {
    setSelectedScooter(null);
  };

  return (
    <div className="scooters">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Введите номер самоката"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select onChange={handleFilterChange} value={filter} className="filter-select">
          <option value="">Все</option>
          <option value="in_work">В РАБОТЕ</option>
          <option value="low_battery">Низкий заряд</option>
          {/* Добавьте другие опции фильтра здесь */}
        </select>
        <button onClick={handleSearch} className="search-button">+ Поиск</button>
      </div>
      {selectedScooter ? (
        <ScooterDetail scooter={selectedScooter} onBack={handleBack} />
      ) : (
        <ScootersList scooters={filteredScooters} onSelectScooter={handleSelectScooter} />
      )}
    </div>
  );
};

export default Scooters;