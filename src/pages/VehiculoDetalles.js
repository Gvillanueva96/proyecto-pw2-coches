import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './VehiculoDetalles.css'
import { ApiPrueba } from '../utils';

const VehiculoDetalles = () => {
    const [itemVehiculos, setItemVehiculos] = useState([]);

    useEffect(() => {
        leerServicios();
    }, []);


    const leerServicios = () => {
        const rutaServicio = ApiPrueba + 'vehiculos?idvehiculo=' + params.idvehiculo;
        fetch(rutaServicio)
            .then(Response => Response.json())
            .then(data => {
                // console.log(data[0])
                setItemVehiculos(data[0]);
            });
    }
    let params = useParams();

    return (
        <section className='padded'>
            <div className='container'>
                <div className="row detalle">
                    <div className="inventory-heading margin-bottom-10 clearfix">
                        <div className="row">
                            <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                <h2>{itemVehiculos.modelo}</h2>
                                <span className="margin-top-10">Our template platform will maximize the exposure of your inventory online</span></div>
                            <div className="col-lg-2 col-md-2 col-sm-12 text-right">
                                <h2>$ {parseFloat(itemVehiculos.precio).toFixed(2)}</h2>
                                <em>Plus Taxes &amp; Licensing</em>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-5 col-xl-5">
                        <img src={itemVehiculos.img} className='img-fluid imagen-detalle' alt="" />
                    </div>

                    <div className="col-md-4">
                        <table className="table">
                            <tbody>
                                <tr><th>CARROCERIA:</th><td>{itemVehiculos.carroceria}</td></tr>
                                <tr><th>MOTOR:</th><td>{itemVehiculos.motor}</td></tr>
                                <tr><th>TRANSMISION:</th><td>{itemVehiculos.transmision}</td></tr>
                                <tr><th>PUERTAS:</th><td>{itemVehiculos.puertas}</td></tr>
                                <tr><th>FABRICACIÓN</th><td>{itemVehiculos.fabricacion}</td></tr>
                            </tbody>
                        </table>
                        <h3>Descripcion</h3>
                        <div>{itemVehiculos.descripcion}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VehiculoDetalles