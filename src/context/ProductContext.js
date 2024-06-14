import React, { createContext, useState, useEffect } from 'react';
import { getProductList, getVendorProductList } from "../apis/product.js"
export const ProductsContext = createContext();

export const ProductContext = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(null);
    const [vendorProducts, setVendorProducts] = useState([]);
    const [totalVendorProducts, setTotalVendorProducts] = useState(null);

    const getAllProducts = async () => {
        let data = await getProductList();
        setProducts(data.data.data.rows);
        setTotalProducts(data.data.data.count);
    }

    const getAllVendorProducts = async () => {
        let data = await getVendorProductList();
        setVendorProducts(data.data.data.rows);
        setTotalVendorProducts(data.data.data.count);
    }

    useEffect(() => {
        getAllProducts();
    }, [setProducts]);

    useEffect(() => {
        getAllVendorProducts();
    }, [setVendorProducts]);

    return (
        <ProductsContext.Provider value={{
            products, setProducts, totalProducts, setTotalProducts, getAllProducts,
            vendorProducts, setVendorProducts, totalVendorProducts, setTotalVendorProducts, getAllVendorProducts
        }}>
            {children}
        </ProductsContext.Provider>
    )
}
