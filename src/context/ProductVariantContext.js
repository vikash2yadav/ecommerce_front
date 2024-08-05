import React, { createContext, useContext, useState } from 'react';
import { getProductVariantListById, getParentProductDataApi } from "../apis/product_variant.js"
import { CommonsContext } from './CommonContext.js';
export const ProductVariantsContext = createContext();

export const ProductVariantContext = ({ children }) => {
    const {setSnackbarAlertOpen, setSnackbarContent} = useContext(CommonsContext);
    const [productVariants, setProductVariants] = useState([]);
    const [totalProductVariants, setTotalProductVariants] = useState(null);
    const [variantDetailOpen, setVariantDetailOpen] = useState(false);
    const [highLightDetailOpen, setHighLightDetailOpen] = useState(false)
    const [specificationDetailOpen, setSpecificationDetailOpen] = useState(false)
    const [variantFormIsOpen, setVariantFormIsOpen] = useState(false);
    const [variantFormIsEdit, setVariantFormIsEdit] = useState(false);
    const [parentProductData, setParentProductData] = useState({});
    const [editData, setEditData] = useState({});

    const getAllProductVariants = async (id) => {
        let data = await getProductVariantListById(id);
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

    const getParentProductData = async (id) => {
        let data = await getParentProductDataApi(id);
        if (data?.status === 200) {
            setParentProductData(data?.data?.data); 
        }else{}
    }

    return (
        <ProductVariantsContext.Provider value={{
            productVariants, setProductVariants, totalProductVariants,
            parentProductData, setParentProductData, getParentProductData,
             setTotalProductVariants, getAllProductVariants,
             variantDetailOpen, setVariantDetailOpen,
             highLightDetailOpen, setHighLightDetailOpen,
             specificationDetailOpen, setSpecificationDetailOpen,
             variantFormIsOpen, setVariantFormIsOpen,
             variantFormIsEdit, setVariantFormIsEdit,
             editData, setEditData
        }}>
            {children}
        </ProductVariantsContext.Provider>
    )
}
