import React, { useContext, useEffect } from 'react'
import AdminSidebar from '../../../../components/Admin/AdminSidebar'
import Table from '../../../../components/Table'
import { Button } from 'antd';
import PaginationC from '../../../../components/PaginationC';
import { AdminsContext } from '../../../../context/AdminContext'
import { CommonsContext } from '../../../../context/CommonContext'
import UperTitleBox from '../../../../components/Admin/UperTitleBox';
import Form from './Form';
import { LanguageContext } from '../../../../context/LangContext';
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { deleteAdminApi, adminStatusChange } from '../../../../apis/admin';
import ButtonC from '../../../../components/ButtonC';
import { GrPowerReset } from "react-icons/gr";

const Admins = () => {
    const { admins, totalAdmins, getAdminById, setEditData, getAllAdmins, defaultFilter, setDefaultFilter } = useContext(AdminsContext);
    const { formIsOpen, setFormIsOpen, setFormIsEdit, handleDelete} = useContext(CommonsContext);
    const { getAllLanguages } = useContext(LanguageContext);

    const handleEdit = async (id) => {
        let data = await getAdminById(id);
        if (data?.status === 200) {
            setEditData(data?.data?.data);
        }
        setFormIsEdit(true);
        setFormIsOpen(false);
    }

    const handleDeleteAdmin = async (id) => {
        return await deleteAdminApi(id);
    }
    
    const handleStatusChange = async (body) => {
        await adminStatusChange(body);
        getAllAdmins(defaultFilter);
    }

    const columns = [
        {
            Header: 'First Name',
            accessor: 'first_name',
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
            accessor: 'last_name',
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
            accessor: 'full_name',
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
            accessor: 'email',
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
            accessor: 'birth_date',
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
            accessor: 'gender',
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
            accessor: 'contact_no',
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
            accessor: 'alternative_contact_no',
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
            accessor: 'language',
            isSearch: true,
            isShort: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.language?.name ? row?.original?.language?.name : '-'
                )
            }
        },
        {
            Header: 'Role',
            accessor: 'role_id',
            isSearch: true,
            isShort: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.role_id ? row?.original?.role_id : '-'
                )
            }
        },
        {
            Header: 'Created by',
            accessor: 'created_by',
            isSearch: true,
            isShort: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.created_by ? row?.original?.created_by : '-'
                )
            }
        },
        {
            Header: 'Updated by',
            accessor: 'updated_by',
            isSearch: true,
            isShort: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.updated_by ? row?.original?.updated_by : '-'
                )
            }
        },
        {
            Header: 'Status',
            accessor: 'status',
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
            accessor: 'action',
            isShort: false,
            isColumn: true,
            Cell: ({ row }) => (
                <div className='flex justify-evenly items-center'>
                <FiEdit
                    onClick={() => handleEdit(row?.original?.id)}
                    className="text-blue-600 text-xl hover:text-blue-900 hover:cursor-pointer"
                />
                <MdDeleteOutline
                    onClick={() => handleDelete(row?.original?.id, undefined, handleDeleteAdmin, getAllAdmins, defaultFilter)}
                    className="text-red-600 text-2xl hover:text-red-900 ml-2 hover:cursor-pointer"
                />
            </div>
            )

        },
    ]

    const handleOpen = () => {
        setFormIsOpen(true);
        getAllLanguages();
    }

    useEffect(() => {
        getAllAdmins(defaultFilter);
    }, [])

    return (
        <>
            <AdminSidebar />

            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="All Admins" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                    <div className='flex justify-end mb-2'>
                    <div className='text-xl mx-3 hover:cursor-pointer hover:text-gray-500' title='reset filters'><GrPowerReset onClick={()=>getAllAdmins()}/></div>
                        <Button onClick={handleOpen}>+ Add New</Button>

                    </div>

                    <div className='overflow-x-auto'>
                        <Table
                            columns={columns}
                            data={admins}
                            fetchDataApi={getAllAdmins}
                            defaultFilter={defaultFilter}
                            setDefaultFilter={setDefaultFilter}
                        />
                    </div>

                    <PaginationC
                        defaultFilter={defaultFilter}
                        setDefaultFilter={setDefaultFilter}
                        fetchDataApi={getAllAdmins}
                        totalItems={totalAdmins}
                    />
                </div>

            </div>

            <Form formIsOpen={formIsOpen} setFormIsOpen={setFormIsOpen} />
        </>
    )
}

export default Admins