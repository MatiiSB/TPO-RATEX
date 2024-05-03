import React from "react";
import { Button } from "@mui/material";
import "./InfoPelicula.css"
import Rating from "./Rating"
function Datos(){
    return(
        <div className="datos">
            <div className="info">
                <div>
                    <h1 className="infoTitulo">DUNE: PART TWO</h1>
                    <p>El duque Paul Atreides se une a los Fremen y comienza su entrenamiento para convertirse en Muad'Dib, mientras trata de evitar el terrible futuro que ha previsto: una guerra santa en su nombre, esparciéndose por todo el universo conocido.</p>
                    <h2><span style={{textDecoration:"underline", textUnderlineOffset:"3px"}}>Dirección:</span> Denis Villeneuve</h2>
                </div>
                <div className="botonera">
                    <Button id="bts_categorias">Acción</Button>
                    <Button id="bts_categorias">Aventura</Button>
                    <Button id="bts_categorias">Drama</Button>
                </div>
            </div>
            <div className="valoracion">
                <div>
                    <div>
                        <div><Rating/></div>
                        <div>Compartir</div>
                        <Button id="bts_categorias">Mi lista +</Button>
                        <div>
                            <Button id="bts_categorias" >Play</Button>
                        </div>
                    </div>
                    </div>
                <div className="imgContainer">
                <img className="PeliPortada" src={require("./dune-wall.jpg")} alt="img pelicula"></img>
                </div>
            </div>
        </div>
    )
}

export default Datos;