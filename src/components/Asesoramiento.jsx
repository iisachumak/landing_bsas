import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import './asesoramiento.css'

const Asesoramiento = () => {

  const openWhatsAppChat = (phoneNumber) => {
    window.open(`https://wa.me/${+5491152548398}`, '_blank');
  };

  return (
    <div class="contenedor_filtro container text-center">
      <div class="row m-2">
        <div class="col">
          <button type="button" className="btn-asesoriamiento btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Quiero Asesoramiento</button>
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

        <div class="col">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Cilindradas
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">0 CC - 124 CC</a></li>
              <li><a class="dropdown-item" href="#">125 CC - 200 CC</a></li>
              <li><a class="dropdown-item" href="#">201 CC - 250 CC</a></li>
              <li><a class="dropdown-item" href="#">251 CC - 500 CC</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Asesoramiento