import React, { useEffect, useState } from "react";
import "./Filtros.css";
import Card from "../Components/Card";
import Generos from "../Components/Generos";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { CiHeart, CiUnread, CiRead } from "react-icons/ci";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Importa jwt_decode

const API_KEY = 'api_key=93648cb92189cb6216b357ed5dfdf548';
const BASE_URL = 'https://api.themoviedb.org/3';
let url = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
const generos = `${BASE_URL}/genre/movie/list?language=es&${API_KEY}`;

function Peliculas(props) {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const accessToken = sessionStorage.getItem('accessToken');
        setIsLoggedIn(!!accessToken);

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

    useEffect(() => {
        fetch(generos)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Error al obtener los géneros.');
                }
                return res.json();
            })
            .then(data => {
                setGenres(data.genres);
            })
            .catch(error => {
                console.error('Error de red:', error);
                setGenres([]);
            });
    }, []);

    const handleGenreClick = (genreId) => {
        url = `https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&with_genres=` + genreId + `&${API_KEY}`;
    };

    const resetFilter = () => {
        url = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
    };

    const updateUrl = (newUrl) => {
        url = newUrl;
    };

    const sendWatchlistData = (peliculaId, posterPath, titulo, idTipoLista) => {
        try {
            const accessToken = sessionStorage.getItem("accessToken");
            const decoded = jwtDecode(accessToken); // Decodifica el token
            const idUsuario = decoded.mail; // Usa el correo del usuario del token
            const data = { idUsuario, idTipoLista, idPeliculas: peliculaId, posterpath: posterPath, titulo: titulo };

            axios.post("http://localhost:3006/listas/", data, {
                headers: {
                    accessToken: accessToken
                }
            })
            .then(response => {
                if (!response.data.error) {
                    console.log("¡Pelicula agregada a la lista!");
                } else {
                    alert(response.data.error);
                }
            });
        } catch (error) {
            console.error('Error al decodificar el token:', error);
        }
    };

    return (
        <div className="container">
            <SearchBar updateUrl={updateUrl}></SearchBar>
            <div className="container">
                {genres.map((genre, index) => (
                    <Generos info2={genre} key2={index} onClick={handleGenreClick} />
                ))}
                <Button id='boton' onClick={resetFilter}>Borrar Filtro</Button>
            </div>
            {movies.length === 0 ? (
                <p className="notFound">Películas no encontradas.</p>
            ) : (
                movies.map((movie, index) =>
                    <div key={index}>
                        <Link to={`/Datos/${movie.original_title}`} state={{ movieDetalles: movie }}>
                            <Card info={movie} />
                        </Link>
                        {isLoggedIn && (
                            <>
                                <Button id="boton" onClick={() => sendWatchlistData(movie.id, movie.poster_path, movie.title, 1)}><CiHeart /></Button>
                                <Button id="boton" onClick={() => sendWatchlistData(movie.id, movie.poster_path, movie.title, 2)}><CiRead /></Button>
                                <Button id="boton" onClick={() => sendWatchlistData(movie.id, movie.poster_path, movie.title, 3)}><CiUnread /></Button>
                            </>
                        )}
                    </div>
                )
            )}
        </div>
    );
}

export default Peliculas;
