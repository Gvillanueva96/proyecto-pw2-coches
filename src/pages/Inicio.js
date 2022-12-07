import React from "react";
import MainBanner from "../home/MainBanner";
import Bienvenida from "../home/Bienvenida";
import Noticias from "../home/Noticias";

export default function Inicio () {
    return (
        <>
            <MainBanner />
            <Noticias />
            <Bienvenida />
        </>
    );
};

