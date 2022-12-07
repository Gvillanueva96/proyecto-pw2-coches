import React from 'react'
import { Link } from 'react-router-dom';
import './MainNav.css'

const MainNav = () => {
    return (
        <nav id='navid' className="navbar navbar-expand-lg navbar-dark  sticky-top">
            <div className="container">
                <div className="navbar-header">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <a className="navbar-brand" href="/">
                        <span className="logo">
                            <span className="primary_text">Automotive</span>
                            <span className="secondary_text">PORSCHE</span>
                        </span>
                    </a>
                </div>
                <div className="collapse navbar-collapse derecha" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link inicio" href="/#">INICIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#noticias">NOTICIAS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#welcome">NOSOTROS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#miscelanea">CONTACTOS</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/proveedores">PROVEEDORES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link inicio" to="/Concesionario">CONCESIONARIO</Link>
                        </li>
                    </ul>
                    
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/carrito">
                                <i className="bi bi-basket-fill"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MainNav;
