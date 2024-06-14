import React, { createContext, useState, useEffect } from 'react';
import { getProductReviewList } from "../apis/product_review.js"
export const ProductReviewsContext = createContext();

export const ProductReviewContext = ({ children }) => {
    const [productReviews, setProductReviews] = useState([]);
    const [totalProductReviews, setTotalProductReviews] = useState(null);

    const getAllProductReviews = async () => {
        let data = await getProductReviewList();
        setProductReviews(data.data.data.rows);
        setTotalProductReviews(data.data.data.count);
    }

    useEffect(() => {
        getAllProductReviews();
    }, [setProductReviews]);

    return (
        <ProductReviewsContext.Provider value={{
            productReviews, setProductReviews, totalProductReviews, setTotalProductReviews, getAllProductReviews
        }}>
            {children}
        </ProductReviewsContext.Provider>
    )
}
