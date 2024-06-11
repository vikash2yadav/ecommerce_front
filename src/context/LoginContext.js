import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export const LoginsContext = createContext();

export const LoginContext = ({ children }) => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState([]);

    const [token, setToken] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let UserLogin = (user) => { 
        localStorage.setItem('authorization', user?.access_token);
        localStorage.setItem("token", user?.access_token);
        localStorage.setItem("userInfo", user)
        setIsLoggedIn(true)
        setToken(true)
        setUserData(user)
        navigate('/')
    }

    return (
        <LoginsContext.Provider value={{
            isLoggedIn, setIsLoggedIn, UserLogin, userData, setUserData
        }}>
            {children}
        </LoginsContext.Provider>
    )
}
