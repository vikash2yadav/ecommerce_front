import React, { useContext, useEffect } from 'react'
import AdminSidebar from '../../../../components/Admin/AdminSidebar'
import Table from '../../../../components/Table'
import { Button } from 'antd';
import PaginationC from '../../../../components/PaginationC';
import { ProductsContext } from '../../../../context/ProductContext'
import { CommonsContext } from '../../../../context/CommonContext'
import { CategoryContext } from "../../../../context/CategoryContext"
import UperTitleBox from '../../../../components/Admin/UperTitleBox';
import Form from './Form'
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const Products = () => {
    const { getAllCategories } = useContext(CategoryContext);
    const { products, getAllProducts } = useContext(ProductsContext);
    const { formIsOpen, setFormIsOpen } = useContext(CommonsContext);

    const columns = [
        {
            Header: 'Id',
            accessor: 'id',
        },
        {
            Header: 'Vendor',
            accessor: 'vendor_id',
        },
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Title',
            accessor: 'title',
        },
        {
            Header: 'Description',
            accessor: 'description',
        },
        {
            Header: 'Category',
            accessor: 'category_id',
        },
        {
            Header: 'Status',
            accessor: 'status',
            Cell: ({ row }) => (
               <button>status</button>
            )
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

    const handleOpen = () => {
        setFormIsOpen(true);
        getAllCategories();
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <>
            <AdminSidebar />
            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="All Products" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                    <div className='flex justify-end mb-2'>
                        <Button onClick={handleOpen}>+ Add New</Button>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table columns={columns} data={products} />
                    </div>

                    <PaginationC />

                </div>
            </div>

            <Form setFormIsOpen={setFormIsOpen} formIsOpen={formIsOpen} />
        </>
    )
}

export default Products