import React, { createContext, useState, useEffect } from 'react';
import { getCategoryList } from "../apis/category.js"
export const CategoryContext = createContext();

export const CatContext = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [totalCategories, setTotalCategories] = useState(null);
    const [editData, setEditData ] = useState({}); 
    const [defaultFilter, setDefaultFilter] = useState({
        currentPage: "",
        itemsPerPage: "",
    });

    const getAllCategories = async () => {
        let data = await getCategoryList();
        if (data?.status === 200) {
            setCategories(data.data.data.rows);
            setTotalCategories(data.data.data.count);
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
