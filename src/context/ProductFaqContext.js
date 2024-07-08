import React, { createContext, useState, useEffect } from 'react';
import { getProductFaqList } from "../apis/faq.js"
export const ProductFaqsContext = createContext();

export const ProductFaqContext = ({ children }) => {
    const [faqs, setFaqs] = useState([]);
    const [totalfaqs, setTotalfaqs] = useState(null);

    const getAllFaqs = async () => {
        let data = await getProductFaqList();
        if (data?.status === 200) {
            setFaqs(data.data.data.rows);
            setTotalfaqs(data.data.data.count);
        }
    }

    return (
        <ProductFaqsContext.Provider value={{
            faqs, setFaqs, totalfaqs, setTotalfaqs, getAllFaqs
        }}>
            {children}
        </ProductFaqsContext.Provider>
    )
}
