import React from "react";
import Slider from "react-slick";
import abstract01 from "../assets/01.png";
import abstract02 from "../assets/02.png";
import abstract03 from "../assets/03.png";
import abstract04 from "../assets/04.png";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const CardSlider = () => {
    const settings = {
        customPaging: function (i) {
            const images = [abstract01, abstract02, abstract03, abstract04];
            const colors = ["white", "blue", "black", "red"];
            return (
                <a>
                    <div className="imgdot" src={images[i]} alt={`abstract ${i + 1}`} style={{ backgroundColor: colors[i] }}></div>
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const openWhatsAppChat = (phoneNumber) => {
        window.open(`https://wa.me/${+5491152548398}`, '_blank');
    };

    return (
        <div className="slider-container">
            <div className="container-card card mb-4 mt-2">
                <div className='card-top'>
                    <h2 className="title-card">BLITZ BASE 110</h2>
                </div>
                <div className='container-cucardas'>
                    <img className='marca-moto' src="https://www.ingenplast.com/images/logo-corven.png" alt="" srcset="" />
                    <img className='cucarda-moto' src="https://ofertas.yuhmak.com.ar/uploads/150X150%20CONTADO.png" alt="" srcset="" />
                </div>
                <Slider {...settings}>
                    <div>
                        <img className="imgcardslice" src={abstract01} alt="abstract 1" />
                    </div>
                    <div>
                        <img className="imgcardslice" src={abstract02} alt="abstract 2" />
                    </div>
                    <div>
                        <img className="imgcardslice" src={abstract03} alt="abstract 3" />
                    </div>
                    <div>
                        <img className="imgcardslice" src={abstract04} alt="abstract 4" />
                    </div>
                </Slider>
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
                                    <button type="button" class="btn-verde btn btn-success" onClick={() => openWhatsAppChat()}><FontAwesomeIcon className='btn-wpp' icon={faWhatsapp} />Me Interesa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSlider;
