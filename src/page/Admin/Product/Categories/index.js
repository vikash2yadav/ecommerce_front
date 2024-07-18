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
import { getCategoryById, deleteCategory, categoryStatusChange } from '../../../../apis/category';
import { GrPowerReset } from "react-icons/gr";

const Categories = () => {
    const { categories, getAllCategories, setEditData, totalCategories, defaultFilter, setDefaultFilter } = useContext(CategoryContext);
    const { formIsOpen, setFormIsOpen, formIsEdit, setFormIsEdit, handleDelete } = useContext(CommonsContext);

    const handleEdit = async (id) => {
        let data = await getCategoryById(id);
        if (data?.status === 200) {
            setEditData(data?.data?.data);
        }
        setFormIsEdit(true);
        setFormIsOpen(false);
    }

    const handleDeleteCategory = async (id) => {
        return await deleteCategory(id);
    }

    const handleStatusChange = async (body) => {
        await categoryStatusChange(body);
        getAllCategories(defaultFilter);
    }

    const columns = [
        {
            Header: 'Name',
            access: 'name',
            isSearch: true,
            isShort: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.name ? row?.original?.name : '-'
                )
            }
        },
        {
            Header: 'Slug',
            access: 'slug',
            isSearch: true,
            isShort: true,
            isColumn: true ,
            Cell: ({ row }) => {
                return (
                    row?.original?.slug ? row?.original?.slug : '-'
                )
            }
        },
        {
            Header: 'Description',
            access: 'description',
            isSearch: true,
            isShort: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.description ? row?.original?.description : '-'
                )
            }
        },
        {
            Header: 'Parent category',
            access: 'parent_category.name',
            isSearch: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.category?.name ? row?.original?.category?.name : '-'
                )
            }
        },
        {
            Header: 'Created by',
            access: 'createdBy.full_name',
            isSearch: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.createdBy?.full_name ? row?.original?.createdBy?.full_name : '-'
                )
            }
        },
        {
            Header: 'Updated by',
            access: 'updatedBy.full_name',
            isSearch: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.updatedBy?.full_name ? row?.original?.updatedBy?.full_name : '-'
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
                        onClick={() => handleDelete(row?.original?.id, undefined, handleDeleteCategory, getAllCategories, defaultFilter)}
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
        getAllCategories(defaultFilter);
    }, [defaultFilter, setDefaultFilter]);

    return (
        <>
            <AdminSidebar />

            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="Categories" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                    <div className='flex justify-end items-center mb-2'>
                        <div className='text-xl mx-3 hover:cursor-pointer hover:text-gray-500' title='reset filters'><GrPowerReset onClick={()=>getAllCategories(setDefaultFilter({
                            currentPage: 1,itemsPerPage: 5,filters: [],sortBy: []
                        }))}/></div>
                        <Button onClick={handleOpen}>+ Add New</Button>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table 
                        columns={columns} 
                        data={categories} 
                        fetchDataApi={getAllCategories} 
                        defaultFilter={defaultFilter}
                        setDefaultFilter={setDefaultFilter}
                        />
                    </div>

                    <PaginationC
                        defaultFilter={defaultFilter}
                        setDefaultFilter={setDefaultFilter}
                        fetchDataApi={getAllCategories}
                        totalItems={totalCategories}
                    />

                </div>
            </div>

            <Form open={(formIsOpen && formIsOpen) || (formIsEdit && formIsEdit)} />
        </>
    )
}

export default Categories
