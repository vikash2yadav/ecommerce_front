import React, { createContext, useState, useEffect, useContext } from 'react';
import { getAdminList } from "../apis/admin.js"
import { CommonsContext } from './CommonContext.js';
export const AdminsContext = createContext();

export const AdminContext = ({ children }) => {
    const {setSnackbarAlertOpen, setSnackbarContent} = useContext(CommonsContext)
    const [admins, setAdmins] = useState([]);
    const [totalAdmins, setTotalAdmins] = useState(null);
    const [defaultFilter, setDefaultFilter] = useState({
        currentPage: 1,
        itemsPerPage: 5,
        filters: [],
        sortBy: []
    });

    const getAllAdmins = async () => {
        let data = await getAdminList();
        if (data?.status === 200) {
            setAdmins(data.data.data.rows);
            setTotalAdmins(data.data.data.count);
        }else{
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data?.data?.message
            })
        }
    }

    return (
        <AdminsContext.Provider value={{
            admins, setAdmins, totalAdmins, setTotalAdmins, getAllAdmins, defaultFilter, setDefaultFilter
        }}>
            {children}
        </AdminsContext.Provider>
    )
}
