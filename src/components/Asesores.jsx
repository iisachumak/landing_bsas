import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SalesAdvisorsCarousel = () => {
  const advisors = [
    { id: 1, name: 'Analia', description: 'Asesore Digital Lorem ipsum dolor sit amet.', image: 'https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-silueta-de-avatar-masculino-casual.png', whatsapp: '+5491152548398' },
    { id: 1, name: 'Juan Pablo', description: 'Asesore Digital Lorem ipsum dolor sit amet.', image: 'https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-silueta-de-avatar-masculino-casual.png', whatsapp: '+5491152548398' },
    { id: 1, name: 'Vito', description: 'Asesore Digital Lorem ipsum dolor sit amet.', image: 'https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-silueta-de-avatar-masculino-casual.png', whatsapp: '+5491152548398' },
    { id: 2, name: 'Cynthia', description: 'Asesore Digital Lorem ipsum dolor sit amet.', image: 'https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-silueta-de-avatar-masculino-casual.png', whatsapp: '+5491152548398' },
    { id: 3, name: 'Majo', description: 'Asesore Digital Lorem ipsum dolor sit amet.', image: 'https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-silueta-de-avatar-masculino-casual.png', whatsapp: '+5491152548398' },
    /* --- */
  ];

  const openWhatsAppChat = (phoneNumber) => {
    window.open(`https://wa.me/${+5491152548398}`, '_blank');
  };

  const settings = {
    dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 4000,
      cssEase: "linear"
  };

  return (
    <div className="sales-carousel-container">
      <Slider {...settings}>
        {advisors.map((advisor) => (
          <div key={advisor.id} className="advisor-card card-asesor">
            <img src={advisor.image} alt="" className='asesor-img'/>
            <h3>{advisor.name}</h3>
            <p>{advisor.description}</p>
            <button type="button" class="btn-verde btn btn-success" onClick={() => openWhatsAppChat()}><FontAwesomeIcon className='btn-wpp' icon={faWhatsapp} />Chat de WhatsApp</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SalesAdvisorsCarousel;
