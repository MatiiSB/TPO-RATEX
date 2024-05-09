import React from "react";
import "./Elenco.css"


function Elenco(){
    return(
        <div className="Elenco-Layout">
            <h2 className="Elenco-titulo">ELENCO</h2>
            <section className="Galeria-actores">
            <div className="ActorInfoContainer"></div>
                <img src="/elenco/Rebecca-Ferguson-Dune-Part-2.jpg" ></img>
                <img src="/elenco/Josh-Brolin-Dune-Part-2.jpg" ></img>
                <img src="/elenco/Zendaya-Dune-Part-2.jpg" ></img>
                <img src="/elenco/Timothée-Chalamet-Dune-Part-2.jpg" ></img>
                <img src="/elenco/Florence-Pugh-Dune-Part-2.jpg" ></img>
                <img src="/elenco/Austin-Butler-Dune-Part-2.jpg" ></img>
            </section>
        </div>  
    )
}

export default Elenco;