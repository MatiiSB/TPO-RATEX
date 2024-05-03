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
    {Peliculas.map((item,index) => (
      <SwiperSlide className="portada"> <div className="contenedor"><h4>{item.titulo}</h4> <p>{item.sinopsis}</p>
    </div> <img className="imagenSwiper" src={item.portada} ></img></SwiperSlide>)
    )}
    -
  </Swiper>

  );
}

export default Swipers;
