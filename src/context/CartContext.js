import React, { createContext, useState, useEffect } from 'react';
import { getCustomerCartItemsList } from "../apis/cart.js"
export const CartsContext = createContext();

export const CartContext = ({ children }) => {
    const [customerCartItems, setCustomerCartItems] = useState([]);
    const [totalCustomerCartItems, setTotalCustomerCartItems] = useState(null);

    const getAllCustomerCartItems = async () => {
        let data = await getCustomerCartItemsList();
        setCustomerCartItems(data.data.data.rows);
        setTotalCustomerCartItems(data.data.data.count);
    }

    return (
        <CartsContext.Provider value={{
            customerCartItems, setCustomerCartItems,
            totalCustomerCartItems, setTotalCustomerCartItems,
            getCustomerCartItemsList, getAllCustomerCartItems
        }}>
            {children}
        </CartsContext.Provider>
    )
}
