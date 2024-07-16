import React, { useContext, useEffect } from 'react'
import AdminSidebar from '../../../../components/Admin/AdminSidebar'
import Table from '../../../../components/Table'
import { Button } from 'antd';
import PaginationC from '../../../../components/PaginationC';
import { PartnersContext } from "../../../../context/PartnerContext"
import UperTitleBox from '../../../../components/Admin/UperTitleBox';
import Form from './Form';
import { CommonsContext } from '../../../../context/CommonContext'
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { LanguageContext } from '../../../../context/LangContext';
import { getVendorByIdApi, vendorStatusChangeApi, deleteVendorApi } from '../../../../apis/partner';
import ButtonC from '../../../../components/ButtonC';
import { GrPowerReset } from "react-icons/gr";

const Customers = () => {
    const { getAllLanguages } = useContext(LanguageContext)
    const { vendors, getAllVendors, vendorDefaultFilter, setEditData, setVendorDefaultFilter, totalVendors } = useContext(PartnersContext);
    const { formIsOpen, setFormIsOpen, setFormIsEdit, formIsEdit, handleDelete } = useContext(CommonsContext);

    const handleEdit = async (id) => {
        let data = await getVendorByIdApi(id);
        if (data?.status === 200) {
            setEditData(data?.data?.data);
        }
        setFormIsEdit(true);
        setFormIsOpen(false);
        getAllLanguages();
    }

    const handleDeleteVendor = async (id) => {
        return await deleteVendorApi(id);
    }

    const handleStatusChange = async (body) => {
        await vendorStatusChangeApi(body);
        getAllVendors(vendorDefaultFilter);
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
            isColumn: true,
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
            access: 'partnerCreatedBy.full_name',
            isSearch: true,
            isShort: false,
            isColumn: true,
            Cell: ({ row }) => {
                console.log(row)
                return (
                    row?.original?.partnerCreatedBy?.full_name ? row?.original?.partnerCreatedBy?.full_name : '-'
                )
            }
        },
        {
            Header: 'Updated by',
            access: 'partnerUpdatedBy.full_name',
            isSearch: true,
            isShort: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.partnerUpdatedBy?.full_name ? row?.original?.partnerUpdatedBy?.full_name : '-'
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
                        onClick={() => handleDelete(row?.original?.id, undefined, handleDeleteVendor, getAllVendors, vendorDefaultFilter)}
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

    useEffect(() => {
        getAllVendors(vendorDefaultFilter);
    }, [vendorDefaultFilter, setVendorDefaultFilter]);

    return (
        <>
            <AdminSidebar />
            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="All Vendors" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                    <div className='flex justify-end items-center mb-2'>
                        <div className='text-xl mx-3 hover:cursor-pointer hover:text-gray-500' title='reset filters'><GrPowerReset onClick={() => getAllVendors(setVendorDefaultFilter({
                            currentPage: 1, itemsPerPage: 5, filters: [], sortBy: []
                        }))} /></div>
                        <Button onClick={handleOpen}>+ Add New</Button>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table
                            columns={columns}
                            data={vendors}
                            fetchDataApi={getAllVendors}
                            defaultFilter={vendorDefaultFilter}
                            setDefaultFilter={setVendorDefaultFilter} />
                    </div>

                    <PaginationC
                        defaultFilter={vendorDefaultFilter}
                        setDefaultFilter={setVendorDefaultFilter}
                        fetchDataApi={getAllVendors}
                        totalItems={totalVendors}
                    />

                </div>
            </div>
            <Form open={(formIsOpen && formIsOpen) || (formIsEdit && formIsEdit)} />
        </>
    )
}

export default Customers