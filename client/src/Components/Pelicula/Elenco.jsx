import React, { useEffect, useState } from "react";
import "./Elenco.css";

const API_KEY = "api_key=93648cb92189cb6216b357ed5dfdf548";
const BASE_URL = "https://api.themoviedb.org/3";

function Elenco({ movieID }) {
    const [elenco, setElenco] = useState([]);

    useEffect(() => {
        const fetchElenco = async () => {
            try {
                const response = await fetch(`${BASE_URL}/movie/${movieID}/credits?${API_KEY}`);
                const data = await response.json();
                console.log("Datos completos del elenco:", data); // Verifica los datos completos recibidos
                const filteredElenco = data.cast.filter(cast => cast.profile_path !== null);
                const primerosCinco = filteredElenco.slice(0, 5);
                console.log("Primeros cinco actores con imágenes:", primerosCinco); // Verifica los actores filtrados
                setElenco(primerosCinco);
            } catch (error) {
                console.error("Error al cargar el elenco:", error);
            }
        };

        if (movieID) {
            fetchElenco();
        }
    }, [movieID]);

    return (
        <div className="Elenco-Layout">
            <h2 className="Elenco-titulo">ELENCO</h2>
            <section className="Galeria-actores">
                {elenco.map(actor => (
                    <div className="ActorInfoContainer" key={actor.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                            alt={actor.name}
                            className="ActorFoto"
                        />
                        <p className="ActorNombre">{actor.name}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Elenco;