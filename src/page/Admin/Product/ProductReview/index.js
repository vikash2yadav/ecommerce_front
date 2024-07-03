import React, { useContext, useEffect } from 'react'
import AdminSidebar from '../../../../components/Admin/AdminSidebar'
import Table from '../../../../components/Table'
import { Button } from 'antd';
import PaginationC from '../../../../components/PaginationC';
import { ProductReviewsContext } from '../../../../context/ProductReviewContext'
import { CommonsContext } from '../../../../context/CommonContext'
import { ProductsContext } from '../../../../context/ProductContext';
import { CustomersContext } from '../../../../context/CustomerContext'
import { ProductVariantsContext } from '../../../../context/ProductVariantContext'
import UperTitleBox from '../../../../components/Admin/UperTitleBox';
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import Form from './Form'

const ProductReview = () => {
    const { getAllProducts } = useContext(ProductsContext);
    const { getAllProductVariants } = useContext(ProductVariantsContext);
    const { getAllCustomers } = useContext(CustomersContext);
    const { formIsOpen, setFormIsOpen } = useContext(CommonsContext);
    const { productReviews, getAllProductReviews } = useContext(ProductReviewsContext);

    const columns = [
        {
            Header: 'Id',
            accessor: 'id',
        },
        {
            Header: 'Customer',
            accessor: 'user_id',
        },
        {
            Header: 'Product',
            accessor: 'product_id',
        },
        {
            Header: 'Product Variant',
            accessor: 'product_variant_id',
        },
        {
            Header: 'Rating',
            accessor: 'rating',
        },
        {
            Header: 'Comment',
            accessor: 'comment',
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

    const handleOpen = () => {
        setFormIsOpen(true);
        getAllProducts();
        getAllCustomers();
        getAllProductVariants();
    }

    useEffect(()=>{
        getAllProductReviews();
    }, []);

    return (
        <>
            <AdminSidebar />
            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="All Product Reviews" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                    <div className='flex justify-end mb-2'>
                        <Button onClick={handleOpen}>+ Add New</Button>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table columns={columns} data={productReviews} />
                    </div>

                    <PaginationC />

                </div>
            </div>

            <Form setFormIsOpen={setFormIsOpen} formIsOpen={formIsOpen} />
        </>
    )
}

export default ProductReview