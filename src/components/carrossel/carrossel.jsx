import React, { useState, useEffect } from 'react';
import './carrossel.css';

const ImageCarousel = () => {
  const images = [
    '/imagens/comida.png',
  '/imagens/Kakunodate.png',
  '/imagens/osaka.jpg',
  '/imagens/sakura.jpg',
  '/imagens/shibuya.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Troca de imagem a cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <img
        className="carousel-image"
        src={images[currentIndex]}
        alt={`Imagem ${currentIndex + 1}`}
      />
    </div>
  );
};


export default ImageCarousel;
