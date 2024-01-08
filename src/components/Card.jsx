import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import './card.css'

const Card = () => {

    const [imageURL, setImageURL] = useState('https://corvenmotos.com.ar/wp-content/uploads/2021/03/New-Energy-110-Blanca.png');

    const handleMouseOver1 = () => {
        setImageURL('https://corvenmotos.com.ar/wp-content/uploads/2021/03/New-Energy-110-Azul.png');
    };

    const handleMouseOver2 = () => {
        setImageURL('https://corvenmotos.com.ar/wp-content/uploads/2021/03/New-Energy-110-Gris.png');
    };

    const handleMouseOver3 = () => {
        setImageURL('https://corvenmotos.com.ar/wp-content/uploads/2021/03/New-Energy-110-Roja-1.png');
    };

    const handleMouseOut = () => {
        setImageURL('https://corvenmotos.com.ar/wp-content/uploads/2021/03/New-Energy-110-Blanca.png');
    };

    const openWhatsAppChat = (phoneNumber) => {
        window.open(`https://wa.me/${+5491152548398}`, '_blank');
      };

    return (
        <div className="container-card card mb-4 mt-2">
            <ul className="thum-card">
                <li className='li-card' onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut}>
                    <img src='https://corvenmotos.com.ar/wp-content/uploads/2021/03/New-Energy-110-Azul.png' className="img_right-card" alt="" />
                </li><li className='li-card' onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut}>
                    <img src="https://corvenmotos.com.ar/wp-content/uploads/2021/03/New-Energy-110-Gris.png" className="img_right-card" alt="" />
                </li>
                <li className='li-card' onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut}>
                    <img src="https://corvenmotos.com.ar/wp-content/uploads/2021/03/New-Energy-110-Roja-1.png" className="img_right-card" alt="" />
                </li>
            </ul>
            <div className="imgBox-card">
                <div className='card-top'>
                    <h2 className="title-card">BLITZ BASE 110</h2>
                </div>
                <div className='container-cucardas'>
                    <img className='marca-moto' src="https://www.ingenplast.com/images/logo-corven.png" alt="" srcset="" />
                    <img className='cucarda-moto' src="https://ofertas.yuhmak.com.ar/uploads/150X150%20CONTADO.png" alt="" srcset="" />
                </div>
                <img src={imageURL} className="imgcenter-card" alt="" />
            </div>
            <div className="principal-card">
                <div className="containerasesor-card">
                    <div class="div-info text-center">
                        <p className="info-card">Con tu compra casco y llavero de regalo</p>
                    </div>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <p className='price'>
                                    $860.877
                                </p>
                            </div>
                            <div class="col">
                                <button type="button" class="btn-verde btn btn-success" onClick={() => openWhatsAppChat()}><FontAwesomeIcon className='btn-wpp' icon={faWhatsapp} />Me Interesa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card