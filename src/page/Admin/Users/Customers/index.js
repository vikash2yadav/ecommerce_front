import React, { useContext, useEffect } from 'react'
import AdminSidebar from '../../../../components/Admin/AdminSidebar'
import Table from '../../../../components/Table'
import { Button } from 'antd';
import PaginationC from '../../../../components/PaginationC';
import { CustomersContext } from '../../../../context/CustomerContext'
import UperTitleBox from '../../../../components/Admin/UperTitleBox';
import { CommonsContext } from '../../../../context/CommonContext'
import Form from './Form';
import { LanguageContext } from '../../../../context/LangContext';
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { getCustomerByIdApi, deleteCustomerApi, categoryStatusChangeApi } from '../../../../apis/customer';
import ButtonC from '../../../../components/ButtonC';
import { GrPowerReset } from "react-icons/gr";

const Customers = () => {
    const { customers,totalCustomers, defaultFilter,setEditData, setDefaultFilter, getAllCustomers } = useContext(CustomersContext);
    const { formIsOpen, setFormIsOpen, formIsEdit, setFormIsEdit, handleDelete } = useContext(CommonsContext);
    const { getAllLanguages } = useContext(LanguageContext);

    const handleEdit = async (id) => {
        let data = await getCustomerByIdApi(id);
        if (data?.status === 200) {
            setEditData(data?.data?.data);
        }
        setFormIsEdit(true);
        setFormIsOpen(false);
        getAllLanguages();
    }

    const handleDeleteCustomer = async (id) => {
        return await deleteCustomerApi(id);
    }

    const handleStatusChange = async (body) => {
        await categoryStatusChangeApi(body);
        getAllCustomers(defaultFilter);
    }
    
    const columns = [
    {
        Header: 'First Name',
        access: 'first_name',
        isSearch: true,
        isShort: true,
        isColumn: true,
        Cell: ({ row }) => {
            return (
                row?.original?.first_name ? row?.original?.first_name : '-'
            )
        }
    },
    {
        Header: 'Last Name',
        access: 'last_name',
        isSearch: true,
        isShort: true,
        isColumn: true ,
        Cell: ({ row }) => {
            return (
                row?.original?.last_name ? row?.original?.last_name : '-'
            )
        }
    },
    {
        Header: 'Full Name',
        access: 'full_name',
        isSearch: true,
        isShort: true,
        isColumn: true,
        Cell: ({ row }) => {
            return (
                row?.original?.full_name ? row?.original?.full_name : '-'
            )
        }
    },
    {
        Header: 'Email',
        access: 'email',
        isSearch: true,
        isShort: true,
        isColumn: true,
        Cell: ({ row }) => {
            return (
                row?.original?.email ? row?.original?.email : '-'
            )
        }
    },
    {
        Header: 'Birth date',
        access: 'birth_date',
        isSearch: true,
        isShort: true,
        isColumn: true,
        Cell: ({ row }) => {
            return (
                row?.original?.birth_date ? row?.original?.birth_date : '-'
            )
        }
    },
    {
        Header: 'Gender',
        access: 'gender',
        isSearch: true,
        isShort: true,
        isColumn: true,
        Cell: ({ row }) => {
            return (
                row?.original?.gender ? row?.original?.gender : '-'
            )
        }
    },
    {
        Header: 'Contact No',
        access: 'contact_no',
        isSearch: true,
        isShort: true,
        isColumn: true,
        Cell: ({ row }) => {
            return (
                row?.original?.contact_no ? row?.original?.contact_no : '-'
            )
        }
    },
    {
        Header: 'Alternative contact no',
        access: 'alternative_contact_no',
        isSearch: true,
        isShort: true,
        isColumn: true,
        Cell: ({ row }) => {
            return (
                row?.original?.alternative_contact_no ? row?.original?.alternative_contact_no : '-'
            )
        }
    },
    {
        Header: 'Language',
        access: 'language.name',
        isSearch: true,
        isColumn: true,
        Cell: ({ row }) => {
            return (
                row?.original?.language?.name ? row?.original?.language?.name : '-'
            )
        }
    },
    {
        Header: 'Created by',
        access: 'customerCreatedBy.full_name',
        isSearch: true,
        isShort: false,
        isColumn: true,
        Cell: ({ row }) => {
            console.log(row)
            return (
                row?.original?.customerCreatedBy?.full_name ? row?.original?.customerCreatedBy?.full_name : '-'
            )
        }
    },
    {
        Header: 'Updated by',
        access: 'customerUpdatedBy.full_name',
        isSearch: true,
        isShort: true,
        isColumn: true,
        Cell: ({ row }) => {
            return (
                row?.original?.customerUpdatedBy?.full_name ? row?.original?.customerUpdatedBy?.full_name : '-'
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
                    onClick={() => handleDelete(row?.original?.id, undefined, handleDeleteCustomer, getAllCustomers, defaultFilter)}
                    className="text-red-600 text-2xl hover:text-red-900 ml-2 hover:cursor-pointer"
                />
            </div>
        )
    },
];

    const handleOpen = () => {
        setFormIsOpen(true);
        setFormIsEdit(false);
        getAllLanguages();
    }

    useEffect(()=> {
        getAllCustomers(defaultFilter);
    }, [defaultFilter, setDefaultFilter]);

    return (
        <>
            <AdminSidebar />
            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="All Customers" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                <div className='flex justify-end items-center mb-2'>
                        <div className='text-xl mx-3 hover:cursor-pointer hover:text-gray-500' title='reset filters'><GrPowerReset onClick={()=>getAllCustomers(setDefaultFilter({
                            currentPage: 1,itemsPerPage: 5,filters: [],sortBy: []
                        }))}/></div>
                        <Button onClick={handleOpen}>+ Add New</Button>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table 
                        columns={columns} 
                        data={customers} 
                        fetchDataApi={getAllCustomers} 
                        defaultFilter={defaultFilter}
                        setDefaultFilter={setDefaultFilter}
                        />
                    </div>

                    <PaginationC
                        defaultFilter={defaultFilter}
                        setDefaultFilter={setDefaultFilter}
                        fetchDataApi={getAllCustomers}
                        totalItems={totalCustomers}
                    />

                </div>

                </div>
            <Form open={(formIsOpen && formIsOpen) || (formIsEdit && formIsEdit)} />
        </>
    )
}

export default Customers