import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './SwiperPrincipal.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';



export default function App() {

  
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        id='SwiperPrincipal'
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        style={{
              '--swiper-pagination-color': '#62079F',
              "--swiper-pagination-bullet-vertical-gap": "6px",
              "--swiper-pagination-bullet-horizontal-gap": "6%",
              }}
      >
        <SwiperSlide> <h2 className='titulo'>AVATAR: The way of the water</h2> <img src={require("../Imagenes/SwiperPrincipal/Avatar_elCaminodelAgua.jpg")}></img></SwiperSlide>
        <SwiperSlide> <h2 className='titulo'>Transformers Rise of the Beasts</h2> <img src={require("../Imagenes/SwiperPrincipal/Transformers_Rise_ofthe_Beasts.jpg")}></img></SwiperSlide>
        <SwiperSlide> <h2 className='titulo'>AVATAR</h2> <img src={require("../Imagenes/SwiperPrincipal/Avatar_elCaminodelAgua.jpg")}></img></SwiperSlide>
        <SwiperSlide> <h2 className='titulo'>AVATAR</h2> <img src={require("../Imagenes/SwiperPrincipal/Avatar_elCaminodelAgua.jpg")}></img></SwiperSlide>
        <SwiperSlide> <h2 className='titulo'>AVATAR</h2> <img src={require("../Imagenes/SwiperPrincipal/Avatar_elCaminodelAgua.jpg")}></img></SwiperSlide>
        <SwiperSlide> <h2 className='titulo'>AVATAR</h2> <img src={require("../Imagenes/SwiperPrincipal/Avatar_elCaminodelAgua.jpg")}></img></SwiperSlide>
        <SwiperSlide> <h2 className='titulo'>AVATAR</h2> <img src={require("../Imagenes/SwiperPrincipal/Avatar_elCaminodelAgua.jpg")}></img></SwiperSlide>
        <SwiperSlide> <h2 className='titulo'>AVATAR</h2> <img src={require("../Imagenes/SwiperPrincipal/Avatar_elCaminodelAgua.jpg")}></img></SwiperSlide>
        <SwiperSlide> <h2 className='titulo'>AVATAR</h2> <img src={require("../Imagenes/SwiperPrincipal/Avatar_elCaminodelAgua.jpg")}></img></SwiperSlide>
      </Swiper>
    </>
  );
}