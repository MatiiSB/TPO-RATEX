import "./Boton.css"
import React from "react";



function Boton(props){
    return(
            <a href={props.url} className="btn">{props.text}</a>

    );
}

export default Boton;