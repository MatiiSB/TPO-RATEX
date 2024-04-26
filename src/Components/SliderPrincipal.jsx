import React, { useRef } from "react";
import { Principal, ThumbnailItem } from "./Principal.jsx";
import "./Principal.css";
import { Button } from "@mui/material";

function SliderPrincipal() {
    const sliderRef = useRef(null);

    const moveSlider = (direction) => {
        const sliderList = sliderRef.current.querySelector('.list');
        const thumbnail = sliderRef.current.querySelector('.thumbnail');
        const sliderItems = sliderList.querySelectorAll('.item');
        const thumbnailItems = thumbnail.querySelectorAll('.item');

        if (direction === 'next') {
            sliderList.appendChild(sliderItems[0]);
            thumbnail.appendChild(thumbnailItems[0]);
            sliderRef.current.classList.add('next');
        } else {
            sliderList.prepend(sliderItems[sliderItems.length - 1]);
            thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
            sliderRef.current.classList.add('prev');
        }

        sliderRef.current.addEventListener('animationend', () => {
            if (direction === 'next') {
                sliderRef.current.classList.remove('next');
            } else {
                sliderRef.current.classList.remove('prev');
            }
        }, { once: true });
    };

    return (
        <div className="slider" ref={sliderRef}>
            <div className="list">
                <div className="item">
                    <Principal titulo="AVATAR 2: EL CAMINO DEL AGUA" descripcion="Tan re locos van a sacar como 6 peliculas mas de estos aliens azuleeeees" tipo="Aventura" src={require("../Imagenes/Carrusel_Principal/avatar-2.jpg")} />
                </div>
                <div className="item">
                    <Principal titulo="KUNG FU PANDA 4" descripcion="LA peor pelicula del panda re ql, todo generico como la de megamente 2" tipo="Infantil" src={require("../Imagenes/Carrusel_Principal/kung.jpg")} />
                </div>
                <div className="item">
                    <Principal titulo="GATO CON BOTAS 2" descripcion="Mejor que la 1, una obra maestra lo de antonio banderas haciendo de 60 voces y cobrando 50 palos verdes" tipo="Animada" src={require("../Imagenes/Carrusel_Principal/gato-2.jpg")} />
                </div>
                <div className="item">
                    <Principal titulo="DUNE PARTE 2" descripcion="La mejor pelicula del siglo sin lugar a dudas es lo mejor que vi en mis ultimos 25 años" tipo="Accion" src={require("../Imagenes/Carrusel_Principal/dune-parte2.jpg")} />
                </div>
            </div>
            <div className="thumbnail">
                <div className="item">
                    <ThumbnailItem im={require("../Imagenes/Carrusel_Principal/dune-parte2.jpg")} />
                </div>
                <div className="item">
                    <ThumbnailItem im={require("../Imagenes/Carrusel_Principal/avatar-2.jpg")} />
                </div>
                <div className="item">
                    <ThumbnailItem im={require("../Imagenes/Carrusel_Principal/kung.jpg")} />
                </div>
                <div className="item">
                    <ThumbnailItem im={require("../Imagenes/Carrusel_Principal/gato-2.jpg")} />
                </div>
            </div>
            <div className="nextPrevArrows">
                <Button className="prev" onClick={() => moveSlider('prev')} id="boton">prev</Button>
                <Button className="next" onClick={() => moveSlider('next')} id="boton">next</Button>
            </div>
        </div>
    );
}

export default SliderPrincipal;
