import { Button } from "@mui/material";
import React from "react";
import Card from "../Components/Card";
import "./Filtros.css";

function Favoritas ({ favoritas, agregarElemento, quitarElemento }) {
    if (!Array.isArray(favoritas)) {
        return null; // Otra acción si porver no es un array
    }

    return (
        <div className="container">
            {favoritas.map((peli, index) => (
                <div key={index}>
                    <Card info={peli} />
                    <Button id="boton" onClick={() => quitarElemento(index)}> - </Button>
                </div>
            ))}
        </div>
    );
}

export default Favoritas;