import React, { createContext, useState, useContext } from 'react';
import { getProductFaqList } from "../apis/faq.js"
import { CommonsContext } from './CommonContext.js';
export const ProductFaqsContext = createContext();

export const ProductFaqContext = ({ children }) => {
       const {setSnackbarAlertOpen, setSnackbarContent} = useContext(CommonsContext);
    const [faqs, setFaqs] = useState([]);
    const [totalfaqs, setTotalfaqs] = useState(null);
    const [editData, setEditData] = useState({});
    const [defaultFilter, setDefaultFilter] = useState({
        "currentPage": 1,
        "itemsPerPage": 5,
        "filters": [],
        "sortBy": []
    });

    const getAllFaqs = async (value) => {
        let data = await getProductFaqList(value);
        if (data?.status === 200) {
            setFaqs(data.data.data.rows);
            setTotalfaqs(data.data.data.count);
        }else{
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data?.data?.message
            })
        }
    }

    return (
        <ProductFaqsContext.Provider value={{
            faqs, setFaqs, totalfaqs, setTotalfaqs, getAllFaqs,
            defaultFilter, setDefaultFilter,
            editData, setEditData
        }}>
            {children}
        </ProductFaqsContext.Provider>
    )
}
