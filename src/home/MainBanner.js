import React, { useEffect, useState } from 'react'
import './MainBanner.css'
import { ApiExtra } from '../utils'

export default function MainBanner() {

    const [Banners, setBanners] = useState([])

    //metodo para que se actualize mi servidor
    useEffect(() => {
        leerServicio();
    }, [])
    const leerServicio = () => {
        const rutaServicio = ApiExtra + "sliders.php";
        fetch(rutaServicio)
            .then(Response => Response.json())
            .then(data => {
                console.log(data)
                setBanners(data)//almacenamos la data en lista envios

            });
    }

    return (
        <div id="myCarousel"  className="carousel slide carousel-fade banner-car" data-bs-ride="carousel">
            <div className="carousel-inner">
                {Banners.map((banner) => (
                    <div className={banner.idimg==1 ? 'carousel-item active' : 'carousel-item'} key={banner.idimg}>
                        <img src={banner.banner} className="d-block w-100"/>
                        <div className="carousel-caption d-none d-md-block ">
                            <h5>{banner.title}</h5>
                            <p>{banner.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
    
}


