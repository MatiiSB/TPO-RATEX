import React from "react";
import "./Inicio.css";
import { Button } from "@mui/material";
import "./Principal.css"

export function Principal(props) {
return (
        <>
            <img className="img_pr" src={props.src} alt="PRINCIPAL"></img>
                <div className="content">
                    <div className="title">{props.titulo}</div>
                    <div className="type">{props.tipo}</div>
                    <div className="description">{props.descripcion}</div>
                    <Button className="botonPrincipal" id="boton">VER MAS</Button>
                </div>
        </>
    );
}

export function ThumbnailItem(props){
    return(
            <img className="img_th" src={props.im} alt="thumbnail"></img>
    )
}

