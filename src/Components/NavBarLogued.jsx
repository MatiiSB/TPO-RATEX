import React, {useState} from "react";
import "./NavBarStyles.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { grey } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./NavBarLogued.css"


function NavBarLogued() {
  return (
      <div className="navContainer">
        <div className="logoContainer">
          <Link className="logoLink" to="/">
            <img alt="Logo Ratex" className="logoRatex" src={require("../Imagenes/logoRatex.png")} />
          </Link>
        </div>
        <SearchBar></SearchBar>
        <div className="btnsContainer">
            <Stack>
            <Avatar id="avatar" sx={{ bgcolor: grey[900] }} src="/broken-image.jpg">
                
            </Avatar>
            </Stack>
        </div>
      </div>
  );
}

export default NavBarLogued;


