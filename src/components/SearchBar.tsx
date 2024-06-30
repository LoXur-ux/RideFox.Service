import React from 'react';
import './SearchBar.css';

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <input type="text" className="search-input" placeholder="Введите номер самоката" />
      <button className="filter-button">+ Фильтр</button>
      <button className="search-button">+ Поиск</button>
    </div>
  );
}

export default SearchBar;
