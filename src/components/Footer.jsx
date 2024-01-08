import React from 'react'

const Footer = () => {
    /*-Func para obtener fecha-*/
    const getCurrentYear = () => new Date().getFullYear();
    return (
        <footer class="footer">
            <div class="footer-content">
                <p>© {getCurrentYear()} Chumak</p>
                <ul class="footer-links">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer