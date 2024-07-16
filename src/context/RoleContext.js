import React, { createContext, useState, useEffect } from 'react';
import { getRoleListApi } from "../apis/role.js"
export const RolesContext = createContext();

export const RoleContext = ({ children }) => {
    const [roles, setRoles] = useState([]);
    const [roleTotal, setRoleTotal] = useState();

    const getAllRoles = async () => {
        let data = await getRoleListApi();
        if (data?.status === 200) {
            setRoles(data.data.data.rows)
            setRoleTotal(data.data.data.count);
        }
    }

    return (
        <RolesContext.Provider value={{
            roles, setRoles, getAllRoles, roleTotal, setRoleTotal
        }}>
            {children}
        </RolesContext.Provider>
    )
}
