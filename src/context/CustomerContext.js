import React, { createContext, useContext, useState } from 'react';
import { getCustomerList, getCustomerAddressList, getMyDefaultAddress, getMyProfile } from "../apis/customer.js"
import { CommonsContext } from './CommonContext.js';
export const CustomersContext = createContext();

export const CustomerContext = ({ children }) => {
    const {setSnackbarAlertOpen, setSnackbarContent} = useContext(CommonsContext);
    const [customers, setCustomers] = useState([]);
    const [totalCustomers, setTotalCustomers] = useState(null);
    const [myAddressList, setMyAddressList] = useState([]);
    const [myDefaultAddress, setMyDefaultAddress] = useState([])
    const [customerProfileInfo, setCustomerProfileInfo] = useState([])
    const [editData, setEditData] = useState({});
    const [defaultFilter, setDefaultFilter] = useState({
        currentPage: 1,
        itemsPerPage: 5,
        filters: [],
        sortBy: []
    });

    const getCustomerDefaultAddress = async () => {
        let data = await getMyDefaultAddress();
        if (data?.status === 200) {
            setMyDefaultAddress(data.data.data);
        }
    }

    const getAllCustomers = async (value) => {
        let data = await getCustomerList(value);
        if (data?.status === 200) {
            setCustomers(data.data.data.rows);
            setTotalCustomers(data.data.data.count);
        }else{
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data?.data?.message
            })
        }
    }

    const getCustomerProfileInfo = async () => {
        let data = await getMyProfile();
        if (data?.status === 200) {
            setCustomerProfileInfo(data.data.data);
        }
    }

    const getAllMyAddresses = async () => {
        let data = await getCustomerAddressList();
        if (data?.status === 200) {
            setMyAddressList(data.data.data.rows);
        }
    }

    return (
        <CustomersContext.Provider value={{
            customers, setCustomers, totalCustomers, setTotalCustomers, getAllCustomers,
            myAddressList, setMyAddressList, getAllMyAddresses,
            myDefaultAddress, setMyDefaultAddress, getCustomerDefaultAddress,
            getCustomerProfileInfo, setCustomerProfileInfo, customerProfileInfo,
            defaultFilter, setDefaultFilter, editData, setEditData
        }}>
            {children}
        </CustomersContext.Provider>
    )
}
