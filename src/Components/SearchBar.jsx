    import React from "react";
import "./SearchBar.css"

//let abrirBusqueda = addEventListener

//usar props para buscar por peli-actor-genero-calificacion
function SearchBar() {
    return (
            <div className="searchBarContainer">
                <input  type="text" placeholder="Busca tu pelicula"/>
                <button className="buscar"><img  alt="icono de búsqueda" src={require("../Imagenes/busqueda.png")}></img></button>
                
            </div>
    )
};

export default SearchBar;