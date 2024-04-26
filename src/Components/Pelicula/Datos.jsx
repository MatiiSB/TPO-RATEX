import React from "react";
import { Button } from "@mui/material";
import "./InfoPelicula.css"

function Datos(){
    return(
        <div className="datos">
            <div className="info">
                <div>
                    <h1>Nombre Pelicula</h1>
                    <h2>Actores Varios</h2>
                </div>
                <div className="botonera">
                    <Button>Categoria1</Button>
                    <Button>Categoria2</Button>
                    <Button>Categoria3</Button>
                </div>
            </div>
            <div className="valoracion">
                <div>
                    <div>
                        <div>Estrellitas uwu</div>
                        <div>Guardados</div>
                        <div>Compartir</div>
                        <div>
                            <Button>Play</Button>
                        </div>
                    </div>
                    </div>
                <div className="imgContainer">
                <img src={require("./dune-wall.jpg")} alt="img pelicula"></img>
                </div>
            </div>
        </div>
    )
}

export default Datos;