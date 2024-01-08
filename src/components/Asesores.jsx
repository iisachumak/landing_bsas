import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SalesAdvisorsCarousel = () => {
  const advisors = [
    { id: 1, name: 'Analia', description: 'Asesore Digital.', image: 'https://images.vexels.com/media/users/3/129732/isolated/preview/c4869deecdb376da189489eaa2c1628a-silueta-de-avatar-femenino-casual.png', whatsapp: '+5493816740001' },
    { id: 1, name: 'Juan Pablo', description: 'Lorem ipsum dolor sit amet.', image: 'https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-silueta-de-avatar-masculino-casual.png', whatsapp: 'NUMERO_3' },
    { id: 1, name: 'Vito', description: 'Lorem ipsum dolor sit amet.', image: 'https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-silueta-de-avatar-masculino-casual.png', whatsapp: 'NUMERO_3' },
    { id: 2, name: 'Cynthia', description: 'Consectetur adipiscing elit.', image: 'https://images.vexels.com/media/users/3/129732/isolated/preview/c4869deecdb376da189489eaa2c1628a-silueta-de-avatar-femenino-casual.png', whatsapp: 'NUMERO_3' },
    { id: 3, name: 'Nuevo Asesore', description: 'Sed do eiusmod tempor incididunt.', image: 'https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-silueta-de-avatar-masculino-casual.png', whatsapp: 'NUMERO_3' },
    // Agrega más asesores aquí
  ];

  const openWhatsAppChat = (phoneNumber) => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="sales-carousel-container">
      <Slider {...settings}>
        {advisors.map((advisor) => (
          <div key={advisor.id} className="advisor-card">
            <img src={advisor.image} alt={advisor.name} className="advisor-image" />
            <h3>{advisor.name}</h3>
            <p>{advisor.description}</p>
            <button type="button" class="btn-verde btn btn-success" onClick={() => openWhatsAppChat(advisor.whatsapp)}><FontAwesomeIcon className='btn-wpp' icon={faWhatsapp} />Chat de WhatsApp</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SalesAdvisorsCarousel;
