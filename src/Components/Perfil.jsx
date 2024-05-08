import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./Perfil.css";
import { useRef, useState } from "react";


export default function Perfil() {

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
      <h1 style={{ color: "#62079F" }}>Mi perfil</h1>
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
        <div > 
          <fieldset style={{border:"1px solid red"}}> cuenta 
          <legend >Mis datos</legend>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
