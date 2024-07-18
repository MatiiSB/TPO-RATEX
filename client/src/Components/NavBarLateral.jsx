import React, { useState, useEffect } from "react";
import { FaFilm, FaEye, FaEyeSlash, FaTh, FaHeart, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './NavBarLateral.css';
import { CloseOutlined } from "@mui/icons-material";

function NavBarLateral({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Función para verificar el accessToken
    const checkAccessToken = () => {
      const accessToken = sessionStorage.getItem('accessToken');
      if (accessToken) {
        console.log("logeado")
        setIsLoggedIn(true);
        setMenuItems([
          { path: "/", name: "Inicio", Icon: <FaTh /> },
          { path: "/Peliculas", name: "Peliculas", Icon: <FaFilm /> },
          { path: "/WatchList", name: "WatchList", Icon: <FaEye /> },
          { path: "/Favoritas", name: "Favoritas", Icon: <FaHeart /> },
          { path: "/Vistas", name: "Vistas", Icon: <FaEyeSlash /> },
        ]);
        console.log(menuItems)
        console.log("logeado")
      } else {
        setIsLoggedIn(false);
        console.log("no logeado")
        setMenuItems([
          { path: "/", name: "Inicio", Icon: <FaTh /> },
          { path: "/Peliculas", name: "Peliculas", Icon: <FaFilm /> },
        ]);
        console.log(menuItems)
        console.log("no logeado")

      }
    };

    // Verificar el accessToken al montar el componente
    checkAccessToken();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // Este efecto se ejecutará cada vez que cambie menuItems
  useEffect(() => {
    // Aquí puedes realizar cualquier lógica adicional que necesites cuando menuItems cambie
    console.log("menuItems ha cambiado:", menuItems);
  }, [menuItems]);

  return (
    <div className="navLateralContainer">
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="top_section">
          <div className="bars" onClick={toggle}>
            <FaBars />
          </div>
        </div>
        {menuItems.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
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
