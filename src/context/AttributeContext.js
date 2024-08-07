import React, { createContext, useState, useContext } from 'react';
import { getAllAttributeListApi } from "../apis/attribute.js"
import { CommonsContext } from './CommonContext.js';
export const AttributesContext = createContext();

export const AttributeContext = ({ children }) => {
    const {setSnackbarAlertOpen, setSnackbarContent} = useContext(CommonsContext);
    const [editData, setEditData] = useState({});
    const [attributes, setAttributes] = useState([]);
    const [totalAttributes, setTotalAttributes] = useState(null);
    const [defaultFilter, setDefaultFilter] = useState({
        currentPage: 1,
        itemsPerPage: 5,
        filters: [],
        sortBy: []
    });

    const getAllAttributes = async (value) => {
        let data = await getAllAttributeListApi(value);
        if (data?.status === 200) {
            setAttributes(data.data.data.rows);
            setTotalAttributes(data.data.data.count);
        }else{
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data?.data?.message
            })
        }
    }

    return (
        <AttributesContext.Provider value={{
            attributes, setAttributes, totalAttributes, editData, setEditData,
            setTotalAttributes, getAllAttributes, defaultFilter, setDefaultFilter, 
        }}>
            {children}
        </AttributesContext.Provider>
    )
}
