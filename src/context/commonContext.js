import Swal from 'sweetalert2';
import React, { createContext, useState } from 'react';
export const CommonsContext = createContext();

export const CommonContext = ({ children }) => {
    const [snackBarAlertOpen, setSnackBarAlertOpen] = useState(false);

    const [formIsOpen, setFormIsOpen] = useState(false);
    const [formIsEdit, setFormIsEdit] = useState(false);
    const [snackBarContent, setSnackBarContent] = useState({});
    const [formIsEditContent, setFormIsEditContent] = useState({})

    let handleFormOpen = () => {
        setFormIsOpen(true);
        setFormIsEdit(false);
    }

    let handleFormClose = () => {
        setFormIsOpen(false);
    } 
    const handleDelete = (id, dataLength, DeleteApiData, defaultFilter, setDefaultFilter, fetchData, redirectToLoginPage) => {
        showMessageNotification({
            title: "Are you sure?",
            text: "You want to delete this record!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result?.isConfirmed) {
                let response = await DeleteApiData(id);
                if (response?.status === 200) {
                    if(defaultFilter?.currentPage > 1) {
                        if(dataLength === 1) {
                            setDefaultFilter(prevState => ({
                                ...prevState,
                                currentPage: defaultFilter?.currentPage - 1
                            }));
                        }
                    }
                    setSnackBarContent({
                        type: 'success',
                        message: response?.data?.message
                    });
                    setSnackBarAlertOpen(true);
                    fetchData(defaultFilter);
                } else if (response?.status === 401) {
                    redirectToLoginPage();
                } else {
                    setSnackBarContent({
                        type: 'error',
                        message: response?.data?.message
                    });
                    setSnackBarAlertOpen(true);
                }
            }
        });
    };


    const showMessageNotification = (msg) => {
        return Swal.fire({
            title: msg.title,
            text: msg.text,
            icon: msg.icon,
            showCancelButton: msg.showCancelButton,
            confirmButtonColor: msg.confirmButtonColor,
            cancelButtonColor: msg.cancelButtonColor,
            confirmButtonText: msg.confirmButtonText,
        });
    };

    return (
        <CommonsContext.Provider value={{
            snackBarAlertOpen, setSnackBarAlertOpen, formIsOpen, setFormIsOpen, snackBarContent,
            formIsEdit, setFormIsEdit, handleFormOpen, handleFormClose, handleDelete, formIsEditContent,
            setFormIsEditContent
        }}>
            {children}
        </CommonsContext.Provider>
    )
}
