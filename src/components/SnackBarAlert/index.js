import { Alert, Snackbar } from '@mui/material';
import { CommonsContext } from '../../context/CommonContext';
import React, { useContext, useEffect } from 'react'

export const SnackBarAlert = () => {
    const { snackbarAlertOpen, setSnackbarAlertOpen, snackbarContent } = useContext(CommonsContext);

    const handleClose = () => {
        setSnackbarAlertOpen(false);
    };

    // useEffect(()=> {
    //     if(snackbarAlertOpen){
    //         setTimeout(()=>{
    //             handleClose();
    //         },  2000)
    //     }
    // }, [snackbarAlertOpen])
    return (
        <>
            <Snackbar
                open={snackbarAlertOpen}
                autoHideDuration={2000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert
                    onClose={handleClose}
                    variant='filled'
                    severity={snackbarContent?.type === 'success' ? 'success' : 'error'}
                    sx={{ width: '100%' }}
                >
                    {snackbarContent?.message}
                </Alert>
            </Snackbar>

            {/* <Snackbar open={snackbarAlertOpen} autoHideDuration={2000} onClose={handleClose} >
                <Alert onClose={handleClose} severity={snackbarContent?.type} sx={{ width: '100%', minHeight: '85px' }}>
                    <p className={`mb-3.5 ${snackbarContent?.type === 'success' ? 'text-[#428b46]' : 'text-[#db5050]'} font-bold text-[15px]`} > {snackbarContent?.type} </p> 
                    <p className="font-medium"> {snackbarContent?.message} </p>
                </Alert>
            </Snackbar> */}
        </>
    )
}
