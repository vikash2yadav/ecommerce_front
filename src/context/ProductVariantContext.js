import React, { createContext, useContext, useState } from 'react';
import { getProductVariantList } from "../apis/product_variant.js"
import { CommonsContext } from './CommonContext.js';
export const ProductVariantsContext = createContext();

export const ProductVariantContext = ({ children }) => {
    const {setSnackbarAlertOpen, setSnackbarContent} = useContext(CommonsContext);
    const [productVariants, setProductVariants] = useState([]);
    const [totalProductVariants, setTotalProductVariants] = useState(null);

    const getAllProductVariants = async () => {
        let data = await getProductVariantList();
        if (data?.status === 200) {
            setProductVariants(data.data.data.rows);
            setTotalProductVariants(data.data.data.count);
        }else{
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data?.data?.message
            })
        }
    }

    return (
        <ProductVariantsContext.Provider value={{
            productVariants, setProductVariants, totalProductVariants,
             setTotalProductVariants, getAllProductVariants,
        }}>
            {children}
        </ProductVariantsContext.Provider>
    )
}
