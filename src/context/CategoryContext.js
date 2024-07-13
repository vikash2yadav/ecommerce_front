import React, { createContext, useContext, useState } from 'react';
import { getCategoryList } from "../apis/category.js"
import { CommonsContext } from './CommonContext.js';
export const CategoryContext = createContext();

export const CatContext = ({ children }) => {
    const {setSnackbarAlertOpen, setSnackbarContent} = useContext(CommonsContext)
    const [categories, setCategories] = useState([]);
    const [totalCategories, setTotalCategories] = useState(null);
    const [editData, setEditData] = useState({});
    const [defaultFilter, setDefaultFilter] = useState({
        currentPage: 1,
        itemsPerPage: 5,
        filters: [],
        sortBy: []
    });

    const getAllCategories = async (value) => {
        let data = await getCategoryList(value);
        if (data?.status === 200) {
            setCategories(data.data.data.rows);
            setTotalCategories(data.data.data.count);
        }else{
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data?.data?.message
            })
        }
    }

    return (
        <CategoryContext.Provider value={{
            categories, setCategories, totalCategories, setTotalCategories, getAllCategories,
            defaultFilter, setDefaultFilter, editData, setEditData
        }}>
            {children}
        </CategoryContext.Provider>
    )
}
