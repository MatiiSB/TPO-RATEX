import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import YouTube from "react-youtube";
import Rating from "./Rating";
import Elenco from "./Elenco";
import "./InfoPelicula.css";

const API_KEY = "api_key=93648cb92189cb6216b357ed5dfdf548";
const BASE_URL = "https://api.themoviedb.org/3";

function Datos() {
    const location = useLocation();
    const [movieDetalles, setMovieDetalles] = useState({});
    const [director, setDirector] = useState("");
    const [videos, setVideos] = useState([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
        if (location.state?.movieDetalles) {
            setMovieDetalles(location.state.movieDetalles);
        }
    }, [location]);

    useEffect(() => {
        const fetchCredits = async () => {
            if (movieDetalles.id) {
                try {
                    const response = await fetch(`${BASE_URL}/movie/${movieDetalles.id}/credits?${API_KEY}`);
                    const data = await response.json();
                    const directorData = data.crew.find(member => member.job === "Director");
                    setDirector(directorData ? directorData.name : "Desconocido");
                } catch (error) {
                    console.error("Error al obtener el director:", error);
                }
            }
        };

        fetchCredits();
    }, [movieDetalles.id]);

    useEffect(() => {
        if (movieDetalles.id) {
            const url = `${BASE_URL}/movie/${movieDetalles.id}/videos?${API_KEY}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setVideos(data.results))
                .catch(error => {
                    console.error("Error al obtener los videos:", error);
                    setVideos([]);
                });
        }
    }, [movieDetalles.id]);

    const handleNextVideo = () => {
        setCurrentVideoIndex(currentIndex => (currentIndex === videos.length - 1 ? 0 : currentIndex + 1));
    };

    const handlePreviousVideo = () => {
        setCurrentVideoIndex(currentIndex => (currentIndex === 0 ? videos.length - 1 : currentIndex - 1));
    };

    const video = videos[currentVideoIndex];

    return (
        <div>
            <div className="datos">
                <div className="fondo">
                    <img src={`https://image.tmdb.org/t/p/original${movieDetalles.backdrop_path}`} alt={movieDetalles.title} />
                </div>
                <section className="seccion">
                    <div className="info">
                        <div>
                            <h1 className="infoTitulo">{movieDetalles.title}</h1>
                            <p>{movieDetalles.overview}</p>
                            <h2>
                                <span style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>Dirección:</span> {director}
                            </h2>
                        </div>
                        <div className="botonera">
                            <Button id="bts_categorias">Acción</Button>
                        </div>
                    </div>
                    <div className="valoracion">
                        <div>
                            <Rating />
                        </div>
                        <div className="imgContainer">
                            <img className="PeliPortada" src={`https://image.tmdb.org/t/p/w500${movieDetalles.poster_path}`} alt="img pelicula" />
                        </div>
                    </div>
                </section>
            </div>
            <Elenco movieID={movieDetalles.id} />
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                {video && (
                    <YouTube
                        opts={{ width: "100%", height: "100%" }}
                        style={{ borderRadius: "10px", border: "1px solid #62079F", boxShadow: "0 0 20px  #c653e994", width: "90%", height: "700px" }}
                        videoId={video.key}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                )}
            </div>
            <Button id="boton" onClick={handlePreviousVideo} disabled={currentVideoIndex === 0}>
                Video Anterior
            </Button>
            <Button id="boton" onClick={handleNextVideo}>
                Siguiente video
            </Button>
        </div>
    );
}

export default Datos;
