import React, { createContext, useState, useEffect } from 'react';
import { getCustomerList } from "../apis/customer.js"
export const CustomersContext = createContext();

export const CustomerContext = ({ children }) => {
    const [customers, setCustomers] = useState([]);
    const [totalCustomers, setTotalCustomers] = useState(null);

    const getAllCustomers = async () => {
        let data = await getCustomerList();
        setCustomers(data.data.data.rows);
        setTotalCustomers(data.data.data.count);
    }

    useEffect(() => {
        getAllCustomers();
    }, [setCustomers]);

    return (
        <CustomersContext.Provider value={{
            customers, setCustomers, totalCustomers, setTotalCustomers, getAllCustomers
        }}>
            {children}
        </CustomersContext.Provider>
    )
}
