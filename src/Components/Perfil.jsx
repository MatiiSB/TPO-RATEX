import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "./Perfil.css";
import { useRef, useState, useContext } from "react";
import { Contexto } from "./Contexto";


export default function Perfil({user, setUser}) {
  
  const {nombre, setNombre, apellido, setApellido, clave, setClave, mail, setMail} = useContext(Contexto)

  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };

  return (
    <div className="LayoutPerfilContainer">
      <div className="PerfilContainer">
        <div onClick={handleImageClick}>
          {image ? (
            <img src={URL.createObjectURL(image)} className="imagenPorDefectoPerfil"></img>
          ) : (
            <img src="/Imagenes/subirPerfilDefault.png" className="imagenSubidaPerfil"></img>
          )}
          <input
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          ></input>
        </div>
        <h1 className="PerfilTitulo">Bienvenido!</h1>
        <div className="DatosPerfil"> 
          <fieldset className="FieldSetPerfil">
          <legend className="LegendPerfil">Mis datos</legend>
            <ul className="ulCampos">
              <li className="liCampos">
                <label>Nombre</label>
                <input placeholder={nombre} type="text"></input>
              </li>
              <li className="liCampos">
                <label>Apellido</label>
                <input  placeholder={apellido} type="text"></input>
              </li>
            </ul>
            <ul className="ulCampos">
              <li className="liCampos">
                <label>Mail</label>
                <input  placeholder={mail} type="email"></input>
              </li>
              <li className="liCampos">
              <label>Contraseña</label>
                <input placeholder={clave} type="text"></input>
              </li>
            </ul>
            <ul  className="ulCampos">
              <li className="liCampos">
                <label>Pais</label>
                <input placeholder="Pais" type=""></input>
              </li>
              <li className="liCampos">
                <label>Edad</label>
                <input placeholder="Edad" type="number" ></input>
              </li>
            </ul>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
