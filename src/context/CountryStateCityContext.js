import React, { createContext, useState, useEffect } from 'react';
import { getAllCountryList, getAllCityList, getAllStateList } from "../apis/country_state_city.js"
export const CountryStateCitiesContext = createContext();

export const CountryStateCityContext = ({ children }) => {

    const [countries, setCountries] = useState([]);
    const [totalCountries, setTotalCountries] = useState(null);

    const [states, setStates] = useState([]);
    const [totalStates, setTotalStates] = useState(null);

    const [cities, setCities] = useState([]);
    const [totalCities, setTotalCities] = useState(null);

    const getCountryList = async () => {
        let data = await getAllCountryList();
        if (data?.status === 200) {
            setCountries(data.data.data.rows);
            setTotalCountries(data.data.data.count);
        }
    }

    const getStateList = async (body) => {
        let data = await getAllStateList(body);
        if (data?.status === 200) {
            setStates(data.data.data.rows);
            setTotalCountries(data.data.data.count);
        }
    }

    const getCityList = async (body) => {
        let data = await getAllCityList(body);
        if (data?.status === 200) {
            setCities(data.data.data.rows);
            setTotalCities(data.data.data.count);
        }
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
