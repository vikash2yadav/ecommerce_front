import React, { createContext, useState, useEffect } from 'react';
import { getAdminList } from "../apis/admin.js"
export const AdminsContext = createContext();

export const AdminContext = ({ children }) => {
    const [admins, setAdmins] = useState([]);
    const [totalAdmins, setTotalAdmins] = useState(null);

    const getAllAdmins = async () => {
        let data = await getAdminList();
        setAdmins(data.data.data.rows);
        setTotalAdmins(data.data.data.count);
    }

    return (
        <AdminsContext.Provider value={{
            admins, setAdmins, totalAdmins, setTotalAdmins, getAllAdmins
        }}>
            {children}
        </AdminsContext.Provider>
    )
}
