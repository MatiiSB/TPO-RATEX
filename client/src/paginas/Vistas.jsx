import { Button } from "@mui/material";
import React from "react";
import Card from "../Components/Card";
import "./Filtros.css";

function Vistas ({ vistas, agregarElemento, quitarElemento }) {
    if (!Array.isArray(vistas)) {
        return null; // Otra acción si porver no es un array
    }

    return (
        <div className="container">
            {vistas.map((peli, index) => (
                <div key={index}>
                    <Card info={peli} />
                    <Button id="boton" onClick={() => quitarElemento(index)}> - </Button>
                </div>
            ))}
        </div>
    );
}

export default Vistas;