import React from 'react';
import { Button } from "@mui/material";
import "../paginas/Filtros.css";

const Generos = ({ info2, onClick }) => {
    const handleClick = () => {
        onClick(info2.id);
    };
    return (
        <Button onClick={handleClick}>{info2.name}</Button>
    );
};

export default Generos;
