import React, { useContext, useEffect } from 'react'
import AdminSidebar from '../../../../components/Admin/AdminSidebar'
import Table from '../../../../components/Table'
import { Button } from 'antd';
import PaginationC from '../../../../components/PaginationC';
import { OrdersContext } from '../../../../context/OrderContext';
import UperTitleBox from '../../../../components/Admin/UperTitleBox';
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import ButtonC from '../../../../components/ButtonC';
import { CommonsContext } from '../../../../context/CommonContext';
import { GrPowerReset } from "react-icons/gr";
import { FaLocationCrosshairs } from "react-icons/fa6";
import Form from './Form';
import { CustomersContext } from '../../../../context/CustomerContext';
import { ProductsContext } from '../../../../context/ProductContext';
import {deleteOrderApi, getShippedAddressById, getOrderItemsById} from '../../../../apis/order'
import ShippedAddress from '../../../../components/Admin/Order/ShippedAddress';
import { RiAlignItemBottomLine } from "react-icons/ri";
import OrderItems from '../../../../components/Admin/Order/OrderItems';

const Orders = () => {
    const { getAllCustomers } = useContext(CustomersContext);
    const { getAllProducts } = useContext(ProductsContext);
    const { orders, setOrders, totalOrders, getAllOrders, defaultFilter, setDefaultFilter,setOrderItemsDetailOpen, setShippedAddressDetailOpen , setOrderItemDetailOpen,setShippedAddressDetails, setOrderItemsDetails} = useContext(OrdersContext);
    const { formIsOpen, setFormIsOpen, formIsEdit, setFormIsEdit, handleDelete } = useContext(CommonsContext);

    const handleEdit = async (id) => {
        alert('we are working on it')
        // let data = await getAdminById(id);
        // if (data?.status === 200) {
        //     setEditData(data?.data?.data);
        // }
        // setFormIsEdit(true);
        // setFormIsOpen(false);
    }

    const handleDeleteAdmin = async (id) => {
        return await deleteOrderApi(id);
    }

    const handleAddressDetails = async (id) => {
        setShippedAddressDetailOpen(true);
        let data = await getShippedAddressById(id);
        if(data?.status === 200){
            setShippedAddressDetails(data?.data?.data);
        }
    }

    const handleItemsDetails = async (id) => {
        setOrderItemsDetailOpen(true);
        let data = await getOrderItemsById(id);
        if(data?.status === 200){
            setOrderItemsDetails(data?.data?.data?.rows)
        }
    }

    const columns = [
        {
            Header: 'Customer',
            access: 'user.full_name',
            isSearch: true,
            isShort: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.user?.full_name ? row?.original?.user?.full_name : '-'
                )
            }
        },
        {
            Header: 'Vendor',
            access: 'partner.full_name',
            isSearch: true,
            isShort: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.partner?.full_name ? row?.original?.partner?.full_name : '-'
                )
            }
        },
        {
            Header: 'Order date',
            access: 'orderd_date',
            isSearch: true,
            isShort: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.orderd_date ? row?.original?.orderd_date : '-'
                )
            }
        },
        {
            Header: 'Shipped date',
            access: 'shipped_date',
            isSearch: true,
            isShort: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.shipped_date ? row?.original?.shipped_date : '-'
                )
            }
        },
        {
            Header: 'Shipped address',
            access: 'shipped_address_id',
            isSearch: false,
            isShort: false,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    <div className='flex justify-center items-center'>
                        <span className='text-3xl hover:cursor-pointer text-gray-400'>
                            <FaLocationCrosshairs onClick={() => handleAddressDetails(row?.original?.id)} /></span>
                    </div>
                )
            }
        },
        {
            Header: 'Items',
            access: 'total_items',
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    <div className='flex justify-center items-center'>
                        <span className='text-3xl hover:cursor-pointer text-gray-400'>
                            <RiAlignItemBottomLine onClick={() => handleItemsDetails(row?.original?.id)} /></span>
                    </div>
                )
            }
        },
        {
            Header: 'Total discount',
            access: 'total_discount',
            isSearch: true,
            isShort: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.total_discount ? row?.original?.total_discount : '-'
                )
            }
        },
        {
            Header: 'Total Amount',
            access: 'total_amoumt',
            isSearch: true,
            isShort: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.total_amoumt ? row?.original?.total_amoumt : '-'
                )
            }
        },
        {
            Header: 'Status',
            access: 'status',
            isStatus: true,
            isShort: false,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    <ButtonC
                        onClick={() => handleStatusChange({ id: row?.original?.id, status: !(row?.original?.status) })}
                        style={{ width: "90px" }}
                        label={row?.original?.status === 1 ? 'Active' : 'InActive'}
                        variant='contained'
                        color={row?.original?.status === 1 ? 'success' : 'error'} />
                )
            }
        },
        {
            Header: 'Action',
            access: 'action',
            isShort: false,
            isColumn: true,
            Cell: ({ row }) => (
                <div className='flex justify-evenly items-center'>
                    <FiEdit
                        onClick={() => handleEdit(row?.original?.id)}
                        className="text-blue-600 text-xl hover:text-blue-900 hover:cursor-pointer"
                    />
                    <MdDeleteOutline
                        onClick={() => handleDelete(row?.original?.id, undefined, handleDeleteAdmin, getAllOrders, defaultFilter)}
                        className="text-red-600 text-2xl hover:text-red-900 ml-2 hover:cursor-pointer"
                    />
                </div>
            )

        },
    ]

    const handleStatusChange = async (body) => {
        // await orderStatusChange(body);
        // getAllAdmins(defaultFilter);
    }

    const handleOpen = () => {
        alert('we are working on it')
        // setFormIsOpen(true);
        // getAllCustomers();
        // getAllProducts();
    }

    useEffect(() => {
        getAllOrders();
    }, [setOrders]);

    return (
        <>
            <AdminSidebar />

            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="All Orders" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">
                    <div className='flex justify-end items-center mb-2'>
                        <div className='text-xl mx-3 hover:cursor-pointer hover:text-gray-500' title='reset filters'><GrPowerReset onClick={() => getAllOrders(setDefaultFilter({
                            currentPage: 1, itemsPerPage: 5, filters: [], sortBy: []
                        }))} /></div>
                        <Button onClick={handleOpen}>+ Add New</Button>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table columns={columns} data={orders}
                            fetchDataApi={getAllOrders}
                            defaultFilter={defaultFilter}
                            setDefaultFilter={setDefaultFilter}
                        />
                    </div>

                    <PaginationC
                        defaultFilter={defaultFilter}
                        setDefaultFilter={setDefaultFilter}
                        fetchDataApi={getAllOrders}
                        totalItems={totalOrders} />
                </div>
            </div>

            <Form open={(formIsOpen && formIsOpen) || (formIsEdit && formIsEdit)}  />
            <ShippedAddress />
            <OrderItems />
        </>
    )
}

export default Orders