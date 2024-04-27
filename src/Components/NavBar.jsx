import React, {useState} from "react";
import "./NavBarStyles.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import FormDialog from "./FormLogIn";
import FormSignIn from "./FormSignIn";
import { grey } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { Stack } from "@mui/material";
import "./AccountMenu.css"

//-----TAILWIND---------//

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'


export function NavBar() {
  
  const [user, setUser] = useState([])
  

  return (
      <div className="navContainer">
        <div className="logoContainer">
          <Link className="logoLink" to="/">
            <img alt="Logo Ratex" className="logoRatex" src={require("../Imagenes/logoRatex.png")} />
          </Link>
        </div>
        <SearchBar></SearchBar>
        <div className="btnsContainer">
          
          {
            !user.length > 0
            ? <ul className="btnsLista">
                <li><FormDialog setUser={setUser} /></li>
                <li><FormSignIn setUser={setUser}  /></li>
              </ul>
            : <DropDownMenu  setUser={setUser} />
              
          }  
          
        </div>
      </div>
  );
}

/* 
<Stack  setUser={setUser} >
<Avatar id="avatar" sx={{ bgcolor: grey[900] }} src="/broken-image.jpg">
</Avatar>
</Stack>
*/


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function DropDownMenu({setUser} ) {

  const handleLogOut = () => {setUser([])}

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="AccountMenu">
          <img src={require("../Imagenes/usuarioChico.png")} ></img>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md  " id="listaMenu">
          <div className="py-1">
            <Menu.Item id="itemMenu">
              {({ active }) => (
                <a className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm' )}>
                  Mi perfil
                </a>
              )}
            </Menu.Item>
            
              <Menu.Item id="itemMenu">
                {({ active }) => (
                  <button
                    onClick={handleLogOut}
                    type="submit"
                    className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm')}>
                    Cerrar Sesion
                  </button>)}
              </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}