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
                  <button type="button" class="btn-verde-wpp btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><FontAwesomeIcon className='btn-wpp' icon={faWhatsapp} />Me Interesa</button>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-principal modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Hacé tu consulta, nosotros te asesoramos.</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div class="mb-3">
                            <input type="text" class="form-control" id="recipient-name" placeholder='Nombre y Apellido*' />
                          </div>
                          <div class="mb-3">
                            <input type="text" class="form-control" id="recipient-name" placeholder='Ingresá tu DNI (Sin Puntos)' />
                          </div>
                          <div class="mb-3">
                            <input type="text" class="form-control" id="recipient-name" placeholder='Email*' />
                          </div>
                          <div class="form-group mb-3">
                            <select class="form-control" id="provinciaSelect" name="provincia">
                              <option value="" selected disabled>- - Selecciona una provincia - -</option>
                              <option value="Buenos Aires">Buenos Aires</option>
                              <option value="CABA">Ciudad Autónoma de Buenos Aires</option>
                              <option value="Catamarca">Catamarca</option>
                              <option value="Chaco">Chaco</option>
                              <option value="Chubut">Chubut</option>
                              <option value="Córdoba">Córdoba</option>
                              <option value="Corrientes">Corrientes</option>
                              <option value="Entre Ríos">Entre Ríos</option>
                              <option value="Formosa">Formosa</option>
                              <option value="Jujuy">Jujuy</option>
                              <option value="La Pampa">La Pampa</option>
                              <option value="La Rioja">La Rioja</option>
                              <option value="Mendoza">Mendoza</option>
                              <option value="Misiones">Misiones</option>
                              <option value="Neuquén">Neuquén</option>
                              <option value="Río Negro">Río Negro</option>
                              <option value="Salta">Salta</option>
                              <option value="San Juan">San Juan</option>
                              <option value="San Luis">San Luis</option>
                              <option value="Santa Cruz">Santa Cruz</option>
                              <option value="Santa Fe">Santa Fe</option>
                              <option value="Santiago del Estero">Santiago del Estero</option>
                              <option value="Tierra del Fuego">Tierra del Fuego</option>
                              <option value="Tucumán">Tucumán</option>
                            </select>
                          </div>
                          <div class="mb-3">
                            <input type="text" class="form-control" id="recipient-name" placeholder='Tel. Celular sin 0 ni 15 Ej: 1167685915*' />
                          </div>
                          <div class="form-group mb-3">
                            <select class="form-control" id="provinciaSelect" name="provincia">
                              <option value="" selected disabled>Elegí tu medio de Pago</option>
                              <option value="Buenos Aires">Contado</option>
                              <option value="CABA">Contado y Crédito</option>
                              <option value="Catamarca">Contado y Tarjeta</option>
                              <option value="Catamarca">Crédito con DNI</option>
                            </select>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn_cerrar_frm btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn_quiero_asesoramiento btn btn-success" onClick={() => openWhatsAppChat()}><FontAwesomeIcon className='btn-wpp' icon={faWhatsapp} />Me Interesa</button>
                      </div>
                    </div>
                  </div>
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
