import React, { createContext, useState } from 'react';
import { SnackBarAlert } from '../components/SnackBarAlert'
import Swal from 'sweetalert2';
export const CommonsContext = createContext();

export const CommonContext = ({ children }) => {
    const [snackbarAlertOpen, setSnackbarAlertOpen] = useState(false);
    const [snackbarContent, setSnackbarContent] = useState({});

    const [formIsOpen, setFormIsOpen] = useState(false);
    const [formIsEdit, setFormIsEdit] = useState(false);
    const [formIsEditContent, setFormIsEditContent] = useState({});

    // console.log(snackBarContent)
    let handleFormOpen = () => {
        setFormIsOpen(true);
        setFormIsEdit(false);
    }

    let handleFormClose = () => {
        setFormIsOpen(false);
    }
    const handleDelete = (id, dataLength, DeleteApiData, api, defaultFilter, setDefaultFilter, fetchData, redirectToLoginPage) => {
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
                let data = await DeleteApiData(id);
                if (data?.status === 200) {
                    setSnackbarAlertOpen(true);
                    setSnackbarContent({
                        type: 'success',
                        message: data?.data?.message
                    })
                    api(defaultFilter);
                    if (defaultFilter?.currentPage > 1) {
                        if (dataLength === 1) {
                            setDefaultFilter(prevState => ({
                                ...prevState,
                                currentPage: defaultFilter?.currentPage - 1
                            }));
                        }
                    }
                }
                else {
                    setSnackbarAlertOpen(true);
                    setSnackbarContent({
                        type: 'error',
                        message: data?.data?.message
                    })
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
            snackbarAlertOpen, setSnackbarAlertOpen, formIsOpen, setFormIsOpen,
            formIsEdit, setFormIsEdit, handleFormOpen, handleFormClose, formIsEditContent,
            setFormIsEditContent, snackbarContent, setSnackbarContent, handleDelete
        }}>
            {children}
            <SnackBarAlert />
        </CommonsContext.Provider>
    )
}
