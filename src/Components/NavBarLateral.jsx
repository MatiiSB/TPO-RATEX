import React, { useState } from "react";
import {
  FaFilm,
  FaFilter,
  FaTh,
  FaTv,
  FaThLarge,
  FaUser,
  FaRegStar,
  FaBars,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './NavBarLateral.css';
function NavBarLateral({ children }) {
  const menuItems = [
    {
      path: "/",
      name: "Inicio",
      Icon: <FaTh/>,
    },
    {
      path: "./Peliculas",
      name: "Peliculas",
      Icon: <FaFilm/>,
    },
    {
      path: "/Series",
      name: "Series",
      Icon: <FaTv />,
    },
    {
      path: "/Categorias",
      name: "Categorias",
      Icon: <FaThLarge />,
    },
    {
      path: "/Actores",
      name: "Actores",
      Icon: <FaUser />,
    },
    {
      path: "/Filtros",
      name: "Filtros",
      Icon: <FaFilter />,
    },
    {
      path: "/Puntuacion",
      name: "Puntuacion",
      Icon: <FaRegStar />,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)
  return (
    <div className="navLateralContainer">
      <div className="sidebar">
        <div className="top_section">
          <div style={{marginLeft: isOpen ? "200px" : "0px" }} className="bars">
            <FaBars  style={{fontSize: isOpen? "25px":"25px"}} onClick={toggle}/>
          </div>
        </div>
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div style={{marginLeft: isOpen ? "0px" : "0px"}} className="icon">{item.Icon}</div>
            <div style={{display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <div className="hijos">{children}</div>
    </div>
  );
}

export default NavBarLateral;
