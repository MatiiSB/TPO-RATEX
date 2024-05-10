import { Button } from "@mui/material";
import React from "react";
import Card from "../Components/Card";
import "./Filtros.css";

function WatchList ({ porver, agregarElemento, quitarElemento }) {
    if (!Array.isArray(porver)) {
        return null; // Otra acción si porver no es un array
    }

    return (
        <div className="container">
            {porver.map((peli, index) => (
                <div key={index}>
                    <Card info={peli} />
                    <Button id="boton" onClick={() => quitarElemento(index)}> - </Button>
                </div>
            ))}
        </div>
    );
}

export default WatchList;
