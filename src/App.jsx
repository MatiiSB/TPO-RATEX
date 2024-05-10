import "./App.css";
import { NavBar } from "./Components/NavBar.jsx";
import Inicio from "./Components/Inicio.jsx";
import MiFooter from "./Components/MiFooter.jsx";
import RatexPrivacyPolicy from "./Components/RatexPrivacyPolicy.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarLateral from "./Components/NavBarLateral.jsx";
import WatchList from "./paginas/WatchList.jsx";
import Categorias from "./paginas/Categorias.jsx";
import Puntuacion from "./paginas/Puntuacion.jsx";
import Series from "./paginas/Series.jsx";
import Peliculas from "./paginas/Peliculas.jsx";
import { Faqs } from "./Components/FAQs.jsx";
import React, { useState } from "react";
import { ScrollTop } from "primereact/scrolltop";
import Perfil from "./Components/Perfil.jsx";
import DataProvider from "./Components/Contexto.jsx";
import Datos from "./Components/Pelicula/Datos.jsx";

function App() {
  const [watchEnviar, setWatchEnviar] = useState([]);

  const updateWatchlist = (watch) => {
    // Verificar si la película ya está en la lista
    const estaEnLista = watchEnviar.some(item => item.id === watch.id);
    if (!estaEnLista) {
        setWatchEnviar([...watchEnviar, watch]);
    } else {
        alert("La película ya está en la lista de seguimiento.");
    }
  };
  const quitarElementoWatchlist = (index) => {
    const nuevaLista = watchEnviar.filter((_, i) => i !== index);
    setWatchEnviar(nuevaLista);
  };


  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar id="navbar" />
          <NavBarLateral>
            <Routes>
              <Route path="/Perfil" element={<Perfil />} />
              <Route path="/" element={<Inicio />} />
              <Route
                path="/WatchList"
                element={<WatchList porver={watchEnviar} quitarElemento={quitarElementoWatchlist}  />}
              />
              <Route path="/Categorias" element={<Categorias />} />
              <Route
                path="/Peliculas"
                element={<Peliculas updateWatchlist={updateWatchlist} />}
              />
              <Route path="/Datos/:name" element={<Datos />} />
              <Route path="/Puntuacion" element={<Puntuacion />} />
              <Route path="/Series" element={<Series />} />
              <Route path="/FAQs" element={<Faqs />} />
              <Route
                path="/RatexPrivacyPolicy"
                element={<RatexPrivacyPolicy />}
              />
            </Routes>
          </NavBarLateral>
          <ScrollTop className="scrollButton" />
          <MiFooter />
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
