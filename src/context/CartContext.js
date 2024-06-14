import React, { createContext, useState, useEffect } from 'react';
import { getCustomerCartProductList } from "../apis/cart.js"
export const CartsContext = createContext();

export const CartContext = ({ children }) => {
    const [customerCartProducts, setCustomerCartProducts] = useState([]);
    const [totalCustomerCartProducts, setTotalCustomerCartProducts] = useState(null);

    const getAllCustomerCartProducts = async () => {
        let data = await getCustomerCartProductList();
        setCustomerCartProducts(data.data.data.rows);
        setTotalCustomerCartProducts(data.data.data.count);
    }

    useEffect(() => {
        getAllCustomerCartProducts();
    }, [setCustomerCartProducts]);

    return (
        <CartsContext.Provider value={{
            customerCartProducts, setCustomerCartProducts,
            totalCustomerCartProducts, setTotalCustomerCartProducts,
            getAllCustomerCartProducts
        }}>
            {children}
        </CartsContext.Provider>
    )
}
