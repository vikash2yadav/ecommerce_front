import React, { useContext, useEffect } from 'react';
import Form from './Form'
import AdminSidebar from '../../../../components/Admin/AdminSidebar';
import Table from '../../../../components/Table';
import { Button } from 'antd';
import PaginationC from '../../../../components/PaginationC';
import { CategoryContext } from '../../../../context/CategoryContext';
import { CommonsContext } from '../../../../context/CommonContext';
import UperTitleBox from '../../../../components/Admin/UperTitleBox';
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import ButtonC from '../../../../components/ButtonC';
import { getCategoryById, deleteCategory } from '../../../../apis/category';

const Categories = () => {
    const { categories, getAllCategories, setEditData } = useContext(CategoryContext);
    const { formIsOpen, setFormIsOpen, formIsEdit, setFormIsEdit, setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);

    const handleEdit = async (id) => {
        let data = await getCategoryById(id);
        if (data?.status === 200) {
            setEditData(data?.data?.data);
        }
        setFormIsEdit(true);
        setFormIsOpen(false);
    }

    const handleDelete = async (row) => {
        let data = await deleteCategory(row);
        if (data?.status === 200) {
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'success',
                message: data?.data?.message
            })
            getAllCategories();
        } else {
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data?.data?.message
            })
        }
    }

    const columns = [
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Slug',
            accessor: 'slug',
        },
        {
            Header: 'Description',
            accessor: 'description',
        },
        {
            Header: 'Parent Category',
            accessor: 'parent_id',
            Cell: ({ row }) => {
                return (
                    row?.original?.category?.name ? row?.original?.category?.name : '-'
                )
            }
        },
        {
            Header: 'Created by',
            accessor: 'created_by',
            Cell: ({ row }) => {
                return (
                    row?.original?.admins?.name ? row?.original?.admins?.name : '-'
                )
            }
        },
        {
            Header: 'Updated by',
            accessor: 'updated_by',
            Cell: ({ row }) => {
                return (
                    row?.original?.admins?.name ? row?.original?.admins?.name : '-'
                )
            }
        },
        {
            Header: 'Status',
            accessor: 'status',
            Cell: ({ row }) => {
                return (
                    <ButtonC label="Active" variant="contained" color="success" />
                )
            }
        },
        {
            Header: 'Action',
            accessor: 'action',
            Cell: ({ row }) => (
                <div className='flex justify-evenly items-center'>

                    <FiEdit
                        onClick={() => handleEdit(row?.original?.id)}
                        className="text-blue-600 text-xl hover:text-blue-900 hover:cursor-pointer"
                    />
                    <MdDeleteOutline
                        onClick={() => handleDelete(row?.original?.id)}
                        className="text-red-600 text-2xl hover:text-red-900 ml-2 hover:cursor-pointer"
                    />
                </div>
            )
        },
    ];

    const handleOpen = () => {
        setFormIsOpen(true);
        setFormIsEdit(false);
        // getAllCategories();
    }

    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <>
            <AdminSidebar />

            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="All Categories" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                    <div className='flex justify-end mb-2'>
                        <Button onClick={handleOpen}>+ Add New</Button>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table columns={columns} data={categories} />
                    </div>

                    <PaginationC />

                </div>
            </div>

            <Form open={(formIsOpen && formIsOpen) || (formIsEdit && formIsEdit)} />
        </>
    )
}

export default Categories
