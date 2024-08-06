import React, { createContext, useContext, useState } from 'react';
import { getOrderList, getOrderItemList, getAllMyOrderList } from "../apis/order.js"
import { getVendorOrderList } from "../apis/vendor.js"
import { CommonsContext } from './CommonContext.js';
export const OrdersContext = createContext();

export const OrderContext = ({ children }) => {
    const {setSnackbarAlertOpen, setSnackbarContent} = useContext(CommonsContext);
    const [orders, setOrders] = useState([]);
    const [orderItems, setOrderItems] = useState([]);
    const [totalOrders, setTotalOrders] = useState(null);
    const [totalOrderItems, setTotalOrderItems] = useState(null);
    const [vendorOrders, setVendorOrders] = useState([]);
    const [totalVendorOrders, setTotalVendorOrders] = useState(null);
    const [myOrders, setMyOrders] = useState([]);
    const [myOrderItems, setMyOrderItems] = useState([]);
    const [totalMyOrders, setTotalMyOrders] = useState();
    const [totalMyOrderItems, setTotalMyOrderItems] = useState();
    const [shippedAddressDetailOpen, setShippedAddressDetailOpen] = useState(false);
    const [shippedAddressDetails, setShippedAddressDetails] = useState({});
    const [orderItemsDetailOpen, setOrderItemsDetailOpen] = useState(false);
    const [orderItemsDetails, setOrderItemsDetails] = useState([]);
    const [defaultFilter, setDefaultFilter] = useState({
        currentPage: 1,
        itemsPerPage: 5,
        filters: [],
        sortBy: []
    });

    const getAllOrders = async (values) => {
        let data = await getOrderList(values);
        if (data?.status === 200) {
            setOrders(data.data.data.rows);
            setTotalOrders(data.data.data.count);
        }else{
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data?.data?.message
            })
        }
    }

    const getAllOrderItems = async () => {
        let data = await getOrderItemList();
        if (data?.status === 200) {
            setOrderItems(data.data.data.rows);
            setTotalOrderItems(data.data.data.count);
        }else{
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data?.data?.message
            })
        }
    }

    const getAllMyOrders = async (values) => {
        let data = await getAllMyOrderList(values);
        if (data?.status === 200) {
            setMyOrders(data.data.data.rows);
            setTotalMyOrders(data.data.data.count);
        }else{
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data?.data?.message
            })
        }
    }

    const getAllVendorOrders = async () => {
        let data = await getVendorOrderList();
        if (data?.status === 200) {
            setVendorOrders(data.data.data.rows);
            setTotalVendorOrders(data.data.data.count);
        }else{
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data?.data?.message
            })
        }
    }

    return (
        <OrdersContext.Provider value={{
            orders, setOrders, totalOrders, setTotalOrders, getAllOrders, getAllOrderItems,
            orderItems, setOrderItems, totalOrderItems, setTotalOrderItems,
            vendorOrders, setVendorOrders, totalVendorOrders, setTotalVendorOrders,
            getAllVendorOrders, myOrders, setMyOrders, myOrderItems, setMyOrderItems,
            totalMyOrders, setTotalMyOrders, totalMyOrderItems, setTotalMyOrderItems,
            getAllMyOrders, defaultFilter, setDefaultFilter,
            shippedAddressDetailOpen, setShippedAddressDetailOpen,
            shippedAddressDetails, setShippedAddressDetails,
            orderItemsDetailOpen, setOrderItemsDetailOpen,
            orderItemsDetails, setOrderItemsDetails
        }}>
            {children}
        </OrdersContext.Provider>
    )
}
