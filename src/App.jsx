import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Arte from './components/arteEstetica/arte';
import Home from './components/logoHome/Home';
import Culinaria from './components/culinaria/culinaria';
import Header from './components/header/header';
import Login from './components/loginForum/login';  // Importando o componente de Login

function App() {
  // Estado para armazenar o token ou informações de autenticação
  const [token, setToken] = useState(null);

  // Função chamada quando o login for bem-sucedido
  const handleLogin = (token) => {
    setToken(token);  // Salva o token no estado
  };

  return (
    <BrowserRouter>
      <Header /> {/* Header será exibido em todas as páginas */}

      <Routes>
        {/* Rota inicial */}
        <Route path="/" element={<Home />} />
        
        {/* Página de login */}
        <Route
          path="/login"
          element={token ? <Navigate to="/forum" /> : <Login onLogin={handleLogin} />}
        />
        
        {/* Páginas do fórum e outras, protegidas por autenticação */}
        <Route
          path="/forum"
          element={token ? <Forum token={token} /> : <Navigate to="/login" />}
        />

        {/* Outras rotas públicas */}
        <Route path="/arte" element={<Arte />} />
        <Route path="/culinaria" element={<Culinaria />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
