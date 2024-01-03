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

    return (
        <div className="container-card card m-4">
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
                    <h5 className="info-card">Con tu compra casco y llavero de regalo</h5>
                    <div className="container text-center">
                        <div className="card-buttom row">
                            <div className="col-lg-6">
                                <h3 className='price'>$860.877</h3>
                            </div>
                            <div className="card-button col-lg-6">
                                <button type="button" className="btn-verde btn btn-success mb-2"><FontAwesomeIcon className='btn-wpp'  icon={faWhatsapp} />Me interesa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card