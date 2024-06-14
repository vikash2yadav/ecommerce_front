import React, { createContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
export const LoginsContext = createContext();

export const LoginContext = ({ children }) => {
    const location = useLocation();
    let authRoutes = ['/register', '/login', '/forgot_password'];

    const navigate = useNavigate();

    const [userData, setUserData] = useState([]);
    const [token, setToken] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [auth, setAuth] = useState();

    let UserLogin = (user) => {
        localStorage.setItem('authorization', user?.access_token);
        localStorage.setItem("token", user?.access_token);
        localStorage.setItem("userData", JSON.stringify(user));
        setIsLoggedIn(true)
        setToken(true)
        setUserData(user)
        navigate('/')
    }

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("userData"));
        let authorization = localStorage.getItem("authorization");
        if (data && authorization) {
            setAuth(data);
            setIsLoggedIn(true);
        }else{
            if(!authRoutes.includes(location.pathname)){
                navigate('/login');
            }
        }
    }, [ ])

    return (
        <LoginsContext.Provider value={{
            isLoggedIn, setIsLoggedIn, UserLogin, token, userData, setUserData, auth, setAuth
        }}>
            {children}
        </LoginsContext.Provider>
    )
}
