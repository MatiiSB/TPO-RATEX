import React from "react";
import "./Inicio.css"
import Swipers from "./Swipers";
import SliderPrincipal from "./SliderPrincipal";
function Inicio() {
    return (
        <>
            <SliderPrincipal/>
            <div className="Inicio">
                <h2 className="TituloInicio">POPULARES</h2>
                    <Swipers></Swipers>
                <h2 className="TituloInicio" >RECOMENDADAS</h2>
                    <Swipers></Swipers>
            </div>
            </>
    )
};




export default Inicio;
