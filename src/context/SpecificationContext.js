import React, { createContext, useState, useContext } from 'react';
import { getAllSpecificationCategoryListApi } from "../apis/specifications.js"
import { CommonsContext } from './CommonContext.js';
export const SpecificationsContext = createContext();

export const SpecificationContext = ({ children }) => {
    const {setSnackbarAlertOpen, setSnackbarContent} = useContext(CommonsContext);
    const [editData, setEditData] = useState({});
    const [specificationCategories, setSpecificationCategories] = useState([]);
    const [totalSpecificationCategories, setTotalSpecificationCategories] = useState(null);
    const [defaultFilter, setDefaultFilter] = useState({
        currentPage: 1,
        itemsPerPage: 5,
        filters: [],
        sortBy: []
    });

    const getAllSpecificationCategories = async (value) => {
        let data = await getAllSpecificationCategoryListApi(value);
        if (data?.status === 200) {
            setSpecificationCategories(data.data.data.rows);
            setTotalSpecificationCategories(data.data.data.count);
        }else{
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data?.data?.message
            })
        }
    }

    return (
        <SpecificationsContext.Provider value={{
            specificationCategories, setSpecificationCategories, totalSpecificationCategories, setTotalSpecificationCategories, editData, setEditData,
            getAllSpecificationCategories, defaultFilter, setDefaultFilter, 
        }}>
            {children}
        </SpecificationsContext.Provider>
    )
}
