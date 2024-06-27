import React from "react";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./InfoPelicula.css";
import Rating from "./Rating";
import Elenco from "./Elenco";
import YouTube from "react-youtube";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "./Elenco.css"


const API_KEY = "api_key=93648cb92189cb6216b357ed5dfdf548";

function Datos() {
  const location = useLocation();
  const [movieDetalles, setMovieDetelles] = useState({});
  const [videos, setVideos] = useState([]);
  let url = `https://api.themoviedb.org/3/movie/${movieDetalles.id}/videos?&${API_KEY}`;

  const [elenco, setElenco] = useState([]);

  useEffect(() => {
    const fetchElenco = async () => {
      try {
        // Obtener la información del elenco de la película
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieDetalles.id}/credits?api_key=93648cb92189cb6216b357ed5dfdf548`
        );
        const data = await response.json();

        // Filtrar solo los primeros 5 miembros del elenco
        const filteredElenco = data.cast.filter(
          (cast) => cast.profile_path !== null
        );
        const primerosCinco = filteredElenco.slice(0, 5);
        console.log(primerosCinco)

        // Para cada miembro del elenco, obtener su imagen y nombre
        const promises = primerosCinco.map(async (actor) => {
          const imgResponse = await fetch(
            `https://api.themoviedb.org/3/person/${actor.id}/images?api_key=93648cb92189cb6216b357ed5dfdf548b`
          );
          const imgData = await imgResponse.json();
          const imagen =
            imgData.profiles.length > 0
              ? `https://image.tmdb.org/t/p/w500${imgData.profiles[0].file_path}`
              : null;
          return { nombre: actor.name, imagen };
        });

        // Esperar todas las promesas para obtener las imágenes y nombres del elenco
        const elencoCompleto = await Promise.all(promises);
        
        setElenco(elencoCompleto);
        console.log(elenco)
      } catch (error) {
        console.error("Error al cargar el elenco:", error);
      }
    };

    fetchElenco();
  }, [movieDetalles.id, elenco]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener las películas.");
        }
        return res.json();
      })
      .then((data) => {
        setVideos(data.results);
      })
      .catch((error) => {
        console.error("Error de red:", error);
        setVideos([]);
      });
  }, [videos]);

  useEffect(() => {
    if (location.state?.movieDetalles) {
      setMovieDetelles(location.state.movieDetalles);
    }
  }, [location]);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // Estado para rastrear el índice del video actual

  const handleNextVideo = () => {
    // Incrementar el índice del video actual
    setCurrentVideoIndex((currentIndex) =>
      currentIndex === videos.length - 1 ? 0 : currentIndex + 1
    );
  };

  // Suponiendo que 'videos' es tu arreglo de videos
  const video = videos[currentVideoIndex];

  const handlePreviousVideo = () => {
    // Decrementar el índice del video actual
    setCurrentVideoIndex((currentIndex) =>
      currentIndex === 0 ? videos.length - 1 : currentIndex - 1
    );
  };

  return (
    <div>
      <div className="datos">
        <div className="fondo">
          <img
            src={`https://image.tmdb.org/t/p/original${movieDetalles.backdrop_path}`}
            alt={movieDetalles.title}
          ></img>
        </div>
        <section className="seccion">
          <div className="info">
            <div>
              <h1 className="infoTitulo">{movieDetalles.title}</h1>
              <p>{movieDetalles.overview}</p>
              <h2>
                <span
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  Dirección:
                </span>{" "}
                Denis Villeneuve
              </h2>
            </div>
            <div className="botonera">
              <Button id="bts_categorias">Acción</Button>
            </div>
          </div>
          <div className="valoracion">
            <div>
              <div>
                <div>
                  <Rating />
                </div>
                
                <div>
                  <Button id="bts_categorias">Play</Button>
                </div>
              </div>
            </div>
            <div className="imgContainer">
              <img
                className="PeliPortada"
                src={`https://image.tmdb.org/t/p/w500${movieDetalles.poster_path}`}
                alt="img pelicula"
              ></img>
            </div>
          </div>
        </section>
      </div>
      {/*ELENCO */}
        <Elenco movieID={movieDetalles.id} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {video && (
          <YouTube
            opts={{ width: "100%", height: "100%" }}
            style={{
              borderRadius: "10px",
              border: "1px solid #62079F",
              boxShadow: "0 0 20px  #c653e994",
              width: "90%",
              height: "700px",
            }}
            videoId={video.key}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        )}
      </div>
      <Button
        id="boton"
        onClick={handlePreviousVideo}
        disabled={currentVideoIndex === 0}
      >
        Video Anterior
      </Button>
      <Button id="boton" onClick={handleNextVideo}>
        Siguiente video
      </Button>
    </div>
  );
}

export default Datos;
