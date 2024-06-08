import React, { createContext, useState, useEffect } from 'react';
import { getLanguageList } from "../apis/language.js"
export const LanguageContext = createContext();

export const LangContext = ({ children }) => {
    const [languages, setLanguages] = useState([]);

    const getAllLanguages = async () => {
        let data = await getLanguageList();
        setLanguages(data.data.data.rows)
    }

    useEffect(()=> {
        getAllLanguages();
    },[languages]);

    return (    
        <LanguageContext.Provider value={{
            languages, setLanguages
        }}>
            {children}
        </LanguageContext.Provider>
    )
}
