import React from "react";
import Peliculas from "../paginas/ListaPeliculas";
import "./Swipers.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard  } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import { PiSelectionBackgroundBold } from "react-icons/pi";

function Swipers() {
  return (
    <Swiper
    className="swipeContainer"
    modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
    spaceBetween={50}
    slidesPerView={5}
    loop="true"
    navigation={{clickable: true }}
    pagination={{ clickable: true, }}
    keyboard={{
          enabled: true,
        }}
    
    style={{
        '--swiper-navigation-color': '#62079F',
          '--swiper-pagination-color': '#62079F',
          "--swiper-pagination-bottom": "8px",

        }}
      
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide className="portada"> <div className="contenedor"><h4>{Peliculas[0].titulo}</h4> <p>{Peliculas[0].sinopsis}</p>
    </div> <img className="imagenSwiper" src={require("../Imagenes/Swiper/One_Life.jpg")}></img></SwiperSlide>


    <SwiperSlide className="portada"> <div className="contenedor"><h4>{Peliculas[1].titulo}</h4> <p>{Peliculas[1].sinopsis}</p>
    </div> <img className="imagenSwiper" src={require("../Imagenes/Swiper/Batman_vs_Superman.jpg")}></img></SwiperSlide>

    <SwiperSlide className="portada"> <div className="contenedor"><h4>{Peliculas[2].titulo}</h4> <p>{Peliculas[2].sinopsis}</p>
    </div> <img className="imagenSwiper" src={require("../Imagenes/Swiper/Toy_Story1.jpg")}></img></SwiperSlide>

    <SwiperSlide className="portada"> <div className="contenedor"><h4>{Peliculas[3].titulo}</h4> <p>{Peliculas[3].sinopsis}</p>
    </div> <img className="imagenSwiper" src={require("../Imagenes/Swiper/Dune_2.jpg")}></img></SwiperSlide>

    <SwiperSlide className="portada"> <div className="contenedor"><h4>{Peliculas[4].titulo}</h4> <p>{Peliculas[4].sinopsis}</p>
    </div> <img className="imagenSwiper" src={require("../Imagenes/Swiper/Star_wars1.jpg")}></img></SwiperSlide>

    <SwiperSlide className="portada"> <div className="contenedor"><h4>{Peliculas[5].titulo}</h4> <p>{Peliculas[5].sinopsis}</p>
    </div> <img className="imagenSwiper" src={require("../Imagenes/Swiper/Godzilla_x_Kong.jpg")}></img></SwiperSlide>

    <SwiperSlide className="portada"> <div className="contenedor"><h4>{Peliculas[0].titulo}</h4> <p>{Peliculas[0].sinopsis}</p>
    </div> <img className="imagenSwiper" src={require("../Imagenes/Swiper/One_Life.jpg")}></img></SwiperSlide>
    -
  </Swiper>

  );
}

export default Swipers;
