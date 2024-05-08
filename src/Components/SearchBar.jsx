import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css"

//let abrirBusqueda = addEventListener
//usar props para buscar por peli-actor-genero-calificacion

function SearchBar(url, BASE_URL) {
    const [showFilters, setShowFilters] = useState(false);

    const handleInputFocus = () => {
        setShowFilters(true);
    };

    return (
        <div className="searchBarContainer">
            <Link to="/filtros"> 
                <input type="text" placeholder="Busca tu película" onChange={handleInputFocus} />
            </Link> 
                <button className="buscar">
                    <img alt="icono de búsqueda" src="/Imagenes/busqueda.png"></img>
                </button> {/* Agregar enlace a la página de filtros */}
        </div>
    );
};

export default SearchBar;