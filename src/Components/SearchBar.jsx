import React, { useState, useEffect } from "react";
import "./SearchBar.css";
const API_KEY = 'api_key=93648cb92189cb6216b357ed5dfdf548';
const BASE_URL = 'https://api.themoviedb.org/3';

function SearchBar(props) {
    let [search, setSearch] = useState("");

    const searchMovie = (evt) => {
            let newUrl = `${BASE_URL}/search/movie?${API_KEY}&query=${search}`;
            props.updateUrl(newUrl);
    };

    return (
        <div className="searchBarContainer">
            <input 
                type="text" 
                placeholder="Busca tu película" 
                onChange={(e) => setSearch(e.target.value)} 
                value={search} 
                onKeyDown={searchMovie}
            />
            <button className="buscar">
                <img alt="icono de búsqueda" src="/Imagenes/busqueda.png" />
            </button>
        </div>
    );
};

export default SearchBar;