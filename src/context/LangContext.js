import React, { createContext, useState, useEffect } from 'react';
import { getLanguageList } from "../apis/language.js"
export const LanguageContext = createContext();

export const LangContext = ({ children }) => {
    const [languages, setLanguages] = useState([]);
    const [languageTotal, setLanguageTotal] = useState();

    const getAllLanguages = async () => {
        let data = await getLanguageList();
        if (data?.status === 200) {
            setLanguages(data.data.data.rows)
            setLanguageTotal(data.data.data.count);
        }
    }

    return (
        <LanguageContext.Provider value={{
            languages, setLanguages, getAllLanguages, languageTotal, setLanguageTotal
        }}>
            {children}
        </LanguageContext.Provider>
    )
}
