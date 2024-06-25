import Swal from 'sweetalert2';
import React, { createContext, useState } from 'react';
import {SnackBarAlert} from '../components/SnackBarAlert'
export const CommonsContext = createContext();

export const CommonContext = ({ children }) => {
    const [snackbarAlertOpen, setSnackbarAlertOpen] = useState(false);
    const [snackbarContent, setSnackbarContent] = useState({'abc':'dddd'});

    const [formIsOpen, setFormIsOpen] = useState(false);
    const [formIsEdit, setFormIsEdit] = useState(false);
    const [formIsEditContent, setFormIsEditContent] = useState({})

    // console.log(snackBarContent)
    let handleFormOpen = () => {
        setFormIsOpen(true);
        setFormIsEdit(false);
    }

    let handleFormClose = () => {
        setFormIsOpen(false);
    } 
    // const handleDelete = (id, dataLength, DeleteApiData, defaultFilter, setDefaultFilter, fetchData, redirectToLoginPage) => {
    //     showMessageNotification({
    //         title: "Are you sure?",
    //         text: "You want to delete this record!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!",
    //     }).then(async (result) => {
    //         if (result?.isConfirmed) {
    //             let response = await DeleteApiData(id);
    //             if (response?.status === 200) {
    //                 if(defaultFilter?.currentPage > 1) {
    //                     if(dataLength === 1) {
    //                         setDefaultFilter(prevState => ({
    //                             ...prevState,
    //                             currentPage: defaultFilter?.currentPage - 1
    //                         }));
    //                     }
    //                 }
    //                 setSnackBarContent({
    //                     type: 'success',
    //                     message: response?.data?.message
    //                 });
    //                 setSnackbarAlertOpen(true);
    //                 fetchData(defaultFilter);
    //             } else if (response?.status === 401) {
    //                 redirectToLoginPage();
    //             } else {
    //                 setSnackBarContent({
    //                     type: 'error',
    //                     message: response?.data?.message
    //                 });
    //                 setSnackbarAlertOpen(true);
    //             }
    //         }
    //     });
    // };


    // const showMessageNotification = (msg) => {
    //     return Swal.fire({
    //         title: msg.title,
    //         text: msg.text,
    //         icon: msg.icon,
    //         showCancelButton: msg.showCancelButton,
    //         confirmButtonColor: msg.confirmButtonColor,
    //         cancelButtonColor: msg.cancelButtonColor,
    //         confirmButtonText: msg.confirmButtonText,
    //     });
    // };

    return (
        <CommonsContext.Provider value={{
            snackbarAlertOpen, setSnackbarAlertOpen, formIsOpen, setFormIsOpen,
            formIsEdit, setFormIsEdit, handleFormOpen, handleFormClose, formIsEditContent,
            setFormIsEditContent, snackbarContent, setSnackbarContent
        }}>
            {children}
            <SnackBarAlert />
        </CommonsContext.Provider>
    )
}
