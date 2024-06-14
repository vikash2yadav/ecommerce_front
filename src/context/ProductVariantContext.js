import React, { createContext, useState, useEffect } from 'react';
import { getProductVariantList } from "../apis/product_variant.js"
export const ProductVariantsContext = createContext();

export const ProductVariantContext = ({ children }) => {
    const [productVariants, setProductVariants] = useState([]);
    const [totalProductVariants, setTotalProductVariants] = useState(null);

    const getAllProductVariants = async () => {
        let data = await getProductVariantList();
        setProductVariants(data.data.data.rows);
        setTotalProductVariants(data.data.data.count);
    }

    useEffect(() => {
        getAllProductVariants();
    }, [setProductVariants]);

    return (
        <ProductVariantsContext.Provider value={{
            productVariants, setProductVariants, totalProductVariants, setTotalProductVariants, getAllProductVariants
        }}>
            {children}
        </ProductVariantsContext.Provider>
    )
}
