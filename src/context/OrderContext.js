import React, { createContext, useState, useEffect } from 'react';
import { getOrderList, getOrderItemList } from "../apis/order.js"
import { getVendorOrderList } from "../apis/vendor.js"
export const OrdersContext = createContext();

export const OrderContext = ({ children }) => {
    const [orders, setOrders] = useState([]);
    const [orderItems, setOrderItems] = useState([]);
    const [totalOrders, setTotalOrders] = useState(null);
    const [totalOrderItems, setTotalOrderItems] = useState(null);
    const [vendorOrders, setVendorOrders] = useState([]);
    const [totalVendorOrders, setTotalVendorOrders] = useState(null);

    const getAllOrders = async () => {
        let data = await getOrderList();
        setOrders(data.data.data.rows);
        setTotalOrders(data.data.data.count);
    }

    const getAllOrderItems = async () => {
        let data = await getOrderItemList();
        setOrderItems(data.data.data.rows);
        setTotalOrderItems(data.data.data.count);
    }


    const getAllVendorOrders = async () => {
        let data = await getVendorOrderList();
        setVendorOrders(data.data.data.rows);
        setTotalVendorOrders(data.data.data.count);
    }

    return (
        <OrdersContext.Provider value={{
            orders, setOrders, totalOrders, setTotalOrders, getAllOrders, getAllOrderItems,
            orderItems, setOrderItems, totalOrderItems, setTotalOrderItems,
            vendorOrders, setVendorOrders, totalVendorOrders, setTotalVendorOrders,
            getAllVendorOrders
        }}>
            {children}
        </OrdersContext.Provider>
    )
}
