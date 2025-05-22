import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import img1 from './../../../img/img1.jpg';
import img2 from './../../../img/img2.jpg'
import img3 from './../../../img/img3.jpg'
import img4 from './../../../img/img4.jpg'

import img5 from './../../../img/img5.jpg'
import img6 from './../../../img/img6.jpg'
import img7 from './../../../img/img7.jpg'
import img8 from './../../../img/img8.jpg'

import img9 from './../../../img/img9.jpg'
import img10 from './../../../img/img10.jpg'


const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Carousel = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleZoom = () => {
      const visualViewport = window.visualViewport;
      if (visualViewport) {
        const newZoom = visualViewport.scale;
        setZoomLevel(newZoom);
        setIsZoomed(newZoom !== 1);
      }
    };

    window.visualViewport?.addEventListener('resize', handleZoom);
    return () => {
      window.visualViewport?.removeEventListener('resize', handleZoom);
    };
  }, []);

  return (
    <StyledWrapper>
      <div className="card-3d">
        {images.map((imgSrc, index) => (
          <div key={index}>
            <img 
              src={imgSrc} 
              alt={`Imagen ${index + 1}`} 
              className="carousel-image"
            />
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  @keyframes autoRun3d {
    from {
      transform: perspective(800px) rotateY(-360deg);
    }
    to {
      transform: perspective(800px) rotateY(0deg);
    }
  }

  

  /* Contenedor principal más grande */
  .card-3d {
    position: relative;
    width: 800px;  /* Aumentado de 400px */
    height: 500px; /* Aumentado de 200px */
    transform-style: preserve-3d;
    transform: perspective(1000px); /* Aumentada la perspectiva */
    animation: autoRun3d 20s linear infinite;
    will-change: transform;
    margin: 0 auto; /* Centrado horizontal */
  }

  /* Tarjetas individuales más grandes */
  .card-3d div {
    position: absolute;
    width: 180px;  /* Aumentado de 80px */
    height: 250px; /* Aumentado de 112px */
    background-color: rgb(199, 199, 199);
    border: solid 2px lightgray;
    border-radius: 0.8rem; /* Bordes más redondeados */
    top: 50%;
    left: 50%;
    transform-origin: center center;
    animation: animateBrightness 20s linear infinite;
    transition-duration: 200ms;
    will-change: transform, filter;
    overflow: hidden;
    animation: ${props => props.$isZoomed ? 'none' : 'animateBrightness 20s linear infinite'};

  }

  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease; /* Efecto hover suave */
  }

  

  /* Ajustes para el radio de rotación más grande */
  .card-3d div:nth-child(1) {
    transform: translate(-50%, -50%) rotateY(0deg) translateZ(300px); /* Aumentado de 150px */
  }
  .card-3d div:nth-child(2) {
    transform: translate(-50%, -50%) rotateY(36deg) translateZ(300px);
  }
  .card-3d div:nth-child(3) {
    transform: translate(-50%, -50%) rotateY(72deg) translateZ(300px);
  }
  .card-3d div:nth-child(4) {
    transform: translate(-50%, -50%) rotateY(108deg) translateZ(300px);
  }
  .card-3d div:nth-child(5) {
    transform: translate(-50%, -50%) rotateY(144deg) translateZ(300px);
  }
  .card-3d div:nth-child(6) {
    transform: translate(-50%, -50%) rotateY(180deg) translateZ(300px);
  }
  .card-3d div:nth-child(7) {
    transform: translate(-50%, -50%) rotateY(216deg) translateZ(300px);
  }
  .card-3d div:nth-child(8) {
    transform: translate(-50%, -50%) rotateY(252deg) translateZ(300px);
  }
  .card-3d div:nth-child(9) {
    transform: translate(-50%, -50%) rotateY(288deg) translateZ(300px);
  }
  .card-3d div:nth-child(10) {
    transform: translate(-50%, -50%) rotateY(324deg) translateZ(300px);
  }

  
`;

export default Carousel;