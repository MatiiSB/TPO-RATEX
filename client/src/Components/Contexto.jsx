import React, { useState, useEffect, createContext } from 'react';

export const Contexto = createContext();

const DataProvider = (props) => {
    const [mail, setMail] = useState(localStorage.getItem('mail') ? JSON.parse(localStorage.getItem('mail')) : "");

    useEffect(() => {

        localStorage.setItem('mail', JSON.stringify(mail));
    }, [mail]);

    return (
        <Contexto.Provider value={{ mail, setMail }}>
            {props.children}
        </Contexto.Provider>
    );
};

export default DataProvider;
