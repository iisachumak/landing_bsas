import React, { useState } from 'react';
import './CarouselWithThumbnails.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const CarouselWithThumbnails = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'https://www.yamaha-motor.com.ar/images/productos//colores/598e8ffe1e62699f59ea41e93596f1e3.jpg',
    'https://www.yamaha-motor.com.ar/images/productos/374adc19c57054879513d1d2441a401d_md.webp?667',
    'https://www.yamaha-motor.com.ar/images/productos/dfdad64253f7ea44e42f2623123511a8_md.webp?667',
    // Add more image URLs as needed
  ];

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
  };

  const openWhatsAppChat = (phoneNumber) => {
    window.open(`https://wa.me/${+5491152548398}`, '_blank');
  };

  return (
    <div className="container-card card mb-4 mt-2">
      <div className='card-top'>
        <h2 className="title-card">BLITZ BASE 110</h2>
      </div>
      <div className='container-cucardas'>
        <img className='marca-moto' src="https://www.ingenplast.com/images/logo-corven.png" alt="" srcset="" />
        <img className='cucarda-moto' src="https://ofertas.yuhmak.com.ar/uploads/150X150%20CONTADO.png" alt="" srcset="" />
      </div>
      <div className="carousel-container">
        <div className="main-slider">
          <img className='main-slide-image' src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        </div>
        <div className="card-img-top">
          <div className="thumbnail-slider">
            {images.map((image, index) => (
              <div key={index} onClick={() => handleThumbnailClick(index)} className={index === currentSlide ? 'active thumbnail' : 'thumbnail'}>
                <img className='img-thumb' src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="principal-card">
          <div className="containerasesor-card">
            <div class="div-info text-center">
              <p className="info-card">
                <strong>Con tu compra casco y llavero de regalo</strong>
              </p>
            </div>
            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <p className='price'>
                    $860.877
                  </p>
                </div>
                <div class="col">
                  <button type="button" class="btn-verde-wpp btn btn-success" onClick={() => openWhatsAppChat()}><FontAwesomeIcon className='btn-wpp' icon={faWhatsapp} />Me Interesa</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CarouselWithThumbnails;
