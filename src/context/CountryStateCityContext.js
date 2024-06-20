import React, { createContext, useState, useEffect } from 'react';
import { getAllCountryList, getAllCityList, getAllStateList } from "../apis/country_state_city.js"
export const CountryStateCitiesContext = createContext();

export const CountryStateCityContext = ({ children }) => {

    const [countries, setCountries] = useState([]);
    const [totalCountries, setTotalCountries] = useState(null);

    const [cities, setCities] = useState([]);
    const [totalCities, setTotalCities] = useState(null);

    const [states, setStates] = useState([]);
    const [totalStates, setTotalStates] = useState(null);

    const getCountryList = async () => {
        let data = await getAllCountryList();
        setCountries(data.data.data.rows);
        setTotalCountries(data.data.data.count);
    }

    const getCityList = async () => {
        let data = await getAllCityList();
        setCities(data.data.data.rows);
        setTotalCities(data.data.data.count);
    }

    const getStateList = async () => {
        let data = await getAllStateList();
        setStates(data.data.data.rows);
        setTotalCountries(data.data.data.count);
    }
    
    return (
        <CountryStateCitiesContext.Provider value={{
            countries, setCountries, totalCountries, setTotalCountries, cities,
            setCities, totalCities, setTotalCities, states, setStates,
            totalStates, setTotalStates, getCountryList, getStateList, getCityList
        }}>
            {children}
        </CountryStateCitiesContext.Provider>
    )
}
