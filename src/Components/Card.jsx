// En Card.jsx
import { Button } from "@mui/material";
import React from "react";
const Card = ({ info }) => {
    let img_path = "https://image.tmdb.org/t/p/w500";

    if (!info) {
        return null; // Si no hay datos, devolvemos null para evitar errores
    }

    return (
            <div className="movie">
                <img src={img_path + info.poster_path} className="poster" alt={info.title}></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{info.title}</h4>
                        <p className="rating">{info.vote_average}</p>
                    </div>
                    <div className="overview">
                        <h1>Overview</h1>
                        <p>{info.overview}</p>
                    </div>
                </div>
            </div>
    );
};

export default Card;
