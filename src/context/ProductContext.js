import React, { createContext, useState } from 'react';
import { getProductList, getVendorProductList } from "../apis/product.js"
export const ProductsContext = createContext();

export const ProductContext = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [vendorProducts, setVendorProducts] = useState([]);
    const [totalVendorProducts, setTotalVendorProducts] = useState(0);

    const getAllProducts = async () => {
        let data = await getProductList();
        if (data?.status === 200) {
            setProducts(data.data.data.rows);
            setTotalProducts(data.data.data.count);
        }
    }

    const getAllVendorProducts = async () => {
        let data = await getVendorProductList();
        if (data?.status === 200) {
            setVendorProducts(data.data.data.rows);
            setTotalVendorProducts(data.data.data.count);
        }
    }

    return (
        <ProductsContext.Provider value={{
            products, setProducts, totalProducts, setTotalProducts, getAllProducts,
            vendorProducts, setVendorProducts, totalVendorProducts, setTotalVendorProducts, getAllVendorProducts
        }}>
            {children}
        </ProductsContext.Provider>
    )
}
