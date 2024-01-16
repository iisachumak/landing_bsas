import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSquareFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

import './footer.css'

const Footer = () => {
    /*-Func para obtener fecha-*/
    const getCurrentYear = () => new Date().getFullYear();
    return (
        <footer class="footer">
            <div class="footer-content">
                <div class="container text-center">
                    <div class="container-list row">
                        <div class="col-left col-lg-4 col-md-4 col-sm-10">
                            <ul>
                                <li><a href="">Términos y Condiciones</a></li>
                                <li><a href="">Sucursales</a></li>
                                <li><a href="">Sobre Nosotros</a></li>
                                <li><a href="">Políticas de privacidad</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-10">
                            <img src="https://ofertas.yuhmak.com.ar/images/Yuhmak_Marca-BLANCO.svg" alt="" />
                        </div>
                        <div class="col-right col-lg-4 col-md-4 col-sm-10">
                            <ul>
                                <li>Item</li>
                                <li>Item</li>
                                <li>Item</li>
                                <li>Item</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer