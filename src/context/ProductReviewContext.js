import React, { createContext, useState, useEffect, useContext } from 'react';
import { getProductReviewList } from "../apis/product_review.js"
import { CommonsContext } from './CommonContext.js';
export const ProductReviewsContext = createContext();

export const ProductReviewContext = ({ children }) => {
    const {setSnackbarAlertOpen, setSnackbarContent} = useContext(CommonsContext);
    const [productReviews, setProductReviews] = useState([]);
    const [totalProductReviews, setTotalProductReviews] = useState(null);
    const [editData, setEditData] = useState({});
    const [defaultFilter, setDefaultFilter] = useState({
        "currentPage": 1,
        "itemsPerPage": 5,
        "filters": [],
        "sortBy": []
    });

    const getAllProductReviews = async (value) => {
        let data = await getProductReviewList(value);
        if (data?.status === 200) {
            setProductReviews(data.data.data.rows);
            setTotalProductReviews(data.data.data.count);
        }else{
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data?.data?.message
            })
        }
    }
    return (
        <ProductReviewsContext.Provider value={{
            productReviews, setProductReviews, totalProductReviews, 
            setTotalProductReviews, getAllProductReviews,
            defaultFilter, setDefaultFilter, editData, setEditData
        }}>
            {children}
        </ProductReviewsContext.Provider>
    )
}
