import React from "react";
import "./Categorias.css"
import GridCategoria from "../Components/GridCategoria";

function Categorias () {
    return (
        <div>
            <h1 className="titulo">Categorias</h1>
            <GridCategoria/>
        </div>
    );
}

export default Categorias