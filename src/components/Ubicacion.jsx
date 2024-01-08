import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const Ubicacion = () => {
    return (
        <div class="container text-center mt-2">
            <div class="row">
                <div class="col-md-6 col-sm-12 mt-3 mb-3">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="btn_ubicacion accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    AMBA
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <FontAwesomeIcon className='icongps' icon={faLocationDot} />Av. Brig. Gral. Juan Manuel de Rosas 3157, B1754 San Justo, Provincia de Buenos Aires <br />
                                            <FontAwesomeIcon className='icontel' icon={faPhone} />Administración/Gestoría: <strong>011 15-2291-8498</strong><br />
                                            <FontAwesomeIcon className='icontel' icon={faPhone} />Service/Repuestos: <strong>11 15-7619-5947</strong>
                                        </li>
                                        <li class="list-group-item">
                                            <FontAwesomeIcon className='icongps' icon={faLocationDot} />Av. Brig. Gral. Juan Manuel de Rosas 3101, B1754 San Justo, Provincia de Buenos Aires <br />
                                            <FontAwesomeIcon className='icontel' icon={faPhone} />Administración/Gestoría: <strong>011 15-2291-8498</strong><br />
                                            <FontAwesomeIcon className='icontel' icon={faPhone} />Service/Repuestos: <strong>11 15-7619-5947</strong>
                                        </li>
                                        <li class="list-group-item">
                                            <FontAwesomeIcon className='icongps' icon={faLocationDot} />Av. Hipólito Yrigoyen 1171/73, B1708DLN Morón, Provincia de Buenos Aires<br />
                                            <FontAwesomeIcon className='icontel' icon={faPhone} />Administración/Service: <strong>0381 15-350-0955</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="btn_ubicacion accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    CABA
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <FontAwesomeIcon className='icongps' icon={faLocationDot} />Av. Corrientes 4401 (Esquina Pringles) Almagro, Buenos Aires
                                            <FontAwesomeIcon className='icontel' icon={faPhone} />Administración/Service: <strong>011 15-5002-2835</strong></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 mt-3 mb-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14240.972561537972!2d-65.2026133!3d-26.8322179!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1704542878327!5m2!1ses!2sar" width="400" height="300" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Ubicacion