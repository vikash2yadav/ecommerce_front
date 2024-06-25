import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
export const LoginsContext = createContext();

export const LoginContext = ({ children }) => {
    const location = useLocation();
    let authRoutes = ['/register', '/login', '/forgot_password', '/reset_password'];

    const navigate = useNavigate();

    const [userData, setUserData] = useState([]);
    const [defaultAdd, setDefaultAdd] = useState();
    const [token, setToken] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [auth, setAuth] = useState();

    let UserLogin = (user) => {
        localStorage.setItem('authorization', user?.access_token);
        localStorage.setItem("token", user?.access_token);
        localStorage.setItem("userData", JSON.stringify(user));
        localStorage.setItem("defaultAdd", JSON.stringify({city: user?.city, state: user?.state, pincode: user?.pin_code}));
        setToken(true)
        setIsLoggedIn(true);
        setUserData(user)
        setDefaultAdd({city: user?.city, state: user?.state, pincode: user?.pin_code})
        setAuth(user);
        navigate('/')
    }
 
    let UserLogOut = () => {
        localStorage.removeItem('authorization');
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        localStorage.removeItem("defaultAdd");
        setToken(false)
        setDefaultAdd();
        setIsLoggedIn(false);
        setUserData(null)
        navigate('/login')
        setAuth();
    }
   
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("userData"));
        let authorization = localStorage.getItem("authorization");
        let defaultAddress = JSON.parse(localStorage.getItem("defaultAdd"));
        console.log(defaultAddress)
        if (data && (authorization || defaultAddress)) {
            setAuth(data);
            setDefaultAdd(defaultAddress);
            setToken(true);
            setIsLoggedIn(true);
        } else {
            if (!authRoutes.includes(location.pathname)) {
                navigate('/login');
            }
        }

    }, [])

    return (
        <LoginsContext.Provider value={{
            isLoggedIn, setIsLoggedIn, UserLogOut, UserLogin, token, userData, setUserData, auth,
            defaultAdd, setDefaultAdd, setAuth
        }}>
            {children}
        </LoginsContext.Provider>
    )
}
