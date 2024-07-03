import React, { createContext, useState, useEffect } from 'react';
import { getDeliveryPartnerList, getVendorList } from "../apis/partner.js"
export const PartnersContext = createContext();

export const PartnerContext = ({ children }) => {
    const [vendors, setVendors] = useState([]);
    const [deliveryPartners, setDeliveryPartners] = useState([]);
    const [totalVendors, setTotalVendors] = useState(null);
    const [totalDeliveryPartners, setTotalDeliveryPartners] = useState(null);

    const getAllVendors = async () => {
        let data = await getVendorList();
        setVendors(data.data.data.rows);
        setTotalVendors(data.data.data.count);
    }

    const getAllDeliveryPartners = async () => {
        let data = await getDeliveryPartnerList();
        setDeliveryPartners(data.data.data.rows);
        setTotalDeliveryPartners(data.data.data.count);
    }

    return (
        <PartnersContext.Provider value={{
            vendors, setVendors, totalVendors, setTotalVendors,
            getAllVendors, deliveryPartners, setDeliveryPartners,
            totalDeliveryPartners, setTotalDeliveryPartners, getAllDeliveryPartners
        }}>
            {children}
        </PartnersContext.Provider>
    )
}
