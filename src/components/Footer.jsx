import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './footer.css'

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-content">
                <div class="container text-center">
                    <div class="container-list row">
                        <div class="iconredes col-lg-4 col-md-4 col-sm-10">
                            <a className='iconfb' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a className='iconyt' href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a className='iconig' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a className='iconlink' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                        <div class="col_logo col-lg-4 col-md-4 col-sm-10">
                            <img src="https://ofertas.yuhmak.com.ar/images/Yuhmak_Marca-BLANCO.svg" alt="" />
                            <p>© Yuhmak 2024. Todos los derechos reservados</p>
                        </div>
                        <div class="col_footer_right col-left col-lg-4 col-md-4 col-sm-10">
                            <ul>
                                <li><a href="https://www.yuhmak.com/sucursales" target='blank'>Sucursales</a></li>
                                <li><a href="https://www.yuhmak.com/nosotros" target='blank'>Sobre Nosotros</a></li>
                                <li><a href="https://www.yuhmak.com/politicas" target='blank'>Políticas de privacidad</a></li>
                                <li><a href="https://www.yuhmak.com/terminos" target='blank'>Términos y Condiciones</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer