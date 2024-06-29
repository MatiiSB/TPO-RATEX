import React, { useState } from "react";
import { FaFilm, FaEye, FaEyeSlash, FaTh, FaHeart, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './NavBarLateral.css';

function NavBarLateral({ children }) {
  const menuItems = [
    { path: "/", name: "Inicio", Icon: <FaTh /> },
    { path: "/Peliculas", name: "Peliculas", Icon: <FaFilm /> },
    { path: "/WatchList", name: "WatchList", Icon: <FaEye /> },
    { path: "/Favoritas", name: "Favoritas", Icon: <FaHeart /> },
    { path: "/Vistas", name: "Vistas", Icon: <FaEyeSlash /> },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navLateralContainer">
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="top_section">
          <div className="bars" onClick={toggle}>
            <FaBars />
          </div>
        </div>
        {menuItems.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeclassName="active">
            <div className="icon">{item.Icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <div className="hijos">{children}</div>
    </div>
  );
}

export default NavBarLateral;