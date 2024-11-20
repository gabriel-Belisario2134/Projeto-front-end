import React, { useState } from 'react';
import './Home.css';


const images = [
  '/imagens/comida.png',
  '/imagens/kakunodate.png',
  '/imagens/osaka.jpg',
  '/imagens/sakura.jpg',
  '/imagens/shibuya.jpg'
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button onClick={prevImage} className="prev-button">{'<'}</button>
      <div className="image-container">
        <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} />
      </div>
      <button onClick={nextImage} className="next-button">{'>'}</button>
      <div>
        <h1>AAAAAA</h1>
      </div>
    </div>
  );
}

export default Home;