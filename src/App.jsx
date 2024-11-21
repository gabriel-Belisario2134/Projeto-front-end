import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Arte from './components/arteEstetica/arte';
import Home from './components/logoHome/Home';
import Culinaria from './components/culinaria/culinaria';
import Header from './components/header/header';
import Login from './components/loginForum/login'; 

function App() {
  
  const [token, setToken] = useState(null);

  // quando login for bem-sucedido
  const handleLogin = (token) => {
    setToken(token);  // salva o token no estado
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>
    
        <Route path="/" element={<Home />} />
        
      
        <Route
          path="/login"
          element={token ? <Navigate to="/forum" /> : <Login onLogin={handleLogin} />}
        />
        
       
        <Route
          path="/forum"
          element={token ? <Forum token={token} /> : <Navigate to="/login" />}
        />

       
        <Route path="/arte" element={<Arte />} />
        <Route path="/culinaria" element={<Culinaria />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
