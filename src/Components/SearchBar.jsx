import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css"
const API_KEY = 'api_key=93648cb92189cb6216b357ed5dfdf548';
const BASE_URL = 'https://api.themoviedb.org/3';
let url = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;

function SearchBar() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch]= useState("");
    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Error al obtener las películas.');
                }
                return res.json();
            })
            .then(data => {
                setMovies(data.results);
            })
            .catch(error => {
                console.error('Error de red:', error);
                setMovies([]);
            });
    }, [movies]);

    let searchMovie=(evt)=>{
        if(evt.key==="Enter"){
            let url = `${BASE_URL}/search/movie?${API_KEY}&query=${search}`;
            setMovies(url);
            setSearch("")
        }
    }
    return (
        <div className="searchBarContainer">
            <Link to="/Peliculas"> 
                <input type="text" placeholder="Busca tu película" onChange={(e)=>{setSearch(e.target.value)}} 
                value={search} onKeyDown={searchMovie}/>
            </Link> 
                <button className="buscar">
                    <img alt="icono de búsqueda" src="/Imagenes/busqueda.png"></img>
                </button>
        </div>
    );
};

export default SearchBar;