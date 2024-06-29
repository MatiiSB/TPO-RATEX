import React, { useState } from "react";
import "./NavBarStyles.css";
import { Link, useNavigate } from 'react-router-dom';
import FormDialog from "./FormLogIn";
import FormSignIn from "./FormSignIn";
import "./AccountMenu.css";
import NavBarLateral from "./NavBarLateral";
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

export function NavBar() {
  const [user, setUser] = useState([]);

  return (
    <div className="navContainer">
      <div className="logoContainer">
        <Link className="logoLink" to="/">
          <img alt="Logo Ratex" className="logoRatex" src="/Imagenes/logoRatex.png" />
        </Link>
      </div>
      <div className="btnsContainer">
        {!user.length > 0
          ? <ul className="btnsLista">
              <li><FormDialog setUser={setUser} /></li>
              <li><FormSignIn setUser={setUser} /></li>
            </ul>
          : <DropDownMenu user={user} setUser={setUser} />
        }
      </div>
    </div>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function DropDownMenu({ setUser }) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    setUser([]);
    navigate("/")
  };
  
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="AccountMenu">
          <img src="/Imagenes/usuarioChico.png" alt="User Menu" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md" id="listaMenu">
          <div className="py-1">
            <Menu.Item id="itemMenu">
              {({ active }) => (
                <Link to="/Perfil" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
                  Mi perfil
                </Link>
              )}
            </Menu.Item>
            <Menu.Item id="itemMenu">
              {({ active }) => (
                <button
                  onClick={handleLogOut}
                  type="submit"
                  className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm')}
                >
                  Cerrar Sesion
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}