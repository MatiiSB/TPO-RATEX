import { Button } from "@mui/material";
import React, { useEffect, useState, useContext  } from "react";
import Card from "../Components/Card";
import "./Filtros.css";
import axios from "axios";
import Card2 from "../Components/Card2";
import { Contexto } from '../Components/Contexto';
import { jwtDecode } from 'jwt-decode'; // Importa jwt_decode


const API_KEY = 'api_key=93648cb92189cb6216b357ed5dfdf548';
const BASE_URL = 'https://api.themoviedb.org/3';
let url = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;

function WatchList() {
    const [listOfPeliculas, setListOfPeliculas] = useState([]);
    const [peliEliminar, setPeliEliminar] = useState(null);
    const { mail } = useContext(Contexto);


    useEffect(() => {
        const accessToken = sessionStorage.getItem("accessToken");
        const decoded = jwtDecode(accessToken);
        const idUsuario = decoded.mail;
        axios.get("http://localhost:3006/listas/Vistas", { params: { mail: idUsuario } })
            .then((response) => {
                console.log("exito");
                setListOfPeliculas(response.data);
            })
            .catch((error) => {
                console.log("Error al obtener la lista de películas", error);
            });
    }, []);

    const eliminarDeLista = (pelicula) => {
        console.log(pelicula);
        axios.post("http://localhost:3006/listas/EliminarPelicula", pelicula)
            .then((response) => {
                setPeliEliminar(response.data);
                const accessToken = sessionStorage.getItem("accessToken");
                const decoded = jwtDecode(accessToken);
                const idUsuario = decoded.mail;
                axios.get("http://localhost:3006/listas/Vistas", { params: { mail: idUsuario } })
                    .then((response) => {
                        console.log("exito");
                        setListOfPeliculas(response.data);
                    })
            })
            .then((response) => {
                setListOfPeliculas(response.data);
            })
            .catch((error) => {
                console.log("Error al eliminar la película", error);
            });
    };


    return (
        <>
            <div className="container">
                { listOfPeliculas.map((peli, index) => (
                    <div key={index}>
                        <Card2 info={peli} />
                        <Button id="boton" onClick={() => eliminarDeLista(peli)}> - </Button>
                    </div>
                ))}
            </div>
            <div>
            </div>
        </>
    );
}

export default WatchList;



//validacion usuario logeado.
//carpetas controllers y services.