import { Modal } from 'antd'
import React, { useContext } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { OrdersContext } from '../../../../context/OrderContext';

const ShippedAddress = () => {
    const { shippedAddressDetailOpen, setShippedAddressDetailOpen, shippedAddressDetails } = useContext(OrdersContext)

    return (
        <>
            <Modal
                open={shippedAddressDetailOpen}
                onCancel={() => setShippedAddressDetailOpen(false)}
                footer={null}
                width={450}
            >
                <div className='md:max-h-80 md:min-h-28 min-h-18 max-h-64 overflow-y-auto hide-scrollbar'>
                    <p className='mt-5 mb-3 text-xl font-semibold mb-5 capitalize'>Shipping Address</p>
                    {
                        !shippedAddressDetails ? (
                            <div className='flex pt-2 mb-5 justify-center items-center text-2xl'>
                                No data
                            </div>
                        )
                            : (
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Street</TableCell>
                                                <TableCell>{shippedAddressDetails?.street ? shippedAddressDetails.street : '-'}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Area</TableCell>
                                                <TableCell>{shippedAddressDetails?.area ? shippedAddressDetails.area : '-'}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Pin Code</TableCell>
                                                <TableCell>{shippedAddressDetails?.pin_code ? shippedAddressDetails.pin_code : '-'}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>City</TableCell>
                                                <TableCell>{shippedAddressDetails?.city?.name ? shippedAddressDetails.city.name : '-'}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>State</TableCell>
                                                <TableCell>{shippedAddressDetails?.state?.name ? shippedAddressDetails.state.name : '-'}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Country</TableCell>
                                                <TableCell>{shippedAddressDetails?.country?.name ? shippedAddressDetails.country.name : '-'}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            )
                    }
                </div>
            </Modal>
        </>
    )
}

export default ShippedAddress;
