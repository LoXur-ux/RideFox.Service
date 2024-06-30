// src/components/Sidebar.tsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/Store";
import "./Sidebar.css";
import { logout } from "../redux/UserSlice";

interface SidebarProps {
  setCurrentTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setCurrentTab }) => {
  const dispatch: AppDispatch = useDispatch();
  const { name } = useSelector((state: RootState) => state.user);

  return (
    <nav className="sidebar">
      <div className="sidebar-menu">
        <ul></ul>
        <li className="sidebar-item">
          <button
            className="sidebar-link"
            onClick={() => setCurrentTab("scooters")}
          >
            <span className="icon" role="img" aria-label="scooter">
              🛴
            </span>
            <span className="link-text">Самокаты</span>
          </button>
        </li>
        <li className="sidebar-item">
          <button
            className="sidebar-link"
            onClick={() => setCurrentTab("service")}
          >
            <span className="icon" role="img" aria-label="tools">
              🔧
            </span>
            <span className="link-text">Сервис</span>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-link" onClick={() => setCurrentTab("map")}>
            <span className="icon" role="img" aria-label="map">
              🗺️
            </span>
            <span className="link-text">Карта</span>
          </button>
        </li>
        <li className="sidebar-item">
          <button
            className="sidebar-link"
            onClick={() => setCurrentTab("info")}
          >
            <span className="icon" role="img" aria-label="info">
              ℹ️
            </span>
            <span className="link-text">Информация</span>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="sidebar-link" onClick={() => dispatch(logout())}>
            <span className="icon" role="img" aria-label="user">
              👤
            </span>
            <span className="link-text">{name}</span>
          </button>
        </li>
      </div>
    </nav>
  );
};

export default Sidebar;
