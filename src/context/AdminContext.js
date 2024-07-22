import React, { createContext, useState, useContext } from 'react';
import { getAdminList } from "../apis/admin.js"
import { CommonsContext } from './CommonContext.js';
export const AdminsContext = createContext();

export const AdminContext = ({ children }) => {
    const {setSnackbarAlertOpen, setSnackbarContent} = useContext(CommonsContext);
    const [editData, setEditData] = useState({});
    const [admins, setAdmins] = useState([]);
    const [totalAdmins, setTotalAdmins] = useState(null);
    const [defaultFilter, setDefaultFilter] = useState({
        currentPage: 1,
        itemsPerPage: 5,
        filters: [],
        sortBy: []
    });

    const getAllAdmins = async (value) => {
        let data = await getAdminList(value);
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
            admins, setAdmins, totalAdmins,editData, setEditData,
            setTotalAdmins, getAllAdmins, defaultFilter, setDefaultFilter, 
        }}>
            {children}
        </AdminsContext.Provider>
    )
}
