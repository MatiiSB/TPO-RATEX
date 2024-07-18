// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Aquí puedes hacer una llamada a tu API para obtener el usuario autenticado
        axios.get("http://localhost:3006/users/login", {
            headers: {
                accessToken: sessionStorage.getItem("accessToken")
            }
        }).then((response) => {
            setUser(response.data);
        }).catch((error) => {
            console.error("Error al obtener el usuario:", error);
        });
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};
