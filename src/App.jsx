import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Arte from './components/arteEstetica/arte';
import Home from './components/logoHome/Home';
import Culinaria from './components/culinaria/culinaria';
import Header from './components/headerFooter/header';
import Login from './components/loginForum/login'; 
import PontosTuristicos from './components/pontosTuristicos/pontosTuristicos';
import TradicoesFestivais from './components/tradicoesFestivais/tradicoesFestivais';
import Footer from './components/headerFooter/footer';
import Forum from './components/loginForum/forum';
import Cadastro from './components/loginForum/cadastro';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null); // Manter o token no localStorage

  // quando login for bem-sucedido
  const handleLogin = (token) => {
    setToken(token);  // salva o token no estado
    localStorage.setItem('token', token);  // salva no localStorage
  };

  return (
    <BrowserRouter>
      <Header />


      <Routes>
        <Route path="/home" element={<Home />} />
        
        {/* rota de Login */}
        <Route
          path="/login"
          element={token ? <Navigate to="/forum" /> : <Login onLogin={handleLogin} />} // se token for verdadeiro, redireciona para a rota de fórum
        />
        
        {/* rota de Cadastro */}
        <Route
          path="/cadastro"
          element={token ? <Navigate to="/forum" /> : <Cadastro />} 
        />
        
        {/* rota de Fórum */}
        <Route
          path="/forum"
          element={token ? <Forum token={token}  /> : <Navigate to="/login" />}
        />

        <Route path="/arte" element={<Arte />} />
        <Route path="/culinaria" element={<Culinaria />} />
        <Route path="/pontosturisticos" element={<PontosTuristicos />} />
        <Route path="/tradicoesFestivais" element={<TradicoesFestivais />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
