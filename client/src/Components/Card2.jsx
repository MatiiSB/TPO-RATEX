import { Button } from "@mui/material";
import React from "react";
const Card2 = ({ info }) => {
    let img_path = "https://image.tmdb.org/t/p/w500";

    if (!info) {
        return null; // Si no hay datos, devolvemos null para evitar errores
    }

    return (
            <div className="movie">
                <img src={img_path + info.posterpath} className="poster" alt={info.titulo}></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{info.titulo}</h4>
                    </div>
                </div>
            </div>
    );
};


function getColor(vote){
    if(vote >= 8){
        return "lawngreen"
    }else if(vote>=5){
        return "orange"
    }else{
        return "red"
    }
}

export default Card2;