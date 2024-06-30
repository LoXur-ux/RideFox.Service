// src/components/Header.tsx
import React from 'react';
import './Header.css';
import logo from '../assets/logo.png'; // импортируем логотип

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="RIDEFOX Logo" className="logo" />
      <h1 className="title">RIDEFOX</h1>
    </header>
  );
};

export default Header;
