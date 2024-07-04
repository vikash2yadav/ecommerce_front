import React, { useContext, useEffect } from 'react'
import AdminSidebar from '../../../../components/Admin/AdminSidebar'
import Table from '../../../../components/Table'
import { Button, Modal } from 'antd';
import PaginationC from '../../../../components/PaginationC';
import { CategoryContext } from '../../../../context/CategoryContext'
import { CommonsContext } from '../../../../context/CommonContext'
import UperTitleBox from '../../../../components/Admin/UperTitleBox';
import InputC from '../../../../components/InputC'
import { useFormik } from 'formik';
import { addCategoryInitialValue, addCategorySchema } from './Schema';
import TextAreaC from '../../../../components/TextAreaC'
import ButtonC from '../../../../components/ButtonC'
import { addCategory } from '../../../../apis/category';
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const Categories = () => {
    const { categories, setCategories, getAllCategories } = useContext(CategoryContext);
    const { formIsOpen, setFormIsOpen, setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);

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
            Header: 'Created by',
            accessor: 'created_by',
        },
        {
            Header: 'Updated by',
            accessor: 'updated_by',
        },
        {
            Header: 'Status',
            accessor: 'status',
        },
        {
            Header: 'Action',
            accessor: 'action',
            Cell: ({ row }) => (
                <div className='flex justify-center items-center'>
                    <FiEdit
                        // onClick={() => handleEdit(row)}
                        className="text-blue-600 text-xl hover:text-blue-900"
                    />
                    <MdDeleteOutline
                        // onClick={() => handleDelete(row)}
                        className="text-red-600 text-2xl hover:text-red-900 ml-2"
                    />
                </div>
            )

        },
    ];

    const formik = useFormik({
        initialValues: addCategoryInitialValue,
        validationSchema: addCategorySchema,
        onSubmit: async (values) => {
            let data = await addCategory(values);
            if (data?.status === 200) {
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'success',
                    message: data.data.message
                });
                getAllCategories();
                setFormIsOpen(false)
            } else {
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'error',
                    message: data.data.message
                });
            }
        }
    })

    useEffect(() => {
        getAllCategories();
    }, [setCategories]);

    return (
        <>
            <AdminSidebar />

            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="All Categories" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                    <div className='flex justify-end mb-2'>
                        <Button onClick={() => setFormIsOpen(true)}>+ Add New</Button>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table columns={columns} data={categories} />
                    </div>

                    <PaginationC />

                </div>
            </div>

            <Modal open={formIsOpen} onCancel={() => setFormIsOpen(false)} footer={null}>
                <p className='text-xl font-semibold mt-3 mb-3'> Add Category </p>

                <form action="" onSubmit={formik.handleSubmit}>
                    <div className='mb-3'>
                        <InputC placeholder="Name" name="name" value={formik.values.name} onChange={formik.handleChange} />
                        {formik.errors.name && formik.touched.name ? (
                            <div className='text-red-600 text-xs'>{formik.errors.name}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                        <TextAreaC placeholder="description" name="description" value={formik.values.description} onChange={formik.handleChange} />
                        {formik.errors.description && formik.touched.description ? (
                            <div className='text-red-600 text-xs'>{formik.errors.description}</div>
                        ) : null}
                    </div>
                    <ButtonC type="submit" variant="outlined" label="Add" color="primary" />
                </form>
            </Modal>
        </>
    )
}

export default Categories