import { Alert, Snackbar } from '@mui/material';
import { CommonsContext } from '../../context/CommonContext';
import React, { useContext } from 'react'

export const SnackBarAlert = () => {
    const { snackbarAlertOpen, setSnackbarAlertOpen, snackbarContent } = useContext(CommonsContext);

    const handleClose = () => {
        setSnackbarAlertOpen(false);
    };

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
        </>
    )
}
