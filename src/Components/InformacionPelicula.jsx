import React from "react";
import Datos from "./Pelicula/Datos";
import Elenco from "./Pelicula/Elenco";
import Trailer from "./Pelicula/Trailer";
import Sinopsis from "./Pelicula/Sinopsis";
import Recomendaciones from "./Pelicula/Recomendaciones";

function InformacionPelicula(){
    return(
        <div className="pelicula">
            <Datos/>
            <Elenco/>
            <Trailer/>
            <Sinopsis/>
            <Recomendaciones/>
        </div>
    )
}

export default InformacionPelicula;