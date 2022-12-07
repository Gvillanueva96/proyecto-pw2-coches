import React, { useEffect, useState } from 'react'
import Vehiculos from '../components/Vehiculos';
import { ApiPrueba } from '../utils';
import './Concesionario.css'
export default function Concesionario() {


    const [listaCategorias, setlistaCategorias] = useState([]);
    const [categoriaSelecionada, setcategoriaSelecionada] = useState([]);

    useEffect(() => {
        leerservicio();
    }, [])
    const leerservicio = () => {
        const urlruta = ApiPrueba+"categorias"
        fetch(urlruta)
            .then(response => response.json())
            .then(datos => {
                //console.log(datos);
                setlistaCategorias(datos)
            })
    }

    const seleccionarCategoria = (e, i) => {
        // console.log(i)
        setcategoriaSelecionada(i);
        // console.log(e)
        var itemLista = document.querySelectorAll('#lista-categorias li')
        itemLista.forEach(i => {
            i.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
        //currentTaget el objeto que recibio el evento

    }

    return (
        <section>
            <div>
                <section id="conces" className='padded'>
                    <div className="container">
                        <h2>CONCECIONARIO</h2>
                        <div className="row">
                            <div className="col-md-3">
                                <ul className="list-group" id="lista-categorias">
                                    {listaCategorias.map((i) => (
                                        <li className="list-group-item" key={i.idcategoria}
                                            onClick={(e) => seleccionarCategoria(e, i)}>
                                            <h5>{i.nombre}</h5>
                                            <p>{i.descripcion}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-md-9">
                                <h3>{categoriaSelecionada.nombre}</h3>
                                <small>{categoriaSelecionada.descripcion}</small>
                                <Vehiculos categoriaVehiculos={categoriaSelecionada.idcategoria} />{/*asi pasamos el parameto al componente producto s9_0:09*/}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}