import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
export const LoginsContext = createContext();

export const LoginContext = ({ children }) => {

    const location = useLocation();
    let authRoutes = ['/register', '/login', '/forgot_password', '/reset_password'];
    const navigate = useNavigate();

    const [userData, setUserData] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState('');
    const [defaultAdd, setDefaultAdd] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let UserLogin = (user) => {
        localStorage.setItem('authorization', user?.access_token);
        localStorage.setItem("userData", JSON.stringify({ first_name: user?.first_name, username: user?.username, full_name: user?.full_name, last_name: user?.last_name, email: user?.email }));
        localStorage.setItem("defaultAdd", JSON.stringify({ city: user?.city, state: user?.state, pincode: user?.pin_code }));
        localStorage.setItem("cartItems", user?.cartItems);
        setCartItemsCount(user?.cartItems)
        setIsLoggedIn(true);
        setDefaultAdd({ city: user?.city, state: user?.state, pincode: user?.pin_code });
        setUserData({ first_name: user?.first_name, username: user?.username, full_name: user?.full_name, last_name: user?.last_name, email: user?.email })
        navigate('/')
    }

    let UserLogOut = () => {
        localStorage.removeItem('authorization');
        localStorage.removeItem("userData");
        localStorage.removeItem("defaultAdd");
        localStorage.removeItem("cartItems");
        setDefaultAdd();
        setIsLoggedIn(false);
        setUserData(null)
        setCartItemsCount();
        navigate('/login')
    }

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("userData"));
        let authorization = localStorage.getItem("authorization");
        let defaultAddress = JSON.parse(localStorage.getItem("defaultAdd"));
        let cartItems = localStorage.getItem("cartItems") 
        if (data && (authorization)) {
            setUserData(data);
            setIsLoggedIn(true);
            setCartItemsCount(cartItems);
            setDefaultAdd(defaultAddress);
        } else {
            if (!authRoutes.includes(location.pathname)) {
                navigate('/login');
            }
        }

    }, [])

    return (
        <LoginsContext.Provider value={{
            isLoggedIn, setIsLoggedIn, UserLogOut, UserLogin, userData, setUserData,
            defaultAdd, setDefaultAdd, cartItemsCount, setCartItemsCount,
        }}>
            {children}
        </LoginsContext.Provider>
    )
}
