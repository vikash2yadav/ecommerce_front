import React, { createContext, useState, useEffect } from 'react';
import { getCategoryList } from "../apis/category.js"
export const CategoryContext = createContext();

export const CatContext = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [totalCategories, setTotalCategories] = useState(null);

    const getAllCategories = async () => {
        let data = await getCategoryList();
        setCategories(data.data.data.rows);
        setTotalCategories(data.data.data.count);
    }

    return (
        <CategoryContext.Provider value={{
            categories, setCategories, totalCategories, setTotalCategories, getAllCategories
        }}>
            {children}
        </CategoryContext.Provider>
    )
}
