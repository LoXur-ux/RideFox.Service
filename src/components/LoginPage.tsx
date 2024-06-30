// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/UserSlice";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
    if (username === "Shuma" && password === "Shuma") {
      dispatch(login(username));
    } else {
      setError("Неправильные имя пользователя или пароль");
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Вход</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Войти</button>
      </div>
    </div>
  );
};

export default LoginPage;
