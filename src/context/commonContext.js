import React, { createContext, useState, useEffect } from 'react';
import { getLanguageList } from "../apis/language.js"
export const CommonsContext = createContext();

export const CommonContext = ({ children }) => {
    const [snackBarOpen, setSnackBarOpen] = useState(false);

    return (    
        <CommonsContext.Provider value={{
            snackBarOpen, setSnackBarOpen
        }}>
            {children}
        </CommonsContext.Provider>
    )
}
