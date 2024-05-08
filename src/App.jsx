import "./App.css";
import {NavBar} from "./Components/NavBar.jsx";
import Inicio from "./Components/Inicio.jsx";
import MiFooter from "./Components/MiFooter.jsx";
import RatexPrivacyPolicy from "./Components/RatexPrivacyPolicy.jsx";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import NavBarLateral from "./Components/NavBarLateral.jsx";
import Actores from "./paginas/Actores.jsx";
import Categorias from "./paginas/Categorias.jsx";
import Filtros from "./paginas/Filtros.jsx";
import Puntuacion from "./paginas/Puntuacion.jsx";
import Series from "./paginas/Series.jsx";
import Peliculas from "./paginas/Peliculas.jsx";
import {Faqs} from "./Components/FAQs.jsx"
import React, {useState,useEffect} from "react";
import { ScrollTop } from 'primereact/scrolltop';



function App() {

  return (
    <BrowserRouter>
      <div className="App ">
        <NavBar id="navbar"  />
        <NavBarLateral>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Actores" element={<Actores />} />
            <Route path="/Categorias" element={<Categorias />} />
            <Route path="/Filtros" element={<Filtros />} />
            <Route path="/Peliculas" element={<Peliculas />} />
            <Route path="/Puntuacion" element={<Puntuacion />} />
            <Route path="/Series" element={<Series />} />
            <Route path="/FAQs" element={<Faqs/>} />
            <Route path="/RatexPrivacyPolicy" element={<RatexPrivacyPolicy/>}/>
          </Routes>
        </NavBarLateral>
        <ScrollTop className="scrollButton" />
        <MiFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
