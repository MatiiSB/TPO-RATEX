import React, { useEffect, useState } from "react";
import "./Filtros.css";
import Card from "../Components/Card";
import Generos from "../Components/Generos";
import { Button } from "@mui/material";
import { Link, useNavigate} from "react-router-dom";

const API_KEY = 'api_key=93648cb92189cb6216b357ed5dfdf548';
const BASE_URL = 'https://api.themoviedb.org/3';
let url = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
const generos = `${BASE_URL}/genre/movie/list?language=es&${API_KEY}`;


function Filtros() {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState(() => {
    return [];
    });
   
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
        url= `https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&with_genres=` + genreId + `&${API_KEY}`
        };
    const resetFilter = () =>{
        url = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
    }
    return (
        <div className="container">
            <div className="container">
                {genres.map((genre, index, url) => (
                    <Generos info2={genre} key2={index} onClick={handleGenreClick}/>
                ))}
            <Button id='boton' onClick={resetFilter}>Borrar Filtro</Button>
            </div>
            {movies.length === 0 ? (
                <p className="notFound">Películas no encontradas.</p>
            ) : (
                movies.map((movie, index) =>
                <>
                   <Link key={movie.id} to={`/Datos/${movie.original_title}`}  state={{movieDetalles:movie}} ><Card info={movie} key={index} /></Link>
                </>
                ))}
        </div>
    );
}

export default Filtros;
