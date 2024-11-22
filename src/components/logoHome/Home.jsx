import React from 'react';
import './Home.css';
import ImageCarousel from '../carrossel/carrossel';
import { Link } from 'react-router-dom'; // Importando o Link

const Home = () => {
  return (
    <div className="home-container">
      <div><ImageCarousel /></div>
      <section className="home-content">
        <div className="home-section">
          <h2 className="home-section-title">Artes</h2>
          <p className="home-section-text">
            O Japão possui uma tradição artística profunda, que inclui a caligrafia, pintura, cerâmica e outras formas de expressão cultural. Explore como essas artes refletem a espiritualidade e a história do país, influenciando gerações até os dias atuais.
          </p>

          <Link to="/arte" className="home-link">Saiba mais sobre as artes</Link> {/* Alterado para Link */}
        </div>

        <div className="home-section">
          <h2 className="home-section-title">Festivais Japoneses</h2>
          <p className="home-section-text">
            Os festivais do Japão são vibrantes, combinando cores, música e espiritualidade. Explore as principais celebrações, seus significados e como elas são celebradas em todo o país.
          </p>

          <Link to="/tradicoesFestivais" className="home-link">Descubra os festivais</Link> {/* Alterado para Link */}
        </div>

        <div className="home-section">
          <h2 className="home-section-title">Culinária Japonesa</h2>
          <p className="home-section-text">
            A gastronomia do Japão é uma mistura de delicadeza e equilíbrio. Conheça os pratos tradicionais e os sabores que definem a culinária japonesa em suas diversas formas.
          </p>

          <Link to="/culinaria" className="home-link">Explore a culinária japonesa</Link> {/* Alterado para Link */}
        </div>
      </section>
    </div>
  );
};

export default Home;
