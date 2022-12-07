import React, { useEffect, useState } from 'react'
import { ApiPrueba } from '../utils';
import { Link } from 'react-router-dom';
import './Vehiculos.css'

const Vehiculos = (props) => {

    const [listaVehiculos, setlistaVehiculos] = useState([]);
    //console.log(props)
    useEffect(() => {
        leerServicios(props.categoriaVehiculos);
    }, [props.categoriaVehiculos]);

    const leerServicios = (idvehiculo) => {
        const rutaServicio = ApiPrueba + 'vehiculos?idcategoria=' + idvehiculo;
        fetch(rutaServicio)
            .then(Response => Response.json())
            .then(data => {
                setlistaVehiculos(data);
            });
    }

    const dibujarTabla = () => {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Modelo</th>
                        <th>Carrocería</th>
                        <th>Transmisión</th>
                        <th>Puertas</th>
                        <th>Fabricación</th>
                        <th className='text-end'>Precio S/</th>
                    </tr>
                </thead>
                <tbody>
                    {listaVehiculos.map((i) => (
                        <tr key={i.idvehiculo}>
                            <td>{i.idvehiculo}</td>
                            <td>{i.modelo}</td>
                            <td>{i.carroceria}</td>
                            <td>{i.transmision}</td>
                            <td>{i.puertas}</td>
                            <td>{i.fabricacion}</td>
                            <td className='text-end'>
                                <span className='precio-lista' >{"$" + parseFloat(i.precio).toFixed(2)}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    const agregarCarrito = (item) => {
        item.cantidad = 1;
        console.log(item);
        let carrito = [];
        if (sessionStorage.getItem("carrito")) {
            carrito = JSON.parse(sessionStorage.getItem("carrito"));
            let index = -1;
            for (let i = 0; i < carrito.length; i++) {
                let itemCarrito = carrito[i];
                if (itemCarrito.idvehiculo === item.idvehiculo) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                carrito.push(item);//Así se agrega un elemento a un arreglo
                sessionStorage.setItem("carrito", JSON.stringify(carrito));
            }
            else {
                let iCarrito = carrito[index]
                iCarrito.cantidad++
                carrito[index] = iCarrito;
                sessionStorage.setItem("carrito", JSON.stringify(carrito));
            }
        }
        else {
            carrito.push(item);//Así se agrega un elemento a un arreglo
            sessionStorage.setItem("carrito", JSON.stringify(carrito));
        }
    }

    const dibujarCuadricula = () => {
        return (
            <>
                <div className="container tabla-coches">
                    <h2>VEHICULOS</h2>
                    <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 g-2">
                        {listaVehiculos.map((i) => (
                            <div className="col" key={i.idvehiculo}>
                                <div className="card h-100 tarjeta-coche">
                                    <div className="title titulo-coche">{i.modelo}
                                    </div>
                                    <Link to={"/vehiculoDetalles/" + i.idvehiculo}>
                                        <img src={i.img}
                                            className="card-img-top" alt="..." />
                                    </Link>
                                    <table className="options-primary">
                                        <tbody>
                                            <tr>
                                                <td className="option primary">Carroceria:</td>
                                                <td className="spec">{i.carroceria}</td>
                                            </tr>
                                            <tr>
                                                <td className="option primary">Fabric.:</td>
                                                <td className="spec">{i.fabricacion}</td>
                                            </tr>
                                            <tr>
                                                <td className="option primary">Precio:</td>
                                                <td className="spec"><p className="card-text">${parseFloat(i.precio).toFixed(2)}
                                                </p></td>
                                            </tr>
                                            <button type="button" className="btn btn-success btnCarrito" title="Añadir al carrito" onClick={() => agregarCarrito(i)}>Agregar <i className="bi bi-basket-fill"></i></button>
                                        </tbody></table>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#cuadricula-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                        <i className="bi bi-grid-3x3-gap-fill"></i>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#tabla-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                        <i className="bi bi-list"></i>
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="cuadricula-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                    {dibujarCuadricula()}
                </div>
                <div className="tab-pane fade" id="tabla-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                    {dibujarTabla()}
                </div>
            </div>
        </>
    )
}

export default Vehiculos;
