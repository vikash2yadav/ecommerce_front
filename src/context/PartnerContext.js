import React, { createContext, useState, useContext } from 'react';
import { getDeliveryPartnerList, getVendorList } from "../apis/partner.js"
import { CommonsContext } from './CommonContext.js';
export const PartnersContext = createContext();

export const PartnerContext = ({ children }) => {
    const {setSnackbarAlertOpen, setSnackbarContent} = useContext(CommonsContext);
    const [vendors, setVendors] = useState([]);
    const [deliveryPartners, setDeliveryPartners] = useState([]);
    const [totalVendors, setTotalVendors] = useState(null);
    const [editData, setEditData] = useState({});
    const [totalDeliveryPartners, setTotalDeliveryPartners] = useState(null);
    const [vendorDefaultFilter, setVendorDefaultFilter] = useState({
        "currentPage": 1,
        "itemsPerPage": 5,
        "filters": [],
        "sortBy": []
    });
    const [deliveryPartnerDefaultFilter, setDeliveryPartnerVendorDefaultFilter] = useState({
        "currentPage": 1,
        "itemsPerPage": 5,
        "filters": [],
        "sortBy": []
    });

    const getAllVendors = async (value) => {
        let data = await getVendorList(value);
        if (data?.status === 200) {
            setVendors(data.data.data.rows);
            setTotalVendors(data.data.data.count);
        }else{
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data?.data?.message
            })
        }
    }

    const getAllDeliveryPartners = async (value) => {
        let data = await getDeliveryPartnerList(value);
        if (data?.status === 200) {
            setDeliveryPartners(data.data.data.rows);
            setTotalDeliveryPartners(data.data.data.count);
        }else{
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data?.data?.message
            })
        }
    }

    return (
        <PartnersContext.Provider value={{
            vendors, setVendors, totalVendors, setTotalVendors,
            getAllVendors, deliveryPartners, setDeliveryPartners,
            totalDeliveryPartners, setTotalDeliveryPartners, getAllDeliveryPartners,
            vendorDefaultFilter, setVendorDefaultFilter,
            deliveryPartnerDefaultFilter, setDeliveryPartnerVendorDefaultFilter,
            editData, setEditData
        }}>
            {children}
        </PartnersContext.Provider>
    )
}
