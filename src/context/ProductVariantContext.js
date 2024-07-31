import React, { createContext, useContext, useState } from 'react';
import { getProductVariantListById } from "../apis/product_variant.js"
import { CommonsContext } from './CommonContext.js';
export const ProductVariantsContext = createContext();

export const ProductVariantContext = ({ children }) => {
    const {setSnackbarAlertOpen, setSnackbarContent} = useContext(CommonsContext);
    const [productVariants, setProductVariants] = useState([]);
    const [totalProductVariants, setTotalProductVariants] = useState(null);
    const [variantDetailOpen, setVariantDetailOpen] = useState(false);
    const [highLightDetailOpen, setHighLightDetailOpen] = useState(false)
    const [specificationDetailOpen, setSpecificationDetailOpen] = useState(false)

    const getAllProductVariants = async (id) => {
        let data = await getProductVariantListById(id);
        if (data?.status === 200) {
            setProductVariants(data.data.data.rows);
            console.log(productVariants)
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
             variantDetailOpen, setVariantDetailOpen,
             highLightDetailOpen, setHighLightDetailOpen,
             specificationDetailOpen, setSpecificationDetailOpen
        }}>
            {children}
        </ProductVariantsContext.Provider>
    )
}
