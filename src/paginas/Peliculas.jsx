import React, {useEffect,useState}from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import Rating from "@mui/material";
import "../Components/Pelicula/InfoPelicula.css";
import "../Components/Pelicula/Elenco.css";
import ImdPeli from "./ImdPeli";
function Peliculas() {
    // Utilizamos useLocation para acceder al estado de la ubicación
    const location = useLocation();
    // Utilizamos useParams para obtener los parámetros de la URL
    const [images, setImages] = useState([]);
    const objeto = location.state?.objeto
    console.log("hola objeto", objeto)
    const API_KEY = 'api_key=93648cb92189cb6216b357ed5dfdf548';
    let img_path = "https://image.tmdb.org/t/p/w500"
    let url = `https://api.themoviedb.org/3/movie/940721/images&${API_KEY}`
    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Error al obtener las películas.');
                }
                return res.json();
            })
            .then(data => {
                setImages(data.results);
            })
            .catch(error => {
                console.error('Error de red:', error);
                setImages([]);
            });
    }, [images]);
    return (
        <div>
            <div className="datos">
            <div className="fondo">
                <img alt="Portada"></img>
            </div>
            <section className="seccion">
            <div className="info">
                <div>
                    <h1 className="infoTitulo">{objeto.title}</h1>
                    <p>{objeto.overview}</p>
                    <h2><span style={{textDecoration:"underline", textUnderlineOffset:"3px"}}>Dirección:</span> Denis Villeneuve</h2>
                </div>
                <div className="botonera">
                    <Button id="bts_categorias">{objeto.genre_ids}</Button>
                </div>
            </div>
            <div className="valoracion">
                <div>
                    <div>
                        <div>Compartir</div>
                        <Button id="bts_categorias">Mi lista +</Button>
                        <div>
                            <Button id="bts_categorias" >Play</Button>
                        </div>
                    </div>
                    </div>
                <div className="imgContainer">
                <img className="PeliPortada" src={img_path + objeto.poster_path} alt="img pelicula"></img>
                </div>
            </div>
            </section>
        </div>
        <div className="Elenco-Layout">
            <h2 className="Elenco-titulo">ELENCO</h2>
            <section className="Galeria-actores">
            <div className="ActorInfoContainer"></div>
                {images.map((image,index)=>(
                    <ImdPeli info={image} key={index}></ImdPeli>
                ))}
            </section>
        </div>  
        </div>
    );
}
export default Peliculas;