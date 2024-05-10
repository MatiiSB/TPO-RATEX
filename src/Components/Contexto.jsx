import {React, useState, useEffect, createContext} from 'react'



export const Contexto = createContext()


const DataProvider = (props) => {

const [nombre, setNombre] = useState(localStorage.getItem('nombre')? JSON.parse(localStorage.getItem('nombre')) : "")
const [apellido, setApellido] = useState(localStorage.getItem('apellido')? JSON.parse(localStorage.getItem('apellido')) : "")
const [clave, setClave] = useState(localStorage.getItem('clave')? JSON.parse(localStorage.getItem('clave')) : "")
const [mail, setMail] = useState(localStorage.getItem('mail')? JSON.parse(localStorage.getItem('mail')) : "")


  return (
    <div>
        <Contexto.Provider value={{nombre, setNombre, apellido, setApellido, clave, setClave, mail, setMail }} >{props.children}</Contexto.Provider>
    </div>
  )
}

export default DataProvider