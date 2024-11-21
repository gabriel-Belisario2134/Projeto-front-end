import React from 'react';
import './Home.css';
// import Carrossel from '../carrossel/carrossel';

const Home = () => {
  return (
    <div className="home-container">
      {/* <Carrossel /> */}
      <section className="home-content">
        <div className="home-section">
          <h2 className="home-section-title">Tradições Japonesas</h2>
          <p className="home-section-text">
            O Japão é um país com uma rica história cultural e espiritual. Descubra as tradições que formam a base da sociedade japonesa e como elas influenciam o cotidiano.
          </p>
          <a href="/tradicoes" className="home-link">Saiba mais sobre as tradições</a>
        </div>

        <div className="home-section">
          <h2 className="home-section-title">Festivais Japoneses</h2>
          <p className="home-section-text">
            Os festivais do Japão são uma fusão vibrante de cores, música e espiritualidade. Junte-se a nós para explorar as principais celebrações e suas significados profundos.
          </p>
          <a href="/festivais" className="home-link">Descubra os festivais</a>
        </div>

        <div className="home-section">
          <h2 className="home-section-title">Culinária Japonesa</h2>
          <p className="home-section-text">
            A gastronomia do Japão é conhecida por sua delicadeza e equilíbrio. Conheça os pratos tradicionais e os segredos da cozinha japonesa.
          </p>
          <a href="/culinaria" className="home-link">Explore a culinária japonesa</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
