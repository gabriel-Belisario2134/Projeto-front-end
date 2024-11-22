import React, { useState, useEffect } from 'react';
import './carrossel.css';

const ImageCarousel = () => {
  const images = [
  '/imagens/Kakunodate.png',
  '/imagens/osaka.jpg',
  '/imagens/sakura.jpg',
  '/imagens/shibuya.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // indice da imagem atual

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1 
      );
    }, 5000); // troca de imagem a cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length]); // atualiza o intervalo sempre que o array de imagens mudar

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
